const pesoFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatPeso(value) {
  if (typeof value !== 'number') {
    return value
  }

  return pesoFormatter.format(value)
}
