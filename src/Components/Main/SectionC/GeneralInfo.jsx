import React from 'react';
import GeneralInfos from './GeneralInfos.jsx';
import './GeneralInfoStyles.css'


const GeneralInfo = () => {
    return (
    <div className="squares">
      {GeneralInfos.map(({ label, value, img }, index) => (
        <div className="square" key={index}>
          <div className="label">{label}</div>
          {img === null ? '':<img src={img} alt={label} className="icon-img" />}
          <div className="value">{value}</div>
        </div>
      ))}
    </div>
  );
}

export default GeneralInfo;






