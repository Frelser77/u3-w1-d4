import React, { useState } from "react";

import BooksFantasy from "./FantasyBooks";
import BooksHistory from "./HistoyBooks";
import BooksHorror from "./HorrorBooks";
import BooksRomance from "./RomanceBooks";
import BooksScifi from "./ScifiBooks";

function AllBooks() {
	const [showSections, setShowSections] = useState({
		fantasy: false,
		history: false,
		horror: false,
		romance: false,
		scifi: false,
	});

	const toggleSection = (section) => {
		setShowSections({
			fantasy: false,
			history: false,
			horror: false,
			romance: false,
			scifi: false,
			[section]: true,
		});
	};

	return (
		<>
			<div className="section-toggles">
				<button className="btn my-btn mx-3 mt-4 mb-2" onClick={() => toggleSection("fantasy")}>
					Fantasy
				</button>

				<button className="btn my-btn mx-3 mt-4 mb-2" onClick={() => toggleSection("history")}>
					History
				</button>

				<button className="btn my-btn mx-3 mt-4 mb-2" onClick={() => toggleSection("horror")}>
					Horror
				</button>

				<button className="btn my-btn mx-3 mt-4 mb-2" onClick={() => toggleSection("romance")}>
					Romance
				</button>

				<button className="btn my-btn mx-3 mt-4 mb-2" onClick={() => toggleSection("scifi")}>
					Sci-Fi
				</button>
			</div>

			{showSections.fantasy && <BooksFantasy />}
			{showSections.history && <BooksHistory />}
			{showSections.horror && <BooksHorror />}
			{showSections.romance && <BooksRomance />}
			{showSections.scifi && <BooksScifi />}
		</>
	);
}

export default AllBooks;
