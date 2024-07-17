import React from 'react'
import AccountingDoneDeff from './components/AccountingDoneDiff'
import WWOCard from './components/WWOCard'
import Services from './components/Services'
import OurEthos from './components/OurEthos'
import EOS from './components/EOS'
import { Testimonial } from '../../components/Testimonials'

const AboutPage = () => {
  return (
    <div className='my-[180px] flex flex-col gap-[80px] md:gap[120px] lg:gap[160px] px-8'>
        <AccountingDoneDeff />
        <WWOCard />
        <Services />
        <OurEthos />
        <EOS />
        <Testimonial />
    </div>
  )
}

export default AboutPage