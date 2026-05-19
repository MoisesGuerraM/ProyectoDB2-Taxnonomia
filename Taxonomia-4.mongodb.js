use('taxonomyDB')

/* =========================================
   ACTUALIZACIONES
   ========================================= */

/* Cambiar estado de conservación */

db.speciesContent.updateOne(

{
  scientific_name: "Panthera onca"
},

{
  $set: {
    "conservation.status": "Endangered"
  }
}
)

/* =========================================
   AGREGAR NUEVA IMAGEN
   ========================================= */

db.speciesContent.updateOne(

{
  scientific_name: "Panthera onca"
},

{
  $push: {
    "multimedia.images":
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Jaguar.jpg"
  }
}
)

/* =========================================
   AGREGAR NUEVO AVISTAMIENTO
   ========================================= */

db.speciesContent.updateOne(

{
  scientific_name: "Panthera onca"
},

{
  $push: {
    sightings: {

      location: "Caquetá",

      observer: "Equipo Amazonía",

      date: new Date("2026-05-20")
    }
  }
}
)

/* =========================================
   ACTUALIZAR DESCRIPCIÓN
   ========================================= */

db.speciesContent.updateOne(

{
  scientific_name: "Puma concolor"
},

{
  $set: {
    description:
      "Felino adaptable presente en ecosistemas montañosos."
  }
}
)

/* =========================================
   ELIMINAR UNA IMAGEN
   ========================================= */

db.speciesContent.updateOne(

{
  scientific_name: "Ara ararauna"
},

{
  $pull: {
    "multimedia.images":
      "https://imagen-inexistente.com"
  }
}
)

/* =========================================
   VERIFICAR CAMBIOS
   ========================================= */

db.speciesContent.find({
  scientific_name: "Panthera onca"
})

/* =========================================
   REPORTES Y AGGREGATIONS
   ========================================= */

/* Contar especies por categoría */

db.speciesContent.aggregate([

{
  $group: {
    _id: "$category",

    total_species: {
      $sum: 1
    }
  }
}
])

/* =========================================
   Contar especies por estado de conservación
   ========================================= */

db.speciesContent.aggregate([

{
  $group: {
    _id: "$conservation.status",

    total: {
      $sum: 1
    }
  }
}
])

/* =========================================
   Contar especies por país
   ========================================= */

db.speciesContent.aggregate([

{
  $unwind: "$habitat.countries"
},

{
  $group: {
    _id: "$habitat.countries",

    total_species: {
      $sum: 1
    }
  }
}
])

/* =========================================
   Total de avistamientos por especie
   ========================================= */

db.speciesContent.aggregate([

{
  $project: {

    scientific_name: 1,

    total_sightings: {
      $size: "$sightings"
    }
  }
}
])

/* =========================================
   Especies con más avistamientos
   ========================================= */

db.speciesContent.aggregate([

{
  $project: {

    scientific_name: 1,

    total_sightings: {
      $size: "$sightings"
    }
  }
},

{
  $sort: {
    total_sightings: -1
  }
}
])

/* =========================================
   Total de registros
   ========================================= */

db.speciesContent.countDocuments()

/* =========================================
   Listar nombres científicos
   ========================================= */

db.speciesContent.aggregate([

{
  $project: {

    _id: 0,

    scientific_name: 1
  }
}
])

/* =========================================
   Especies con más de una imagen
   ========================================= */

db.speciesContent.aggregate([

{
  $match: {
    "multimedia.images.1": {
      $exists: true
    }
  }
},

{
  $project: {
    scientific_name: 1,
    "multimedia.images": 1
  }
}
])

/* =========================================
   Contar especies por ecosistema
   ========================================= */

db.speciesContent.aggregate([

{
  $group: {
    _id: "$habitat.ecosystem",

    total_species: {
      $sum: 1
    }
  }
}
])

/* =========================================
   Especies observadas en Colombia
   ========================================= */

db.speciesContent.aggregate([

{
  $match: {
    "habitat.countries": "Colombia"
  }
},

{
  $project: {
    scientific_name: 1,
    category: 1,
    "habitat.ecosystem": 1
  }
}
])

/* =========================================
   Ordenar especies alfabéticamente
   ========================================= */

db.speciesContent.aggregate([

{
  $sort: {
    scientific_name: 1
  }
}
])

/* =========================================
   Especies en peligro crítico
   ========================================= */

db.speciesContent.aggregate([

{
  $match: {
    "conservation.status": "Critically Endangered"
  }
},

{
  $project: {
    scientific_name: 1,
    conservation: 1
  }
}
])