"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-400 sm:text-center md:text-left">DOĞUŞ YAMAN</h1>
          <h2 className="sm:text-sm md:text-2xl text-red-500 font-semibold">
            <Typewriter
              words={[
                "<JUNIOR FRONTEND DEVELOPER/>",
                "<REACT JS DEVELOPER/>",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Sağlık Yönetimi geçmişine ve yazılım ile telekomünikasyon
            alanlarında deneyime sahip biri olarak, kullanıcı davranışına dair
            derin bir anlayış ve benzersiz bir bakış açısı sunuyorum. OnlyJS
            Academy&apos;de Front-End geliştirme eğitimi aldım ve bu alandaki
            bilgimi Sürekli genişletiyorum. Öğrenmeye olan istekliliğim ve
            azmimle kendimi bu alanda geliştiriyorum.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="mailto:yamandogus251@gmail.com" target="_blank">
              <img
                width="35"
                className="cursor-pointer hover:rotate-12 duration-300 transition all"
                height="35"
                src="https://img.icons8.com/color/30/gmail-new.png"
                alt="gmail-new"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dogusyaman/"
              target="_blank"
            >
              <img
                width="35"
                className="cursor-pointer hover:rotate-12 duration-300 transition all"
                height="35"
                src="https://img.icons8.com/fluency/48/linkedin.png"
                alt="linkedin"
              />
            </Link>
            <Link href="https://github.com/yamandogus" target="_blank">
              <img
                width="35"
                className="cursor-pointer hover:rotate-12 duration-300 transition all text-gray-600"
                height="35"
                src="https://img.icons8.com/ios-glyphs/30/github.png"
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200">
          <Image
              src="/profile.jpg"
              alt="Doğuş Yaman"
              fill
              className="object-cover hover:scale-105 transition duration-300 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
