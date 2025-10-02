import "./App.css";
import { useState } from "react";
import vInside from "./assets/vInside.png";
import vInsideBlank from "./assets/vInsideBlank.png";
import vCover from "./assets/vCover.png";
import vBack from "./assets/vBack.png";
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
			<p>Perspective: {perspective}</p>
			<button onClick={nextPerspective}>Next</button>
			<br></br>

			<div
				className={`card perspective${perspective} ${
					isTransitioningFrom2to0 ? "from-perspective2" : ""
				}`}>
				<img src={vCover} className="front" />
				<img src={vInsideBlank} className="back" />
			</div>
			<div
				className={`backCard card perspective${perspective} ${
					isTransitioningFrom2to0 ? "from-perspective2" : ""
				}`}>
				<img src={vInside} className="front" />
				<img src={vBack} className="back" />
			</div>
		</div>
	);
}

export default App;
