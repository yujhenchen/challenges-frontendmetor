const InteractiveRating: React.FC = () => {
  const rateNumbers = [...Array(5).keys()];

  return (
    // <div className="h-full w-full bg-white font-outfit duration-500 hover:shadow-lg">
    <div className="flex h-full flex-col place-content-between bg-slate-800 p-4">
      <div className="flex h-fit w-fit rounded-full bg-slate-600 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          fill="#ea580c"
        >
          {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </div>
      <h1 className="text-base font-bold text-white">How did we do?</h1>
      <p className="font-normal text-slate-400">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex w-full place-content-between space-x-3">
        {rateNumbers.map((rate) => {
          return (
            <button
              key={rate}
              className="aspect-square w-[20%] rounded-full bg-slate-600 text-center text-white duration-200 hover:bg-orange-400"
            >
              {rate + 1}
            </button>
          );
        })}
      </div>
      <button className="w-full rounded-3xl bg-orange-600 py-2 text-white">
        Submit
      </button>
    </div>
    // </div>
  );
};

export default InteractiveRating;
