export interface ProjectItem {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Rehabilitación de Vías en el Sureste",
    category: "Vías Férreas",
    location: "Sureste de México",
    year: "2023",
    description:
      "Rehabilitación integral de corredores ferroviarios estratégicos, con sustitución de rieles, durmientes y balasto bajo estrictas normas de calidad.",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20railway%20tracks%20stretching%20across%20a%20spectacular%20dramatic%20landscape%20in%20southeast%20Mexico%20steel%20rails%20and%20concrete%20sleepers%20crossing%20lush%20green%20hills%20and%20a%20wide%20river%20epic%20scale%20golden%20dramatic%20lighting%20with%20cool%20steel%20blue%20sky%20cinematic%20aerial%20perspective%20high%20detail&width=1200&height=800&seq=fercisa-proyecto-1&orientation=landscape&nocache=true",
  },
  {
    title: "Montaje Electromecánico en Planta Petrolera",
    category: "Obra Electromecánica",
    location: "Golfo de México",
    year: "2022",
    description:
      "Montaje electromecánico de sistemas de compresión y bombeo en una planta petrolera de gran escala, con instalación de turbogeneradores.",
    image:
      "https://readdy.ai/api/search-image?query=Vast%20complex%20industrial%20petroleum%20plant%20at%20night%20with%20dramatic%20lighting%20thousands%20of%20lights%20illuminating%20steel%20pipes%20storage%20tanks%20and%20distillation%20towers%20glowing%20industrial%20structures%20against%20the%20dark%20sky%20reflections%20on%20metal%20cinematic%20atmosphere%20high%20detail&width=1200&height=800&seq=fercisa-proyecto-2&orientation=landscape&nocache=true",
  },
  {
    title: "Obra Civil Sector Marítimo",
    category: "Obra Civil",
    location: "Costa de Veracruz",
    year: "2021",
    description:
      "Ejecución de obra civil portuaria de gran escala, incluyendo cimentaciones, estructuras de concreto y muros de contención en zona marítima.",
    image:
      "https://readdy.ai/api/search-image?query=Monumental%20civil%20construction%20project%20near%20the%20ocean%20with%20massive%20concrete%20port%20structures%20tower%20cranes%20and%20steel%20frameworks%20cargo%20ships%20and%20deep%20blue%20sea%20in%20the%20background%20dramatic%20coastal%20industrial%20scene%20cool%20steel%20blue%20tones%20high%20detail%20cinematic%20composition&width=1200&height=800&seq=fercisa-proyecto-3&orientation=landscape&nocache=true",
  },
];