import { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header'
import SectionOne from './Components/Main/SectionA/SectionOne'
import WeatherCards from './Components/Main/SectionB/WeatherCards'
import GeneralInfo from './Components/Main/SectionC/GeneralInfo'
import HourlyChart from './Components/Main/SectionD/HourlyChart'
import hourlyData from './Components/Main/SectionD/HourlyData'
import Forecast8Day from './Components/Main/SectionE/Forecast8Day'
import Pet from './Components/Main/SectionF/Pet'
import ImageSlider from './Components/Main/SectionG/ImageSlider'
import Footer from './Components/Footer/Footer'
import forecast8 from './Components/Main/SectionE/ForecastData'

function App() {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='body'>
      <header>
        <Header />
      </header>

      <section>
        <SectionOne />

        <WeatherCards onExpand={(state) => setShowDetails(state)} />

        {showDetails && (
          <>
            <GeneralInfo />

            <div className="chart-container">
              <h3 className="chart-title">Hourly forecast</h3>
              <HourlyChart data={hourlyData} />
            </div>

            <Forecast8Day data={forecast8} />
          </>
        )}

        <Pet />

        <div>
          <h1 style={{ textAlign: "center" }}>Beautiful Nature</h1>
          <ImageSlider />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
