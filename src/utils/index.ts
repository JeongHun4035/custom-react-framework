export const insertCommas = (inputValue: number | string): string => {
  if (inputValue === null || inputValue === undefined) {
    return ""
  }
  const inputString = inputValue.toString()
  return inputString.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return cleaned
}
