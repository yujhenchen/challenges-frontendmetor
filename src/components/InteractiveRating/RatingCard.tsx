import { useState } from "react";
import { FeedbackSteps } from "../../constants/InteractiveRating";
import RatingThanks from "./RatingThanks";
import RatingForm from "./RatingForm";

const ratingNumbers = Array.from(Array(5).keys()).map((x) => x + 1);

export default function RatingCard() {
  const [selectedRating, setSelectedRating] = useState(0);

  const [currentStep, setCurrentStep] = useState(FeedbackSteps.First);

  function handleRating(event: React.MouseEvent): void {
    setSelectedRating((previousNum) => {
      const value = +(event.target as HTMLButtonElement).value;
      return previousNum === value ? 0 : value;
    });
  }

  function handleSubmitRating(): void {
    setCurrentStep(
      selectedRating !== 0 ? FeedbackSteps.Second : FeedbackSteps.First
    );
  }

  function handleResetRating(): void {
    setCurrentStep(FeedbackSteps.First);
    setSelectedRating(0);
  }

  const Form = () => {
    return (
      <RatingForm
        ratingNumbers={ratingNumbers}
        selectedRating={selectedRating}
        handleRating={handleRating}
        handleSubmit={handleSubmitRating}
      />
    );
  };

  return (
    <>
      {currentStep === FeedbackSteps.Second && selectedRating !== 0 ? (
        <RatingThanks
          ratingNumber={selectedRating}
          handleResetRating={handleResetRating}
        />
      ) : (
        <Form />
      )}
    </>
  );
}
