"use client";
import { ReactElement, useState } from "react";

const useMultiStepForm = ({ steps }: { steps: ReactElement[] }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === steps.length - 1) return;
    setCurrentStep((prev) => prev + 1);
  };

  const back = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    steps,
    step: steps[currentStep],
    next,
    back,
    goTo,
    currentStep,
    totalSteps: steps.length,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
};

export default useMultiStepForm;
