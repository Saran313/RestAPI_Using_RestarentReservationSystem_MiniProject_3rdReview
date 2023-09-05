import React from 'react'
import "./Home.css"
import image from '../image/image.jpg'


import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
    <section className='hero' id='home'>
    <div className='container f_flex top'>
        <div className='left top'>
            <h3>Welcome to our Restarent</h3>
            <h1>Hello,<span>Have a Great Dinning with Us</span></h1>
            <h2>
                <span>
                <Typewriter words={['Hi Everyone!', 'Finest Foods Available', 'With a Twist of Flavours.']}
            loop cursor cursorStyle='..' typeSpeed={50} deleteSpeed={30} delaySpeed={1000} /></span>
            </h2>
            <h3>Have A Nice Day</h3>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Follow our pages</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <i class="fa fa-facebook" aria-hidden="true" ></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fa fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  
                  </button>
                </div>
              </div>
              <div className='col_1'>
                
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={image} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home