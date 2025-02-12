"use client";
import { Button } from "@nextui-org/react";
import GitHubCalendar from "react-github-calendar";

export default function ServicesSection() {
  return (
    <div className="mb-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-gray-400">
          Repolarımı görmek istersen
          <br />
          <a
            className="text-blue-900 hover:underline duration-300 transition ease-in-out"
            href="https://github.com/yamandogus"
          >
            Github
          </a>{" "}
          sayfamı kontrol edebilirsin.
        </h2>
        <Button className="bg-gray-100 text-gray-900 rounded-full px-6 py-2">
          Github Calendar
        </Button>
        <div className="flex justify-center items-center font-bold text-gray-400 mt-8">
          <GitHubCalendar
            username="yamandogus"
            colorScheme="dark"
            blockSize={10}
            blockMargin={4}
            showWeekdayLabels
            hideColorLegend={false}
          />
        </div>
      </div>
    </div>
  );
}
