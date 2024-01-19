import Image from "next/image";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
	const Rooms = [
		{ id: 1, name: "General" },
		{ id: 2, name: "Design" },
		{ id: 3, name: "Development" },
		{ id: 4, name: "Hoge" },
	];

	return (
		<>
			<Header />
			<SideBar rooms={Rooms} />
		</>
	);
}
