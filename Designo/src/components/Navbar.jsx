import { Link } from "react-router-dom"
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

const navItems = [
  { id: 1, link: "Home", to: "/" },
  { id: 2, link: "Our Compnay", to: "/about" },
  { id: 3, link: "Locations", to: "/location" },
  { id: 4, link: "Contact", to: "/contact" },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full fixed top-0 left-0">
      <div className="md:flex bg-white p-4 sm:px-6 items-center justify-between">
        {/* Logo DIv */}
        <div className="flex items-center justify-between">
          {/* Icon and title Div */}
          <div className="flex items-center gap-2">
            <FiberSmartRecordIcon fontSize="medium" />
            <span className="text-2xl lg:text-3xl font-bold transition-all">
              Designo
            </span>
          </div>
          {/* Menu Icons */}
          <div
            onClick={() => {
              setOpen(!open)
            }}
            className="md:hidden"
          >
            {open ? (
              <CloseIcon
                className="cursor-pointer text-gray-400 hover:text-black transition-all"
                fontSize="large"
              />
            ) : (
              <MenuIcon
                className="cursor-pointer text-gray-400 hover:text-black transition-all"
                fontSize="large"
              />
            )}
          </div>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-10 md:items-center bg-white py-6 md:py-0 text-left left-0 px-4 sm:px-6 text-xl md:text-2xl text-gray-400 transition-all duration-200 absolute md:static md:z-auto w-full md:w-auto ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {navItems.map((link) => {
            return (
              <Link
                to={link.to}
                className="hover:text-black hover:scale-105 transition-all duration-200 font-medium w-fit"
                key={link.id}
                onClick={() => setOpen(false)}
              >
                {link.link}
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
