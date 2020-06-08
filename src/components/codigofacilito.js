import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Posts from './posts'
import Certificate from './certificate'
import Course from './course'

export default () => {
	const data = useStaticQuery(graphql`{
		codigofacilitoJson{
	    id
	    data{
	      email
	      username
	      certificates{
	        title
	        score
	        code
	      }
	      courses{
	      	title
	      	progress
	      	url
	      }
	    }
	  }
	}`)

	console.log(data)
	return(
		<section>
			<div className="mt-24">
				<div className="max-w-4xl mx-auto">
					<Posts
						data={data.codigofacilitoJson.data.certificates}
						card={Certificate}
						title="My certificates online"/>

						<div className="max-w-4xl mx-auto overflow-x-scroll">
							<Posts
								data={data.codigofacilitoJson.data.courses}
								card={Course}
								title="My courses online"/>
						</div>

				</div>
			</div>
		</section>
	)
}