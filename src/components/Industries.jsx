import { industries } from "../constants";

const Industries = () => {
  return (
    <>
      <section id="Industries" className="bg-skyit/20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Designed for business like yours
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Here at Sky IT Solutions we focus on markets where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="p-4 bg-white rounded-2xl shadow-xl"
              >
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-skyit/20 lg:h-12 lg:w-12">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-5 h-5 lg:w-6 lg:h-6 ry-300"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{industry.name}</h3>
                <p className="text-gray-500">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
