import React from 'react'
import Card from './Card'
function MovieList(props) {
  return (
		<div>
			{props.movieData.map((item) => {
				return (
					<Card
						key={item.id}
						className=" bg-light row d-flex align-items-center justify-content-center mb-3 ms-1 me-2 p-1"
					>
						<div className="d-flex ">
							<span className="p-2 fw-bold text-uppercase">{item.title}</span>
						</div>
						<div className="p-2 fw-light">{item.openingCrawl}</div>

						<div>
							<span className="p-2 fs-6 fw-light">{item.releaseDate}</span>
							<span className="p-2 fs-6 fw-lighter fst-italic">
								Director:{item.director}
							</span>
							<span className="p-2 fs-6 fw-lighter fst-italic">
								Producer:{item.producer}
							</span>
						</div>
					</Card>
				)
			})}
		</div>
	)
}

export default MovieList