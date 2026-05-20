import json
import os
from datetime import datetime

import psycopg2
from pymongo import MongoClient
from dotenv import load_dotenv

# =====================================================
# LOAD ENVIRONMENT VARIABLES
# =====================================================

load_dotenv()

# =====================================================
# POSTGRESQL CONNECTION
# =====================================================

pg_conn = psycopg2.connect(
    host=os.getenv("POSTGRES_HOST"),
    port=os.getenv("POSTGRES_PORT"),
    dbname=os.getenv("POSTGRES_DB"),
    user=os.getenv("POSTGRES_USER"),
    password=os.getenv("POSTGRES_PASSWORD")
)

pg_cursor = pg_conn.cursor()

# =====================================================
# MONGODB CONNECTION
# =====================================================

mongo_client = MongoClient(os.getenv("MONGO_URI"))

mongo_db = mongo_client[os.getenv("MONGO_DB")]
species_collection = mongo_db["speciesContent"]

# =====================================================
# LOAD JSON INPUT
# =====================================================

with open("input.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# =====================================================
# VALIDATION
# =====================================================

required_fields = [
    "scientific_name",
    "id_rank",
    "category"
]

for field in required_fields:
    if field not in data:
        raise Exception(f"Missing field: {field}")

# =====================================================
# EXTRACT DATA
# =====================================================

scientific_name = data["scientific_name"]
id_rank = data["id_rank"]
id_status = data["id_status"]

# =====================================================
# ETL PROCESS
# =====================================================

try:

    pg_conn.autocommit = False

    # =================================================
    # INSERT TAXON
    # =================================================

    insert_taxon_query = """
        INSERT INTO taxonomy.taxon
        (
            id_rank,
            id_status,
            scientific_name,
            created_at,
            updated_at
        )
        VALUES (%s, %s, %s, NOW(), NOW())
        RETURNING id_taxon;
    """

    pg_cursor.execute(
        insert_taxon_query,
        (
            id_rank,
            id_status,
            scientific_name
        )
    )

    id_taxon = pg_cursor.fetchone()[0]
    # =================================================
    # INSERT REFERENCE
    # =================================================

    insert_reference_query = """
        INSERT INTO taxonomy.reference
        DEFAULT VALUES
        RETURNING id_reference;
    """

    pg_cursor.execute(insert_reference_query)

    id_reference = pg_cursor.fetchone()[0]

    # =================================================
    # BUILD MONGO DOCUMENT
    # =================================================

    mongo_document = {

        "reference_id": id_reference,

        "taxon": {
            "id_taxon": id_taxon,
            "scientific_name": scientific_name
        },

        "common_names":
            data.get("common_names", []),

        "category":
            data.get("category"),

        "habitat":
            data.get("habitat", {}),

        "conservation":
            data.get("conservation", {}),

        "multimedia":
            data.get("multimedia", {}),

        "sightings":
            data.get("sightings", []),

        "description":
            data.get("description", ""),

        "authors":
            data.get("authors", []),

        "doi":
            data.get("doi"),

        "publication_year":
            data.get("publication_year"),

        "created_at":
            datetime.utcnow(),

        "updated_at":
            datetime.utcnow()
    }

    # =================================================
    # INSERT INTO MONGO
    # =================================================

    species_collection.insert_one(mongo_document)

    # =================================================
    # COMMIT
    # =================================================

    pg_conn.commit()

    print("===================================")
    print("ETL EXECUTED SUCCESSFULLY")
    print("===================================")

    print(f"id_taxon: {id_taxon}")
    print(f"id_reference: {id_reference}")

except Exception as error:

    pg_conn.rollback()

    print("===================================")
    print("ETL FAILED")
    print("===================================")

    print(str(error))

finally:

    pg_cursor.close()
    pg_conn.close()
    mongo_client.close()
