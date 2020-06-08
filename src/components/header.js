import React from "react"
import illustration from '../imgs/undraw_code_thinking_1jeh.svg'
import Form from './contact.form'

export default ()=>(
	<header className="bg-gray-300">
		<div className="container mx-auto p-12 justify-center max-w-4xl">
			<div className="xl:flex-1 sm:flex justify-center items-center">
				<div className="flex-1 justify-center">
					<h1 className="font-bold text-blue-700 text-6xl">¡Hi! I'm Bryan</h1>
					<p className="text-xl font-light">I am Software Developer.</p>
				</div>
					<img className="inline-block visible" src={illustration} alt="Thinking code" style={{height: "300px", width: "400px"}}></img>
			</div>


			<div>
				<Form />
			</div>
		</div>
	</header>
)