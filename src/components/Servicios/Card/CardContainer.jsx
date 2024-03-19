import Card from "./Card";


const cartas = [
	{
		title: "Diseño",
		body: `Llevamos tus ideas a la práctica. Construimos, remodelamos y transformamos tus ideas en necesidades en ideas y proyectos.  Analizamos, resolvemos y aplicamos.
    Tus sueños a la práctica.`,
		img: "card1.jpg",
	},
	{
		title: "Obra residencial",
		body: `Construimos tu casa o departamento desde cero. No importa el tamaño, tenemos la infraestructura, el equipo y la experiencia necesarias para poder hacer tu proyecto como lo imaginaste.`,
		img: "card2.png",
	},
	{
		title: "Obra comercial",
		body: `Revestimientos para pisos, muros y piscinas.
    Revestimiento con microcemento, estuco veneziano, porcelanato liquido, epoxi para piscinas.`,
		img: "card3.png",
	},
	{
		title: "Remodelación, ampliación y mantenimiento",
		body: `Ampliaciones, remodelaciones y servicios.
    Nos enfocamos en solucionar tus problemas.`,
		img: "card4.jpg",
	},
	{
		title: "Capacitaciones",
		body: `La mejor manera de convertirte en un aplicador profesional en paredes y suelos.
    Curso de microcemento y resina epoxi.
    Curso de porcelanato liquido.`,
		img: "card5.png",
	},
];

const CardContainer = () => {
	return (
		<div className="">
			<h2 className="text-center text-6xl font-extrabold text-gray-600 my-6">
				Excelente experiencia y calidad nos distinguen
			</h2>
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {cartas.map(({title, body, img}, i) => (<Card {...{title, body, img}} key={i}/>))}
      </div>
		</div>
	);
};
export default CardContainer;
