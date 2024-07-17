import { Button } from '@material-tailwind/react'
import React from 'react'

const EOS = () => {
  return (
    <div className='bg-black-100 p-6 w-full rounded-xl flex flex-col items-center justify-center'>
        <div>
        <h1 className='text-center text-[35px] font-headingText font-bold leading-[1.1] text-white'>
        Ready to transform your business’s financial future?
      </h1>
      <p className='text-center text-lg w-full text-lightText-50 mt-2 mb-6 font-paraText'>
      Don’t wait; take control of your finances today.
      </p>
        </div>
        <div>
        <a href="#" className="inline-block">
          <Button size="md" className="bg-blue-600 text-sm font-paraFont">
            Explore Our Solutions
          </Button>
        </a>
        </div>
    </div>
  )
}

export default EOS