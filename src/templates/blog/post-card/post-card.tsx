import Image from "next/image";
import Link from "next/link";

interface Author{
  name: string
  avatar: string
}

interface PostCardProps{
  slug: string
  title: string
  description: string
  image: string
  date: string
  author: Author

}

export function PostCard({ slug, title, description, image, date, author }: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-3xl border border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 r hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="flex flex-col gap-2 p-2 rounded-md overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          {/* Data container */}
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 rounded-bl-xl">
            <span className="text-gray-300 text-body-xs ">{date}</span>
          </div>

          <Image
            src={image}
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-t-xl"
          />
        </div>

        {/* Post Info */}
        <div className="flex flex-col  p-2 space-y-2">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-heading-xs text-gray-100 ">
              {title}
            </h2>
            <p className='text-body-xs text-gray-300 line-clamp-2'>
              {description}
            </p>
          </div>

          <hr className="border-gray-400" />
          
          <div className="flex gap-2 align-center">
            <Image
              src={author?.avatar}
              alt=""
              width={20}
              height={20}
              className="rounded-full border border-blue-200"
            />
            <span className='text-body-xs text-gray-300'>{author?.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
