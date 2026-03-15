import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTripStore } from "@/store/useTripStore";

type TStepProps = {
  stepNumber: number;
  stepText: string;
};

export default function StepButton({
  stepNumber,
  stepText,
}: Readonly<TStepProps>) {
  const step = useTripStore((state: any) => state.currentStep);
  const setStepCount = useTripStore((state: any) => state.setStep);
  return (
    <Button
      className={cn(
        step == stepNumber
          ? "bg-slate-200 border-l-primary border-l-2"
          : "border-l-slate-100 hover:border-l-primary",
        "rounded-none  border-l-3 w-[100cqw] flex items-start justify-start font-medium",
      )}
      variant={"ghost"}
      onClick={() => {
        setStepCount(stepNumber);
      }}
    >
      {stepText}
    </Button>
  );
}
