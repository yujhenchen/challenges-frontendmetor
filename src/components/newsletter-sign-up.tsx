import Image from "next/image";

export default function NewsletterSignUp() {
  return (
    <div className="grid h-full w-full grid-cols-1 place-content-between bg-white p-4 font-outfit duration-500 hover:shadow-lg md:grid-cols-2 md:place-content-center lg:col-span-2">
      <picture className="relative aspect-[4/3] w-full md:order-last md:aspect-auto">
        <source
          srcSet="/assets/news-letter-sign-up/illustration-sign-up-desktop.svg"
          media="(min-width: 640px)"
        />
        <Image
          src="/assets/news-letter-sign-up/illustration-sign-up-mobile.svg"
          alt="Sing up news letter image"
          fill
          style={{ objectFit: "contain" }}
        />
      </picture>
      <div className="flex flex-col place-content-between">
        <h1 className="text-xl">Stay updated!</h1>
        <p className="text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="text-xs">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <div className="flex py-4">
          <label className="text-sm">Email address</label>
          <input className="min-w-0 rounded-lg border border-slate-600" />
        </div>

        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}
