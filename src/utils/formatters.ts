export const insertCommas = (inputValue: number | string): string => {
  if (inputValue === null || inputValue === undefined) {
    return ""
  }
  const inputString = inputValue.toString().replace(/,/g, "")
  const parts = inputString.split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts.join(".")
}

export const formatPhoneNumber = (value: string): string => {
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
  const numericValue = value.replace(/\D/g, "")
  if (regPhone.test(numericValue)) {
    return numericValue.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3")
  } else {
    return value
  }
}
