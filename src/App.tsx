import "./App.css";
import { useState } from "react";
import vInside from "./assets/vInside.png";
import vInsideBlank from "./assets/vInsideBlank.png";
import vCover from "./assets/vCover.png";
import vBack from "./assets/vBack.png";

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
		<div>
			<p>Perspective: {perspective}</p>
			<button style={{ marginBottom: "20px" }} onClick={nextPerspective}>
				Next
			</button>
			<div className="container">
				<div
					className={`frontCard card perspective${perspective} ${
						isTransitioningFrom2to0 ? "from-perspective2" : ""
					}`}>
					<div className="front" style={{ backgroundColor: "teal" }}>
						Cover
					</div>
					<div className="back" style={{ backgroundColor: "white" }}>
						Left Inside
					</div>
					{/* <img src={vCover} className="front" /> */}
					{/* <img src={vInsideBlank} className="back" /> */}
				</div>
				<div
					className={`backCard card perspective${perspective} ${
						isTransitioningFrom2to0 ? "from-perspective2" : ""
					}`}>
					<div className="front" style={{ backgroundColor: "tomato" }}>
						Right Inside
					</div>
					<div className="back" style={{ backgroundColor: "black" }}>
						Back
					</div>
					{/* <img src={vInside} className="front" /> */}
					{/* <img src={vBack} className="back" /> */}
				</div>
			</div>
		</div>
	);
}

export default App;
