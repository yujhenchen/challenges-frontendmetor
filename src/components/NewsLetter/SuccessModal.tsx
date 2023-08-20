import React from "react";

type Props = {
  onDismiss: () => void;
};

export default function SuccessModal({ onDismiss }: Props) {
  return (
    <div className="flex flex-col bg-white p-4 shadow-lg duration-500">
      <div className="aspect-square w-[15%]">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#d97706"
            d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0z"
          />
        </svg>
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
        <button
          className="min-w-0 rounded-xl bg-amber-600 px-4 py-2 text-sm text-white"
          onClick={onDismiss}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}
