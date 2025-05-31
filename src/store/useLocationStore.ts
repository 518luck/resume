import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { getWeather } from '@/api'
import type { WeatherData } from '@/types/weather'
type Location = [number, number] | null

interface LocationStore {
  location: Location
  setLocationStore: (newLocation: Location) => void
  getWeather: () => Promise<WeatherData | null>
  weatherData: WeatherData | null
}

const useLocationStore = create<LocationStore>()(
  devtools(
    persist(
      (set, get) => ({
        location: null,
        weatherData: null,

        setLocationStore: (newLocation) => {
          set({ location: newLocation })
        },

        getWeather: async () => {
          const state = get()
          if (!state.location) return null
          const [longitude, latitude] = state.location
          const { data } = await getWeather(latitude, longitude)
          set({ weatherData: data })
          return data
        },
      }),
      { name: 'location' }
    ),
    { enabled: true, name: 'useLocationStore' }
  )
)

export { useLocationStore }
