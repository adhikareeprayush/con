"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "../Resuable/Button";

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question: "What services does your agency offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including SEO optimization, content marketing, social media management, paid advertising, email marketing, web design, and analytics consulting. Our tailored approach ensures each strategy aligns with your business goals and target audience.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results timeline varies depending on your industry and specific goals. Generally, SEO efforts show meaningful results within 3-6 months, while paid advertising can generate immediate traffic. We provide regular reports and insights so you can track progress every step of the way.",
    },
    {
      question: "Can you work with businesses of all sizes?",
      answer:
        "Absolutely! We work with startups, small businesses, and established enterprises. Our flexible service packages and customizable strategies allow us to scale our approach to meet the unique needs and budget of any organization, regardless of size.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success through clear KPIs tailored to your business objectives such as conversion rates, ROI, website traffic, lead generation, and engagement metrics. We provide detailed monthly reports and dashboards so you can see exactly how our strategies are impacting your bottom line.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-20">
      <div className="bg-white grid lg:grid-cols-2 grid-cols-1 p-4 sm:p-6 md:p-8 gap-8 sm:gap-12 md:gap-16 lg:gap-20 rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 col-span-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-600 font-jakarta font-semibold leading-[130%] tracking-tighter">
            Digital Marketing FAQs
          </h2>
          <p className="text-sm sm:text-base font-jakarta leading-[180^%] font-medium">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Button
              label="More Questions"
              type="button"
              variant="outline"
              icon={null}
              iconPosition="left"
            />
            <Link
              href={"/contact"}
              className="text-primary text-sm sm:text-base font-medium underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`flex flex-col h-auto gap-4 sm:gap-6 md:gap-8 border-t-2 py-3 sm:py-4 ${
                index === faqs.length - 1 ? "border-b-2" : ""
              }`}
            >
              <div className="flex items-center gap-2 w-full justify-between">
                <h4 className="text-primary leading-[150%] tracking-tighter font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                  {faq.question}
                </h4>
                <button
                  className="cursor-pointer text-2xl sm:text-3xl md:text-4xl font-light leading-none flex-shrink-0"
                  aria-label="Expand FAQ"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                >
                  {expandedIndex === index ? "-" : "+"}
                </button>
              </div>
              {expandedIndex === index && (
                <p className="text-sm sm:text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
