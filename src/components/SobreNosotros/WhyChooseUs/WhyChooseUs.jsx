const WhyChooseUs = () => {
  const data = [
    {
      imagen: "vector-hp.svg",
      title: "Atención eficaz",
      body: "Te ofrecemos un servicio al cliente eficaz y personalizado, brindando soluciones adaptadas a tus necesidades específicas."
    },
    {
      imagen: "vector-hands.svg",
      title: "Compromiso y respeto",
      body: "Nos comprometemos a tratarte con respeto y profesionalismo en todas las etapas del proyecto, priorizando tu satisfacción."
    },
    {
      imagen: "vector-worker.svg",
      title: "Amplio conocimiento",
      body: "Contamos con un sólido conocimiento en materiales y procesos de construcción, lo que nos permite ofrecerte asesoramiento experto y soluciones de calidad."
    },
    {
      imagen: "vector-money.svg",
      title: "Precios competitivos",
      body: "Nuestros precios son competitivos en el mercado, sin comprometer la calidad."
    },
  ];

  return (
    <div className="flex flex-col my-12">
      <p className="text-center text-gray-500 text-xl">¿Por qué elegirnos?</p>
      <h2 className="text-center text-[3.55rem] font-bold text-gray-600 mt-4 mb-12 w-[53rem] leading-[4.4rem] mx-auto">Construyendo sueños, superando expectativas</h2>
      <div className="flex flex-row justify-evenly">
        {data.map((doc, i) => {
          return (
            <div key={i} className="max-w-[19rem]">
              <img src={`images/sobre-nosotros/${doc.imagen}`} alt={doc.title} className="m-auto mb-8"/>
              <h5 className="text-gray-600 text-center font-semibold text-[1.75rem] leading-8">{doc.title}</h5>
              <p className="text-gray-700 text-[1.25rem] leading-[1.5rem] text-center mt-4 w-64">{doc.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default WhyChooseUs

