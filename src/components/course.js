import React from 'react'

export default (props)=>{
	const course = props.element
	return (
		<div className="shadow p-8 bg-white mr-4 rounded">
			<h4 className="font bold">
				<a href={course.url} target="_blank" rel="noopener noreferrer" className="truncate">{course.title}</a></h4>
			<div className="text-center">
				<span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">Progress: {course.progress}</span>
			</div>
		</div>
	)
}
