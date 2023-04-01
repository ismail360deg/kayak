import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="p-4 bg-gray-100 text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		< a to="" aria-label="Back to homepage" className="flex items-center p-2">
			<h3 className='logo'>KAYAK</h3>
		</ a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				< a  to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-[#FF690F] border-[#FF690F]">Home</ a>
			</li>
			<li className="flex">
				< a  to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</ a>
			</li>
			<li className="flex">
				< a  to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact us</ a>
			</li>
			<li className="flex">
				< a  to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</ a>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded text-gray-50 bg-[#FF690F]">Sign in</button>
			<button className="self-center px-8 py-3 ml-5 font-semibold rounded text-gray-50 bg-[#FF690F]">Sign up</button>
		</div>
		
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  )
}

export default Navbar