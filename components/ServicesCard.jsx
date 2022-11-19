import React from 'react'

const ServicesCard = () => {
  return (
    <section className="servicescard mx-auto mt-10 max-w-5xl" id="Services">
    <div className="flex flex-col items-center justify-center mb-10">
      {" "}
      <h1 className="text-3xl font-bold text-center">Services We Offer </h1>
    </div>

    {/* { Posts } */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
  gap-3 md:gap-6 p-2 md:p-6 mt-10"
    >
      <div className="group cursor-pointer overflow-hidden mb-10">
        <div className="flex flex-col items-center justify-center mx-auto px-5">
          <img
            src="https://img.icons8.com/stickers/100/000000/parse-resumes.png"
            className="h-20 w-20"
            alt=""
          />
          <p className="services_text  text-center text-xl font-bold">Cv/Resume Building</p>
       
        </div>
      </div>

      <div className="group cursor-pointer overflow-hidden mb-10">
        <div className="flex flex-col items-center justify-center mx-auto px-5">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-cover-letter-job-search-flaticons-lineal-color-flat-icons-2.png"
            className="h-20 w-20"
            alt=""
          />
          <p  className="services_text  text-center text-xl font-bold">Cover Letter Creation</p>
      
        </div>
      </div>

      <div className="group cursor-pointer overflow-hidden mb-10">
        <div className="flex flex-col items-center justify-center mx-auto px-5">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-social-seo-flaticons-lineal-color-flat-icons-2.png"
            className="h-20 w-20"
            alt=""
          />
          <p className="services_text text-xl text-center font-bold">LinkedIn Optimisation & Social Bio Profile Creation</p>
      
        </div>
      </div>

      <div className="group cursor-pointer overflow-hidden mb-10">
        <div className="flex flex-col items-center justify-center mx-auto px-5">
          <img
            src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/000000/external-Blockchain-blockchain-others-cattaleeya-thongsriphong-12.png"
            className="h-20 w-20"
            alt=""
          />
          <p className="services_text text-center text-xl font-bold">Blockchain Research & Writing</p>
       
        </div>
      </div>

      <div className="group cursor-pointer overflow-hidden mb-10">
        <div className="flex flex-col items-center justify-center mx-auto px-5">
          <img 
            src="https://img.icons8.com/external-filled-outline-geotatah/64/000000/external-community-ecological-interaction-color-filled-outline-geotatah.png"
            className="h-20 w-20"
            alt=""
          />
          <p className="services_text text-xl text-center font-bold">Community Management</p>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServicesCard