import React from 'react'
import twitter from '../imgs/twitter.svg'
import instagram from '../imgs/instagram.svg'
import linkedin from '../imgs/linkedin.svg'
import github from '../imgs/github.svg'

export default ()=>(
	<footer className="bg-gray-300 border-t border-blue-200 p-4 mt-20">
			<div className="flex-1 justify-center items-center">
				<div class="w-full text-center  flex mb-4">
				  <div class="flex-1 h-12"></div>
				  <div class="w-4 flex-1 h-12">
				  	<a href="https://twitter.com/R4nbry" target="_blank" rel="noopener noreferrer"><img className="mt-5 visible h-10" src={twitter} alt="twitter"></img></a>
				  </div>
				  <div class="w-4 flex-1 h-12">
				  	<a href="https://www.instagram.com/r4nbry/" target="_blank" rel="noopener noreferrer"><img className="mt-5 visible h-10" src={instagram} alt="instagram"></img></a>
				  </div>
				  <div class="w-4 flex-1 h-12">
				  	<a href="https://www.linkedin.com/in/ranbry/" target="_blank" rel="noopener noreferrer"><img className="mt-5 visible h-10" src={linkedin} alt="linkedin"></img></a>
				  </div>
				  <div class="w-4 flex-1 h-12">
				  	<a href="https://github.com/Randybry97z" target="_blank" rel="noopener noreferrer"><img className="mt-5 visible h-10" src={github} alt="github"></img></a>
				  </div>
				</div>
			</div>
	</footer>
)