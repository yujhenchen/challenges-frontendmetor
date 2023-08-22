import Image from "next/image";
import RatingSubmit from "./RatingSubmit";

type Props = {
  ratingNumber: number;
  handleResetRating: () => void;
};

export default function RatingThanks({
  ratingNumber,
  handleResetRating,
}: Props) {
  return (
    <div className="flex h-full flex-col place-content-between justify-items-center bg-white p-4">
      <div className="relative flex aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/assets/illustration-thank-you.svg"
          alt="Picture of thank you for rating"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex w-full justify-center">
        <div className="rounded-3xl bg-slate-600 p-2 text-center text-xs text-white">
          You selected {ratingNumber} out of 5
        </div>
      </div>
      <h1 className="text-center text-xl font-bold text-slate-800">
        Thank you!
      </h1>
      <p className="text-center text-sm text-slate-600">
        We appreciate you taking the time to give a rating. If you ever need
        more support, do not hesitate to get in touch!
      </p>
      <RatingSubmit
        buttonName="Select Again"
        handleOnClick={handleResetRating}
      />
    </div>
  );
}
