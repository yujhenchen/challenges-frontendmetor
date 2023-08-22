import Image from "next/image";

export default function QRCode() {
  return (
    <div className="flex h-full w-full flex-col place-content-around items-center p-4">
      <div className="relative aspect-square w-full max-w-[576px] overflow-hidden rounded-2xl hover:rotate-12 hover:duration-500">
        <Image
          src="/assets/image-qr-code.png"
          alt="Picture of the QR code"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-center text-base font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-center text-sm text-slate-600">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
