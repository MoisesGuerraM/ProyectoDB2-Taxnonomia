-- ============================================================
-- Script de creación del esquema taxonómico en PostgreSQL
-- ============================================================

-- Opcional: crear un esquema propio
CREATE SCHEMA IF NOT EXISTS taxonomy;

SET search_path TO taxonomy;

-- ============================================================
-- Tabla: Rank
-- Catálogo de rangos taxonómicos
-- ============================================================

CREATE TABLE rank (
    id_rank SERIAL PRIMARY KEY,
    rank_name VARCHAR(100) NOT NULL,
    rank_order INTEGER NOT NULL,

    CONSTRAINT uq_rank_name UNIQUE (rank_name),
    CONSTRAINT uq_rank_order UNIQUE (rank_order),
    CONSTRAINT chk_rank_order_positive CHECK (rank_order > 0)
);

-- ============================================================
-- Tabla: Status
-- Catálogo global de estados del taxón
-- ============================================================

CREATE TABLE status (
    id_status SERIAL PRIMARY KEY,
    status_name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uq_status_name UNIQUE (status_name)
);

-- ============================================================
-- Tabla: Taxon
-- Núcleo principal del modelo taxonómico
-- ============================================================

CREATE TABLE taxon (
    id_taxon SERIAL PRIMARY KEY,
    id_rank INTEGER NOT NULL,
    id_status INTEGER NOT NULL,
    parent_id INTEGER,
    scientific_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_taxon_rank
        FOREIGN KEY (id_rank)
        REFERENCES rank (id_rank)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_taxon_status
        FOREIGN KEY (id_status)
        REFERENCES status (id_status)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_taxon_parent
        FOREIGN KEY (parent_id)
        REFERENCES taxon (id_taxon)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT uq_taxon_scientific_name UNIQUE (scientific_name),

    CONSTRAINT chk_taxon_parent_not_self
        CHECK (parent_id IS NULL OR parent_id <> id_taxon)
);

-- ============================================================
-- Tabla: CommonName
-- Nombres comunes asociados a un taxón
-- ============================================================

CREATE TABLE common_name (
    id_common_name SERIAL PRIMARY KEY,
    id_taxon INTEGER NOT NULL,
    common_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_common_name_taxon
        FOREIGN KEY (id_taxon)
        REFERENCES taxon (id_taxon)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT uq_common_name_per_taxon
        UNIQUE (id_taxon, common_name)
);

-- ============================================================
-- Tabla: TaxonSynonym
-- Sinónimos científicos asociados a un taxón
-- ============================================================

CREATE TABLE taxon_synonym (
    id_synonym SERIAL PRIMARY KEY,
    id_taxon INTEGER NOT NULL,
    synonym_name VARCHAR(255) NOT NULL,
    synonym_status VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_taxon_synonym_taxon
        FOREIGN KEY (id_taxon)
        REFERENCES taxon (id_taxon)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT uq_synonym_name_per_taxon
        UNIQUE (id_taxon, synonym_name)
);

-- ============================================================
-- Tabla: Reference
-- Ancla relacional de referencias.
-- El detalle documental se expande en NoSQL.
-- ============================================================

CREATE TABLE reference (
    id_reference SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Tabla: TaxonReference
-- Relación muchos a muchos entre Taxon y Reference
-- ============================================================

CREATE TABLE taxon_reference (
    id_taxon INTEGER NOT NULL,
    id_reference INTEGER NOT NULL,

    CONSTRAINT pk_taxon_reference
        PRIMARY KEY (id_taxon, id_reference),

    CONSTRAINT fk_taxon_reference_taxon
        FOREIGN KEY (id_taxon)
        REFERENCES taxon (id_taxon)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_taxon_reference_reference
        FOREIGN KEY (id_reference)
        REFERENCES reference (id_reference)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- ============================================================
-- Índices adicionales
-- ============================================================

CREATE INDEX idx_taxon_id_rank
ON taxon (id_rank);

CREATE INDEX idx_taxon_id_status
ON taxon (id_status);

CREATE INDEX idx_taxon_parent_id
ON taxon (parent_id);

CREATE INDEX idx_taxon_scientific_name
ON taxon (scientific_name);

CREATE INDEX idx_common_name_id_taxon
ON common_name (id_taxon);

CREATE INDEX idx_common_name_name
ON common_name (common_name);

CREATE INDEX idx_taxon_synonym_id_taxon
ON taxon_synonym (id_taxon);

CREATE INDEX idx_taxon_synonym_name
ON taxon_synonym (synonym_name);

CREATE INDEX idx_taxon_reference_id_reference
ON taxon_reference (id_reference);

-- ============================================================
-- Función para actualizar updated_at automáticamente
-- ============================================================

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- Triggers para updated_at
-- ============================================================

CREATE TRIGGER trg_status_updated_at
BEFORE UPDATE ON status
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_taxon_updated_at
BEFORE UPDATE ON taxon
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_common_name_updated_at
BEFORE UPDATE ON common_name
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_taxon_synonym_updated_at
BEFORE UPDATE ON taxon_synonym
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_reference_updated_at
BEFORE UPDATE ON reference
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
