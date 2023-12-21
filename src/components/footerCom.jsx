import React from "react";

function MyFooter() {
	return (
		<footer className="bg-light text-center text-lg-start">
			<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				&copy; {new Date().getFullYear()} - Il tuo Sito Web
				<div> Tutti i diritti riservati.</div>
			</div>
		</footer>
	);
}

export default MyFooter;
