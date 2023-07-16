type Props = {
  buttonName: string;
  handleOnClick: (event: React.MouseEvent) => void;
};

export default function InteractiveRatingSubmit({
  buttonName,
  handleOnClick,
}: Props) {
  return (
    <button
      type="submit"
      className="w-full rounded-3xl bg-orange-600 py-2 text-white"
      onClick={handleOnClick}
    >
      {buttonName}
    </button>
  );
}
