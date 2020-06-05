import React from "react"
import illustration from '../imgs/undraw_code_thinking_1jeh.svg'
import Form from './contact.form'

export default ()=>(
	<header className="bg-gray-300">
		<div className="container mx-auto p-12 max-w-4xl ">
			<div className="flex justify-center items-center">
				<div className="flex-1">
					<h1 className="font-bold text-blue-700 text-6xl">¡Hola! Soy Bryan</h1>
					<p className="text-xl font-light">Soy desarrollador de Software.</p>
				</div>
					<img className="invisible xl:visible" src={illustration} alt="Thinking code" style={{height: "300px", width: "400px"}}></img>
			</div>


			<div>
				<Form />
			</div>
		</div>
	</header>
)