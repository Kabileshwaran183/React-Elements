import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className=" bg-[black] opacity-90 text-white  ">
            <div className=" top-0 left-0 w-[100%] overflow-hidden ">
                <svg data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0.5 12 1200 20 "
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-white"></path>
                </svg>



                 <div>
                    <h6 className=" text-gray-400 text-center mb-5 ">SK &copy; {Year}</h6>
                    </div>
                 <div className="">
                   

                    <div className="flex gap-5 justify-between items-start pb-1 md:px-[40%] px-[20%] ">
                             <a 
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="https://wa.me/919751944100?text=hello ?" target="_blank">
                                <FaWhatsapp />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="mailto:ahmedpaints@gmail.com" target="_blank">
                                <GoMail />
                            </a>
                             <a href="https://www.facebook.com/ahmedpaintskkdi/" target="2_blank">
                              <FaFacebook className="md:text-lg lg:text-2xl text-xl mr-3 hover:text-4xl duration-700 delay-400" />
                              </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl"   target="_blank">
                                <FaInstagram />
                            </a>
                    </div>
                           
                        </div>
            </div>
        </footer>
    );
};

export default Footer;