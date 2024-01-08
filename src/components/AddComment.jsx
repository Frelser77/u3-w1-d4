import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { AUTH_TOKEN, API_URL } from "./CommentArea";
class AddComment extends Component {
	state = {
		comment: "",
		rate: "1",
	};

	handleInputChange = (event) => {
		this.setState({ comment: event.target.value });
	};

	handleRateChange = (event) => {
		this.setState({ rate: event.target.value });
	};

	submitComment = async (event) => {
		event.preventDefault();
		const asin = this.props.book.asin;

		const commentData = {
			comment: this.state.comment,
			rate: this.state.rate,
			elementId: asin,
		};

		try {
			const response = await fetch(`${API_URL}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: AUTH_TOKEN,
				},
				body: JSON.stringify(commentData),
			});

			if (!response.ok) {
				const errorData = await response.text();
				throw new Error(`Failed to submit comment: ${response.status} ${errorData}`);
			}

			this.setState({ comment: "", rate: "1" });
			this.props.onCommentAdded();
		} catch (error) {
			console.error("Error submitting comment:", error);
		}
	};

	render() {
		return (
			<Form onSubmit={this.submitComment}>
				<Form.Group>
					<Form.Label htmlFor="textarea" className=" fw-bold my-2">
						Comment
					</Form.Label>
					<Form.Control
						id="textarea"
						as="textarea"
						rows={3}
						value={this.state.comment}
						onChange={this.handleInputChange}
						required
						placeholder="Write a comment"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="rateSelect" className=" fw-bold my-2">
						Rate
					</Form.Label>
					<Form.Control
						id="rateSelect"
						as="select"
						style={{ color: this.state.rate > 2 ? "green" : "red" }}
						className="fw-bold"
						value={this.state.rate}
						onChange={this.handleRateChange}
						required
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</Form.Control>
				</Form.Group>
				<Button className="brown mt-3 mb-2" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default AddComment;
