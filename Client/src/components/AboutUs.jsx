import { sp1 } from "../assets";

const AboutUs = () => {
  return (
    <>
      <section
        id="About Us"
        className="py-8 px-4 bg-skyit/20 sm:py-24 lg:px-[4rem]"
      >
        <div className="relative max-w-screen-xl w-full mx-auto p-5 bg-white rounded-2xl shadow-2xl">
          <div className="z-10 sm:mr-[22rem] lg:mr-[21rem]">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              About Us
            </h2>
            <p className="text-gray-500 sm:text-xl mb-8">
              SKY I.T. Solutions, founded by Esteban Mejia in May 2003, delivers
              high-quality IT products and services. Based in Weslaco, TX, our
              team of nine skilled professionals excels in network
              infrastructure, server installation, secure
              virtual-private-networks, custom programming, and technology
              cost/benefit analysis. Our strategic partnerships with local and
              national vendors uniquely position us to provide unparalleled
              solutions.
            </p>
            <h3 className="mb-2 text-xl font-bold">Our mission: </h3>
            <p className="text-gray-500 sm:text-xl mb-8">
              Excellence in information technology.
            </p>
            <h3 className="mb-2 text-xl font-bold">Our vision: </h3>
            <p className="text-gray-500 sm:text-xl">
              National leadership in IT development and outsourcing.
            </p>
          </div>
          <img
            src={sp1}
            alt="About Us"
            className="bg-right absolute right-0 top-0 bottom-0 h-full max-w-[22rem] max-md:hidden max-lg:w-[22rem] object-cover rounded-r-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
