import React from 'react'
import styles from './style'
import Billing from './componants/Billing'
import Business from './componants/Business'
import CardDeal from './componants/CardDeal'
import Clients from './componants/Clients'
import CTA from './componants/CTA'
import Footer  from './componants/Footer'
import Hero from './componants/Hero'
import Navbar from './componants/Navbar'
import Stats from './componants/Stats'
import Testimonials from './componants/Testimonials'


const App = () => {
  return (
    
      <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
       </div>
       <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} ${styles.paddingX}`}>
            <Stats/>
            <Business/>
            <Billing/> 
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>


          </div>
        </div>
      </div>
    
  )
}

export default App