export const convertToISO = (day, month, year) => {
  const isoDate = new Date(year, month - 1, day).toISOString().split('T')[0]
  return isoDate
}

export const formatBirthday = dateInput => {
  const isoDate = this.getIsoDate(dateInput)
  if (isoDate) {
    const [year, month, day] = isoDate.split('-')
    return `${day}/${month}/${year}` // Formato DD/MM/YYYY
  }
}
