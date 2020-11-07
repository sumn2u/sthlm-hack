const rootUrl = 'https://api.triptocarbon.xyz/v1/footprint?'
const transportModes = [
  { name: 'anyCar', fuel: 'diesel' },
  { name: 'taxi', fuel: 'diesel' },
  { name: 'anyFlight', fuel: 'jetFuel' },
  { name: 'motorbike', fuel: 'petrol' },
  { name: 'bus', fuel: 'diesel' },
]

const getEmission = async (distance, type, mode, country, fuel) => {
  try {
    const requestUrl = `${rootUrl}activity=${distance}&activityType=${type}&fuelType=${fuel}&country=${country}&mode=${mode}`
    const response = await fetch(requestUrl)
    const result = await response.json()
    result.mode = mode
    return result
  } catch (error) {
    throw error
  }
}

//**Response will have the shape of an array of { carbonFootPrint: 'number', mode: 'transport mode' } */
export const runRequests = async (
  distance,
  type = 'miles',
  country = 'def'
) => {
  try {
    const response = await Promise.all(
      transportModes.map((mode) =>
        getEmission(distance, type, mode.name, country, mode.fuel)
      )
    )
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getUserInfo = async (
  url = 'katiparxa.com:8080/api/facets',
  userId = 1
) => {
  const requestUrl = `${url}/${userId}`
  const response = await fetch(requestUrl)
  const result = await response.json()
  return result
}
