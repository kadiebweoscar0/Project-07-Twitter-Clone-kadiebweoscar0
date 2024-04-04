import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loder () {
  return (
    <div className='flex items-center py-12 mx-44'>
        <Oval
            visible={true}
            height="80"
            width="80"
            color="#3a86ff"
            secondaryColor="90e0ef"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}
