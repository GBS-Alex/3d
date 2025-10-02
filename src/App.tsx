import "./App.css";
import { useState } from "react";
// import vInside from "./assets/vInside.png";
// import vCover from "./assets/vCover.png";
// import vBack from "./assets/vBack.png";
// import hInside from "./assets/hInside.png";
// import hCover from "./assets/hCover.png";
// import hBack from "./assets/hBack.png";

function App() {
	const [perspective, setPerspective] = useState<number>(0);
	const [previousPerspective, setPreviousPerspective] = useState<number>(0);

	function nextPerspective() {
		setPerspective((prevState) => {
			setPreviousPerspective(prevState);

			return prevState === 2 ? 0 : prevState + 1;
		});
	}

	const isTransitioningFrom2to0 = previousPerspective === 2 && perspective === 0;

	return (
		<div className="container">
			{/* <div className="container"> */}
			<p>Perspective: {perspective}</p>
			<button onClick={nextPerspective}>Next</button>
			<br></br>

			<div
				className={`card perspective${perspective} ${
					isTransitioningFrom2to0 ? "from-perspective2" : ""
				}`}>
				<div style={{ backgroundColor: "steelblue" }} className="front">
					Cover
				</div>
				<div style={{ backgroundColor: "green" }} className="back">
					Left Inside
				</div>
			</div>
			<div
				className={`backCard card perspective${perspective} ${
					isTransitioningFrom2to0 ? "from-perspective2" : ""
				}`}>
				<div style={{ backgroundColor: "tomato" }} className="front">
					Right Inside
				</div>
				<div style={{ backgroundColor: "goldenrod" }} className="back">
					Back
				</div>
			</div>
		</div>
	);
}

export default App;
