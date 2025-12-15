// import { useState } from "react";
// import { FiClock, FiMapPin } from "react-icons/fi"; // Feather icons
// import rectan from '../../assets/rectan.png'
// import ovals from '../../assets/ovals.png'
// import Button from "../Button";
// import JobCard from "../Jobcard";
// import Sectionheading from "../Sectionheading";
// import framee from '../../assets/framee.png'
// import { LuChevronDown } from "react-icons/lu";
// // import Banner from "../Banner";
// import { jobCardData } from "../../data";

// const DasLayout = () => {


//     const users = [
//         { name: "Neil Sims", score: 140 },
//         { name: "Bonnie Green", score: 20 },
//         { name: "Michael Gough", score: 88 },
//     ];

//     return (

//         <div className="bg-[#F4F4F4]" >

//             <div className="max-w-[95%] mx-auto" >
//                 <div className="min-h-screen grid grid-cols-1 lg:grid-cols-4">

//                     <div className="lg:col-span-1 p-3">
//                         {/* Left Side (25%) */}
//                         <div className="border border-white bg-white rounded-lg">
//                             <div className="relative h-[100px] w-full">
//                                 <img
//                                     src={rectan}
//                                     alt="Service icon"
//                                     className="w-full h-full object-cover"
//                                 />
//                                 {/* Center circular image - FIXED */}
//                                 <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2">
//                                     <div className="rounded-full p-3 sm:p-4 md:p-5 flex justify-center items-center">
//                                         {/* <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"> */}
//                                         <img
//                                             // src={`${}`}
//                                             src={ovals}
//                                             alt="Service icon"
//                                             className="w-full h-full object-cover rounded-full"
//                                         />
//                                         {/* </div> */}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-10 mb-5 flex flex-col px-5 py-2 space-y-1   ">
//                                 <p className="font-ngh text-[#333333] font-bold text-[18px] leading-[100%] tracking-[0%] text-center">
//                                     Albert Flores
//                                 </p>

//                                 <p className="font-ngh text-[#333333] font-medium text-[14px] leading-[100%] tracking-[0%] text-center">
//                                     Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...
//                                 </p>

//                                 <p className="font-ngh text-[#585D6E] font-normal text-[12px] leading-[100%] tracking-[0%] text-center">
//                                     Clinton, Maryland
//                                 </p>

//                             </div>
//                         </div>


//                         <div className="w-full p-3 bg-white border mt-3 border-white rounded-lg">
//                             <div className="flow-root">
//                                 <ul role="list" className="divide-y divide-default">
//                                     {users.map((user, index) => (
//                                         <li key={index} className="py-4">
//                                             <div className="flex items-center justify-between">
//                                                 <div className="flex-1 min-w-0 ms-2">
//                                                     <p className="font-medium font-ngh text-[#333333] text-[14px] ">
//                                                         {user.name}
//                                                     </p>
//                                                 </div>
//                                                 <div className="inline-flex items-center font-medium text-heading">
//                                                     <p className="font-medium font-ngh text-[#0154AA] text-[16px] ">


//                                                         {user.score}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>



//                         <div className="w-full p-3 mt-3 bg-white border flex items-center justify-between border-white rounded-lg ">

//                             <div>
//                                 <p class="font-ngh text-[#333333] font-bold text-[16px] leading-[100%] tracking-[0%] ">
//                                     My Calender
//                                 </p>
//                                 <p class="font-ngh text-[#737A91] font-semibold text-[14px] leading-[100%] tracking-[0%] ">
//                                     Upcoming Interview
//                                 </p>
//                             </div>
//                             <div> <a> <LuChevronDown className="text-[20px] text-[#333333] hover:text-[#0154AA] transition" /></a></div>
//                         </div>


//                     </div>

//                     <div className="lg:col-span-3  p-3">
//                         {/* Right Side (75%) */}
//                         <Sectionheading className="font-ngh font-bold text-[#333333] text-[22px] leading-[100%] tracking-[0px]"  >Find your Dream Job,
//                             <span className="font-ngh font-bold text-[#0154AA]  text-[22px] leading-[100%] tracking-[0px]" >Albert!</span> </Sectionheading>


//                         <p className="font-ngh mt-2 font-[500] text-[#585D6E] text-[14px] leading-[100%] tracking-[0px] ">
//                             Explore the latest job openings and apply for the best opportunities available today!</p>


//                         <Banner />


//                         <div>
//                             <div className="mt-8  flex space-x-3 items-center " >
//                                 <p className="font-ngh text-[#737A91] font-normal " >Similiar : </p>
//                                 <div className="flex space-x-3" >
//                                     {['Frontend', 'Backend', 'Graphic Designer'].map((val) => {
//                                         return (<>
//                                             <Button variant="outline" >{val}</Button>
//                                         </>)
//                                     })}
//                                 </div>
//                             </div>
//                             <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
//                         </div>

























//                         {/* FEATURED JOBS */}
//                         <div className="mt-8" >



//                             {/* <p className="text-[#333333] font-['Neue_Haas_Grotesk_Display_Pro'] font-medium 
//                               text-[24px] leading-[100%] tracking-[0px]"   >Featured Jobs
//                           <span>  <a className=" px-3 font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%] underline-offset-[0%] text-[#0154AA] " >  See Featured Jobs</a> </span> </p>
//                                */}
//                             <Sectionheading  >
//                                 Featured Jobs
//                                 <a className="px-3 font-ngh font-medium text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-2 underline-offset-2 text-[#0154AA]">
//                                     See Featured Jobs
//                                 </a>
//                             </Sectionheading>
//                             {/* <div class="grid grid-cols-5 gap-4 mt-3 "> */}


//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">

//                                 {jobCardData.map((item, index) =>
//                                     index <= 4 ? <JobCard key={index} {...item} /> : <></>
//                                 )}
//                             </div>
//                             <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
//                         </div>




//                         {/* RECOMMEDED JOBS */}


//                         <div className="mt-8" >

//                             <Sectionheading  >
//                                 Recommended Jobs
//                                 <a className="px-3 font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%] underline-offset-[0%] text-[#0154AA] " >
//                                     See Recommended Jobs</a>
//                             </Sectionheading>
//                             {/* <div class="grid grid-cols-5 gap-4 mt-3 "> */}
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">
//                                 {jobCardData.map((item, index) => (
//                                     <JobCard key={index}  {...item} />
//                                 ))}

//                             </div>


//                             <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
//                         </div>











//                         {/* LATEST JOBS */}




//                         <div className="mt-8" >

//                             <p className="text-[#333333] font-['Neue_Haas_Grotesk_Display_Pro'] font-medium 
//                             text-[24px] leading-[100%] tracking-[0px]"   >Latest Jobs
//                                 <span>  <a className=" px-3 font-['Neue_Haas_Grotesk_Display_Pro'] font-medium text-[20px] leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%] underline-offset-[0%] text-[#0154AA] " >  See Latest Jobs</a> </span> </p>
//                             {/* <div class="grid grid-cols-5 gap-4 mt-3 "> */}
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3">

//                                 {jobCardData.map((item, index) => (
//                                     <JobCard key={index}  {...item} />
//                                 ))}


//                             </div>


//                             <div className="w-full h-[1px] bg-gray-300 mt-3 "></div>
//                         </div>
//                     </div>




//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Layout;
