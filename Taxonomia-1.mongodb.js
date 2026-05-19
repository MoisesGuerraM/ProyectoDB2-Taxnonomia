/* =========================================
   PLAYGROUND 1
   CREACIÓN DE BASE DE DATOS Y COLECCIONES
   ========================================= */

/* Crear o usar la base de datos */
use('taxonomyDB')

/* =========================================
   COLECCIÓN PRINCIPAL DE ESPECIES
   ========================================= */

db.createCollection('speciesContent')

/* =========================================
   COLECCIÓN DE AVISTAMIENTOS
   ========================================= */

db.createCollection('sightings')

/* =========================================
   COLECCIÓN DE NOTAS CIENTÍFICAS
   ========================================= */

db.createCollection('researchNotes')

/* =========================================
   MOSTRAR COLECCIONES
   ========================================= */

db.getCollectionNames()