import Card from "./Card";
import InteractiveRating from "./InteractiveRating";
import NewsletterSignUp from "./NewsletterSignUp";
import QRCode from "./QRCode";
import ToggleSwitchMode from "./ToggleSwitchMode";

export default function Content() {
  return (
    <main className="container mx-auto grid grid-flow-row auto-rows-fr grid-cols-1 items-center justify-evenly justify-items-center gap-x-4 gap-y-8 bg-slate-200 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <Card>
        <QRCode />
      </Card>
      <Card>
        <InteractiveRating />
      </Card>
      <ToggleSwitchMode toggleDarkMode={false} />
      <NewsletterSignUp />
    </main>
  );
}
