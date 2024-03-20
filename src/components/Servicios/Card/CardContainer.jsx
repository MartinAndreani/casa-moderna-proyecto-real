import Card from "./Card";
import info from "../utils/infoCards.js"

const CardContainer = () => {
	return (
		<div className="">
			<h2 className="text-center text-6xl font-extrabold text-gray-500 my-6">
				Excelente experiencia y calidad nos distinguen
			</h2>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {info.map(({title, body, img}, i) => (<Card {...{title, body, img}} key={i}/>))}
      </div>
		</div>
	);
};
export default CardContainer;
