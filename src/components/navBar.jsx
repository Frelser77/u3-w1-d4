import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function navBar() {
	return (
		<Navbar expand="lg" variant="black" className="brown">
			<Container>
				<Navbar.Brand href="index.html">
					<img src="assets/imgs/logo3.png" alt="logo" style={{ width: "120px", height: "75px" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto fw-bold">
						<Nav.Link href="#">Home</Nav.Link>
						<Nav.Link href="#">About</Nav.Link>
						<Nav.Link href="#">Broswe</Nav.Link>
						<NavDropdown title="Section" id="basic-nav-dropdown">
							<NavDropdown.Item href="#Fantasy">Fantasy</NavDropdown.Item>
							<NavDropdown.Item href="#History">History</NavDropdown.Item>
							<NavDropdown.Item href="#Horror">Horror</NavDropdown.Item>
							<NavDropdown.Item href="#Romance">Romance</NavDropdown.Item>
							<NavDropdown.Item href="#Scifi">Scifi</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Your Profile</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default navBar;
