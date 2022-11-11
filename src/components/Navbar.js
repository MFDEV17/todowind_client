import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { GiStairsGoal } from "react-icons/gi";
import { MdNotificationsNone, MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex justify-between items-center mt-5 border-b-gray-600 max-w-full px-4 border-b pb-4">
      <div className="flex gap-5 items-center text-2xl">
        <div className="tooltip tooltip-bottom" data-tip="Menu [m]">
          <label className="btn btn-ghost btn-square" htmlFor="my-drawer">
            <HiMenuAlt2 className="h-7 w-7" />
          </label>
        </div>
        <span className="font-bold max-[500px]:hidden">Todowind</span>{" "}
        <span className="text-sm underline max-[600px]:hidden">v 1.0.4</span>
      </div>
      <div className="flex items-center gap-2 max-[1000px]:hidden">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="input input-md text-md ml-4 placeholder:text-gray-400"
          placeholder="Search..."
        />
        <div className="flex items-center gap-1">
          <kbd className="kbd kbd-md">⌘</kbd>
          <kbd className="kbd kbd-md">k</kbd>
        </div>
      </div>
      <div className="btn-group">
        <div className="tooltip tooltip-bottom" data-tip="Add task [q]">
          <div className="btn btn-ghost normal-case">
            <AiOutlinePlus className="h-7 w-7" />
          </div>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Your productivity">
          <div className="btn btn-ghost normal-case gap-3">
            <GiStairsGoal className="h-7 w-7" />
            <span className="max-[690px]:hidden">12 / 25</span>
          </div>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Notifications">
          <div className="btn btn-ghost normal-case">
            <MdNotificationsNone className="h-7 w-7" />
          </div>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Account">
          <div className="btn btn-ghost normal-case">
            <MdOutlineAccountCircle className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
