export const insertCommas = (inputValue: number | string): string => {
  if (inputValue === null || inputValue === undefined) {
    return ''
  }
  const inputString = inputValue.toString()
  return inputString.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
