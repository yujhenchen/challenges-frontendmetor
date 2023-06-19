import Image from "next/image";

const QRCode: React.FC = () => {
  return (
    <div>
      <div>
        <Image
          src="/xxx.png"
          width={0}
          height={0}
          alt="Picture of the QR code"
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
