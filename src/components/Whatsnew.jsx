import React from "react";
import { motion } from "framer-motion";

export const Whatsnew = () => {
  return (
    <section id="WN" className="marginalize">
        <h2 className="title-text">What's New</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/new product.png"
              alt="Ahmed paint traders"
              title="Ahmed paint traders"
              className="w-full max-w-xl rounded-lg shadow-lg"
            />
          </motion.div>

          <div>
            <p className="description-text">
              <h4 className="text-green-400 inline-block mr-3">Now Available:</h4> <b>Asian Paints Royale Glitz Luxury Emulsion</b> is an ultra-sheen interior paint that provides a rich, luxurious finish to your walls. 
              It also offers unmatched stain repellency to keep your walls beautiful. Experience <b>Luxury with Teflon™</b>, combining the best of décor and performance worlds.
            </p>
          </div>
        </div>
      
    </section>
  );
};

export default Whatsnew;
