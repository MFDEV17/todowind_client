import { BiPlus } from "react-icons/bi";

const AddTask = () => {
  return (
    <div className="pt-2 pb-4 max-w-max">
      <div className="hover:bg-gray-800 duration-200 rounded-xl flex items-center gap-2 p-2 hover:cursor-pointer">
        <BiPlus className="h-6 w-6" />
        <p className="text-lg">Add task</p>
      </div>
    </div>
  );
};

export default AddTask;