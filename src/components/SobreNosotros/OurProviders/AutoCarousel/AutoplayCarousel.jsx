import CarouselItem from "./CarouselItem";

const AutoplayCarousel = () => {
	return (
		<div id="logos" className="w-full inline-flex flex-nowrap overflow-hidden">
			<ul className="-z-10 flex items-center justify-center md:justify-start [&_li]:-mx-1 [&_img]:max-w-none animate-infinite-scroll gap-36 my-5">
				{[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((img, i) => {
					return (
						<CarouselItem
							imgUrl={`images/providers/image-${img}.png`}
							imgTitle={`provider-${img}`}
							key={i}
						/>
					);
				})}
				</ul>
			<ul className="-z-10 flex items-center justify-center md:justify-start [&_li]:-mx-2 [&_img]:max-w-none animate-infinite-scroll gap-36" aria-hidden="false">
				{[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((img, i) => {
					return (
						<CarouselItem
							imgUrl={`images/providers/image-${img}.png`}
							imgTitle={`provider-${img}`}
							key={i}
						/>
					);
				})}
				</ul>
		</div>
	);
};

export default AutoplayCarousel;
