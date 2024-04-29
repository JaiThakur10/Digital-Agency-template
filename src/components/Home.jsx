
import React from "react";

function Home() {

   
  return (
    <div className=" w-full h-full min-h-screen bg-[#101010]">
      <nav className=" w-full flex h-[90px] ">
        <div className=" mx-auto w-[90%]  h-[90px] ">
          <div className=" mx-auto w-[85%] h-[90px] flex flex-row list-none justify-between items-center">
            <svg width="45px" height="40px" strokeWidth="2" viewBox="0 0 53 16">
              <path
                pid="0"
                fill="currentColor"
                d="M0 3h53V0H0zM0 16h53v-3H0z"
                className=" text-white"
              ></path>
            </svg>

            <li>
              <h2 className=" text-white text-2xl font-extrabold font-display">
                DIGEAI
              </h2>
            </li>
            <li></li>
          </div>
        </div>
      </nav>

      <div className="  h-[600px] w-full flex flex-col ">
        <div className="  w-[80%] h-[70%] mx-auto flex flex-col">
          <div className="  h-[40px] w-full flex  ">
            <h1 className=" font-display mx-auto justify-center text-[200px]  font-!normal text-white ">
              DIGITAL
            </h1>
          </div>
          <div className="  h-[40px] w-full flex mt-36">
            <h1 className=" font-display mx-auto justify-center text-[200px] font-!normal text-[#FCBF4D]">
              AGENCY
            </h1>
          </div>
        </div>

        <div className="  w-[80%] h-1/3 mx-auto flex ">
          <div className="  w-[40%] h-full flex">
            <p className=" font-display  flex mt-16 text-[22px] ml-3  font-normal  text-white h-1/2">
              {" "}
              As a forward-thinking digital agency, we redefine digital
              experiences through a fusion of innovation and expertise.
            </p>
          </div>
          <div className="   w-[48.5%] h-[59.5%] flex border-b-4  "></div>
          <div className="  w-[100px] flex ml-4">
            <div className=" bg-white rounded-full h-24 w-24 flex  mt-16 mx-auto  ">
                
              <div className=" bg-yellow-400 rounded-full h-16 w-16 mx-auto my-auto flex border-2 border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 my-auto mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;









