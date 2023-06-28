import Image from "next/image";

export default function QRCode() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-items-center p-4">
      <div className="relative aspect-square w-full max-w-[576px] overflow-hidden rounded-2xl">
        <Image
          src="/assets/image-qr-code.png"
          alt="Picture of the QR code"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className="pb-2 pt-4 text-center font-outfit text-base font-bold">
        Improve your front-end skills by building projects
      </h1>
      <p className="text-center font-outfit text-sm text-slate-600">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}
