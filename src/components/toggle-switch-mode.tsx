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
    <div className="flex h-full w-full flex-col place-content-around">
      <nav className={toggleDarkMode ? "dark" : ""}>
        <h3 className="text-xl">I am some heading</h3>

        <div className="flex">
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

      <div className={toggleDarkMode ? "dark" : ""}>
        <h1 className="">Fun facts about React</h1>
        <ul className="text-sm">
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
