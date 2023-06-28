import Image from "next/image";

export default function NewsletterSignUp() {
  return (
    <div className="grid h-full w-full grid-cols-1 place-content-between bg-white p-4 font-outfit duration-500 hover:shadow-lg md:col-span-2 md:grid-cols-2">
      <div className="relative w-full bg-slate-800 md:order-last">
        <Image
          src="/assets/news-letter-sign-up/illustration-sign-up-desktop.svg"
          alt="Sing up news letter image"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col place-content-between bg-slate-600">
        <h1>stay updated container</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <label>Email address</label>
        <input />
        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}
