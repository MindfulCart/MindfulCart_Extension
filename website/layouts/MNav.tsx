import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Alkatra&family=Edu+NSW+ACT+Foundation:wght@700&family=Libre+Baskerville:wght@700&family=Poppins:ital,wght@1,200&display=swap');
</style>;

export default function MNavbar() {
	return (
		<Navbar className="secondary-color shadow" expand="md">
			<Container fluid>
				<Navbar.Brand className="px-4 pb-2" href="#">
					<div className="libre-baskerville-font fs-2 text-white">
						<img
							src="src/assets/images/mindfulcart_logo.png"
							width="40"
							height="40"
							className="d-inline-block align-text-top me-2"
							alt="MindfulCart Logo"
						/>
						MindfulCart
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav">
					<Button
						className="d-flex d-lg-none d-md-none flex-column justify-content-around secondary-color"
						style={{ visibility: "hidden" }}
					>
						<span className="toggler-icon top-bar" />
						<span className="toggler-icon middle-bar" />
						<span className="toggler-icon bottom-bar" />
					</Button>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="navbar-nav w-100 h-20 fs-6 justify-content-center">
						<Nav.Item className="mx-5">
							<Nav.Link as={Link} to="/">
								HOME
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mx-5">
							<Nav.Link as={Link} to="/wiki">
								WIKI
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mx-5">
							<Nav.Link as={Link} to="/about">
								ABOUT
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="mx-5">
							<Nav.Link as={Link} to="/contact">
								CONTACT
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
