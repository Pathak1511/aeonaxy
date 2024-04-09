import SocialIcons from "../../components/SocialIcons";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen ${inter.className} bg-[#fff]`}>
      <div className="w-[100%]">
        {/* Header */}
        <div className="flex justify-between w-[100%] px-8 py-4 items-center gap-16 border-y md:flex-row dm:flex-col">
          <div>
            <Image src="/dribble.png" width={100} height={50} />
          </div>
          <ul className="md:flex gap-8 dm:hidden">
            <a href="#" className="hover:text-[#d3447d]">
              Inspiration
            </a>
            <a href="#" className="hover:text-[#d3447d]">
              Find Work
            </a>
            <a href="#" className="hover:text-[#d3447d]">
              Learn Design
            </a>
            <a href="#" className="hover:text-[#d3447d]">
              Go Pro
            </a>
            <a href="#" className="hover:text-[#d3447d]">
              hire Designers
            </a>
          </ul>

          <div className="md:flex gap-4 dm:hidden">
            <input
              placeholder="Search"
              className=" outline-none border-2 px-4 rounded-lg"
            />
            <div className="relative w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
              <img
                src="/WFH_svg 3/wfh_1.svg"
                alt="Uploaded"
                className={`absolute top-0 left-0 w-full h-full object-cover
              }`}
                style={{ transition: "opacity 0.3s ease-in-out" }}
              />
            </div>
            <button className="border-none outline-none p-3 bg-[#EA4B8B] text-white fomt-semibold rounded-lg w-[100px] h-[40px] align-middle flex justify-center items-center hover:bg-[#d3447d]-800 focus:ring-1 focus:ring-[#f081ae] font-medium text-sm ">
              Upload
            </button>
          </div>
        </div>
        {/* Main */}
        <div className="flex items-center justify-center py-16 ">
          <div className="flex items-center justify-center flex-col gap-4 w-[540px]">
            <h2 className="font-bold md:text-3xl dm:text-2xl text-center">
              Please verify your email
            </h2>
            {/* Email icons */}
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="currentColor"
                class="bi bi-envelope-check"
                viewBox="0 0 16 16"
                className="dm:w-[240px]"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
              </svg>
            </div>
            <div className="flex items-center justify-center flex-col md:text-lg gap-4 text-center dm:px-6 dm:text-sm">
              <p className="text-gray-500">
                Please verify your email address. We&apos;ve sent a confirmation
                email to:
              </p>
              <a href="mailto:" className="font-semibold">
                account@refere.design
              </a>
              <p className="text-gray-500 text-center">
                click the confirmation link in that email to begin using Dribble
              </p>
              <p className="text-gray-500 text-center">
                Didn&apos;t receive the email? Check your Spam folder, it may
                have been caught by a filter. if you still don&apos;t see it,
                you can
                <button className="text-[#d3447d] font-semibold">
                  resend the confirmation email
                </button>
              </p>

              <p className="text-gray-500 text-center">
                Wrong email address ?
                <button className="text-[#d3447d] font-semibold">
                  Change it.
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between lg:p-24 bg-gray-100 gap-10 lg:flex-nowrap lg:flex-row  md:gap-2 md:px-2 md:py-4 md:flex-wrap md:flex-row dm:flex-col  dm:items-start dm:px-6 dm:py-4 dm:text-sm ">
          {/* Col 1 */}
          <div className="lg:w-[260px] flex flex-col gap-4 md:w-[100%]">
            <Image src="/dribble.png" width={80} height={40} />
            <p>
              Dribble is the world&apos;s leading community for creatives to
              share, grow, and get hired
            </p>
            <SocialIcons />
          </div>
          {/* For Designers */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm pb-2">For Designers</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>Go Pro</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime podcast</li>
              <li>playoffs</li>
              <li>Weekly Warm-Up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>

          {/* Hire designers */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm pb-2">Hire designers</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>Post a job opening</li>
              <li>Post a freelance project</li>
              <li>Search for designers</li>
            </ul>
            <h2 className="font-semibold text-sm py-2">Brands</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>Advertise with us</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm pb-2">Company</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>About</li>
              <li>careers</li>
              <li>Design blog</li>
              <li>Support</li>
              <li>Mediakit</li>
              <li>Testimonials</li>
              <li>API</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>

          {/* Directories */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm pb-2">Directories</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>Design jobs</li>
              <li>Designers for hire</li>
              <li>Freelance designers for hire</li>
              <li>Tags</li>
              <li>Places</li>
            </ul>
            <h2 className="font-semibold text-sm py-2">Design assests</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>Dribble Marketplace</li>
              <li>Creative Market</li>
              <li>Fontspring</li>
              <li>Font Squirrel</li>
            </ul>
          </div>

          {/* Design resources */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm pb-2">Fir Designers</h2>
            <ul className="flex flex-col gap-1 items-start text-sm">
              <li>Freelancing</li>
              <li>Design Hiring</li>
              <li>Design Portfolio</li>
              <li>Design Education</li>
              <li>Creative Process</li>
              <li>Design Industry Trends</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
