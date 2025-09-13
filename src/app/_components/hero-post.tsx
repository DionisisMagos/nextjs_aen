import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mb-20 md:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Cover Image */}
        <div className="w-full">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>

        {/* Post Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            <Link
              href={`/posts/${slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {title}
            </Link>
          </h3>

          <div className="text-gray-500 text-sm mb-6">
            <DateFormatter dateString={date} />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {excerpt}
          </p>

          <div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  );
}
