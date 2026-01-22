import logo from "@/public/logo.png";
import Image from "next/image";
import Button from "./Button";
import bell from "@/public/bell.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8.5">
      <div className="flex items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24">
        <Link className="flex items-center gap-2" href={"/"}>
          <Image src={logo} alt="Logo" width={44} height={44} className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
          <h3 className="font-manrope font-bold text-lg sm:text-xl md:text-2xl text-black hidden sm:block">
            Convolution Labs
          </h3>
        </Link>
        {/* <ul className="flex items-center gap-14 text-black font-jakarta font-semibold text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          label="Get Started"
          variant="secondary"
          icon={null}
          iconPosition="left"
          className="py-1.5 sm:py-2 px-3 sm:px-4 md:px-6 font-manrope text-xs sm:text-sm md:text-base"
        />
        <Button
          type="button"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full px-0 py-0 flex items-center justify-center"
          icon={
            <Image src={bell} alt="Notification Bell" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          }
          variant="primary"
          iconPosition="left"
        />
      </div>
    </div>
  );
};

export default Nav;
