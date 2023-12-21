import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ message }) => {
	return (
		<Alert variant="danger" className="text-center">
			Si è verificato un errore: {message}
		</Alert>
	);
};

export default Error;
