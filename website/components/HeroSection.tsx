import React, { useState } from "react";
import data from "../../data/chemicals.json" assert { type: "JSON" };
import WikiTerm from "../components/WikiTerm";
import Container from "react-bootstrap/Container";

interface Props {
	name: string;
	description: string;
	link: string;
}

export default function HeroSection() {
	const [inputValue, setInputValue] = useState("");
	const [searchResult, setSearchResult] = useState("");
	const [searchResultStart, setSearchResultStart] = useState("");
	const [searchResultMid, setSearchResultMid] = useState("");
	const [searchNoResult, setSearchNoResult] = useState("");

	//called whenever there is a change in the input field
	//takes an event object as an argument and updates the state of inputValue with the value of input field
	const handleInputChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setInputValue(e.target.value);
	};

	const handleSearchClick = () => {
		console.log(inputValue); // fetch data from the input value here

		let result = "";
		let startResult = "";
		let midResult = "";
		let noResult = "";
		let inputArray = inputValue.split(",");
		let count = 0;
		let harmfulFound = false;

		if (inputValue === "") {
			result = "Please Enter an Ingredients Label to Search.";
		} else {
			const harmfulIngredientsList: string[] = [];
			for (let i = 0; i < inputArray.length; i++) {
				let input = inputArray[i].trim().toUpperCase();
				let found = false;

				for (let j = 0; j < data.chemicals.length; j++) {
					if (input === data.chemicals[j].name.toUpperCase()) {
						startResult += ` Searching Ingredients: <span style="background-color: red">${inputValue}</span>.`;
						result += ` <span style="text-decoration: underline red">${input}</span> is a harmful ingredient.`;
						found = true;
						harmfulFound = true;
						count++;
						break;
					}
				}

				if (count === inputArray.length) {
					break;
				}

				if (found === false && i === inputArray.length - 1 && count === 0) {
					noResult = "No harmful ingredients found.";
				} else if (found === false && i === inputArray.length - 1) {
					midResult = "Identified Harmful Ingredients:";
				}
			}
		}

		setSearchResultStart(`${startResult}`);
		setSearchResultMid(`${midResult}`);
		setSearchResult(`${result}`);
		setSearchNoResult(`${noResult}`);
	};

	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<Container fluid>
						<div className="row">
							<div className="col-md-12 intro-text mx-auto">
								<h1 className="text-center green-color mb-4">
									Empower your health
									<br />
									Save the Environment
									<span />
								</h1>
								<p className="text-center navy-color">
									Experience a Revolutionary Way of Shopping: Access Critical
									Health Information and Environmentally-Friendly Products at
									Your Fingertips!
								</p>
								<div className="form-group mb-4">
									<input
										type="text"
										className="form-control"
										placeholder="Enter Ingredients"
										value={inputValue}
										onChange={handleInputChange}
									/>
								</div>
								<button
									className="btn btn-custom btn-lg page-scroll mb-5"
									onClick={handleSearchClick}
								>
									Search
								</button>
								<div className="">
									{searchResultStart && (
										<p
											// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
											dangerouslySetInnerHTML={{ __html: searchResultStart }}
										/>
									)}
								</div>
								<div className="">
									{searchResultMid && <p>{searchResultMid}</p>}
								</div>
								<div className="">
									{searchResult && (
										// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
										<p dangerouslySetInnerHTML={{ __html: searchResult }} />
									)}
								</div>

								<div className="">
									{searchNoResult && <p>{searchNoResult}</p>}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</header>
	);
}
