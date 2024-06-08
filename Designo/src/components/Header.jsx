import { Link } from "react-router-dom"
import Mobile from "../assets/images/mobile.png"

export const Header = () => {
  return (
    <div className="xl:max-w-[75vw] xl:m-auto flex flex-col sm:mx-6 sm:rounded-xl lg:flex-row md:justify-between items-center gap-6 px-8 lg:px-20 py-14 bg-headerColor mt-20 xl:mt-28 text-center lg:text-left h-[50rem] lg:h-[40rem] overflow-hidden">
      <div className="flex flex-col gap-8 items-center lg:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide lg:max-w-[20ch] md:max-w-[25ch] text-slate-100 font-medium">
          Award winning custom design and digital branding solution
        </h1>
        <p className="text-xl text-slate-200 max-w-[45ch]">
          With over 10 years in industry, we are experienced in creating fully
          responsive websites, app design, and engageing brand experiences. Find
          out more about our services
        </p>
        <button className="rounded-md tracking-wide bg-white px-6 py-3 lg:px-8 lg:py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_black] lg:text-xl">
          <Link to="/about">Learn More</Link>
        </button>
      </div>
      <img
        className="hover:scale-110 transition-all duration-300"
        src={Mobile}
        alt="Mobile Phone"
      />
    </div>
  )
}
