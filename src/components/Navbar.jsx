import { useState } from "react";
import { Link } from "react-scroll";

import { skyitlogotext, linkedin } from "../assets";
import { navbarLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:services@skyitsolutions.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-84}
          duraion={500}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={skyitlogotext}
            className="w-35 h-11 lg:w-33 lg:h-12"
            alt="Sky IT Solutions Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleClick}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Contact Us
            </span>
          </button>
          <button
            onClick={handleNavClick}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={` md:flex-row items-center justify-between w-full md:w-auto md:order-1 ${
            isNavOpen ? "block" : "hidden"
          } md:block`}
          id="navbar-sticky"
        >
          <ul
            className={`absolute top-[4rem] right-0 bg-white w-full text-center md:static md:flex p-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={handleNavClick}
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-84}
                  duraion={500}
                  className="block my-2 rounded-lg px-3 text-black hover:text-skyit md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        id="drawer-contact"
        className={`fixed bottom-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
        tabIndex="-1"
        aria-labelledby="drawer-contact-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex mt-[4rem] items-center mb-2 text-base font-semibold text-gray-500 uppercase"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          Contact us
        </h5>
        <button
          onClick={handleClick}
          type="button"
          data-drawer-hide="drawer-contact"
          aria-controls="drawer-contact"
          className="text-gray-400 mt-[4rem] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <form className="mb-2" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Let us know how we can help you"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Your message..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-skyit hover:bg-skyit/70 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Send message
          </button>
        </form>
        <p className="mb-2 text-sm text-gray-900 ">
          <a
            href="mailto:services@skyitsolutions.com"
            className="hover:underline"
          >
            <b>services@skyitsolutions.com</b>
          </a>
        </p>
        <p className="text-sm text-gray-500">
          <a className="leading-loose">
            <b>Phone:</b> +1 (956) 969-5855
            <br />
            <b>Fax:</b> +1 (956) 969-5844
            <br />
          </a>
        </p>
        <div className="mt-3 text-sm text-gray-900">
          <b>Hours:</b> Mon-Fri 8:00am-5:00pm
        </div>
        <div className="mt-[1rem] text-sm text-gray-900">
          <a className="">
            <b>
              Weslaco <br /> Corporate Office{" "}
            </b>
            <br /> 705 S. Texas Blvd. <br /> Weslaco, TX 78596
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-mejia-jr-87029512b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              href="/"
              src={linkedin}
              className="size-[3rem] mt-[1rem]"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
