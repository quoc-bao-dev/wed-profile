import { Carousel } from '@mantine/carousel';

// export const heroSlideSignal = signify<{ data: { image: string }[] }>({
//     data: [],
// });
const Slide = ({ image }: { image: string }) => {
    return (
        <Carousel.Slide>
            <div className="w-full h-screen">
                <img className="w-full h-full object-cover" src={image} />
            </div>
        </Carousel.Slide>
    );
};
const HeroSlider = () => {
    return (
        <div className="w-full h-full">
            {/* <heroSlideSignal.Wrap>
                {({ data }) => {
                    return (
                        <Carousel>
                            {data.map((item) => (
                                <Slide {...item}></Slide>
                            ))}
                        </Carousel>
                    );
                }}
            </heroSlideSignal.Wrap> */}
        </div>
    );
};

export default HeroSlider;
