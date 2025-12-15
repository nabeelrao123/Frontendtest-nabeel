import Button from "./Button";

const Banner = () => {
    return (
        <div className="border flex justify-between items-center py-5 px-4 rounded-[10px] mt-8 bg-[#FFFFFF]">
            <div>
                <p className="font-ngh
                 text-[#585D6E] font-normal text-[14px] leading-[100%] tracking-[0px]"  > Job Title, Company, or Keywords </p>
            </div>
            <div className="flex justify-between items-center space-x-5">
                <div>
                    <div className="w-px h-6 bg-[#E9ECEF]"></div>
                </div>
                <button
                    className=" font-ngh font-normal
                      inline-flex items-center gap-4 text-[14px]
                        text-[#585D6E] hover:text-gray-900 focus:outline-none"
                    type="button"
                >
                    Select Location
                    <svg
                        className="w-4 h-4 text-[#585D6E] "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                    </svg>
                </button>
                <div>
                    <div className="w-px h-6 bg-[#E9ECEF]"></div>
                </div>
                <button
                    className=" font-ngh font-normal  inline-flex items-center gap-4 text-[14px]  text-[#585D6E] hover:text-gray-900 focus:outline-none"

                    type="button"
                >
                    Job Type
                    <svg
                        className="w-4 h-4 text-[#585D6E] "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                    </svg>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm bg-[#0154AA]
                 text-white rounded-md
             hover:bg-gray-800 transition
          font-ngh mt-2 font-normal text-[14px] leading-[100%] tracking-[0px]
             
             ">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z" />
                    </svg>
                    Search
                </button>

            </div>
        </div>



    );
};

export default Banner;
