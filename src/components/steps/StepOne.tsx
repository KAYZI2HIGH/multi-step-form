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
import { Input } from "../ui/input";
import Image from "next/image";
import { CalendarDays, Clock, Search } from "lucide-react";

const StepOne = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-y-10 md:gap-x-16">
      <FormField
        control={form.control}
        name="from"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex gap-2 mb-2">
              <Image
                src={"/icons/departure.svg"}
                alt="Departure Icon"
                width={20}
                height={16}
              />
              From
            </FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  placeholder="Country, city or airport"
                  className="bg-white text-black"
                  {...field}
                />
              </FormControl>
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/60" size={20} />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="to"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex gap-2 mb-2">
              <Image
                src={"/icons/arrival.svg"}
                alt="Arrival Icon"
                width={20}
                height={16}
              />
              To
            </FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  placeholder="Country, city or airport"
                  className="bg-white text-black"
                  {...field}
                />
              </FormControl>
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/60" size={20} />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="departDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex gap-2 mb-2">
              <CalendarDays size={20} />
              Depart Date
            </FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  placeholder="YYYY-MM-DD"
                  className="bg-white text-black"
                  {...field}
                />
              </FormControl>
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/60" size={20} />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="returnDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex gap-2 mb-2">
              <CalendarDays size={20} />
              Return Date
            </FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  placeholder="YYYY-MM-DD"
                  className="bg-white text-black"
                  {...field}
                />
              </FormControl>
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/60" size={20} />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default StepOne;
