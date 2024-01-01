import Image from "next/image"
import logo from "@/public/images/logo2.svg"
import linkedin from "@/public/images/linkedin_footer.svg"
import twitter from "@/public/images/twitter.svg"
import facebook from "@/public/images/facebook.svg"
import instagram from "@/public/images/instagram.svg"


export default function Footer() {
  return (
        <div className="bg-[#222222]">
          <div className="lg:flex lg:justify-between bg-[#222222] w-11/12 mx-auto pt-[50px] pb-10">
            <div className="lg:w-[50%]">
              <div>
                <Image src={logo} />
              </div>
              <div className=" text-sm text-[#FFF] mt-[20px]">
                <p>Do what you do best. Let us handle the rest! </p>
                <p>
                  Connecting busy entrepreneurs with the top knowledge workers from
                  around the world.
                </p>
                <p>Zero Chaos | More Headspace | Focused YOU | Better Business</p>
              </div>
            </div>
    
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:w-[50%] lg:justify-items-end gap-10 text-white text-sm">
              <div className="flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">About</h1>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Services</p>
                <p className="cursor-pointer">Customer Stories</p>
                <p className="cursor-pointer">Team</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">
                  Company
                </h1>
                <p className="cursor-pointer">Careers</p>
                <p className="cursor-pointer">Blog</p>
                <p className="cursor-pointer">FAQ's</p>
                <p className="cursor-pointer">Community</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">
                  Resources
                </h1>
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Service</p>
                <p className="cursor-pointer">FAQ's</p>
                {/* <p className="cursor-pointer">Label</p> */}
              </div>
              <div className="lg:hidden flex flex-col gap-4">
                <h1 className=" text-[#FF7A00] text-[24px] font-semibold">
                  Social
                </h1>
                <Image className="cursor-pointer" src={linkedin}></Image>
                <Image className="cursor-pointer" src={twitter}></Image>
                <Image className="cursor-pointer" src={facebook}></Image>
                <Image className="cursor-pointer" src={instagram}></Image>
              </div>
            </div>
            <hr className="mt-[50px] text-white" />
            <p className="lg:hidden text-[#FF7A00] text-center text-sm mt-10">
              © 2023 Remotual. All Rights Reserved
            </p>
          </div>
          
          <div className="bg-[#222222]  w-11/12 mx-auto hidden lg:block">
            <hr className=" text-white " />
          </div>
    
          <div className="bg-[#222222]  w-11/12 mx-auto  hidden lg:flex justify-between ">
            <p className=" text-[#FF7A00] hidden lg:flex items-center text-sm my-10">
              © 2023 Remotual. All Rights Reserved
            </p>
            <div className="hidden lg:flex justify-center items-center gap-4">
              <Image className="cursor-pointer" src={linkedin}></Image>
              <Image className="cursor-pointer" src={twitter}></Image>
              <Image className="cursor-pointer" src={facebook}></Image>
              <Image className="cursor-pointer" src={instagram}></Image>
            </div>
          </div>
        </div>
  )
}
