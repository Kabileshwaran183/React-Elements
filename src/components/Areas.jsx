import React from "react";
import { BsArrowRight} from "react-icons/bs";
const area =[
    {
    Name:"Interiors",
    img:"/interiors.png"
    },
     {
    Name:"Exteriors",
    img:"/exteriors.png"
    },
    {
    Name:"Wallpaper",
    img:"/wallpapers.png"
    },
    {
    Name:"WoodFinishes",
    img:"/wood-finishes.png"
    },
     {
    Name:"Waterproofing",
    img:"/waterproofing.png"
    },
     {
    Name:"Emulsions",
    img:"/emulsions.png"
    }
    
]
export const Areas = () => {
    return (
        <section  className=" marginalize">
                <div className="mb-7 md:mb-14">
                    <h2 className="title-text">Areas of expertise</h2>
                    <p className="subtitle-text">One stop solution for all you need to keep your living space intact.</p>
                </div>
            <div className="flex justify-center flex-col gap-6 md:justify-between ">
                 <div className="grid grid-cols-2 lg:grid-cols-3  gap-5 items-center">
                    {area.map((area) => (
                   
                      <div className="flex justify-center relative hover:-translate-y-4 duration-500 delay-200 mb-2 ">
                        <img
                            src={area.img}
                            alt="Ahmed paints Traders"
                            title="Ahmed Paint Karaikudi"
                            className="w-full max-h-max max-w-md rounded-lg shadow-lg object-center  "
                        />
                        <p className="absolute top-[70%] md:top-[80%] lg:top-[80%] left-5 right-0  text-white semi-font-bold  md:text-2xl text-[10px]">{area.Name}</p>
                        <div className="absolute  top-[76%] lg:top-[80%] md:top-[80%] md:left-[85%]  left-[80%] right-0 text-white font-bold md:text-2xl text-sm">
                                <a href="#products"> <BsArrowRight />  </a>
                        </div>
                    </div>
                   
                    ))} 
                </div>
                
            </div>
        </section>

    );
};

export default Areas;
