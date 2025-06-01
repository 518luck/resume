import axios from 'axios'

const BASE_URL = 'https://restapi.amap.com/v3/geocode/regeo'

export const getAddressFromAmap = async (
  longitude: number,
  latitude: number
) => {
  const params = {
    key: import.meta.env.VITE_AMAP_KEY,
    location: `${longitude},${latitude}`,
  }
  const response = await axios.get(BASE_URL, { params })

  return response.data
}
