// import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import logo from '../assets/images/header-logo.svg'
import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid={false} rounded={true}  className="navbar bg-black text-white text-xl font-bold py-6  top-0 z-50">
      <Navbar.Brand href="#">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Battle Infinity
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" className="navbar-link font-bold text-lg">
          ABOUT
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="navbar-link font-bold text-lg">
          PRODUCTS
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="navbar-link font-bold text-lg">
          TOKENOMICS
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="navbar-link font-bold text-lg">
          ROADMAP
        </Navbar.Link>
      </Navbar.Collapse>
        <div className="md:flex lg:items-center hidden ">
          <button className="text-base font-bold bg-btnBlue-50 py-2 px-3 rounded-md border-blue-300 border-2 mr-4">
            Stake $IBAT
          </button>
          <button className="text-base font-bold bg-black  py-2 px-3 rounded-md border-blue-300 border-2 ">
            Buy $IBAT
          </button>
        </div>
    </Navbar>
  );
};

export default NavBar;
