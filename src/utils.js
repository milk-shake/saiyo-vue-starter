export const shouldUseDarkContrast = (hexcolor) => {
  const r = parseInt(hexcolor.substr(0, 2), 16)
  const g = parseInt(hexcolor.substr(2, 2), 16)
  const b = parseInt(hexcolor.substr(4, 2), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return (yiq >= 128)
}

export const shouldUseLightContrast = (hexcolor) => {
  return !shouldUseDarkContrast(hexcolor)
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const generateCssValues = (values) => {
  return values.join(' ')
}
