import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button, Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <div>
      <Navbar
        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        fluid
        rounded
      >
        <Link to="/">
          <img
            alt="Jumbers"
            width={80}
            className="mr-3 h-6 sm:h-9"
            src={logo}
          />
        </Link>
        <div className="flex gap-2 md:order-2">
          <Link to="https://jumpers.vercel.app/auth/signin">
            <Button className="bg-teal-700">Login</Button>
          </Link>
          <Navbar.Toggle />
        </div>{" "}
        <Navbar.Collapse>
          <Link
            active
            to="/"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            <p>Home</p>
          </Link>
          <Link
            active
            to="/services"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            Services
          </Link>
          <Link
            active
            to="/sector"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            Sectors
          </Link>
          <Link
            active
            to="/contact"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            Contact
          </Link>{" "}
          <Link
            active
            to="/about"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            About Us
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
