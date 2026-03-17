import React from 'react'
import AboutHero from '../components/about/AboutHero'
import Data from "../data/About.json"

export const About = () => {
  return (
    <>
    <AboutHero data={Data}/>
    </>
  )
}
