import Card from "./card";
import InteractiveRating from "./interactive-rating";
import QRCode from "./qr-code";

const Content: React.FC = () => {
  return (
    <main className="container mx-auto grid grid-flow-row auto-rows-fr grid-cols-1 items-center justify-evenly justify-items-center gap-x-4 gap-y-8 bg-slate-100 p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {/* <QRCode />
      <InteractiveRating /> */}
      <Card>
        <QRCode />
      </Card>
      <Card>
        <InteractiveRating />
      </Card>
      <Card />
    </main>
  );
};

export default Content;
