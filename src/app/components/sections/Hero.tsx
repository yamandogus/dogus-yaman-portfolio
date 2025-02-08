"use client";
import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-8 md:py-12 lg:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative w-24 h-24 overflow-hidden rounded-full bg-muted">
          <Image
            src="https://ui-avatars.com/api/?name=Doğuş+Yaman&background=random"
            alt="Doğuş Yaman"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            DOĞUŞ YAMAN
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Junior Frontend Developer
          </p>
        </div>
        <div className="max-w-[42rem] space-y-4">
          <p className="text-muted-foreground sm:text-lg">
            React.js, TypeScript, JavaScript, Bootstrap ve Material UI konularında deneyimli. 
            Vite, React Router DOM, Zustand ve NPM gibi modern teknolojilerle çalışıyorum.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default" size="lg" className="rounded-full">
              Projelerimi İncele
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              CV'mi İndir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
