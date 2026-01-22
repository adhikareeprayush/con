import Image from "next/image";
import Button from "../Resuable/Button";
const Testimonials = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-20 flex flex-col gap-8 sm:gap-12 md:gap-20">
      <h2 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed sm:leading-10 md:leading-14 tracking-tighter">
        “ They thoroughly analyze our industry and target audience, allowing
        them to develop customized campaigns that effectively reach and engage
        our customers. Their creative ideas and cutting-edge techniques have
        helped us stay ahead of the competition.”
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/Profile.jpg"
            alt="Profile Image"
            width={70}
            height={70}
            className="rounded-full object-cover w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
          <div className="flex flex-col">
            <h6 className="text-primary text-base sm:text-lg md:text-xl leading-7 sm:leading-9 font-bold">
              Prayush Adhikari
            </h6>
            <p className="font-medium text-sm sm:text-base">CEO of Basecamp Corp</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-9">
          <Button
            variant="outline"
            icon={
              <Image
                src="/arrow-left-black.svg"
                alt="Left Arrow Icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            type="button"
          />
          <div className="flex">
            <p className="text-primary! text-sm sm:text-base underline font-medium leading-7">
              01
            </p>
            <p className="text-sm sm:text-base font-medium leading-7">/05</p>
          </div>
          <Button
            variant="primary"
            icon={
              <Image
                src="/arrow-right.svg"
                alt="Right Arrow Icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
