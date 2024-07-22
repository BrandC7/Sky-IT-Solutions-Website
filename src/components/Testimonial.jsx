import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { bannerMain, star } from "../assets";
import { testimonials } from "../constants";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
};

const Testimonial = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        height: "auto",
        backgroundImage: `url(${bannerMain})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full mx-auto z-0 sm:py-22 py-8 px-4 lg:px-[4rem] saturate-150 sepia-[30%]"
    >
      <div className="relative max-w-screen-xl w-full mx-auto bg-white z-30 m-[6rem] rounded-2xl shadow-xl px-4 py-6 mx-auto text-center lg:py-[4rem]">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </figcaption>
              <div className="flex justify-center md:mx-[16rem]">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt="Star"
                    className="w-5 h-5 mt-[1rem] mx-auto mb-3 shadow-2xl"
                  />
                ))}
              </div>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
