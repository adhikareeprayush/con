import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

type BlogCardProps = {
  minReadingTime: Number | null;
  title: string;
  excerpt: string;
  canonicalUrl: string;
  type: "latest" | "popular" | "featured";
};

const type_colors = {
  latest: "#45A7DE",
  popular: "#EA5F38",
  featured: "#6A26F1",
};

const BlogCard = ({
  minReadingTime,
  title,
  excerpt,
  canonicalUrl,
  type,
}: BlogCardProps) => {
  return (
    <div className="bg-white h-auto min-h-[280px] sm:min-h-[320px] md:h-[360px] p-4 sm:p-6 md:p-8 justify-between rounded-[16px] sm:rounded-[20px] flex flex-col w-full md:w-[410px]">
      <div className="flex items-center justify-between mb-4">
        <span
          className={`rounded-full w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]`}
          style={{ backgroundColor: type_colors[type] }}
        ></span>
        <p className="text-xs sm:text-sm leading-[160%] font-medium font-jakarta">
          {minReadingTime ? `${minReadingTime} min read` : "N/A"}
        </p>
      </div>
      <Link href={canonicalUrl} target="_blank" className="mb-4">
        <h3 className="text-primary line-clamp-3 text-lg sm:text-xl md:text-[26px] font-jakarta font-semibold leading-[150%] tracking-tighter hover:underline">
          {title}
        </h3>
      </Link>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm sm:text-base line-clamp-3 font-jakarta leading-[180%] font-medium text-[#555555] flex-1 max-w-[180px]">
          {excerpt}
        </p>
        <Button
          variant="primary"
          className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0"
          icon={
            <Image
              src="/arrow-right.svg"
              alt="Right Arrow Icon"
              width={48}
              height={48}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          }
          iconPosition="left"
          type="button"
        />
      </div>
    </div>
  );
};

export default BlogCard;
