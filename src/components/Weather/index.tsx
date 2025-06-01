import { useEffect, useState } from 'react'

import { useLocationStore } from '@/store/useLocationStore'
import { getAddressFromAmap } from '@/api'

import style from './index.module.scss'

type AddressComponent = {
  city: string
  district: string
}

export const Weather = () => {
  const [locationZHCH, setLocationZHCH] = useState<AddressComponent>()
  const weatherData = useLocationStore((state) => state.weatherData)
  const setLocationStore = useLocationStore((state) => state.setLocationStore)
  const getWeather = useLocationStore((state) => state.getWeather)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      setLocationStore([
        Number(longitude.toFixed(6)),
        Number(latitude.toFixed(6)),
      ])
    })

    getWeather()
  }, [setLocationStore, getWeather])

  useEffect(() => {
    const onLocationZHCH = async () => {
      if (!weatherData) return
      const location = await getAddressFromAmap(
        weatherData.coord.lon,
        weatherData.coord.lat
      )
      setLocationZHCH(location.regeocode.addressComponent)
    }
    if (weatherData) {
      onLocationZHCH()
    }
  }, [weatherData])

  return (
    <div className={style.centre}>
      <div className={style.video}>
        <video autoPlay muted loop>
          <source
            src='/src/assets/testVideo/clearSpring.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        {weatherData && (
          <div className={style.text}>
            <div className={style.Container}>
              <div className={style.Primary}>
                <p className={style.Condition}>
                  {weatherData.weather[0].description}
                </p>
                <p className={style.temperature}>
                  {Math.round(weatherData.main.temp)}
                  °C
                </p>
              </div>
              <div className={style.Secondary}>
                <div className={style.Icon}></div>
                <span className={style.temperatureRange}>
                  {locationZHCH
                    ? `${locationZHCH.city}-${locationZHCH.district}`
                    : ''}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
