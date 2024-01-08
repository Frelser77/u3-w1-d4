import React, { Component } from "react";
import { Button, Col, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

export const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
export const AUTH_TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzJjMjBkOGEyMDAwMThhNDhhMmQiLCJpYXQiOjE3MDQ3MjA0ODQsImV4cCI6MTcwNTkzMDA4NH0.Vvao4K4ecGDgp8dk7wmXHHxGN9tXVrYOBz6hJqopsfc";

class CommentArea extends Component {
	state = {
		comments: [],
		isLoading: false,
		error: null,
	};

	componentDidUpdate(prevProps) {
		if (prevProps.book && this.props.book && prevProps.book.asin !== this.props.book.asin) {
			this.fetchComments();
		}
	}

	fetchComments = async () => {
		if (!this.props.book) {
			return;
		}
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

	componentDidMount() {
		if (this.props.book) {
			this.fetchComments();
		}
	}

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
			<Col>
				<CommentsList comments={comments} onDelete={this.deleteComment} className="comment-section" />
				<AddComment book={this.props.book} onCommentAdded={this.fetchComments} />
			</Col>
		);
	}
}

const CommentsList = ({ comments, onDelete }) => (
	<ListGroup className="gap-1">
		<h5 className="fw-bold text-center my-2">Comments</h5>
		{comments.map((comment) => (
			<ListGroup.Item
				className="d-flex flex-column align-items-center justify-content-center rounded gap-2"
				key={comment.elementId + comment.comment + comment.rate}
			>
				<div className="fw-bold text-center">{comment.comment}</div>
				<div className="fw-bold text-center">
					{comment.rate >= 3 ? "⭐" : "✰"}
					{comment.rate}
				</div>
				<Button variant="outline-danger" size="sm" onClick={() => onDelete(comment._id)}>
					Delete
				</Button>
			</ListGroup.Item>
		))}
	</ListGroup>
);

export default CommentArea;
