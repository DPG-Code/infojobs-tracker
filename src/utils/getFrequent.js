// Diccionario para utilizar segun un tipo
const TYPES_ITEMS = {
  company: (data) => [
    ...data.items.map((job) => job.author?.name || 'Indefinido')
  ],
  location: (data) => [...data.items.map((job) => job?.city || 'Indefinido')],
  education: (data) => [
    ...data.items.map((job) => job.study?.value || 'Indefinido')
  ],
  experience: (data) => [
    ...data.items.map((job) => job.experienceMin?.value || 'Indefinida')
  ],
  typeJob: (data) => [
    ...data.items.map((job) => job.teleworking?.value || 'Indefinido')
  ]
}

export default function getFrequent(data, type, quantity = 5) {
  const items = TYPES_ITEMS[type](data)

  // Objeto para contar la frecuencia de cada item
  const counter = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})

  // Ordenar por la frecuencia de aparición y tomar los 5 más repetidos
  const moreFrequent = Object.keys(counter)
    .sort((a, b) => counter[b] - counter[a])
    .slice(0, quantity)

  return moreFrequent
}
