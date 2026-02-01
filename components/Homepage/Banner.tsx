import Image from "next/image";
import Button from "../Resuable/Button";

const Banner = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="relative w-full p-4 sm:p-6 md:p-8 lg:p-10 min-h-40 sm:min-h-[180px] md:min-h-[200px] lg:h-[235px] bg-[#0F660F] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden">
        <span className="z-10 text-white font-semibold tracking-tighter text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[130%] text-center sm:text-left">
          Ready to work with us
        </span>
        <Button
          label="Get Started"
          variant="secondary"
          className="bg-white z-10 text-sm sm:text-base shrink-0"
          type="button"
          icon=""
          iconPosition="left"
        />
        <Image
          src="/bg.png"
          alt="Banner Background Image"
          width={300}
          height={200}
          className="absolute h-[600px] sm:h-[800px] md:h-[1000px] w-auto rotate-50 opacity-50"
        />
        <Image
          src="/bgNoise.png"
          alt="Banner Background Image"
          width={300}
          height={200}
          className="absolute w-full h-full left-0 z-0 opacity-10"
        />
      </div>
    </div>
  );
};

export default Banner;
