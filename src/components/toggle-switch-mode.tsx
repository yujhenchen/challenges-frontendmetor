import { useState } from "react";

type Props = {
  toggleDarkMode: boolean;
};

export default function ToggleSwitchMode({ toggleDarkMode }: Props) {
  const [toggleChecked, setToggleChecked] = useState(false);

  function handleClickToggle() {
    setToggleChecked((toggleChecked) => !toggleChecked);
  }

  return (
    <div className="relative flex h-full w-full grid-cols-1 flex-col bg-white p-4  font-outfit duration-500 hover:shadow-lg md:col-span-2 md:col-span-2 md:grid-cols-2">
      <nav
        className={`flex w-full place-content-between items-end ${
          toggleDarkMode ? "dark" : ""
        }`}
      >
        <h3 className="text-xl">I am some heading</h3>

        <div className="flex items-center space-x-1">
          <p className="">Light</p>
          <input
            type="checkbox"
            className="toggle"
            checked={toggleChecked}
            onClick={handleClickToggle}
          />
          <p className="">Dark</p>
        </div>
      </nav>

      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          toggleDarkMode ? "dark" : ""
        }`}
      >
        <h2 className="text-2xl">Fun facts about React</h2>
        <ul className="list-disc px-6 py-2 text-sm marker:text-sky-400">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}
