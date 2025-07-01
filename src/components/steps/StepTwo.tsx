import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/schema/FormSchema";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import Image from "next/image";

const ticketOptions = [
  {
    value: "business",
    label: "Business",
    icon: "/icons/business.svg",
  },
  {
    value: "economy",
    label: "Economy",
    icon: "/icons/user.svg",
  },
];

const StepTwo = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <FormField
      control={form.control}
      name="ticketType"
      render={({ field }) => (
        <FormItem className="space-y-5">
          <FormLabel className="text-center block text-[24px]">
            What type of ticket do you want?
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex max-md:flex-col gap-10 w-full items-center justify-center"
            >
              {ticketOptions.map((opt) => (
                <div
                  key={opt.value}
                  className="peer-wrapper"
                >
                  <RadioGroupItem
                    value={opt.value}
                    id={opt.value}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={opt.value}
                    className="flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer border-[3px] border-white/10 peer-data-[state=checked]:border-[#13B7CC] peer-data-[state=checked]:bg-[#13B7CC]/10  h-[150px] w-[200px] bg-white/10 shadow-md hover:bg-white/20 hover:scale-[101%] peer-data-[state=checked]:scale-[101%] transition-all duration-300 text-white/40 font-medium hover:peer-data-[state=checked]:border-[#13B7CC] hover:peer-data-[state=checked]:bg-[#13B7CC]/10"
                  >
                    <Image
                      src={opt.icon}
                      width={57}
                      height={57}
                      alt={opt.label}
                    />
                    {opt.label}
                  </label>
                </div>
              ))}
            </RadioGroup>

            {/* <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-4 justify-center"
            >
              {ticketOptions.map((option) => (
                <FormItem
                  key={option.value}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <FormControl>
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="peer"
                    />
                  </FormControl>
                  <label
                    htmlFor={option.value}
                    className="w-28 h-28 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all peer-checked:border-black peer-checked:bg-muted"
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="mt-2 text-sm">{option.label}</span>
                  </label>
                </FormItem>
              ))}
            </RadioGroup> */}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default StepTwo;
