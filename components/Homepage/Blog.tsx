"use client";
import Link from "next/link";
import Button from "../Resuable/Button";
import BlogCard from "../Resuable/BlogCard";

const Blog = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-18 gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 col-span-1 lg:col-span-2">
        <h2 className="col-span-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 font-jakarta font-semibold leading-[130%] tracking-tighter">
          Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
        </h2>

        <div className="col-span-1 flex flex-col gap-6 sm:gap-10 md:gap-16 lg:gap-20">
          <p className="text-sm sm:text-base font-jakarta leading-[180%] font-medium">
            We are the top digital marketing agency for branding corp. We offer
            a full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/services">
              <Button
                label="See More"
                type="button"
                variant="outline"
                icon={null}
                iconPosition="left"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full col-span-1 lg:col-span-2 gap-6 sm:gap-8">
        <BlogCard
          minReadingTime={5}
          title="Boost Your SEO Rankings with These Proven Strategies"
          excerpt="Discover effective SEO strategies to enhance your website's visibility and drive organic traffic."
          canonicalUrl="https://example.com/blog/boost-your-seo-rankings"
          type="latest"
        />
        <BlogCard
          minReadingTime={7}
          title="The Ultimate Guide to Content Marketing in 2024"
          excerpt="Explore the latest trends and techniques in content marketing for 2024."
          canonicalUrl="https://example.com/blog/ultimate-guide-content-marketing-2024"
          type="popular"
        />
        <BlogCard
          minReadingTime={6}
          title="Top 10 Digital Marketing Tools You Need to Know"
          excerpt="Stay ahead in the digital marketing game with our list of top tools."
          canonicalUrl="https://example.com/blog/top-10-digital-marketing-tools"
          type="featured"
        />
      </div>
    </div>
  );
};

export default Blog;
