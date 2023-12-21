import React from "react";

import BooksFantasy from "./FantasyBooks";
import BooksHistory from "./HistoyBooks";
import BooksHorror from "./HorrorBooks";
import BooksRomance from "./RomanceBooks";
import BooksScifi from "./ScifiBooks";

function AllBooks() {
	return (
		<>
			<BooksFantasy />
			<BooksHistory />
			<BooksHorror />
			<BooksRomance />
			<BooksScifi />
		</>
	);
}

export default AllBooks;
