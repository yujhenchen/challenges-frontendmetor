import { useState } from "react";
import { FeedbackSteps } from "../constants/InteractiveRating";
import InteractiveThanks from "./InteractiveRatingThanks";
import InteractiveRatingForm from "./InteractiveRatingForm";

const ratingNumbers = Array.from(Array(5).keys()).map((x) => x + 1);

export default function InteractiveRating() {
  const [selectedRating, setSelectedRating] = useState(0);

  const [currentStep, setCurrentStep] = useState(FeedbackSteps.First);

  function handleRating(event: React.MouseEvent): void {
    event.preventDefault();

    setSelectedRating((previousNum) => {
      return previousNum === +(event.target as HTMLButtonElement).value
        ? 0
        : +(event.target as HTMLButtonElement).value;
    });
  }

  function handleSubmitRating(event: React.MouseEvent): void {
    event.preventDefault();

    setCurrentStep(
      selectedRating !== 0 ? FeedbackSteps.Second : FeedbackSteps.First
    );
  }

  function handleResetRating(event: React.MouseEvent): void {
    event.preventDefault();

    setCurrentStep(FeedbackSteps.First);
    setSelectedRating(0);
  }

  const RatingForm = () => {
    return (
      <InteractiveRatingForm
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
        <InteractiveThanks
          ratingNumber={selectedRating}
          handleResetRating={handleResetRating}
        />
      ) : (
        <RatingForm />
      )}
    </>
  );
}
