import { useEffect, useState } from "react"

export const Qualities = () => {
  const [qualities, setQualities] = useState([])

  // * api call for qualities data
  useEffect(() => {
    fetch("http://localhost:3001/qualities")
      .then((res) => res.json())
      .then((data) => setQualities(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-4 items-center">
      {qualities.map((quality) => {
        return (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 justify-items-center md:justify-items-start lg:justify-items-center text-center md:text-left md:items-center"
            key={quality.id}
          >
            <img
              className="rounded-full max-w-72"
              src={quality.img_link}
              alt="Image about Quality"
            />
            <div className="grid grid-cols-1 gap-4 md:h-fit lg:text-center">
              <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-medium tracking-widest h-fit">
                {quality.title}
              </span>
              <span className="text-gray-500 md:text-lg tracking-wider max-w-[40ch] h-fit">
                {quality.description}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
