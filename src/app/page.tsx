"use client";
import CustomButton from "@/components/custom-ui/CustomButton";
import StepTracker from "@/components/custom-ui/StepTracker";
import StepFive from "@/components/steps/StepFive";
import StepFour from "@/components/steps/StepFour";
import StepOne from "@/components/steps/StepOne";
import StepThree from "@/components/steps/StepThree";
import StepTwo from "@/components/steps/StepTwo";
import { Form } from "@/components/ui/form";
import useMultiStepForm from "@/hooks/useMultiStepForm";
import { formSchema } from "@/lib/schema/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const [data, setData] = useState<z.infer<typeof formSchema>>({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    ticketType: "business",
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      departDate: "",
      returnDate: "",
      ticketType: "business",
    },
  });

  const { step, currentStep, back, next, isFirstStep, isLastStep, totalSteps } =
    useMultiStepForm({
      steps: [
        <StepOne form={form} />,
        <StepTwo form={form} />,
        <StepThree data={data} />,
        <StepFour />,
        <StepFive />,
      ],
    });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setData((prev) => {
      return { ...prev, ...values };
    });
    next();
  }

  return (
    <div className="w-full max-w-[800px] py-[39px] mx-auto my-auto space-y-[40px] overflow-x-hidden">
      <div>
        <h1 className="text-[28px] font-medium text-center">
          Search Flights, Cheapest Flights
        </h1>
        <p className="text-white/60 text-[16px] text-center mt-2">
          All the plane tickets you are looking for together!
        </p>
      </div>
      <div className="max-md:space-x-5 md:space-y-[40px] flex md:flex-col justify-center">
        <StepTracker
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 w-full"
          >
            {step}
            <div className="flex max-md:flex-col-reverse max-md:gap-5 gap-10 w-full justify-center items-center">
              {!isFirstStep && (
                <CustomButton
                  type="button"
                  text="Back"
                  textColor="black"
                  color="white"
                  iconPosition="left"
                  onClick={back}
                  disabled={currentStep === 0}
                />
              )}
              {isLastStep && (
                <CustomButton
                  text="Next"
                  color="#13B7CC"
                  iconPosition="right"
                  disabled={isLastStep}
                />
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
