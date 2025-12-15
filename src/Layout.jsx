import { useState } from "react";
import { FiClock, FiMapPin } from "react-icons/fi"; // Feather icons
import rectan from './assets/rectan.png'
import ovals from './assets/ovals.png'
import Button from '../src/components/Button'
import JobCard from '../src/components/Jobcard'
import Sectionheading from "../src/components/Sectionheading";
import { LuChevronDown } from "react-icons/lu";
import Banner from "../src/components/Banner";
import { jobCardData } from "./data";
import Profilecard from "./components/Profilecard";
import { FeaturedCardData } from "./data";
const Layout = () => {


    const users = [
        { name: "Profile Vistor", score: 140 },
        { name: "Resume Viewers", score: 20 },
        { name: "My Jobs", score: 88 },
    ];

    return (

        // <div className="bg-accent" >

        //     <div className="max-w-[95%] mx-auto" >
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-4">

            <div className="lg:col-span-1 p-3">
                {/* Left Side (25%) */}
                <Profilecard />


                <div className="w-full p-3 bg-white border mt-3 border-white rounded-lg">
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-default">
                            {users.map((user, index) => (
                                <li key={index} className="py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 min-w-0 ms-2">
                                            <p className="font-ngh font-normal text-[#333333]
  text-[14px]
  leading-none
  ">
                                                {user.name}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center font-medium text-heading">
                                            <p className="font-ngh text-[#0154AA]
  font-medium
  text-[16px]
  leading-none
  tracking-normal
  text-right">


                                       {user.score}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                <div className="w-full p-3 mt-3 bg-white border flex items-center justify-between border-white rounded-lg ">

                    <div>
                        <p class="font-ngh text-[#333333] font-bold text-[16px] leading-[100%] tracking-[0%] ">
                            My Calender
                        </p>
                        <p class="font-ngh text-[#737A91]  font-normal text-[14px] leading-[100%] tracking-[0%] ">
                            Upcoming Interview
                        </p>
                    </div>
                    <div> <a> <LuChevronDown className="text-[20px] text-[#333333] hover:text-[#0154AA] transition" /></a></div>
                </div>


            </div>

            <div className="lg:col-span-3  p-3">
                {/* Right Side (75%) */}
                <Sectionheading className="font-ngh font-bold text-[#333333] text-[22px] leading-[100%] tracking-[0px]"  >Find your Dream Job,
                    <span className="font-ngh font-bold text-[#0154AA]  text-[22px] leading-[100%] tracking-[0px]" >Albert!</span> </Sectionheading>


                <p className="font-ngh mt-2 font-[500] text-[#585D6E] text-[14px] leading-[100%] tracking-[0px] ">
                    Explore the latest job openings and apply for the best opportunities available today!</p>


                <Banner />


                <div>
                    <div className="mt-8  flex space-x-3 items-center " >
                        <p className="font-ngh text-[#737A91] font-normal " >Similiar : </p>
                        <div className="flex space-x-3" >
                            {['Frontend', 'Backend', 'Graphic Designer'].map((val) => {
                                return (<>
                                    <Button variant="outline" >{val}</Button>
                                </>)
                            })}
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
                </div>

























                {/* FEATURED JOBS */}
                <div className="mt-8" >



                    {/* <p className="text-[#333333] font-['Neue_Haas_Grotesk_Display_Pro'] font-medium 
                              text-[24px] leading-[100%] tracking-[0px]"   >Featured Jobs
                          <span>  <a className=" px-3 font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%] underline-offset-[0%] text-[#0154AA] " >  See Featured Jobs</a> </span> </p>
                               */}
                    <div>
                        <Sectionheading  >
                            Featured Jobs
                            <span>
                                <a className="px-5 font-ngh font-normal text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-2 underline-offset-2 text-[#0154AA]">
                                    See Featured Jobs
                                </a>
                            </span>
                        </Sectionheading>
                        {/* <div class="grid grid-cols-5 gap-4 mt-3 "> */}


                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">

                            {FeaturedCardData.map((item, index) =>
                                index <= 4 ? <JobCard key={index} {...item}
                                 onButtonClick= {() => alert("Web Dev Clicked")}
                                /> : <></>
                            )}
                        </div>
                        <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
                    </div>




                    {/* RECOMMEDED JOBS */}


                    <div className="mt-8" >

                        <Sectionheading  >
                            Recommended Jobs
                            <span>
                                <a className="px-5 font-ngh font-normal text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-2 underline-offset-2 text-[#0154AA]" >
                                    See Recommended Jobs</a></span>
                        </Sectionheading>
                        {/* <div class="grid grid-cols-5 gap-4 mt-3 "> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">
                            {jobCardData.map((item, index) => (
                                <JobCard key={index}  {...item} />
                            ))}

                        </div>


                        <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
                    </div>











                    {/* LATEST JOBS */}




                    <div className="mt-8" >

                        <Sectionheading>Latest Jobs
                            <span>  <a className="px-5 font-ngh font-normal text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-2 underline-offset-2 text-[#0154AA]" >  See Latest Jobs</a>
                            </span> </Sectionheading>
                        {/* <div class="grid grid-cols-5 gap-4 mt-3 "> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">

                            {jobCardData.map((item, index) => (
                                <JobCard key={index}  {...item} />
                            ))}


                        </div>


                        <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
                    </div>
                </div>




            </div>

        </div>
        // </div>
    );
};

export default Layout;
