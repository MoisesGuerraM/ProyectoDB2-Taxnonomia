/* =========================================
   PLAYGROUND 2
   REGISTROS MONGODB - TAXONOMY PROJECT
   ========================================= */

use('taxonomyDB')

db.speciesContent.insertMany([

{
  taxon_id: 1,
  scientific_name: "Panthera onca",
  common_names: ["Jaguar"],
  category: "Mammal",

  habitat: {
    ecosystem: "Rainforest",
    countries: ["Colombia", "Brazil"]
  },

  conservation: {
    status: "Near Threatened"
  },

  multimedia: {
    images: ["jaguar1.jpg"]
  },

  sightings: [
    {
      location: "Amazonas",
      observer: "Investigador A",
      date: new Date("2026-05-10")
    }
  ],

  description: "Felino más grande de América.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 2,
  scientific_name: "Tremarctos ornatus",
  common_names: ["Oso Andino"],
  category: "Mammal",

  habitat: {
    ecosystem: "Andean Forest",
    countries: ["Colombia", "Ecuador"]
  },

  conservation: {
    status: "Vulnerable"
  },

  multimedia: {
    images: ["oso1.jpg"]
  },

  sightings: [
    {
      location: "Boyacá",
      observer: "Equipo Científico",
      date: new Date("2026-04-18")
    }
  ],

  description: "Mamífero representativo de los Andes.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 3,
  scientific_name: "Vultur gryphus",
  common_names: ["Cóndor Andino"],
  category: "Bird",

  habitat: {
    ecosystem: "Mountain",
    countries: ["Colombia", "Peru"]
  },

  conservation: {
    status: "Vulnerable"
  },

  multimedia: {
    images: ["condor1.jpg"]
  },

  sightings: [
    {
      location: "Nevado del Ruiz",
      observer: "Investigador B",
      date: new Date("2026-03-11")
    }
  ],

  description: "Ave emblemática de la cordillera andina.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 4,
  scientific_name: "Chelonia mydas",
  common_names: ["Tortuga Verde"],
  category: "Reptile",

  habitat: {
    ecosystem: "Ocean",
    countries: ["Colombia", "Costa Rica"]
  },

  conservation: {
    status: "Endangered"
  },

  multimedia: {
    images: ["tortuga1.jpg"]
  },

  sightings: [
    {
      location: "Caribe Colombiano",
      observer: "Equipo Marino",
      date: new Date("2026-02-15")
    }
  ],

  description: "Tortuga marina de aguas tropicales.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 5,
  scientific_name: "Phyllobates terribilis",
  common_names: ["Rana Dorada"],
  category: "Amphibian",

  habitat: {
    ecosystem: "Rainforest",
    countries: ["Colombia"]
  },

  conservation: {
    status: "Endangered"
  },

  multimedia: {
    images: ["rana1.jpg"]
  },

  sightings: [
    {
      location: "Chocó",
      observer: "Investigador C",
      date: new Date("2026-01-20")
    }
  ],

  description: "Anfibio venenoso de color amarillo brillante.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 6,
  scientific_name: "Ara ararauna",
  common_names: ["Guacamaya Azul"],
  category: "Bird",

  habitat: {
    ecosystem: "Tropical Forest",
    countries: ["Brazil", "Colombia"]
  },

  conservation: {
    status: "Least Concern"
  },

  multimedia: {
    images: ["guacamaya1.jpg"]
  },

  sightings: [
    {
      location: "Amazonas",
      observer: "Investigador D",
      date: new Date("2026-03-03")
    }
  ],

  description: "Ave tropical conocida por su plumaje colorido.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 7,
  scientific_name: "Puma concolor",
  common_names: ["Puma"],
  category: "Mammal",

  habitat: {
    ecosystem: "Mountain",
    countries: ["Colombia", "Argentina"]
  },

  conservation: {
    status: "Least Concern"
  },

  multimedia: {
    images: ["puma1.jpg"]
  },

  sightings: [
    {
      location: "Santander",
      observer: "Investigador E",
      date: new Date("2026-04-09")
    }
  ],

  description: "Felino adaptable presente en América.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 8,
  scientific_name: "Eunectes murinus",
  common_names: ["Anaconda"],
  category: "Reptile",

  habitat: {
    ecosystem: "Swamp",
    countries: ["Brazil", "Colombia"]
  },

  conservation: {
    status: "Not Evaluated"
  },

  multimedia: {
    images: ["anaconda1.jpg"]
  },

  sightings: [
    {
      location: "Orinoquía",
      observer: "Investigador F",
      date: new Date("2026-02-28")
    }
  ],

  description: "Serpiente gigante asociada a ecosistemas acuáticos.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 9,
  scientific_name: "Harpia harpyja",
  common_names: ["Águila Harpía"],
  category: "Bird",

  habitat: {
    ecosystem: "Rainforest",
    countries: ["Panamá", "Colombia"]
  },

  conservation: {
    status: "Near Threatened"
  },

  multimedia: {
    images: ["harpia1.jpg"]
  },

  sightings: [
    {
      location: "Chocó",
      observer: "Investigador G",
      date: new Date("2026-05-01")
    }
  ],

  description: "Una de las águilas más poderosas del mundo.",

  created_at: new Date(),
  updated_at: new Date()
},

{
  taxon_id: 10,
  scientific_name: "Ambystoma mexicanum",
  common_names: ["Axolote"],
  category: "Amphibian",

  habitat: {
    ecosystem: "Lake",
    countries: ["México"]
  },

  conservation: {
    status: "Critically Endangered"
  },

  multimedia: {
    images: ["axolote1.jpg"]
  },

  sightings: [
    {
      location: "Xochimilco",
      observer: "Investigador H",
      date: new Date("2026-01-12")
    }
  ],

  description: "Anfibio famoso por regenerar extremidades.",

  created_at: new Date(),
  updated_at: new Date()
}

])

/* Mostrar registros */
db.speciesContent.find()