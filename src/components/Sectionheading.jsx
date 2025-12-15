const Sectionheading = ({ children, className = "" }) => {
  const base = "text-[#333333] font-ngh font-normal text-[24px] leading-[100%]";
 return (
    <div className=" flex flex-col gap-2
        sm:flex-col
        md:flex-row md:items-center md:justify-between
      "
    
    
    
    
    >
      <p
        className={className ? className : `${base} `}
      >
        {children}
      </p>
    </div>
  );
};


export default Sectionheading;
