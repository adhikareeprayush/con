import Image from "next/image";

const HowWeWork = () => {
  return (
    <section className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-18 gap-10 sm:gap-14 md:gap-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
        <h1 className="col-span-1 text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-tighter leading-tight md:leading-12">
          Provide the best service with out of the box ideas
        </h1>
        <p className="col-span-1 text-sm sm:text-base">
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-between gap-6 sm:gap-8 md:gap-10">
        <div className="flex relative flex-col lg:col-span-2 h-[280px] sm:h-[320px] md:h-[382px] bg-primary rounded-2xl md:rounded-3xl w-full p-6 sm:p-8 md:p-10 justify-between gap-4 sm:gap-6 overflow-hidden">
          <Image
            src="/bg.png"
            alt="Background Decorative Image"
            width={600}
            height={500}
            className="absolute h-[400px] sm:h-[500px] md:h-[650px] w-[400px] sm:w-[500px] md:w-[650px] max-w-none transform rotate-45 object-cover -top-24 sm:-top-32 md:-top-40 -left-10 sm:-left-14 md:-left-16 opacity-40"
          />
          <div className="flex flex-col z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-white font-bold leading-tight md:leading-20">
              920
              <span className="text-[#99CF63]">+</span>
            </h1>
            <p className="text-[#878C91] text-sm sm:text-base md:text-[19px] font-medium leading-6 sm:leading-8">
              Project finish with superbly
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 z-10">
            <Image
              src="/Profile.jpg"
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10 sm:w-14 sm:h-14 md:size-18 border-2 border-white"
            />
            <Image
              src="/Profile.jpg"
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10 sm:w-14 sm:h-14 md:size-18 border-2 border-white"
            />
            <Image
              src="/Profile.jpg"
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10 sm:w-14 sm:h-14 md:size-18 border-2 border-white"
            />
            <Image
              src="/Profile.jpg"
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10 sm:w-14 sm:h-14 md:size-18 border-2 border-white"
            />
            <span className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white">+</span>
          </div>
        </div>
        <div className="flex lg:col-span-3 relative h-[250px] sm:h-[300px] md:h-[382px] items-center justify-center">
          <Image
            className="absolute w-full h-full object-cover rounded-2xl md:rounded-4xl"
            src="/how-we-work.png"
            alt="How We Work Image"
            width={800}
            height={382}
          />
          <div className="flex items-center justify-center border-6 sm:border-8 md:border-10 border-white rounded-full bg-[#EA6038] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-2 sm:-right-6 md:-right-10">
            <Image src="/play.svg" alt="Play Video" width={44} height={44} className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11" />
          </div>
          <h3 className="z-100 font-semibold text-xl sm:text-3xl md:text-4xl lg:text-[48px] text-white tracking-[4px] sm:tracking-[6px] md:tracking-[10px] text-center px-4">
            HOW WE WORK
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
