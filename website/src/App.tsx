import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Wiki, { wikiLoader } from "./pages/Wiki";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Styles
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/base.css";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/mindfulcart" element={<RootLayout />}>
			<Route path="/mindfulcart" element={<Home />} />
			<Route path="/mindfulcart/wiki" element={<Wiki />} loader={wikiLoader} />
			<Route path="/mindfulcart/about" element={<About />} />
			<Route path="/mindfulcart/contact" element={<Contact />} />
			<Route path="*" element={<Error404 />} />,
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
