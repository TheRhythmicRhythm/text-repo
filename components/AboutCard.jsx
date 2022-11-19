import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import helen from "../public/helen.jpg";

const boxVariant1 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const boxVariant2 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0 }
};




const AboutCard = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="aboutcard section mt-10" id="About">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row sm:flex-row lg:gap-x-[40px] sm:gap-x-[40px]">
          {/* image */}
        
          <motion.div 
               ref={ref}
               variants={boxVariant1}
               initial="hidden"
               animate={control}
               className="testimonial_flex flex-1 order-1 lg:-order-1 sm:-order-1"
            
            style={{borderRadius: '5px', overflow: 'hidden', position: 'relative'}}            >
              <Image
                className="h-20 w-20"
                src={helen}
                alt=""
                width="350px"
                height="350px"
              />
            </motion.div>
          {/* text */}
          <motion.div
             ref={ref}
             variants={boxVariant2}
             initial="hidden"
             animate={control}
            className="flex-1 flex flex-col mb-5"
          >
            <h2 className=" about_text text-4xl font-bold mb-5">
              Get to Know me
            </h2>
            <p className="subtitle">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
            <h2 className="title">title</h2>
            <h2 className="title">title</h2>
            <h2 className="title">title</h2>
            <h2 className="title">title</h2>

            {/* items */}
            <div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
