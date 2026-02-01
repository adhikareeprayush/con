import Image from "next/image";
import Button from "../Resuable/Button";
import { useState } from "react";

const testimonialsData = [
  {
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Mr. Tirth Raj Pant",
    position: "Chairman of Nisarga Hospital, Dhangadi Nepal",
    image: "/testimonials/nisargahospitalms.jpg",
  },
  {
    quote:
      "Their team is incredibly responsive and always willing to go the extra mile to ensure our satisfaction. They provide regular updates and transparent reporting, keeping us informed about the progress of our campaigns. Their dedication to delivering results is truly commendable.",
    name: "Mr. Parash Balayar",
    position: "CEO & Founder at Care and Clean Pvt Ltd",
    image: "/testimonials/ceocareandclean.png",
  },
  {
    quote:
      "Working with this digital marketing agency has been a game-changer for our business. Their expertise in SEO, social media marketing, and content creation has significantly boosted our online presence and helped us attract more customers. We highly recommend their services to anyone looking to grow their business.",
    name: "Ms. Sandip Acharya",
    position: "Founder of Coffee Club, Dhangadi Nepal",
    image: "/testimonials/coffeeclub.jpg",
  },
  {
    quote:
      "The team at this agency is knowledgeable, professional, and results-driven. They took the time to understand our business goals and developed a comprehensive website that not only looks great but also performs exceptionally well. Their attention to detail and commitment to quality is evident in every aspect of their work.",
    name: "Mr. Nawin Paneru",
    position: "Chief Editor, Shabdastra Daily online Newsportal",
    image: "/testimonials/newportal.jpg",
  },
  {
    quote:
      "We are extremely satisfied with the smooth and efficient website development process provided by this agency. They delivered our project on time and within budget, exceeding our expectations. Their expertise in web design and development is truly impressive.",
    name: "Mr. Sanju Poudel",
    position: "CEO at Desire Perfume Pvt Ltd",
    image: "/testimonials/desire.jpg",
  },
  {
    quote:
      "Their digital marketing strategies have significantly increased our online visibility and customer engagement. The team's expertise in SEO, social media marketing, and content creation has helped us reach a wider audience and grow our business. We highly recommend their services to anyone looking to enhance their online presence.",
    name: "",
    position: "CEO, Harish Baniya -Octagon Education Consultancy",
    image: "/testimonials/octagonconsultancy.png",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  const { quote, name, position, image } = testimonialsData[currentIndex];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-20 flex flex-col gap-8 sm:gap-12 md:gap-20">
      <h2 className="text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed sm:leading-10 md:leading-14 tracking-tighter">
        “ {quote} ”
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src={image}
            alt={`Profile Image of ${name}`}
            width={70}
            height={70}
            className="rounded-full object-cover w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
          <div className="flex flex-col">
            <h6 className="text-primary text-base sm:text-lg md:text-xl leading-7 sm:leading-9 font-bold">
              {name}
            </h6>
            <p className="font-medium text-sm sm:text-base">{position}</p>
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
            onClick={handlePrev}
          />
          <div className="flex">
            <p className="text-primary! text-sm sm:text-base underline font-medium leading-7">
              {currentIndex + 1}
            </p>
            <p className="text-sm sm:text-base font-medium leading-7">
              /{testimonialsData.length}
            </p>
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
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
