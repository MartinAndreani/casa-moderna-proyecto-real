import Card from "./Card";
import info from "../utils/infoCards.js"

const CardContainer = () => {
	return (
		<div>
			<h2 className="text-center text-[3.4rem] font-extrabold text-gray-600 my-5">
				Excelente experiencia y calidad nos distinguen
			</h2>
      <div className="flex flex-row justify-center flex-wrap gap-4 mt-10">
        {info.map(({title, body, img}, i) => (<Card {...{title, body, img}} key={i}/>))}
      </div>
		</div>
	);
};
export default CardContainer;
