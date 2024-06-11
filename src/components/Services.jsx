import { services } from "../constants";

const Services = () => {
  return (
    <>
      <section id="Services" className="bg-skyit/20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Services with quality
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Sky IT Solutions offers a wide range of services to help you with
              your IT needs. Our team of professionals is ready to assist you
              with any project you have in mind.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {services.map((industry) => (
              <div
                key={industry.id}
                className="py-4 bg-white rounded-2xl shadow-xl"
              >
                <img
                  src={industry.icon}
                  alt={industry.name}
                  className="relative saturate-150 sepia-[30%] top-[-1rem] rounded-t-xl bg-cover w-auto"
                />
                <h3 className="mb-2 text-xl text-center font-bold">
                  {industry.name}
                </h3>
                <p className="text-gray-500">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
