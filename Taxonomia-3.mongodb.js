use('taxonomyDB')
/* =========================================
   CONSULTAS BÁSICAS
   ========================================= */

/* Mostrar todas las especies */
db.speciesContent.find().toArray()

/* Buscar mamíferos */
db.speciesContent.find({
  category: "Mammal"
}).toArray()

/* Buscar aves */
db.speciesContent.find({
  category: "Bird"
}).toArray()

/* Buscar reptiles */
db.speciesContent.find({
  category: "Reptile"
}).toArray()

/* Buscar anfibios */
db.speciesContent.find({
  category: "Amphibian"
}).toArray()

/* =========================================
   CONSULTAS POR ESTADO DE CONSERVACIÓN
   ========================================= */

/* Buscar especies en peligro crítico */
db.speciesContent.find({
  "conservation.status": "Critically Endangered"
}).toArray()

/* Buscar especies en peligro */
db.speciesContent.find({
  "conservation.status": "Endangered"
}).toArray()

/* Buscar especies vulnerables */
db.speciesContent.find({
  "conservation.status": "Vulnerable"
}).toArray()

/* Buscar especies casi amenazadas */
db.speciesContent.find({
  "conservation.status": "Near Threatened"
}).toArray()

/* Buscar especies de preocupación menor */
db.speciesContent.find({
  "conservation.status": "Least Concern"
}).toArray()

/* Buscar especies no evaluadas */
db.speciesContent.find({
  "conservation.status": {
    $in: ["Not Evaluated", "Data Deficient"]
  }
}).toArray()

/* =========================================
   CONSULTAS POR HÁBITAT / PAÍS
   ========================================= */

/* Buscar especies de Colombia */
db.speciesContent.find({
  "habitat.countries": "Colombia"
}).toArray()

/* Buscar especies de Brasil */
db.speciesContent.find({
  "habitat.countries": "Brazil"
}).toArray()

/* Buscar especies de ecosistema Rainforest */
db.speciesContent.find({
  "habitat.ecosystem": "Rainforest"
}).toArray()

/* Buscar especies de ecosistema Ocean */
db.speciesContent.find({
  "habitat.ecosystem": "Ocean"
}).toArray()

/* =========================================
   CONSULTAS POR AVISTAMIENTOS
   ========================================= */

/* Buscar especies vistas en Amazonas */
db.speciesContent.find({
  "sightings.location": "Amazonas"
}).toArray()

/* Buscar especies vistas en Chocó */
db.speciesContent.find({
  "sightings.location": "Chocó"
}).toArray()

/* Buscar avistamientos del Equipo Marino */
db.speciesContent.find({
  "sightings.observer": "Equipo Marino"
}).toArray()

/* Buscar avistamientos recientes */
db.speciesContent.find({
  "sightings.date": {
    $gte: new Date("2026-01-01"),
    $lte: new Date("2026-12-31")
  }
}).toArray()

/* =========================================
   CONSULTAS POR NOMBRE
   ========================================= */

/* Buscar nombre científico exacto */
db.speciesContent.find({
  scientific_name: "Panthera onca"
}).toArray()

/* Buscar género Panthera */
db.speciesContent.find({
  scientific_name: /Panthera/
}).toArray()

/* Buscar nombres científicos que empiecen por Ara */
db.speciesContent.find({
  scientific_name: /^Ara/
}).toArray()

/* Buscar nombres comunes con "andino" */
db.speciesContent.find({
  common_names: {
    $regex: /andino/i
  }
}).toArray()

/* Buscar taxon_id exacto */
db.speciesContent.find({
  taxon_id: 1
}).toArray()

/* =========================================
   CONSULTAS AVANZADAS
   ========================================= */

/* Buscar especies creadas recientemente */
db.speciesContent.find({
  created_at: {
    $gte: new Date("2026-01-01")
  }
}).toArray()

/* Buscar especies con más de una imagen */
db.speciesContent.find({
  "multimedia.images.1": {
    $exists: true
  }
}).toArray()

/* Buscar especies con múltiples avistamientos */
db.speciesContent.find({
  "sightings.1": {
    $exists: true
  }
}).toArray()

/* =========================================
   AGGREGATIONS / REPORTES
   ========================================= */

/* Contar especies por categoría */
db.speciesContent.aggregate([

{
  $group: {
    _id: "$category",
    total: {
      $sum: 1
    }
  }
},

{
  $sort: {
    total: -1
  }
}

]).toArray()

/* Contar especies por estado */
db.speciesContent.aggregate([

{
  $group: {
    _id: "$conservation.status",
    total: {
      $sum: 1
    }
  }
},

{
  $sort: {
    total: -1
  }
}

]).toArray()

/* Contar especies por ecosistema */
db.speciesContent.aggregate([

{
  $group: {
    _id: "$habitat.ecosystem",
    total: {
      $sum: 1
    }
  }
},

{
  $sort: {
    total: -1
  }
}

]).toArray()

/* Obtener países únicos */
db.speciesContent.aggregate([

{
  $unwind: "$habitat.countries"
},

{
  $group: {
    _id: "$habitat.countries",
    num_especies: {
      $sum: 1
    }
  }
},

{
  $sort: {
    num_especies: -1
  }
}

]).toArray()

/* Buscar especies amenazadas de Colombia */
db.speciesContent.find({

  "habitat.countries": "Colombia",

  "conservation.status": {
    $in: [
      "Endangered",
      "Critically Endangered"
    ]
  }

}).toArray()

/* Buscar especies con avistamientos recientes */
db.speciesContent.find({

  "sightings.date": {
    $gte: new Date("2026-04-01")
  }

}).toArray()

/* Ordenar especies alfabéticamente */
db.speciesContent.find()

.sort({
  scientific_name: 1
})

.toArray()

/* Ordenar por taxon_id */
db.speciesContent.find(

{},
{
  scientific_name: 1,
  "conservation.status": 1,
  _id: 0
}

)

.sort({
  taxon_id: 1
})

.toArray()

/* Limitar resultados */
db.speciesContent.find()

.limit(10)

.toArray()

/* Paginación */
db.speciesContent.find()

.skip(10)

.limit(10)

.toArray()

/* Mostrar campos específicos */
db.speciesContent.find(

{},
{
  taxon_id: 1,
  scientific_name: 1,
  common_names: 1,
  category: 1,
  "conservation.status": 1,
  _id: 0
}

).toArray()

/* Buscar vulnerables ordenados */
db.speciesContent.find({
  "conservation.status": "Vulnerable"
})

.sort({
  taxon_id: -1
})

.toArray()
