import Image from "next/image";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function NewsletterSignUp() {
  const infoList = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [userInputEmail, setUserInputEmail] = useState("");

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function isEmailValid(email: string): boolean {
    const expression = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return expression.test(email);
  }

  function onChangeEmail(email: string): void {
    setShowErrorMessage(false);
    setUserInputEmail(email);
  }

  function onSubmit(event: React.MouseEvent): void {
    event.preventDefault();

    if (isEmailValid(userInputEmail)) {
      setShowErrorMessage(false);
      setShowSuccessMessage(true);
    } else {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  }
  return (
    <div className="relative flex h-full w-full flex-col bg-white p-4 duration-500 hover:shadow-lg lg:col-span-2 lg:flex-row-reverse">
      {showSuccessMessage ? (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-items-center p-12 backdrop-blur-lg">
          <SuccessModal />
        </div>
      ) : null}

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

      <div className="flex flex-col place-content-between lg:w-1/2 lg:px-2">
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
                value={userInputEmail}
                onChange={(event) => onChangeEmail(event.target.value)}
              />
            </div>
          </div>
          <button
            className="min-w-0 rounded-xl bg-amber-600 px-4 py-2 text-sm text-white"
            type="submit"
            onClick={onSubmit}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
