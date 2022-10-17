import React from 'react'

const AboutCard = () => {
  return (
    <section className="aboutcard section mt-10" id="about">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row sm:flex-row lg:gap-x-[40px] sm:gap-x-[40px]">
        {/* image */}
        <div className="flex-1 order-1 lg:-order-1 sm:-order-1">
          <img
            className="h-full w-80 object-cover group-hover:scale-105 
        transition-transform duration-200 ease-in-out rounded-lg"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        {/* text */}
        <div className="flex-1 flex flex-col mb-5">
          <h2 className=" about_text text-3xl font-bold mb-2">Get to Know me</h2>
          <p className="subtitle">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure
          </p>
          <h2 className="title">title</h2>
          <h2 className="title">titlel</h2>
          <h2 className="title">title</h2>
          <h2 className="title">title</h2>

          {/* items */}
          <div></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutCard