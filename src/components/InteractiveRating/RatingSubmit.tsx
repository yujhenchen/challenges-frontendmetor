type Props = {
  buttonName: string;
  handleOnClick: () => void;
};

export default function RatingSubmit({ buttonName, handleOnClick }: Props) {
  return (
    <button
      type="button"
      className="w-full rounded-xl bg-amber-600 py-2 text-white"
      onClick={handleOnClick}
    >
      {buttonName}
    </button>
  );
}
