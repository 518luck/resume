import axios from 'axios'
import type { WeatherData } from '@/types/weather'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = async (latitude: number, longitude: number) => {
  const params = {
    lat: latitude,
    lon: longitude,
    appid: import.meta.env.VITE_WEATHER_KEY,
  }

  const response = await axios.get<WeatherData>(BASE_URL, {
    params,
  })

  return response
}
