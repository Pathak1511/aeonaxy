import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import CircularImg from "@/components/Cards";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    router.push("/passion");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <main className={`flex min-h-screen  ${inter.className} relative`}>
      {/* Sign-up */}
      <div className="flex w-[100%] flex-col bg-[#fff] relative items-center py-16">
        {/* Side Illustrations */}
        <div className={`absolute top-4 left-4 bg-[#fff]`}>
          <div className="p-4 flex flex-col align-start">
            <Image
              src="/dribble.png"
              width={100}
              height={50}
              className="dm:w-[100px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-start flex-col md:w-[500px] dm:w-[100%] dm:items-center">
          <div className="py-4 dm:py-2">
            <h2 className="text-black font-bold lg:text-3xl my-2 dm:text-2xl dm:my-1 dm:text-center">
              Welcome! let&apos;s create your profile
            </h2>
            <p className="dm:px-6">
              Let others get to know you better! You can do these later
            </p>
          </div>
          {/* File input */}
          <div className="flex justify-between items-center gap-4 py-4 dm:py-2">
            <div className="md:w-[100%] dm:w-[200px] dm:flex dm:flex-col">
              <h4 className="font-bold lg:text-2xl mb-8 dm:text-xl dm:text-center dm:mb-2">
                Add an avatar
              </h4>
              <div className="flex md:w-[100%] gap-4 md:flex-row dm:flex-col dm:items-center dm:justify-center dm:p-4">
                <CircularImg imageUrl={imageUrl} />
                <div className="w-[min-content] dm:p-0 dm:m-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="border-none outline-none md:w-[400px] p-3 bg-gray-100 rounded-lg mb-4 dm:p-2 dm:mb-2 dm:w-[280px]"
                    onChange={handleFileChange}
                  />
                  <button className="flex gap-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-caret-right-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>{" "}
                    Or choose one of our defaults
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-8 lg:py-4 dm:py-0">
            <div className="lg:w-[500px] dm:w-[90%]">
              <h4 className="font-bold lg:text-2xl lg:text-start mt-8 mb-8 dm:text-xl dm:text-center dm:my-2">
                Add your location
              </h4>
              <div className="flex md:gap-8 w-[100%] dm:gap-4">
                <div className="w-[100%]">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter a location"
                    style={{
                      border: "none",
                      borderBottom: "4px solid #f3f2f2",
                      outline: "none",
                      padding: "0.5rem",
                      width: "100%",
                    }}
                    className="lg:placeholder:text-start lg:text-lg dm:text-sm dm:placeholder:text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-between items-center gap-8 py-4">
            <div className="md:w-[236px] dm:w-[220px]">
              <button
                className="border-none outline-none md:p-3 bg-[#EA4B8B] text-white fomt-semibold rounded-lg w-[100%] hover:bg-[#d3447d]-800 focus:ring-1 focus:ring-[#f081ae] font-medium text-sm dm:p-2 "
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
