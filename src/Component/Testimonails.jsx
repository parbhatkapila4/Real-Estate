import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Client{" "}
        <span className="underline underline-offset-6 decoration-1 font-light">
          Endorsements
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Journeys of Those Who Found Their Home with Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] shadow-lg rounded-2xl px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className=" flex justify-center gap-1 text-red-500 mb-4 mt-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonails;
