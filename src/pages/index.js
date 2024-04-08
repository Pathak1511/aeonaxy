import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!check) {
      alert("Click on Terms of Service checkbox");
    } else if (!name || !email || !username || !password) {
      alert("Fill all details !");
    } else if (password.length < 6) {
      alert("password length should be greater than 6");
    } else {
      router.push("/profile");
    }
  };

  return (
    <main
      className={`lg:flex min-h-screen ${inter.className} lg:flex-row md:flex-col-reverse dm:flex-col-reverse`}
    >
      {/* Side Illustrations */}
      <div
        className={`w-[700px] h-screen bg-[#f2d186] md:w-[100%] md:h-[min-content] dm:w-[100%] dm:h-[min-content] dm:px-4`}
      >
        <div className="p-12 flex flex-col align-start dm:p-8">
          <Image src="/dribble.png" width={100} height={50} className="mb-8" />
          <h2 className="text-[#4e3d34] font-bold text-3xl dm:text-2xl">
            Discover's the world's top Designer & Creatives{" "}
          </h2>
          <Image
            src={`/WFH_svg 3/wfh_${random + 1}.svg`}
            width={700}
            height={600}
            sizes="(max-width: 600px) 100px"
            className="mt-8 mb-8 object-contain filter brightness-100"
          />

          <h4 className="text-[#4e3d34] text-lg">Art by : Peter</h4>
        </div>
      </div>
      {/* Sign-up */}
      <div className="flex w-[100%] flex-col bg-[#fff] relative items-center py-16 dm:p-4">
        <h2 className="text-black absolute top-4 right-4 dm:text-sm dm:top-2 dm:right-2">
          Already a member ? <button className="text-[#0000EE]">Sign up</button>
        </h2>
        <div className="flex justify-center md:items-start flex-col md:w-[500px] dm:w-[100%] dm:items-center">
          <div className="py-4 dm:pt-8">
            <h2 className="text-black font-bold text-3xl dm:text-2xl dm:text-center">
              Sign up to Dribble
            </h2>
            <p className="text-[#DC7775] hidden">
              Username has alrerady been taken
            </p>
          </div>
          {/* name and username box */}
          <div className="flex justify-between items-center gap-8 py-4 dm:text-sm dm:py-2 dm:gap-4">
            <div className="w-[100%] dm:w-[96%]">
              <h4 className="font-bold">Name</h4>
              <input
                placeholder="name"
                className="border-none outline-none p-3 bg-gray-100 rounded-lg w-[100%] dm:p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-[100%]">
              <h4 className="font-bold ">Username</h4>
              <input
                placeholder="username"
                className="border-none outline-none p-3 bg-gray-100 rounded-lg w-[100%] dm:p-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* email box */}
          <div className="flex  gap-8 py-4 w-[100%]">
            <div className="w-[100%]">
              <h4 className="font-bold">Email</h4>
              <input
                placeholder="email"
                className="border-none outline-none p-3 bg-gray-100 rounded-lg w-[100%] dm:p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* password box */}
          <div className="flex  gap-8 py-4 w-[100%]">
            <div className="w-[100%]">
              <h4 className="font-bold">Password</h4>
              <input
                placeholder="6+ characters"
                className="border-none outline-none p-3 bg-gray-100 rounded-lg w-[100%] dm:p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {/* checkbox */}
          <div className="flex gap-8 py-4">
            <div className="w-[100%] flex items-start justify-start gap-6 dm:gap-2">
              <div className="w-10 dm:px-4">
                <input
                  type="checkbox"
                  className="border-none outline-none bg-gray-100 rounded-lg"
                  onChange={() => setCheck(!check)}
                />
              </div>
              <div>
                <p className="p-0 m-0 dm:text-justify dm:text-sm dm:px-4">
                  Creating an account means you're okay with our Terms of
                  Service, Privacy Policy, and default Notification Settings.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-between items-center gap-8 py-4">
            <div className="w-[236px] dm:w-[200px]">
              <button
                className="border-none outline-none p-3 bg-[#EA4B8B] text-white fomt-semibold rounded-lg w-[100%] hover:bg-[#d3447d]-800 focus:ring-1 focus:ring-[#f081ae] font-medium text-sm dm:p-2"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
