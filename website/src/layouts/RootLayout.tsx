import MNav from "../layouts/MNav";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="root-layout">
			<MNav />
			<main>
				<div className="container mb-5">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
