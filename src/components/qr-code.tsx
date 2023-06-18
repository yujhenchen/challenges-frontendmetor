import Image from "next/image";

const QRCode: React.FC = () => {
  return (
    <div>
      <Image src="/xxx.png" width={0} height={0} alt="Picture of the QR code" />
      <p></p>
      <p></p>
    </div>
  );
};

export default QRCode;
