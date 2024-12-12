import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

function HeroSection() {
  return (
    <main className="hero-section main">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className="heading-xl">
                Explore the World, One Country at a Time.
              </h1>
              <p className="paragraph">
                Discover the history, culture and beauty of every Nation. Sort
                search, and filter through countries to find the details need.
              </p>
              <button className="btn btn-darken btn-inline bg-yellow-box">
                Start Exploring <MdArrowRightAlt />
              </button>
            </div>
            <div className="hero-image">
              <img src="/images/globe.png" alt="Globe Image" className='banner-image' />
            </div>
          </div>
        </main>
  )
}

export default HeroSection