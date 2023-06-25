import Image from "next/image";

const InteractiveThanks: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-items-center bg-slate-800 p-4">
      <div className="relative flex aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/assets/illustration-thank-you.svg"
          alt="Picture of thank you for rating"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full rounded-3xl bg-slate-700 p-2 text-center text-xs text-orange-600">
        You selected 4 out of 5
      </div>
      <h1 className="text-center text-xl font-bold text-white">Thank you!</h1>
      <p className="text-center text-sm text-slate-400">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default InteractiveThanks;
