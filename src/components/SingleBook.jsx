import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class SingleBook extends Component {
	state = {
		selected: false,
	};

	handleClick = () => {
		this.props.onSelect(this.props.book);
	};

	render() {
		const { book } = this.props;

		return (
			<Row className="text-align-start">
				<Col xs="auto">
					<Card
						className="pointer"
						onClick={this.handleClick}
						style={{
							borderColor: this.props.selected ? "green" : "transparent",
							borderWidth: this.props.selected ? "1px" : "0px",
						}}
					>
						<Card.Img
							className="img-fluid"
							variant="top"
							src={book.img}
							alt={`Copertina di ${book.title}`}
							style={{ height: "200px", objectFit: "cover" }}
						/>
						<Card.Body className="brownCard rounded-bottom border-top border-black ">
							<Card.Title className="card-title">{book.title}</Card.Title>
							<Card.Text className="card-price">
								Prezzo: <span className="badge bg-success">€{book.price}</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default SingleBook;
