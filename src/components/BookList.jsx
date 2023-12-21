import React, { Component } from "react";
import { Container, Row, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import booksFantasyData from "../data/fantasy.json";
import booksHistoryData from "../data/history.json";
import booksHorrorData from "../data/horror.json";
import booksRomanceData from "../data/romance.json";
import booksScifiData from "../data/scifi.json";

class BookList extends Component {
	state = {
		allBooks: [...booksFantasyData, ...booksHistoryData, ...booksHorrorData, ...booksRomanceData, ...booksScifiData],
		displayedBooks: [
			booksFantasyData[0],
			booksHistoryData[0],
			booksHorrorData[0],
			booksRomanceData[0],
			booksScifiData[0],
		],
		searchTerm: "",
	};

	handleChange = (event) => {
		const searchTerm = event.target.value.toLowerCase();
		this.setState({ searchTerm: searchTerm });

		if (searchTerm) {
			const filteredBooks = this.state.allBooks.filter((book) => book.title.toLowerCase().includes(searchTerm));
			this.setState({ displayedBooks: filteredBooks });
		} else {
			this.setState({
				displayedBooks: [
					booksFantasyData[0],
					booksHistoryData[0],
					booksHorrorData[0],
					booksRomanceData[0],
					booksScifiData[0],
				],
			});
		}
	};

	render() {
		const { displayedBooks, searchTerm } = this.state;

		return (
			<Container>
				<h2 className="mb-3">Best Seller</h2>
				<Form className="my-3" onSubmit={(event) => event.preventDefault()}>
					<FormControl
						id="searchBook"
						name="searchTerm"
						type="text"
						placeholder="Enter book title"
						value={searchTerm}
						onChange={(event) => this.handleChange(event)}
					/>
				</Form>
				<Row xs={1} md={2} lg={5} className="g-4 my-4">
					{displayedBooks.map((book) => (
						<SingleBook key={book.asin + book.category} book={book} />
					))}
				</Row>
			</Container>
		);
	}
}

export default BookList;
