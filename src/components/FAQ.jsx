import { useState } from "react";
import { FAQs } from "../constants";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section
        id="FAQ"
        className="py-8 px-4 bg-white mx-auto sm:py-24 lg:px-[4rem]"
      >
        <div className="static max-w-screen-xl w-full mx-auto rounded-2xl px-4 py-4 shadow-2xl bg-skyit/20">
          <h2 className="mb-8 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
            FAQ
          </h2>
          <div id="accordion-open" data-accordion="open">
            {FAQs.map((faq, index) => (
              <div key={index}>
                <h3
                  className="mx-auto max-w-screen-xl"
                  id={`accordion-open-heading-${index}`}
                >
                  <button
                    type="button"
                    className={` ${
                      index < 1
                        ? "flex items-center bg-white justify-between max-w-screen-xl  w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-skyit/30"
                        : "flex items-center bg-white justify-between max-w-screen-xl w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-skyit/30"
                    } `}
                    data-accordion-target={`#accordion-open-body-${index}`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-open-body-${index}`}
                    onClick={() => handleClick(index)}
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {faq.question}
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`accordion-open-body-${index}`}
                  className={activeIndex === index ? "" : "hidden"}
                  aria-labelledby={`accordion-open-heading-${index}`}
                >
                  <div className="p-5 border bg-white mx-auto max-w-screen-xl border-b-0 border-gray-200">
                    <p className="mb-2 text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
