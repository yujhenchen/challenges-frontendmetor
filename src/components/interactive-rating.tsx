const InteractiveRating: React.FC = () => {
  const rateNumbers = [...Array(5).keys()];

  return (
    <div className="flex h-full flex-col place-content-between  bg-white p-4 duration-500 hover:shadow-lg">
      <div>star</div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex w-full place-content-between">
        {rateNumbers.map((rate) => {
          return (
            <button key={rate} className="rounded-full bg-sky-200">
              {rate}
            </button>
          );
        })}
      </div>
      <input type="submit" className="w-full rounded-2xl bg-sky-200"></input>
    </div>
  );
};

export default InteractiveRating;
