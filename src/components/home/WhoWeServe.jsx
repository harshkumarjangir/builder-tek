import React from 'react'
import SolutionsHero from '../reusable/Hero'
import whoWeServe from '../../data/who-we-serve.json'

const WhoWeServe = () => {
    return (
        <div>
            <SolutionsHero hero={whoWeServe.hero} badge={false} />
        </div>
    )
}

export default WhoWeServe