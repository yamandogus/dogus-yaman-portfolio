import Link from "next/link";
import React from "react";
import Image from "next/image";

interface MediumPost {
  id: number;
  title: string;
  link: string;
  image: string;
}

const mediumPosts: MediumPost[] = [
  {
    id: 1,
    title: "Optimistic Updates",
    link: "https://medium.com/@yamandogus251/optimistic-updates-a7b765485851",
    image: "/optimistic.png",
  },
  {
    id: 2,
    title: "OJS Nutrition App Geliştirme Serüvenim",
    link: "https://medium.com/@yamandogus251/ojs-nutrition-app-geli%C5%9Ftirme-ser%C3%BCvenim-65912226e368",
    image: "/ojsmt.png",
  },
  {
    id: 3,
    title: "Müşteri Temsilciliğinden Frontend Gelişim Yolculuğuna",
    link: "https://medium.com/@yamandogus251/m%C3%BC%C5%9Fteri-temsilcili%C4%9Finden-frontend-geli%C5%9Fim-yolculu%C4%9Fuma-145d9ad9cc35",
    image: "/mtfront.png",
  },
];

const MediumCard: React.FC<{ post: MediumPost }> = ({ post }) => (
  <div className="bg-gray-100 p-4 w-full h-full rounded hover:bg-gray-200 transition-colors hover:cursor-pointer hover:shadow-custom duration-300 ease-in-out">
    <Link href={post.link} target="_blank">
      <div className="grid grid-cols-2">
        <div>
          <Image src={post.image} alt="medium" width={100} height={100} />
        </div>
        <div>
          <p>{post.title}</p>
        </div>
      </div>
    </Link>
  </div>
);

export const Medium = () => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-center">
        <h6 className="sm:text-3xl md:text-xl font-bold mb-6 text-center border p-4 rounded text-gray-400 shadow-custom inline-block">
          Medium Posts
        </h6>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center text-center text-gray-600 font-bold">
        {mediumPosts.map((post) => (
          <MediumCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
