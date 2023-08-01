import Image from "next/image";
import { useState } from "react";

export default function NewsletterSignUp() {
  const infoList = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleSubmit(event: React.MouseEvent): void {
    event.preventDefault();

    // set or remove invisible for the validation string
  }
  return (
    <div className="flex h-full w-full flex-col bg-white p-4 duration-500 hover:shadow-lg lg:col-span-2 lg:flex-row-reverse">
      <div className="flex h-full w-full lg:w-1/2">
        <picture className="relative aspect-[4/3] w-full md:order-last md:aspect-auto">
          <source
            srcSet="/assets/news-letter-sign-up/illustration-sign-up-desktop.svg"
            media="(min-width: 1024px)"
          />
          <Image
            src="/assets/news-letter-sign-up/illustration-sign-up-mobile.svg"
            alt="Sing up news letter image"
            fill
            style={{ objectFit: "contain" }}
          />
        </picture>
      </div>

      <div className="flex flex-col place-content-between lg:w-1/2 lg:px-2 lg:py-6">
        <h1 className="text-xl">Stay updated!</h1>
        <p className="text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="w-full text-xs md:space-y-2">
          {infoList.map((element, index) => (
            <li key={index} className="flex items-center space-x-1">
              <div className="relative aspect-square h-4">
                <Image
                  src="assets/news-letter-sign-up/icon-list.svg"
                  alt={element}
                  fill
                  className="aspect-square object-cover"
                />
              </div>
              <span>{element}</span>
            </li>
          ))}
        </ul>
        <form className="flex w-full flex-col space-y-2">
          <div className="flex place-content-between items-center space-x-1">
            <label className="flex text-xs">Email address:</label>
            <div className="flex grow flex-col">
              <span
                className={`"text-right text-xs text-red-600 ${
                  showErrorMessage ? "" : "hidden"
                }`}
              >
                Valid email required
              </span>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="h-6 w-full rounded-lg border"
                required
              />
            </div>
          </div>
          <button
            className="min-w-0 rounded-xl bg-slate-600 px-4 py-2 text-sm text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
