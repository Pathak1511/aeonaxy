import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import CircularImg from "@/components/CircularImg";
import Cards from "@/components/cards";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

function index() {
  const [passion, setPassion] = useState([false, false, false]);
  const router = useRouter();
  const handlePress = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const setPassionBox = (id) => {
    const newPassion = [...passion];
    newPassion[id] = !newPassion[id];
    setPassion(newPassion);
  };

  return (
    <main className={`flex min-h-screen  ${inter.className}`}>
      {/* Sign-up */}
      <div className="flex w-[100%] flex-col bg-[#fff] relative items-center py-16">
        {/* Side Illustrations */}
        <div className={`absolute top-4 left-4 bg-[#fff]`}>
          <div className="p-4 flex align-center gap-4 dm:p-0">
            <Image
              src="/dribble.png"
              width={100}
              height={50}
              className="dm:w-[80px] dm:h-[auto]"
            />
            <button
              className="w-10 rounded-lg h-10 flex items-center justify-center bg-gray-100 dm:w-8 dm:h-8"
              onClick={() => router.back()}
            >
              <h2 className="font-bold text-[#444]">&lt;</h2>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-[500px] dm:w-[100%]">
          <h2 className="text-black font-bold text-3xl my-2 dm:text-center">
            What brings you to Dribble?
          </h2>
          <p className="dm:px-8">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
          {/* Cards input */}
          <div className="flex justify-between items-center gap-4 py-16 md:flex-row dm:flex-col">
            <Cards
              description="I'm a designer looking to share my work"
              img="/WFH_svg 3/wfh_1.svg"
              id={0}
              setPassionBox={setPassionBox}
            />
            <Cards
              description="I'm looking to hire a designer"
              img="/WFH_svg 3/wfh_2.svg"
              id={1}
              setPassionBox={setPassionBox}
            />
            <Cards
              description="I'm looking for design inspiration"
              img="/WFH_svg 3/wfh_3.svg"
              id={2}
              setPassionBox={setPassionBox}
            />
          </div>

          {/* Button */}
          <div className="flex justify-between items-center gap-8 py-4">
            <div className="w-[236px]">
              <button
                disabled={!(passion[0] || passion[1] || passion[2])}
                className="border-none outline-none p-3 bg-[#EA4B8B] text-white fomt-semibold rounded-lg w-[100%] hover:bg-[#d3447d]-800 focus:ring-1 focus:ring-[#f081ae] font-medium text-sm disabled:bg-[#f081ae] disabled:cursor-wait"
                onClick={handlePress}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default index;
