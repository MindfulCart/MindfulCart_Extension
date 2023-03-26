import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

interface Substance {}

export default function Home() {
	return (
		<div>
			<HeroSection />
		</div>
	);
}
