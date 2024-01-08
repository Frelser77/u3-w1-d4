import React, { Component } from "react";
import { Container, Row, Form, FormControl, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import booksFantasyData from "../data/fantasy.json";
import booksHistoryData from "../data/history.json";
import booksHorrorData from "../data/horror.json";
import booksRomanceData from "../data/romance.json";
import booksScifiData from "../data/scifi.json";
import CommentArea from "./CommentArea";

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
		selectedBook: null,
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

	selectBook = (book) => {
		this.setState({ selectedBook: book });
	};

	render() {
		const { displayedBooks, searchTerm, selectedBook } = this.state;

		return (
			<Container>
				<Row>
					<Col md={8}>
						<h2 className="fs-1">Best Seller</h2>
						<Form className="my-4" onSubmit={(event) => event.preventDefault()}>
							<FormControl
								id="searchBook"
								name="searchTerm"
								type="text"
								placeholder="Enter book title"
								value={searchTerm}
								onChange={(event) => this.handleChange(event)}
								className="py-3"
							/>
						</Form>
						<Row xs={1} md={2} lg={3} className="gap-4 ms-2">
							{displayedBooks.map((book) => (
								<SingleBook
									key={book.asin + book.category}
									book={book}
									onSelect={this.selectBook}
									selected={selectedBook && book.asin === selectedBook.asin}
								/>
							))}
						</Row>
					</Col>
					<Col md={4} className="my-auto">
						{selectedBook ? <CommentArea book={selectedBook} /> : <div>Seleziona un libro per vedere i commenti.</div>}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default BookList;
