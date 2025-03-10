import React from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

export const About = () => {
    return (
        <section id="about" className="px-8 md:px-16 xl:mb-20 max-md:mt-8 max-md:text-base ">
            <motion.div
                className="h-full "
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
            <div className="py-2 ">
                
                <div className="mb-6 ">
                
                    <h2 className="title-text mb-7 md:mb-14">About us</h2>
                </div>

                <div className="flex max-md:flex-col-reverse gap-10  items-center">
                <div className="">
                        <div className="p-2 h-44 w-[16%] max-md:w-[40%] max-md:h-28 img-float mr-10 max-md:mr-3">
                    
                            <img
                                src="/ahmed outside.jpg"
                                alt="Ahmed Paint karaikudi"
                                className=" h-full w-full rounded-lg shadow-xl "
                                title="Ahmed Paint traders karaikudi"
                            />
                    
                    </div>
                    <h2 className="md:text-lg lg:text-2xl text-sm font-bold text-gray-800 mb-2 ">Ahmed Paint Traders</h2>

                        <div className=" text-gray-400 md:text-sm text-[10px]  leading-5 flex md:font-semibold mb-2  " >
                            <FaBuilding className=" md:h-5 md:w-4 h-4 w-3  " /> <h1 className="ml-2">Year of Establishment 2000</h1>
                    </div>
                        
                        <p className="description-text ">
                            Ahmed Paint Traders is a trusted Asian Paints Dealer in Karaikudi, Tamil Nadu,
                            offering a wide range of paints, coatings and related products.
                            They specialize in interior and exterior paints,wood finishes, waterproofing
                            solutions and painting accessories from leading brands,with a focus on Asian Paints products.
                            <br/>
                            As a trusted paint trader,they cater to both retail and wholesale customers,
                            including homeowners, contractors and businesses. With a commitment to quality
                            and customer satisfaction,Ahmed Paint Traders provides expert advice,ensuring
                            you get the best products for your painting needs.
                        </p>
                        
                        <p className="text-gray-400 text-[10px]  leading-5 md:text-sm mt-2">
                            
                        </p>
                    </div>
                
                    

                </div>
                
            </div>
        </motion.div>
        </section>
    );
};
export default About;