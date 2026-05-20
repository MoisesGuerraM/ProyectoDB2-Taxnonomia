/* =========================================
   PLAYGROUND 2 - REGISTROS ADICIONALES (11-50)
   MONGODB - TAXONOMY PROJECT
   ========================================= */
 
use('taxonomyDB')
 
db.speciesContent.insertMany([
 
  // ── MAMMALS ──────────────────────────────
  {
    taxon_id: 11,
    scientific_name: "Tapirus terrestris",
    common_names: ["Tapir Amazónico", "Danta"],
    category: "Mammal",
    habitat: {
      ecosystem: "Rainforest",
      countries: ["Colombia", "Brazil", "Peru"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["tapir1.jpg"] },
    sightings: [
      {
        location: "Caquetá",
        observer: "Investigador I",
        date: new Date("2026-03-22")
      }
    ],
    description: "Mamífero herbívoro de gran tamaño con nariz prensil.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 12,
    scientific_name: "Pteronura brasiliensis",
    common_names: ["Nutria Gigante"],
    category: "Mammal",
    habitat: {
      ecosystem: "Riverine",
      countries: ["Colombia", "Brazil", "Venezuela"]
    },
    conservation: { status: "Endangered" },
    multimedia: { images: ["nutria1.jpg"] },
    sightings: [
      {
        location: "Orinoquía",
        observer: "Equipo Acuático",
        date: new Date("2026-04-05")
      }
    ],
    description: "La nutria más grande del mundo, apex predador fluvial.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 13,
    scientific_name: "Myrmecophaga tridactyla",
    common_names: ["Oso Hormiguero Gigante"],
    category: "Mammal",
    habitat: {
      ecosystem: "Savanna",
      countries: ["Colombia", "Brazil", "Argentina"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["osohormiguero1.jpg"] },
    sightings: [
      {
        location: "Llanos Orientales",
        observer: "Investigador J",
        date: new Date("2026-02-10")
      }
    ],
    description: "Mamífero insectívoro con lengua extensible de hasta 60 cm.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 14,
    scientific_name: "Priodontes maximus",
    common_names: ["Armadillo Gigante"],
    category: "Mammal",
    habitat: {
      ecosystem: "Savanna",
      countries: ["Colombia", "Brazil", "Bolivia"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["armadillo1.jpg"] },
    sightings: [
      {
        location: "Meta",
        observer: "Investigador K",
        date: new Date("2026-01-30")
      }
    ],
    description: "El armadillo más grande existente, nocturno y solitario.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 15,
    scientific_name: "Inia geoffrensis",
    common_names: ["Delfín Rosado", "Boto"],
    category: "Mammal",
    habitat: {
      ecosystem: "Riverine",
      countries: ["Colombia", "Brazil", "Peru"]
    },
    conservation: { status: "Endangered" },
    multimedia: { images: ["delfin1.jpg"] },
    sightings: [
      {
        location: "Amazonas",
        observer: "Equipo Fluvial",
        date: new Date("2026-03-14")
      }
    ],
    description: "Delfín de río endémico de la cuenca amazónica, de coloración rosada.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 16,
    scientific_name: "Leopardus pardalis",
    common_names: ["Ocelote"],
    category: "Mammal",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Colombia", "Mexico", "Brazil"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["ocelote1.jpg"] },
    sightings: [
      {
        location: "Córdoba",
        observer: "Investigador L",
        date: new Date("2026-04-27")
      }
    ],
    description: "Felino manchado nocturno de tamaño mediano.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 17,
    scientific_name: "Trichechus manatus",
    common_names: ["Manatí del Caribe"],
    category: "Mammal",
    habitat: {
      ecosystem: "Coastal",
      countries: ["Colombia", "Cuba", "USA"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["manati1.jpg"] },
    sightings: [
      {
        location: "Golfo de Morrosquillo",
        observer: "Equipo Marino",
        date: new Date("2026-02-20")
      }
    ],
    description: "Mamífero acuático herbívoro de aguas costeras y estuarios.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 18,
    scientific_name: "Speothos venaticus",
    common_names: ["Perro de Monte"],
    category: "Mammal",
    habitat: {
      ecosystem: "Rainforest",
      countries: ["Colombia", "Brazil", "Panama"]
    },
    conservation: { status: "Near Threatened" },
    multimedia: { images: ["perrodemont1.jpg"] },
    sightings: [
      {
        location: "Chocó",
        observer: "Investigador M",
        date: new Date("2026-05-03")
      }
    ],
    description: "Cánido salvaje social y cazador de presa en manada.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── BIRDS ────────────────────────────────
  {
    taxon_id: 19,
    scientific_name: "Rupicola peruvianus",
    common_names: ["Gallito de Roca"],
    category: "Bird",
    habitat: {
      ecosystem: "Andean Forest",
      countries: ["Colombia", "Peru", "Ecuador"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["gallitoroca1.jpg"] },
    sightings: [
      {
        location: "Sierra Nevada de Santa Marta",
        observer: "Investigador N",
        date: new Date("2026-03-29")
      }
    ],
    description: "Ave nacional del Perú con plumaje naranja intenso.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 20,
    scientific_name: "Ramphastos toco",
    common_names: ["Tucán Toco"],
    category: "Bird",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Brazil", "Colombia", "Bolivia"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["tucan1.jpg"] },
    sightings: [
      {
        location: "Putumayo",
        observer: "Investigador O",
        date: new Date("2026-01-18")
      }
    ],
    description: "Ave de pico anaranjado gigante, símbolo de la selva tropical.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 21,
    scientific_name: "Jabiru mycteria",
    common_names: ["Jabirú"],
    category: "Bird",
    habitat: {
      ecosystem: "Wetland",
      countries: ["Colombia", "Brazil", "Mexico"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["jabiru1.jpg"] },
    sightings: [
      {
        location: "Casanare",
        observer: "Equipo Humedales",
        date: new Date("2026-04-15")
      }
    ],
    description: "La cigüeña más grande de América, característica de los Llanos.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 22,
    scientific_name: "Mitu salvini",
    common_names: ["Paujil de Salvin"],
    category: "Bird",
    habitat: {
      ecosystem: "Rainforest",
      countries: ["Colombia", "Peru"]
    },
    conservation: { status: "Endangered" },
    multimedia: { images: ["paujil1.jpg"] },
    sightings: [
      {
        location: "Vaupés",
        observer: "Investigador P",
        date: new Date("2026-02-08")
      }
    ],
    description: "Ave crácida endémica en peligro por pérdida de hábitat.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 23,
    scientific_name: "Pharomachrus mocinno",
    common_names: ["Quetzal Resplandeciente"],
    category: "Bird",
    habitat: {
      ecosystem: "Cloud Forest",
      countries: ["Colombia", "Guatemala", "Costa Rica"]
    },
    conservation: { status: "Near Threatened" },
    multimedia: { images: ["quetzal1.jpg"] },
    sightings: [
      {
        location: "Serranía de la Macarena",
        observer: "Investigador Q",
        date: new Date("2026-03-07")
      }
    ],
    description: "Ave sagrada para los mayas, símbolo de libertad y riqueza.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 24,
    scientific_name: "Spheniscus humboldti",
    common_names: ["Pingüino de Humboldt"],
    category: "Bird",
    habitat: {
      ecosystem: "Coastal",
      countries: ["Peru", "Chile"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["pinguino1.jpg"] },
    sightings: [
      {
        location: "Islas Ballestas",
        observer: "Equipo Costero",
        date: new Date("2026-01-25")
      }
    ],
    description: "Pingüino sudamericano adaptado a la corriente de Humboldt.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 25,
    scientific_name: "Anodorhynchus hyacinthinus",
    common_names: ["Guacamayo Jacinto"],
    category: "Bird",
    habitat: {
      ecosystem: "Savanna",
      countries: ["Brazil", "Bolivia"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["guacamayohiac1.jpg"] },
    sightings: [
      {
        location: "Pantanal",
        observer: "Investigador R",
        date: new Date("2026-04-01")
      }
    ],
    description: "El guacamayo más grande del mundo, de color azul cobalto.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── REPTILES ─────────────────────────────
  {
    taxon_id: 26,
    scientific_name: "Crocodylus intermedius",
    common_names: ["Caimán del Orinoco"],
    category: "Reptile",
    habitat: {
      ecosystem: "Riverine",
      countries: ["Colombia", "Venezuela"]
    },
    conservation: { status: "Critically Endangered" },
    multimedia: { images: ["caiman1.jpg"] },
    sightings: [
      {
        location: "Arauca",
        observer: "Investigador S",
        date: new Date("2026-03-03")
      }
    ],
    description: "El cocodrilo más grande de América y uno de los más amenazados del mundo.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 27,
    scientific_name: "Iguana iguana",
    common_names: ["Iguana Verde"],
    category: "Reptile",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Colombia", "Mexico", "Brazil"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["iguana1.jpg"] },
    sightings: [
      {
        location: "Valle del Cauca",
        observer: "Investigador T",
        date: new Date("2026-05-12")
      }
    ],
    description: "Lagarto arbóreo herbívoro ampliamente distribuido en el Neotrópico.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 28,
    scientific_name: "Lachesis muta",
    common_names: ["Verrugosa", "Surucucú"],
    category: "Reptile",
    habitat: {
      ecosystem: "Rainforest",
      countries: ["Colombia", "Brazil", "Peru"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["verrugosa1.jpg"] },
    sightings: [
      {
        location: "Amazonas",
        observer: "Investigador U",
        date: new Date("2026-02-02")
      }
    ],
    description: "La serpiente venenosa más larga de América.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 29,
    scientific_name: "Dermochelys coriacea",
    common_names: ["Tortuga Laúd"],
    category: "Reptile",
    habitat: {
      ecosystem: "Ocean",
      countries: ["Colombia", "Trinidad", "USA"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["tauld1.jpg"] },
    sightings: [
      {
        location: "Pacífico Colombiano",
        observer: "Equipo Marino",
        date: new Date("2026-01-09")
      }
    ],
    description: "La tortuga marina más grande del mundo, sin caparazón duro.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 30,
    scientific_name: "Draco volans",
    common_names: ["Lagarto Volador"],
    category: "Reptile",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Philippines", "Indonesia", "Malaysia"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["dracovolans1.jpg"] },
    sightings: [
      {
        location: "Mindanao",
        observer: "Investigador V",
        date: new Date("2026-03-19")
      }
    ],
    description: "Lagarto que planea entre árboles usando costillas extendidas.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── AMPHIBIANS ───────────────────────────
  {
    taxon_id: 31,
    scientific_name: "Centrolene prosoblepon",
    common_names: ["Rana de Cristal"],
    category: "Amphibian",
    habitat: {
      ecosystem: "Cloud Forest",
      countries: ["Colombia", "Ecuador", "Panama"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["ranacristal1.jpg"] },
    sightings: [
      {
        location: "Nariño",
        observer: "Investigador W",
        date: new Date("2026-04-22")
      }
    ],
    description: "Anfibio con piel transparente que permite ver sus órganos internos.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 32,
    scientific_name: "Atelopus zeteki",
    common_names: ["Rana Arlequín de Panamá"],
    category: "Amphibian",
    habitat: {
      ecosystem: "Cloud Forest",
      countries: ["Panama"]
    },
    conservation: { status: "Critically Endangered" },
    multimedia: { images: ["ranaarlequin1.jpg"] },
    sightings: [
      {
        location: "Cerro Campana",
        observer: "Investigador X",
        date: new Date("2026-02-25")
      }
    ],
    description: "Rana venenosa de colores llamativos al borde de la extinción.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 33,
    scientific_name: "Bufo bufo",
    common_names: ["Sapo Común Europeo"],
    category: "Amphibian",
    habitat: {
      ecosystem: "Temperate Forest",
      countries: ["Spain", "France", "Germany"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["sapocomun1.jpg"] },
    sightings: [
      {
        location: "Pirineos",
        observer: "Investigador Y",
        date: new Date("2026-03-30")
      }
    ],
    description: "Anfibio tolerante a condiciones áridas, activo al anochecer.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 34,
    scientific_name: "Telmatobius culeus",
    common_names: ["Rana Titicaca"],
    category: "Amphibian",
    habitat: {
      ecosystem: "Lake",
      countries: ["Peru", "Bolivia"]
    },
    conservation: { status: "Critically Endangered" },
    multimedia: { images: ["ranatiticaca1.jpg"] },
    sightings: [
      {
        location: "Lago Titicaca",
        observer: "Equipo Lacustre",
        date: new Date("2026-01-14")
      }
    ],
    description: "La rana acuática más grande del mundo, endémica del Lago Titicaca.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 35,
    scientific_name: "Oophaga pumilio",
    common_names: ["Rana Fresa"],
    category: "Amphibian",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Costa Rica", "Panama", "Nicaragua"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["ranafresa1.jpg"] },
    sightings: [
      {
        location: "Bocas del Toro",
        observer: "Investigador Z",
        date: new Date("2026-04-10")
      }
    ],
    description: "Rana dardo de color rojo brillante con patas azules.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── FISH ─────────────────────────────────
  {
    taxon_id: 36,
    scientific_name: "Arapaima gigas",
    common_names: ["Pirarucú", "Paiche"],
    category: "Fish",
    habitat: {
      ecosystem: "Riverine",
      countries: ["Colombia", "Brazil", "Peru"]
    },
    conservation: { status: "Data Deficient" },
    multimedia: { images: ["pirarucu1.jpg"] },
    sightings: [
      {
        location: "Amazonas",
        observer: "Equipo Íctico",
        date: new Date("2026-03-08")
      }
    ],
    description: "Uno de los peces de agua dulce más grandes del mundo.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 37,
    scientific_name: "Carcharodon carcharias",
    common_names: ["Tiburón Blanco"],
    category: "Fish",
    habitat: {
      ecosystem: "Ocean",
      countries: ["South Africa", "Australia", "USA"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["tiburon1.jpg"] },
    sightings: [
      {
        location: "Isla Guadalupe",
        observer: "Equipo Marino",
        date: new Date("2026-02-17")
      }
    ],
    description: "El mayor pez depredador del océano, apex predador marino.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 38,
    scientific_name: "Hippocampus guttulatus",
    common_names: ["Caballito de Mar Hocicudo"],
    category: "Fish",
    habitat: {
      ecosystem: "Coastal",
      countries: ["Spain", "Portugal", "Morocco"]
    },
    conservation: { status: "Near Threatened" },
    multimedia: { images: ["caballomar1.jpg"] },
    sightings: [
      {
        location: "Mar Mediterráneo",
        observer: "Investigador A2",
        date: new Date("2026-05-06")
      }
    ],
    description: "Pez marino que cría en praderas de posidonia del Mediterráneo.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 39,
    scientific_name: "Manta birostris",
    common_names: ["Manta Raya Oceánica"],
    category: "Fish",
    habitat: {
      ecosystem: "Ocean",
      countries: ["Colombia", "Mexico", "Maldives"]
    },
    conservation: { status: "Endangered" },
    multimedia: { images: ["manta1.jpg"] },
    sightings: [
      {
        location: "Isla Malpelo",
        observer: "Equipo de Buceo",
        date: new Date("2026-03-25")
      }
    ],
    description: "La raya más grande del mundo, filtradora de plancton.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 40,
    scientific_name: "Electrophorus electricus",
    common_names: ["Anguila Eléctrica"],
    category: "Fish",
    habitat: {
      ecosystem: "Riverine",
      countries: ["Colombia", "Brazil", "Venezuela"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["anguila1.jpg"] },
    sightings: [
      {
        location: "Guainía",
        observer: "Investigador B2",
        date: new Date("2026-01-31")
      }
    ],
    description: "Pez capaz de generar descargas de hasta 860 voltios.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── INSECTS ──────────────────────────────
  {
    taxon_id: 41,
    scientific_name: "Morpho menelaus",
    common_names: ["Mariposa Morpho Azul"],
    category: "Insect",
    habitat: {
      ecosystem: "Rainforest",
      countries: ["Colombia", "Brazil", "Peru"]
    },
    conservation: { status: "Not Evaluated" },
    multimedia: { images: ["morpho1.jpg"] },
    sightings: [
      {
        location: "Vaupés",
        observer: "Investigador C2",
        date: new Date("2026-04-03")
      }
    ],
    description: "Mariposa icónica por su iridiscente color azul metálico.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 42,
    scientific_name: "Dynastes hercules",
    common_names: ["Escarabajo Hércules"],
    category: "Insect",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Colombia", "Ecuador", "Venezuela"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["escarabajo1.jpg"] },
    sightings: [
      {
        location: "Eje Cafetero",
        observer: "Investigador D2",
        date: new Date("2026-02-14")
      }
    ],
    description: "Uno de los insectos más grandes del mundo con cuernos prominentes.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 43,
    scientific_name: "Atta cephalotes",
    common_names: ["Hormiga Arrieira", "Hormiga Cortadora"],
    category: "Insect",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Colombia", "Brazil", "Mexico"]
    },
    conservation: { status: "Not Evaluated" },
    multimedia: { images: ["arrieira1.jpg"] },
    sightings: [
      {
        location: "Antioquia",
        observer: "Investigador E2",
        date: new Date("2026-05-09")
      }
    ],
    description: "Hormiga cultivadora de hongos que puede cargar 20 veces su peso.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── PLANTS ───────────────────────────────
  {
    taxon_id: 44,
    scientific_name: "Victoria amazonica",
    common_names: ["Victoria Regia", "Flor de Loto Amazónica"],
    category: "Plant",
    habitat: {
      ecosystem: "Wetland",
      countries: ["Colombia", "Brazil", "Bolivia"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["victoriaregia1.jpg"] },
    sightings: [
      {
        location: "Amazonas",
        observer: "Investigador F2",
        date: new Date("2026-03-16")
      }
    ],
    description: "La planta acuática más grande del mundo, con hojas de hasta 3 metros.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 45,
    scientific_name: "Wettinia praemorsa",
    common_names: ["Palma de Cera"],
    category: "Plant",
    habitat: {
      ecosystem: "Andean Forest",
      countries: ["Colombia"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["palmacera1.jpg"] },
    sightings: [
      {
        location: "Valle del Cocora",
        observer: "Investigador G2",
        date: new Date("2026-04-28")
      }
    ],
    description: "Árbol nacional de Colombia, la palma más alta del mundo.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 46,
    scientific_name: "Heliconia bihai",
    common_names: ["Heliconia", "Ave del Paraíso"],
    category: "Plant",
    habitat: {
      ecosystem: "Tropical Forest",
      countries: ["Colombia", "Brazil", "Ecuador"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["heliconia1.jpg"] },
    sightings: [
      {
        location: "Urabá",
        observer: "Investigador H2",
        date: new Date("2026-01-22")
      }
    ],
    description: "Planta tropical ornamental con brácteas de colores vivos.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── MARINE MAMMALS ───────────────────────
  {
    taxon_id: 47,
    scientific_name: "Megaptera novaeangliae",
    common_names: ["Ballena Jorobada", "Yubarta"],
    category: "Mammal",
    habitat: {
      ecosystem: "Ocean",
      countries: ["Colombia", "Antarctica", "Norway"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["ballenajorobada1.jpg"] },
    sightings: [
      {
        location: "Bahía Málaga",
        observer: "Equipo Cetáceos",
        date: new Date("2026-08-07")
      }
    ],
    description: "Ballena migratoria famosa por sus cantos complejos y saltos acrobáticos.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 48,
    scientific_name: "Otaria flavescens",
    common_names: ["León Marino Sudamericano"],
    category: "Mammal",
    habitat: {
      ecosystem: "Coastal",
      countries: ["Colombia", "Peru", "Argentina"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["leonmarino1.jpg"] },
    sightings: [
      {
        location: "Isla de la Gorgona",
        observer: "Investigador I2",
        date: new Date("2026-02-28")
      }
    ],
    description: "Pinnípedo colonial que habita costas rocosas del Pacífico.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  // ── BIRDS (continuación) ─────────────────
  {
    taxon_id: 49,
    scientific_name: "Heliangelus exortis",
    common_names: ["Colibrí Tourmaline"],
    category: "Bird",
    habitat: {
      ecosystem: "Andean Forest",
      countries: ["Colombia"]
    },
    conservation: { status: "Least Concern" },
    multimedia: { images: ["colibri1.jpg"] },
    sightings: [
      {
        location: "Cundinamarca",
        observer: "Investigador J2",
        date: new Date("2026-05-15")
      }
    ],
    description: "Colibrí endémico colombiano con garganta de color violeta metálico.",
    created_at: new Date(),
    updated_at: new Date()
  },
 
  {
    taxon_id: 50,
    scientific_name: "Podocnemis expansa",
    common_names: ["Tortuga Charapa", "Tartaruga da Amazônia"],
    category: "Reptile",
    habitat: {
      ecosystem: "Riverine",
      countries: ["Colombia", "Brazil", "Venezuela"]
    },
    conservation: { status: "Vulnerable" },
    multimedia: { images: ["charapa1.jpg"] },
    sightings: [
      {
        location: "Río Orinoco",
        observer: "Equipo Quelonios",
        date: new Date("2026-04-11")
      }
    ],
    description: "La tortuga de agua dulce más grande de América del Sur.",
    created_at: new Date(),
    updated_at: new Date()
  }
 
])
 
/* Mostrar todos los registros */
db.speciesContent.find()
 
