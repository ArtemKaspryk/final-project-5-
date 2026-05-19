import React from 'react';
import './SectionOneStyles.css'

function SectionOne() {
    return (
        <div>
            <section className="section-one">
                <div className="content">
                    <h1>Weather dashboard</h1>
                    <div className='section_one_box'>
                        <p className="subtitle">
                        Create your personal list of favorite cities and always be aware of the weather.
                    </p>
                    <span></span>
                    <p className="date">October 2023 • Friday, 13th</p>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search location..." />
                        <button>search</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionOne;
