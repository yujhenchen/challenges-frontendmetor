import Image from "next/image";

type Props = {
  ratingNum: number;
};

export default function InteractiveThanks({ ratingNum }: Props) {
  return (
    <div className="flex h-full flex-col justify-items-center bg-white p-4">
      <div className="relative mt-4 flex aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/assets/illustration-thank-you.svg"
          alt="Picture of thank you for rating"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className=" mt-2 w-full rounded-3xl bg-orange-600 p-2 text-center text-xs text-white">
        You selected {ratingNum} out of 5
      </div>
      <h1 className="mt-6 text-center text-xl font-bold text-slate-800">
        Thank you!
      </h1>
      <p className="mt-2 text-center text-sm text-slate-600">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
