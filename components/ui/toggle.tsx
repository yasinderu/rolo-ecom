"use client";

interface ToggleProps {
  handleToggle: () => void;
  isOn: boolean;
}

export default function Toggle({ handleToggle, isOn }: ToggleProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggle-switch"
        className="sr-only"
        checked={isOn}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle-switch"
        className={`flex items-center h-6 w-10 rounded-full cursor-pointer transition-colors duration-300
            ${isOn ? "bg-blue-500" : "bg-gray-300"}`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
              ${isOn ? "translate-x-5" : "translate-x-1"}`}
        />
      </label>

      <span className="text-gray-700 font-[300] ml-2">
        Save to Google Sheet
      </span>
    </div>
  );
}
