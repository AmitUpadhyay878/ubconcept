
import React, { Suspense } from 'react'
import ThankYouContent from './ThankYouContent'


const Thankyou = () => {


  return (
    <div className="container mx-auto px-6 py-16">
       <Suspense fallback={<div className="p-8">Loading...</div>}>
        <ThankYouContent/>
       </Suspense>
    </div>
  )
}

export default Thankyou
