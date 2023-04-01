import React, { useState } from 'react'

const Cards = ({name, phone, logoURL, site, alliance}) => {
    const [cardDetails, setCardDetails] = useState(false)
  return (
   
               <div 
               onMouseEnter={() => setCardDetails(!cardDetails)}
               onMouseLeave={() => setCardDetails(!cardDetails)}
                >
                 <article className="flex flex-col bg-gray-50" >
				<div className="flex-1 p-6">
                    <img className='w-1/3' src={logoURL} alt="" />
					<h3 className="text-lg font-semibold">{name}</h3>
                    <div
                            className={`text-orange-600 ${
                                cardDetails ? "" : "hidden"
                            } transition-all duration-300 ease-in`}
                            >
                            <p>{alliance}</p>
                            <p>{phone}</p>
                            
                            <a href={site}>{site}</a>
                            
                            </div>
				</div>
			</article>
               </div>

  )
}

export default Cards