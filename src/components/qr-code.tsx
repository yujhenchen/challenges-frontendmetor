import Image from "next/image";

const QRCode: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-items-center p-4">
      <div className="relative h-[375px] w-[375px] lg:h-[576px] lg:w-[576px]">
        <Image
          src="/assets/image-qr-code.png"
          alt="Picture of the QR code"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p>Improve your front-end skills by building projects</p>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCode;
