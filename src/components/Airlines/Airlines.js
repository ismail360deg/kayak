import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './Airlines.css';

const Airlines = () => {
    const [state, setState] = useState([]);
    const [airlines, setAirlines] = useState("");
    const [filterData, setFilterData] = useState([...state]);

    useEffect(() => {
        fetch("air.json")
          .then((res) => res.json())
          .then((data) => {
            setState(data);
            setFilterData(data)
            // console.log(data);
          });
      }, []);

      const cardFilter = (e) => {
        let value = e.target.value;
        let checked = e.target.checked
        if (checked){
            setAirlines(value)
        } else {
            setAirlines("")
        }
      };

      useEffect(() => {
        if (airlines) {
            setFilterData(state.filter((item) => item.alliance === airlines))
        } else {
            setFilterData([...state])
        }
      },[airlines])

  return (
    <div>
        <section className='container p-4 mx-auto'>
            <h3 className='air'>Airlines</h3>
            <h5 className='filter'>Filter by Alliances</h5>

            <div class="flex items-center mt-10">
          
            <input 
            type={"checkbox"} value={"OW"} onChange={cardFilter}
            className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600" />
           <label for="remember-me" className="ml-2 block text-sm text-gray-900">One world</label>

          <input type={"checkbox"} value={"ST"} onChange={cardFilter}
           className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 ml-8" />
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Sky Team</label>

          <input type={"checkbox"} value={"SA"} onChange={cardFilter}
          className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 ml-8" />
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Star Allience</label>
        </div>
        </section>

 {/* ==============================Airlinces Card Start===========================  */}

        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800 mt-10">
	<div className="container p-6 mx-auto space-y-8">
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

        {
        filterData.map(({ name, phone, site, logoURL, code, alliance }) => (
          <Cards
            key={code}
            name={name}
            phone={phone}
            site={site}
            logoURL={`https://www.kayak.com/${logoURL}`}
            code={code}
            alliance={alliance}
          />
        ))}
{/* 
       {
        filteredState.map(item => (
            
                <article className="flex flex-col bg-gray-50" key={item}>
				<div className="flex flex-col flex-1 p-6">
                    <img src={`https://www.kayak.com/${logoURL}`} alt="" />
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{item.name}</h3>
                    <h4>{item.alliance}</h4>
				</div>
			</article>

          
        ))
       } */}

		</div>
	</div>
</section>

 {/* ==============================Airlinces Card End===========================  */}


    </div>
  )
}

export default Airlines