"use client"
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomButton = ({
  text,
  color,
  textColor = "white",
  iconPosition,
  onClick,
  type = "submit",
  disabled = false,
}: {
  text: string;
    color: string;
  textColor?: string;
  iconPosition?: "left" | "right";
    onClick?: () => void;
    type?: "submit" | "button";
  disabled?: boolean;
}) => {
  return (
    <Button
      className="cursor-pointer flex gap-3 justify-between items-center rounded-full !px-16 py-5 hover:bg-opacity-60 transition-all duration-200 hover:scale-105 hover:shadow-lg"
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconPosition && iconPosition === "left" && <ChevronLeft size={20} />}
      <span className="text-[16px] font-medium">{text}</span>
      {iconPosition === "right" && <ChevronRight size={20} />}
    </Button>
  );
};

export default CustomButton;
