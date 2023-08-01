import React from "react";
import Image from "next/image";

export default function NewsLetterSuccessModal() {
  return (
    <div className="flex flex-col bg-white p-4 shadow-lg duration-500">
      <div className="relative aspect-square w-[15%]">
        <Image
          src="/assets/news-letter-sign-up/icon-success.svg"
          alt="News Letter Sign Up Succeeded"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex pb-2 pt-4">
        <h1 className="text-lg font-bold text-slate-800">
          Thanks for subscribing!
        </h1>
      </div>
      <div className="flex py-2">
        <p className="text-sm font-normal text-slate-600">
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="min-w-0 rounded-xl bg-slate-600 px-4 py-2 text-sm text-white">
          Dismiss message
        </button>
      </div>
    </div>
  );
}
