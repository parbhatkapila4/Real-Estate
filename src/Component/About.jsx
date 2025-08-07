import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:pd-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Our Foundation{" "}
        <span className="underline underline-offset-8 decoration-1 under font-light">
          Defining the Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Precision. Passion. Property
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-20 w-full text-2xl pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Years of Trusted Service</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Milestones Achieved</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Active Developments</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">22+</p>
              <p>Projects Brought to Life</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Plotwise is built on a simple belief,real estate should be personal,
            precise, and refined. We specialize in curating premium living
            spaces that blend timeless design with long-term value. Every plot
            we offer is handpicked with care, guided by deep industry insight
            and a commitment to quality. With us, it’s never just about
            property—it’s about helping you make your mark with confidence.
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded-2xl hover:bg-black">
            Uncover the Story{" "}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
