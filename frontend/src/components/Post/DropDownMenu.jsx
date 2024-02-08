import React, { useState } from "react";

function DropdownMenu({ option1, option2 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative", zIndex: 9999 }}>
      <div className="relative inline-block text-right">
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button-1"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              className="h-4 justify-end"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>Meatballs-Menu</title>{" "}
                <g
                  id="Meatballs-Menu"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <rect id="Container" x="0" y="0" width="24" height="24">
                    {" "}
                  </rect>{" "}
                  <path
                    d="M5,14 C6.1045695,14 7,13.1045695 7,12 C7,10.8954305 6.1045695,10 5,10 C3.8954305,10 3,10.8954305 3,12 C3,13.1045695 3.8954305,14 5,14 Z"
                    id="shape-03"
                    fill="#030819"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 Z"
                    id="shape-02"
                    fill="#030819"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M19,14 C20.1045695,14 21,13.1045695 21,12 C21,10.8954305 20.1045695,10 19,10 C17.8954305,10 17,10.8954305 17,12 C17,13.1045695 17.8954305,14 19,14 Z"
                    id="shape-01"
                    fill="#030819"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`absolute z-10 ${
          isOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700`}
        style={{ left: "-175%" }}
      >
        <ul
          className="py-2 text-sm p-2 text-gray-700 text-right dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {/* Dropdown items */}
          <li className="py-1">{option1}</li>
          <li className="py-1">{option2}</li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
