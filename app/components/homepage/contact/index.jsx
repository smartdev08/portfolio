// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-5 lg:gap-9">
          <p className="text-sm md:text-xl flex items-center gap-3">
            <MdAlternateEmail
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.email}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <IoMdCall
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>
              {personalData.phone}
            </span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <CiLocationOn
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>
              {personalData.address}
            </span>
          </p>
        </div>
        {/* <div className="mt-8 mb-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
          <Link target="_blank" href={personalData.github}>
            <IoLogoGithub
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
          <Link target="_blank" href={personalData.linkedIn}>
            <BiLogoLinkedin
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
            />
          </Link>
        </div> */}
        <div className='mt-8'>
          <a 
            href={`mailto:${personalData.email}`} 
            className="flex w-max items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          >
            <span className="flex items-center gap-1">
              Send Message
              <TbMailForward size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;