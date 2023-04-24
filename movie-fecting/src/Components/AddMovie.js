import React from "react"

const AddMovie = (props) => {
	return (
		<>
			<form className="border rounded-xl px-4 py-3 flex flex-col sm:grid sm:grid-cols-2 font-medium">
				<div className="py-1 flex justify-between items-center sm:mx-3 ">
					<label className="text-xs sm:text-sm" htmlFor="movieName">
						Movie Name
					</label>
					<input
						className="border-2 rounded-xl md:w-60 lg:w-96 px-2"
						type="text"
					/>
				</div>
				<div className="py-1 flex justify-between items-center sm:mx-3 lg:px-0.5">
					<label className="text-xs sm:text-sm" htmlFor="opening-crawl">
						Opening Crawl
					</label>
					<input
						className="border-2 rounded-xl md:w-60 lg:w-96  px-2"
						type="text"
					/>
				</div>
				<div className="py-1 flex justify-between items-center sm:mx-3">
					<label className="text-xs sm:text-sm" htmlFor="release-date">
						Release Date
					</label>
					<input
						className="border-2 rounded-xl md:w-60 lg:w-96  px-2"
						type="text"
					/>
				</div>

				<div className="py-1 flex justify-between items-center sm:mx-3">
					<label className="text-xs sm:text-sm" htmlFor="director">
						Director
					</label>
					<input
						className="border-2 rounded-xl md:w-60 lg:w-96  px-2"
						type="text"
					/>
				</div>
				<div className="py-2 flex justify-between items-center sm:mx-3">
					<label className="text-xs sm:text-sm" htmlFor="producer">
						Producer
					</label>
					<input
						className="border-2 rounded-xl md:w-60 lg:w-96  px-2"
						type="text"
					/>
				</div>
				<div className="grid sm:w-60 sm:flex sm:flex-end sm:items-center sm:justify-end">
					<button className="rounded-xl sm:px-3 bg-blue-500 curser-pointer text-white">
						Add
					</button>
				</div>
			</form>
		</>
	)
}
export default AddMovie
