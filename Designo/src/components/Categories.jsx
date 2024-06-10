import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Categories = () => {
  const [categories, setCategories] = useState([])

  // * api call to get the catergories data from DB
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 justify-items-center gap-2 p-4 max-w-fit mx-auto">
      {categories.map((category) => {
        return (
          <div
            className={`flex flex-col items-center justify-center grayscale group *:transition-all overflow-hidden cursor-pointer hover:grayscale-0 uppercase rounded-xl *:duration-500 max-w-[40rem] ${
              category.id === 1 ? "row-span-2" : "row-span-1"
            }`}
            key={category.id}
          >
            <img
              className="group-hover:scale-110 rounded-xl h-full"
              src={category.img_link}
              alt="Image for card"
            />
            <div className="flex flex-col absolute text-white text-center">
              <span className="text-3xl md:text-5xl font-bold">
                {category.title}
              </span>
              <Link className="text-sm md:text-xl" to={"/"}>
                View Projects <span></span>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
