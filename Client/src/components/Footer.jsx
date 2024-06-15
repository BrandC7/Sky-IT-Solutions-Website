import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-skyit/20 to-white inset-x-0 bottom-0 bg-white rounded-lg shadow my-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex md:items-center justify-between">
        <span className="text-sm text-black/70 sm:text-center">
          ©{" "}
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-84}
            duraion={500}
            className="hover:underline"
          >
            Sky IT Solutions Inc.
          </Link>
        </span>
        <span className="text-sm">
          <a className="text-black/70">
            Certified DBE/SBE/HUB and 100% Veteran Owned Business.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
