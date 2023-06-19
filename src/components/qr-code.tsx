import Image from "next/image";

const QRCode: React.FC = () => {
  return (
    <div>
      <div className="relative h-36 w-36">
        <Image
          src="/assets/image-qr-code.png"
          alt="Picture of the QR code"
          fill
          style={{ objectFit: "cover" }}
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
