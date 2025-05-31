import { useEffect } from 'react'

import { useLocationStore } from '@/store/useLocationStore'
import style from './index.module.scss'

export const Weather = () => {
  const setLocationStore = useLocationStore((state) => state.setLocationStore)
  const getWeather = useLocationStore((state) => state.getWeather)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      setLocationStore([Math.round(longitude), Math.round(latitude)])
    })
    getWeather()
  }, [setLocationStore, getWeather])

  return (
    <div className={style.centre}>
      <div className={style.video}>
        <video autoPlay muted loop>
          <source
            src='/src/assets/testVideo/抖音2025531-078985.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        <div className={style.text}>
          <div className={style.Container}>
            <div className={style.Primary}>
              <p className={style.Condition}>晴</p>
              <p className={style.temperature}>20°C</p>
            </div>
            <div className={style.Secondary}>
              <div className={style.Icon}></div>
              <span className={style.temperatureRange}>晴天 15°~24°空气良</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
