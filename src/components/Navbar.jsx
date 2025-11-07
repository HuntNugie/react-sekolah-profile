import Humberger from './partials/Humberger';
import LinkNavbar from './partials/LinkNavbar';
import NavbarMobile from './partials/NavbarMobile';
import { useState } from 'react';
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-[#1E8F4F]">
            SMK Bina Insan Harapan
        </h1>

        {/* HAMBURGER ICON (Mobile) */}
        <Humberger cekOpen={(isTrue)=>setIsOpen(!isTrue)} />

        {/* NAV MENU DESKTOP */}
        <ul id="navMenu" className="hidden md:flex gap-6 text-lg">
          <li> <LinkNavbar data="home" name="Home" nav="/" /></li>
          <li>
            <LinkNavbar data="about" name="tentang kami" nav="/about" />
          </li>
          <li>
            <LinkNavbar data="prestasi" name="Prestasi" nav="/prestasi" />
          </li>
          <li>
            <LinkNavbar data="kontak" name="kontak" nav="/kontak" />
          </li>
        </ul>
      </div>

    {isOpen && (  <NavbarMobile />)}
    </nav>
  );
};

export default Navbar;
