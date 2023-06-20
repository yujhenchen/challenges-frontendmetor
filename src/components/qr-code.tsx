import Image from "next/image";

const QRCode: React.FC = () => {
  return (
    <div className="container flex h-full w-full flex-col items-center justify-items-center bg-white p-4">
      <div className="relative h-64 max-h-[576px] w-full max-w-[576px] overflow-hidden rounded-2xl">
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
      <p className="text-center font-outfit font-normal text-grayishblue">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCode;
