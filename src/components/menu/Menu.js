import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { BsCloudSun } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import ProjectList from "./ProjectList";

const Menu = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"/>
      <ul className="px-2 py-3 w-80 bg-base-100 text-base-content">
        <li className="hidden max-[1000px]:block">
          <input
            type="text"
            className="input input-bordered rounded-xl mb-10 w-full"
            placeholder="Search..."
          />
        </li>
        <li className="btn btn-ghost justify-between w-full normal-case no-animation">
          <div className="flex gap-3 items-center text-xl">
            <HiOutlineInboxArrowDown className="h-7 w-7" />
            <p>Include</p>
          </div>
          <span>34</span>
        </li>
        <li className="btn btn-ghost justify-between w-full normal-case no-animation">
          <div className="flex gap-3 items-center text-xl">
            <BsCloudSun className="h-7 w-7" />
            <p>Your day</p>
          </div>
          <span>34</span>
        </li>
        <li className="btn btn-ghost justify-between w-full normal-case no-animation">
          <div className="flex gap-3 items-center text-xl">
            <AiOutlineCalendar className="h-7 w-7" />
            <p>Scheduled</p>
          </div>
          <span>34</span>
        </li>
        <ProjectList
          list={[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            2, 2,
          ]}
        />
      </ul>
    </div>
  );
};

export default Menu;
