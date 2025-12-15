// import { FiClock, FiMapPin } from "react-icons/fi"; // Feather icons
// const JobCard = ({
//     promotedText = "Promoted",
//     title,
//     team,
//     location,
//     postedTime,
//     applicants,
//     buttonText = "Apply Now",
//     onButtonClick,
//     icon
// }) => {
//     return (
//         <>
//             {/* LATEST JOBS */}

//             <div className="bg-white block py-4 px-1 border border-[#E1E1E1] rounded-[10px] border-default shadow-xs">

//                 <div className='flex flex-col space-y-3' >
//                     <div className="font-ngh text-[#333333]  font-semibold text-[10px] leading-none tracking-normal">
//                         {promotedText}
//                     </div>
//                     <div className='flex space-x-3 items-center' >


//                  <img
//                         // src={`${}`}
//                         src={framee}
//                         alt="Service icon"
//                         className="w-10 h-10 object-cover"
//                       />





//                         {/* <Image
//                                                         src={frame}
//                                                         alt="Service icon"
//                                                         width={40}
//                                                         height={40}
//                                                         className="object-cover"
//                                                     /> */}
//                         <a href="#">
//                             <p className="font-ngh font-medium text-[16px] text-[#333333]  leading-[100%] tracking-[0%]">
//                                 {title}
//                             </p>

//                             <div className="font-ngh font-medium text-xs leading-none text-[#333333] tracking-normal">
//                                 {team}
//                             </div>
//                         </a>
//                     </div>
//                     <div className='flex flex-col space-y-2'  >

//                         {location && (
//                             <div className='flex items-center space-x-2 ' >
//                                 <FiMapPin className='text-lg text-[#585D6E]' />
//                                 <p className="font-ngh font-medium text-xs  leading-none text-[#585D6E]">
//                               {location}
//                                 </p>
//                             </div>

//                         )}


//                         {(postedTime || applicants) && (

//                             <div className='flex items-center space-x-2' >
//                          <FiClock className="text-lg text-[#585D6E] " />
//                                 <p className="font-ngh font-medium text-xs leading-none text-[#585D6E]">{postedTime} | <span
//                                     className="font-ngh font-medium text-xs leading-none text-[#0154AA]" >{applicants}</span> </p>

//                             </div>
//                         )}
//                     </div>

//                     {buttonText && onButtonClick && (


//                         <div className='flex items-center space-x-2 ' >
//                             <button className="bg-[#0152AA] hover:bg-[#0154AA] text-white  py-2 px-7 rounded
//                   font-ngh  text-[12px] leading-[100%] tracking-[0]">
//                                 {buttonText}
//                             </button>

//                             <FiClock className="text-lg text-[#585D6E] " />

//                         </div>
//                     )}
//                 </div>

//             </div>


//         </>

//     );
// };

// export default JobCard;



import { FiBookmark } from "react-icons/fi";
import { FiClock, FiMapPin } from "react-icons/fi"; // Feather icons
import framee from '../assets/framee.png'
import Button from "./Button";
const JobCard = ({
    promotedText,
    title,
    team,
    location,
    postedTime,
    applicants,
    buttonText = "Apply Now",
    onButtonClick,
    icon
}) => {
    return (
        <>
            <div className="bg-white flex flex-col space-y-3 py-3 px-2 border border-[#E1E1E1] rounded-[10px] border-default shadow-xs">
                {/* <p className="font-ngh text-[10px] text-[#333333] font-semibold  " >
                    promotedText?   promotedText:''} 
                    
                    </p> */}
                    {promotedText && <p className="font-ngh text-[10px] text-[#333333] font-semibold  " >{promotedText}</p>}

                <div className="flex items-center space-x-2" >
                    <img src={framee}
                        alt="Service icon"
                        className="w-10 h-10 object-cover"
                    />
                    <div>
                        <p className="font-ngh text-[14px] font-semibold  text-[#333333]">UI/UX Designer </p>
                        <p className="font-ngh text-[14px] font-normal  text-[#333333]">Team </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2" >
                    <FiMapPin className='text-sm text-[#585D6E]' />
                    <p className="font-ngh text-[12px] font-normal  text-[#585D6E]" >Seattle, USA (Remote)</p>
                </div>

                <div className="flex items-center space-x-2" >
                    <FiClock className='text-sm text-[#585D6E]' />
                    <p className="font-ngh text-[12px] font-normal  text-[#585D6E]" >1day ago |
                        <span className="font-ngh text-[12px] font-normal  text-[#0154AA]" > 22 applicants</span>
                    </p>
                </div>


                <div className="flex items-center space-x-2 px-2 " >
                    <button className="font-ngh font-normal  hover:bg-[#0154AA] px-16 md:px-12 bg-[#0154AA] text-white  py-3 xl:px-6  rounded-md font-ngh 
                     text-[12px] leading-[100%] tracking-[0]">
                        {buttonText}
                    </button>
          
          
                    {/* <FiClock className='text-xs text-[#585D6E]' /> */}

<FiBookmark className="text-[#AAAAAA] text-[22px]" />
                </div>
            </div>


        </>

    );
};

export default JobCard;

