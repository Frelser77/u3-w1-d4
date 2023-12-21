import React, { Component } from "react";
import { Button, Col, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

export const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
export const AUTH_TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0MzQ5MWI1MjViYjAwMThlZDA3YzYiLCJpYXQiOjE3MDMxNjMwMjUsImV4cCI6MTcwNDM3MjYyNX0.8KYXVgiLWa2UamVdQ5gn1yJwvQ-IV14bxgNO-5wl5vc";

class CommentArea extends Component {
	state = {
		comments: [],
		isLoading: false,
		error: null,
	};

	componentDidMount() {
		this.fetchComments();
	}

	fetchComments = async () => {
		this.setState({ isLoading: true, error: null });
		try {
			const response = await fetch(`${API_URL}${this.props.book.asin}`, {
				headers: {
					Authorization: AUTH_TOKEN,
				},
			});
			if (!response.ok) {
				throw new Error("Failed to fetch comments");
			}
			const comments = await response.json();
			this.setState({ comments });
		} catch (error) {
			this.setState({ error: error.message });
		} finally {
			this.setState({ isLoading: false });
		}
	};

	handleCommentAdded = () => {
		this.fetchComments();
	};

	deleteComment = async (commentId) => {
		try {
			const response = await fetch(`${API_URL}/${commentId}`, {
				method: "DELETE",
				headers: {
					Authorization: AUTH_TOKEN,
				},
			});

			if (!response.ok) {
				throw new Error("Failed to delete comment");
			}

			this.fetchComments();
		} catch (error) {
			console.error("Error deleting comment:", error);
		}
	};
	render() {
		const { comments, isLoading, error } = this.state;
		if (isLoading) {
			return <Loading />;
		}
		if (error) {
			return <Error message={error} />;
		}
		return (
			<Col variant="auto">
				<CommentsList comments={comments} onDelete={this.deleteComment} className="comment-section" />
				<AddComment book={this.props.book} onCommentAdded={this.fetchComments} />
			</Col>
		);
	}
}

const CommentsList = ({ comments, onDelete }) => (
	<ListGroup>
		<h5>Commenti</h5>
		{comments.map((comment) => (
			<ListGroup.Item
				className="d-flex justify-content-between align-items-start"
				key={comment.elementId + comment.comment + comment.rate}
			>
				<div className="ms-2 me-auto">
					<div className="fw-bold">{comment.comment}</div>
				</div>
				<Button variant="outline-danger" size="sm" onClick={() => onDelete(comment._id)}>
					Delete
				</Button>
			</ListGroup.Item>
		))}
	</ListGroup>
);

export default CommentArea;
