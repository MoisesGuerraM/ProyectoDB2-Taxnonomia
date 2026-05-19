use('taxonomyDB')

/* =========================================
   CONSULTAS BÁSICAS
   ========================================= */

/* Mostrar todas las especies */
db.speciesContent.find()

/* Buscar mamíferos */
db.speciesContent.find({
  category: "Mammal"
})

/* Buscar especies en peligro */
db.speciesContent.find({
  "conservation.status": "Endangered"
})

/* Buscar especies de Colombia */
db.speciesContent.find({
  "habitat.countries": "Colombia"
})

/* =========================================
   CONSULTAS INTERMEDIAS
   ========================================= */

/* Buscar especies con más de una imagen */
db.speciesContent.find({
  "multimedia.images.1": { $exists: true }
})

/* Buscar especies vistas en Amazonas */
db.speciesContent.find({
  "sightings.location": "Amazonas"
})

/* Buscar especies vulnerables */
db.speciesContent.find({
  "conservation.status": "Vulnerable"
})

/* Buscar aves */
db.speciesContent.find({
  category: "Bird"
})

/* Buscar reptiles */
db.speciesContent.find({
  category: "Reptile"
})

/* =========================================
   CONSULTAS AVANZADAS
   ========================================= */

/* Buscar especies creadas recientemente */
db.speciesContent.find({
  created_at: {
    $gte: new Date("2026-01-01")
  }
})

/* Buscar especies que tengan videos */
db.speciesContent.find({
  "multimedia.videos": { $exists: true }
})

/* Buscar especies observadas por un investigador */
db.speciesContent.find({
  "sightings.observer": "Investigador A"
})

/* Buscar especies cuyo nombre científico contenga Panthera */
db.speciesContent.find({
  scientific_name: /Panthera/
})