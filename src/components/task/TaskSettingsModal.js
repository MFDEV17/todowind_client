import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { MdOutlineCancel, MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineFieldTime,
  AiOutlineFlag,
  AiOutlineTags,
} from "react-icons/ai";
import { BiDotsVertical, BiMenuAltLeft, BiPlus } from "react-icons/bi";
import { useState } from "react";
import CommentList from "../comment/CommentList";
import { IoTodayOutline } from "react-icons/io5";
import { BsX } from "react-icons/bs";

const TaskSettingsModal = ({ id, isDone, taskTitle }) => {
  const [hiddenBtn, setHiddenBtn] = useState({
    projectBtn: false,
    deadlineBtn: false,
    priorityBtn: false,
    reminderBtn: false,
    tagsBtn: false
  });


  return (
    <>
      <input
        checked={isDone}
        type="checkbox"
        id={`settings-modal-${id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box flex flex-col max-w-4xl min-h-[90vh] scrollbar-hide">
          <div className="flex justify-between w-full border-b pb-3 border-b-gray-600 sticky z-50 top-0">
            <div className="flex gap-3 items-center">
              <HiOutlineInboxArrowDown className="h-6 w-6" />
              <h3>Include</h3>
            </div>
            <div className="btn-group">
              <div className="btn btn-ghost btn-sm">
                <AiOutlineArrowDown className="h-5 w-5" />
              </div>
              <div className="btn btn-ghost btn-sm">
                <AiOutlineArrowUp className="h-5 w-5" />
              </div>
              <div className="btn btn-ghost btn-sm">
                <BiDotsVertical className="h-5 w-5" />
              </div>
              <label
                htmlFor={`settings-modal-${id}`}
                className="btn btn-ghost btn-sm"
              >
                <MdOutlineCancel className="h-5 w-5" />
              </label>
            </div>
          </div>
          <div className="mt-6 flex max-h-screen overflow-x-auto scrollbar-hide">
            {/* modal left side */}
            <div className="flex flex-col grow-[2] max-w-[540px]">
              <div className="flex gap-4">
                <input type="checkbox" className="checkbox" />
                <p className="font-bold">{taskTitle}</p>
              </div>
              <div className="flex flex-col gap-2 pl-7 mt-5 pb-4">
                <div className="btn btn-sm gap-2 normal-case btn-ghost self-start">
                  <BiMenuAltLeft className="h-5 w-5" />
                  <p>Add description</p>
                </div>
                <div className="btn btn-sm gap-2 normal-case btn-ghost self-start">
                  <BiPlus className="h-5 w-5" />
                  <p>Add subtask</p>
                </div>
                <div className="border-b border-b-gray-600" />
              </div>
              <CommentList comments={[1, 3, 4, 3, 3, 1]} />
            </div>
            {/* modal left side */}

            {/* modal right side */}
            <div className="grow-[1] sticky top-0 pl-6 min-w-[30vh] min-h-full flex flex-col gap-4">
              <div className="border-b-gray-600 border-b pb-3">
                <p className="text-sm pl-3">Project</p>
                <div
                  className="btn btn-ghost btn-sm normal-case w-full justify-between mt-1.5"
                  onMouseLeave={() => setHiddenBtn({...hiddenBtn, projectBtn: false})}
                  onMouseEnter={() => setHiddenBtn({...hiddenBtn, projectBtn: true})}
                >
                  <div className="flex items-center gap-2">
                    <HiOutlineInboxArrowDown className="h-5 w-5" />
                    <p className="text-start">Include</p>
                  </div>
                  <MdOutlineKeyboardArrowDown
                    className={`h-5 w-5 ${!hiddenBtn.projectBtn && "hidden"}`}
                  />
                </div>
              </div>
              <div className="border-b-gray-600 border-b pb-3">
                <p className="text-sm pl-3">Deadline</p>
                <div
                  className="btn btn-ghost btn-sm normal-case w-full justify-between mt-1.5"
                  onMouseLeave={() => setHiddenBtn({...hiddenBtn, deadlineBtn: false})}
                  onMouseEnter={() => setHiddenBtn({...hiddenBtn, deadlineBtn: true})}
                >
                  <div className="flex items-center gap-2">
                    <IoTodayOutline className="h-5 w-5" color="green" />
                    <p className="text-start">Today</p>
                  </div>
                  <BsX
                    className={`h-5 w-5 ${!hiddenBtn.deadlineBtn && "hidden"}`}
                  />
                </div>
              </div>
              <div className="border-b-gray-600 border-b pb-3">
                <p className="text-sm pl-3">Priority</p>
                <div
                  className="btn btn-ghost btn-sm normal-case w-full justify-between mt-1.5"
                  onMouseLeave={() => setHiddenBtn({...hiddenBtn, priorityBtn: false})}
                  onMouseEnter={() => setHiddenBtn({...hiddenBtn, priorityBtn: true})}
                >
                  <div className="flex items-center gap-2">
                    <AiOutlineFlag className="h-5 w-5" />
                    <p className="text-start">P4</p>
                  </div>
                  <MdOutlineKeyboardArrowDown
                    className={`h-5 w-5 ${!hiddenBtn.priorityBtn && "hidden"}`}
                  />
                </div>
              </div>
              <div className="border-b-gray-600 border-b pb-3">
                <p className="text-sm pl-3">Tags</p>
                <div
                  className="btn btn-ghost btn-sm normal-case w-full justify-between mt-1.5"
                  onMouseLeave={() => setHiddenBtn({...hiddenBtn, tagsBtn: false})}
                  onMouseEnter={() => setHiddenBtn({...hiddenBtn, tagsBtn: true})}
                >
                  <div className="flex items-center gap-2">
                    <AiOutlineTags className="h-5 w-5" />
                    <p className="text-start">P4</p>
                  </div>
                  <MdOutlineKeyboardArrowDown
                    className={`h-5 w-5 ${!hiddenBtn.tagsBtn && "hidden"}`}
                  />
                </div>
              </div>
              <div className="border-b-gray-600 border-b pb-3">
                <p className="text-sm pl-3">Reminders</p>
                <div
                  className="btn btn-ghost btn-sm normal-case w-full justify-between mt-1.5"
                  onMouseLeave={() => setHiddenBtn({...hiddenBtn, reminderBtn: false})}
                  onMouseEnter={() => setHiddenBtn({...hiddenBtn, reminderBtn: true})}
                >
                  <div className="flex items-center gap-2">
                    <AiOutlineFieldTime className="h-5 w-5" />
                    <p className="text-start">P4</p>
                  </div>
                  <MdOutlineKeyboardArrowDown
                    className={`h-5 w-5 ${!hiddenBtn.reminderBtn && "hidden"}`}
                  />
                </div>
              </div>
            </div>
            {/* modal right side */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskSettingsModal;
