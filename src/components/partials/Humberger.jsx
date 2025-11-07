import { useState } from "react";
export default function Humberger ({cekOpen}) {
    const [isTrue,setIsTrue] = useState(false);
    const handleFunc = ()=>{
        setIsTrue(!isTrue);
        cekOpen(isTrue);
    }
    return (
    <button id="navToggle" className="md:hidden flex flex-col gap-1.5" onClick={handleFunc}>
      <span className="block w-6 h-[3px] bg-[#1E8F4F] rounded" />
      <span className="block w-6 h-[3px] bg-[#1E8F4F] rounded" />
      <span className="block w-6 h-[3px] bg-[#1E8F4F] rounded" />
    </button>
  );
}
