import CarouselItem from "./CarouselItem";

const AutoplayCarousel = () => {
	return (
		<div className="overflow-hidden relative h-full border border-gray-300">
      <div className=" flex absolute left-0 justify-center items-center gap-16 w-full h-full animate-slide hover:animate-none">
        {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((img, i) => {
          return (
            <CarouselItem
              imgUrl={`images/providers/image-${img}.png`}
              imgTitle={`provider-${img}`}
              key={i}
            />
          );
        })}
      </div>
		</div>
	);
};
export default AutoplayCarousel;
