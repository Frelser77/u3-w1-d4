import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertClose() {
	const [show, setShow] = useState(true);

	return (
		<>
			<Alert show={show} variant="success" className="mt-2">
				<Alert.Heading>Welcome in our shop</Alert.Heading>
				<p>Buy more books for more points and rewords!</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button onClick={() => setShow(false)} variant="outline-success">
						Close me
					</Button>
				</div>
			</Alert>

			{!show && (
				<Button onClick={() => setShow(true)} variant="outline-danger" className="my-2">
					Show Alert
				</Button>
			)}
		</>
	);
}

export default AlertClose;
