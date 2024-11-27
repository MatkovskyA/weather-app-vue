const PRESSURE_UNITS = 0.750062

// давление 
export const getPressureMm = (hpa) => {
  return Math.round(PRESSURE_UNITS * hpa)
}

// восход
export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU')
}