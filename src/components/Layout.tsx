import EmptyCard from "./EmptyCard";
import RatingCard from "./InteractiveRating/RatingCard";
import SuccessModal from "./NewsLetter/SuccessModal";
import NewsletterSignUp from "./NewsLetter/NewsletterSignUp";
import QRCode from "./QRCode";
import ToggleSwitchMode from "./ToggleSwitchMode";

export default function Layout() {
  return (
    <main className="container mx-auto grid grid-flow-row auto-rows-fr grid-cols-1 items-center justify-evenly justify-items-center gap-x-4 gap-y-8 bg-slate-200 p-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <EmptyCard>
        <QRCode />
      </EmptyCard>
      <EmptyCard>
        <RatingCard />
      </EmptyCard>
      <ToggleSwitchMode toggleDarkMode={false} />
      <NewsletterSignUp />
      <SuccessModal />
      <EmptyCard />
    </main>
  );
}
