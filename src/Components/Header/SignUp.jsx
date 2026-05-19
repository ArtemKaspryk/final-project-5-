import React from 'react';
import './HeaderStyles.css'
import headerDefaultImg from '../../assets/headerDefaultImg.png'

function SignUp() {
    return (
        <div className='sign-up'>
            <button className='signup-btn'>
                <a href="#" className='signup-btn-text'>Sign Up</a>
            </button>
            <img src={headerDefaultImg} alt="" className='profile-pic'/>
        </div>
    );
}

export default SignUp;
