import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center  lg:max-w-[45vw]">
          Ready to make an {" "} <span className="text-purple-500">
            impact </span> 
          in the digital world?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me and let&apos;s discuss how we can make your dream a reality.
        </p>
        <a href="mailto:ampadupsamuel1@gmail.com">
          <MagicButton
            
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Samuel Ampadu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;