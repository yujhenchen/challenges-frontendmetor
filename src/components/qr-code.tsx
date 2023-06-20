import Image from "next/image";

const QRCode: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-items-center bg-white p-4">
      <div className="relative h-[256px] max-h-[576px] w-[256px] max-w-[576px] overflow-hidden rounded-2xl md:h-[375px] md:w-[375px]">
        <Image
          src="/assets/image-qr-code.png"
          alt="Picture of the QR code"
          fill
          style={{ objectFit: "contain" }}
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
