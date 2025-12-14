const Sectionheading = ({ children, className = "" }) => {
  const base = "text-[#333333] font-ngh font-semibold text-[24px] leading-[100%]";
 return (
    <div className="flex items-center gap-3">
      <p
        className={className ? className : `${base} `}
      >
        {children}
      </p>
    </div>
  );
};


export default Sectionheading;
