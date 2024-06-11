import { skyitlogotext, networkroom } from "../assets";

const Hero = () => {
  return (
    <>
      <section
        id="Home"
        style={{
          position: "relative",
          overflow: "hidden",
          height: "auto",
          backgroundImage: `url(${networkroom})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-[5.1rem] w-full sm:p-0"
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "auto",
            backgroundImage: `linear-gradient(to bottom, rgba(135, 206, 235, 0.7), rgba(255, 255, 255, 0.7)), url(${networkroom})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full py-[12.8rem] sm:py-0"
        >
          <div className="flex flex-col mx-auto max-w-screen-xl text-center">
            <div className="relative flex justify-center mt-[1rem] m-8">
              <img
                src={skyitlogotext}
                alt="Sky IT Solutions"
                className="relative inset-0 w-auto size-[20rem] max-sm:hidden"
              />
            </div>

            <h1 className="pt-15 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Networking and Technology Solutions for every Industry
            </h1>
            <p className="my-12 mb-[9.6rem] text-lg font-normal text-black-500 lg:text-xl">
              Established in 2003, we take pride in our longevity within the
              Information Technology Industry here in South Texas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
