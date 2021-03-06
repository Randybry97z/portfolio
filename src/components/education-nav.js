import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default (props) =>{
	const data = useStaticQuery(graphql`
		{
		 	allEducationJson {
		    edges {
		      node {
		        slug
		        title
		        description
		      }
		    }
		  }
		}
	`)

	return(
		<div className="max-w-4xl mx-auto mt-20 overflow-x-scroll ">
			<header className="items-center">
				<h2 className="text-3xl font-bold text-center">Know more about my training</h2>
				<p class="font-bold text-center text-red-600">If the section doesn't load, try reloading</p>
			</header>
			<nav className="flex justify-center mt-8">
			{
				data.allEducationJson.edges.map((element,index)=>{
					const { node } = element
					return(
						<article className="flex-1 bg-white shadow m-4 p-4 max-w-4xl mx-auto shadow bg-white rounded">
							<header>
								<p className="font-bold leading-loose">{node.title}</p>
								<div className="mt-8">
									<p className="font-light">{ node.description }</p>
										<a href={node.slug} className="btn inline-block mt-4">Go</a>
								</div>
							</header>
						</article>
					)
				})
			}
			</nav>
		</div>
	)

}