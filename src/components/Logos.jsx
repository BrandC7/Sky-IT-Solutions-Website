import {
  csalogo,
  tradeflexlogo,
  CEMSlogo,
  weslacoedc,
  stalogo,
  microsoftlogo,
} from "../assets";

const Logos = () => {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className=" text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
          We build strong partnertships
        </h2>
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:pb-8 lg:px-6">
          <div className="flex flex-col items-center justify-center">
            <dt className="text-3xl md:text-4xl font-extrabold">100+</dt>
            <dd className="font-light text-gray-500">Customers</dd>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          <a className="flex justify-center items-center">
            <img src={csalogo} alt="CSA Logo" className="h-9" />
          </a>
          <a className="flex justify-center items-center">
            <img
              src={tradeflexlogo}
              alt="TradeFlex Logo"
              className="h-[4rem]"
            />
          </a>
          <a className="flex justify-center items-center">
            <img src={CEMSlogo} alt="CEMS Logo" className="h-9" />
          </a>

          <a className="flex justify-center items-center">
            <img
              src={weslacoedc}
              alt="Weslaco EDC logo"
              className="h-[3.3rem]"
            />
          </a>
          <a className="flex justify-center items-center">
            <img src={stalogo} alt="STA Logo" className="h-9 h-[5rem]" />
          </a>
          <a className="flex justify-center items-center">
            <img
              src={microsoftlogo}
              alt="Microsoft Logo"
              className="h-9 h-[2.5rem]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Logos;
