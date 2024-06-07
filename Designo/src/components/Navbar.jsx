import { Link } from "react-router-dom"
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

const navItems = [
  { id: 1, link: "Our Compnay" },
  { id: 2, link: "Locations" },
  { id: 3, link: "Contact" },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-8 md:flex-row justify-between items-center lg:text-xl p-4 uppercase">
      <div className="flex justify-between w-full">
        {/* Logo Div */}
        <div className="flex gap-4 items-center">
          <FiberSmartRecordIcon fontSize="medium" />
          <h1 className="sm:text-2xl lg:text-3xl font-bold transition-all">
            Designo
          </h1>
        </div>

        {/* Hamburger Div */}
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
      <ul
        className={`flex flex-col md:flex-row gap-4 lg:gap-8 text-gray-400 cursor-pointer md:text-lg whitespace-nowrap ${
          open ? "visible" : "hidden"
        }`}
      >
        {navItems.map((link) => {
          return (
            <Link
              className="hover:text-black hover:scale-105 transition-all duration-200 font-medium"
              key={link.id}
            >
              {link.link}
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
