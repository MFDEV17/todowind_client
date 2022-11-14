import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineDown, AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const ProjectList = ({ list }) => {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <li className="mt-10 px-3 bg-gray-800 p-4 rounded-xl sticky top-1">
        <div className="text-lg flex items-center justify-between">
          <div className="flex items-center gap-3 pl-2">
            <TbListDetails className="h-6 w-6" />
            Projects
          </div>
          <div className="btn-group">
            <div className="tooltip" data-tip="Create project">
              <div className="btn btn-ghost btn-sm">
                <AiOutlinePlus />
              </div>
            </div>
            <label className="btn btn-ghost btn-sm swap swap-rotate">
              <input type="checkbox" onClick={() => setShowList(!showList)} />
              <AiOutlineDown className="swap-on" />
              <AiOutlineLeft className="swap-off" />
            </label>
          </div>
        </div>
      </li>
      <ul className={`pt-5 w-full ${!showList && "hidden"}`}>
        {list.map((i, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 hover:bg-gray-800 duration-200 rounded-xl p-3 hover:cursor-pointer"
          >
            <div className="flex gap-3 items-center">
              <GoPrimitiveDot className="h-6 w-6" />
              <p>Java</p>
            </div>
            <div className="btn btn-ghost btn-sm no-animation">
              <HiOutlineDotsHorizontal className={`h-5 w-5`} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;