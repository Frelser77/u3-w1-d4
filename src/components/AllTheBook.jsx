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
		setShowSections((prevSections) => ({
			...prevSections,
			[section]: !prevSections[section],
		}));
	};

	return (
		<>
			<div className="section-toggles">
				<button className="btn brown mx-2 mt-4 mb-2" onClick={() => toggleSection("fantasy")}>
					Toggle Fantasy
				</button>

				<button className="btn brown mx-2 mt-4 mb-2" onClick={() => toggleSection("history")}>
					Toggle History
				</button>

				<button className="btn brown mx-2 mt-4 mb-2" onClick={() => toggleSection("horror")}>
					Toggle Horror
				</button>

				<button className="btn brown mx-2 mt-4 mb-2" onClick={() => toggleSection("romance")}>
					Toggle Romance
				</button>

				<button className="btn brown mx-2 mt-4 mb-2" onClick={() => toggleSection("scifi")}>
					Toggle Sci-Fi
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
