import React from 'react';
import pascalmeter from '../../../assets/pascalmeter.png'
import rainycloud from '../../../assets/rainycloud.png'
import thermostate from '../../../assets/thermostate.png'
import visibility from '../../../assets/visibility.png'
import wind from '../../../assets/wind.png'

const GeneralInfo = [
  {
    label: "Feels like",
    value: "29.2°C",
    img: thermostate
  },
  {
    label: "Min °C\nMax °C",
    value: "27.9°C\n27.9°C",
    img: null
  },
  {
    label: "Visibility",
    value: "Unlimited",
    img: visibility
  },
  {
    label: "Humidity",
    value: "59%",
    img: rainycloud
  },
  {
    label: "Pressure",
    value: "1007 Pa",
    img: pascalmeter
  },
  {
    label: "Wind speed",
    value: "3.17 m/s",
    img: wind
  }
];

export default GeneralInfo;
