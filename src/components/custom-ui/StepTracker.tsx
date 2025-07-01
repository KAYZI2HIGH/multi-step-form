import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const StepSymbols = [
  {
    default: "/icons/gray/pin-location-on-map.svg",
    light: "/icons/light/pin-location-on-map.svg",
    dark: "/icons/dark/pin-location-on-map.svg",
    alt: "Location Icon",
  },
  {
    default: "/icons/gray/left-right-direction.svg",
    light: "/icons/light/left-right-direction.svg",
    dark: "/icons/dark/left-right-direction.svg",
    alt: "Direction Icon",
  },
  {
    default: "/icons/gray/settings.svg",
    light: "/icons/light/settings.svg",
    dark: "/icons/dark/settings.svg",
    alt: "Settings Icon",
  },
  {
    default: "/icons/gray/messages.svg",
    light: "/icons/light/message-icon.svg",
    dark: "/icons/dark/message-icon.svg",
    alt: "Messages Icon",
  },
  {
    default: "/icons/gray/love-icon.svg",
    light: "/icons/light/love-icon.svg",
    dark: "/icons/dark/love-icon.svg",
    alt: "Love Icon",
  },
];

const StepTracker = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <div className="md:w-full relative">
      <div className="h-full w-[3px] md:w-full md:h-[3px] rounded-full bg-[#AAAAAA] absolute max-md:left-1/2 max-md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 -z-10 ">
        <div
          className="hidden md:flex h-full bg-[#13B7CC] transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStep + 1) / (totalSteps + 1)) * 100}%` }}
        ></div>
        <div
          className="md:hidden w-full bg-[#13B7CC] transition-all duration-300 ease-in-out"
          style={{ height: `${((currentStep + 1) / (totalSteps + 1)) * 100}%` }}
        ></div>
      </div>
      <div className="md:w-full max-md:h-full flex flex-col md:flex-row justify-evenly items-center relative z-50">
        {StepSymbols.map((symbol, index) => {
          const imgSrc = currentStep > index ? symbol.dark : symbol.default;
          return (
            <div
              key={index}
              className={cn(
                `h-[64px] w-[64px] rounded-full border-[3px] ${
                  currentStep >= index ? "border-[#13B7CC]" : "border-[#AAAAAA]"
                } flex items-center justify-center z-50 relative bg-[#111827] cursor-pointer`
              )}
              style={{
                boxShadow:
                  currentStep === index
                    ? "0 0 10px rgba(19, 183, 204, 0.5)"
                    : "none",
                transition: "all 0.3s, box-shadow 0.3s",
                backgroundColor: currentStep === index ? "#13B7CC" : "#111827",
              }}
            >
              <Image
                src={currentStep === index ? symbol.light : imgSrc}
                alt={symbol.alt}
                width={32}
                height={32}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepTracker;
