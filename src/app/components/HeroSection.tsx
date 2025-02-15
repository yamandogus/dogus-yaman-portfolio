"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-400 sm:text-center md:text-left">
            DOĞUŞ YAMAN
          </h1>
          <h2 className="sm:text-sm md:text-2xl text-red-500 font-semibold">
            <Typewriter
              words={["<JUNIOR FRONTEND DEVELOPER/>", "<REACT JS DEVELOPER/>"]}
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
              <Image
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
              <Image
                width="35"
                className="cursor-pointer hover:rotate-12 duration-300 transition all"
                height="35"
                src="https://img.icons8.com/fluency/48/linkedin.png"
                alt="linkedin"
              />
            </Link>
            <Link href="https://github.com/yamandogus" target="_blank">
             <div className="bg-gray-400 rounded-full">
             <Image
                width="35"
                className="cursor-pointer hover:rotate-12 duration-300 transition all text-gray-600"
                height="35"
                src="https://img.icons8.com/ios-glyphs/30/github.png"
                alt="github"
              />
             </div>
            </Link>
            <a href="CV.pdf" download="CV.pdf">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:rotate-12 duration-300 transition all fill-gray-400"
              >
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"/>
                <path fill="#1f2937" d="M14 2V8H20L14 2Z"/>
                <text
                  x="8"
                  y="16"
                  className="text-xs font-bold"
                  fill="white"
                  style={{ fontSize: '6px', fontWeight: 'bold' }}
                >
                  CV
                </text>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="hidden md:block relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              src="/profile.jpg"
              alt="Doğuş Yaman"
              fill
              className="object-cover hover:scale-105 transition duration-300 ease-in-out"
              priority
            />
          </div>
          <div className="block md:hidden relative w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-gray-200">
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
