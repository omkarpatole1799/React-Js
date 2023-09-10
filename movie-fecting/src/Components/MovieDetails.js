import React, { useState, useEffect, useCallback } from "react"
import Card from "./Card"
import Button from "./Button"
import MovieList from "./MovieList"
function MovieDetails() {
	const [movieData, setMovieData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchMoviesHandler = useCallback(async function () {
		console.log("start fetch")
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(
				`https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`
			)
			if (!response.ok) {
				throw new Error("Failed to get request")
			}
			const data = await response.json()
			const moviesData = await data.movies.map((movie) => {
				return {
					id: movie.episode_id,
					title: movie.title,
					openingCrawl: movie.opening_crawl,
					releaseDate: movie.release_date,
					producer: movie.producer,
					director: movie.director,
				}
			})
			setMovieData(moviesData)
		} catch (error) {
			setError(error.message)
		}
		setIsLoading(false)
		console.log("end fetch")
	}, [])

	useEffect(() => {
		fetchMoviesHandler()
	}, [fetchMoviesHandler])

	// className="container bg-dark p-2 mt-3 d-flex align-items-center justify-content-center"
	return (
		<>
			<Card className="p-2 flex items-center justify-center">
				<Button onClick={fetchMoviesHandler} className="p-2">
					Fetch Movie
				</Button>
			</Card>
			<Card className="container p-3 mt-3 ">
				{isLoading && <p className="fw-bold fst-italic fs-6">Loading...</p>}
				{!isLoading && movieData.length === 0 && !error && (
					<p className="fw-bold fst-italic fs-6">
						Click Button To Fetch Movies
					</p>
				)}
				{!isLoading && <MovieList movieData={movieData} />}
				{!isLoading && error && (
					<p className="fw-bold fst-italic fs-6">{error}</p>
				)}
			</Card>
		</>
	)
}

export default MovieDetails
