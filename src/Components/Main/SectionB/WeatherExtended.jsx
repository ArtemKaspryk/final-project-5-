import React, { useState }from 'react';
import hourlyData from '../SectionD/HourlyData'
import forecast8 from '../SectionE/ForecastData'


const WeatherExtended = ({ onExpand }) => {
     const [expanded, setExpanded] = useState(false);
    
      const handleExpand = () => {
        const newState = !expanded;
        setExpanded(newState);
    
        if (newState && onExpand) {
          onExpand();
        }
      };

    return (
        <div>
            {expanded && (
                    <div className="expanded-boxes">
                      <>
                        <GeneralInfo />
            
                        <div className="chart-container">
                          <h3 className="chart-title">Hourly forecast</h3>
                          <HourlyChart data={hourlyData} />
                        </div>
            
                        <Forecast8Day data={forecast8} />
                      </>
                    </div>
                  )}
        </div>
    );
}

export default WeatherExtended;
