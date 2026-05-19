import React from 'react';
import pets from './PetData.jsx'
import './PetStyles.css'

function Pet({ image, title}) {
    return (
            <div className='pets-cards'>
                <img src={image} alt={title} className='pet-img'/>
                <p className='pet-title'>{title}</p>
            </div>
    );
}

export default function Pets() {
    return(
        <div className='pets-wrap'>
            <h3 className='pets-header'>Interacting with our pets</h3>
            <div className='pets-list'>
                {pets.map((item, i) => (
                    <Pet 
                    key={i}
                    image={item.image}
                    title={item.title}
                    />
                ))}
            </div>
            <button className='pets-btn'>See more</button>
        </div>
    );
}