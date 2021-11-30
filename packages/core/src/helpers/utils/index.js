import * as R from 'ramda'
const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRT',
})

export const intToPrice = num => {
  const price = !isNaN(num) ? num : 0
  const absolute = Math.abs(Number(price))
  const formated = absolute % 1 !== 0 ? absolute.toFixed(2) : absolute
  return R.dropLast(3, formatter.format(formated))
}
