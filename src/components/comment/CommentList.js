import Comment from "./Comment";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const CommentList = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <div className={`flex gap-2 mt-4 pb-4 items-center`}>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onClick={() => setShowComments(!showComments)}
          />
          <AiOutlineRight className="swap-off" />
          <AiOutlineDown className="swap-on" />
        </label>
        <p>Comments ({`${comments.length}`})</p>
      </div>
      <div className="border-b-gray-600 border-b" />
      {showComments ? (
        <>
          <div className={`flex flex-col gap-5 pt-10`}>
            {comments.map(() => (
              <Comment />
            ))}
          </div>

          <div className="ml-1 sticky bottom-0.5 mt-4 z-50">
            <textarea
              className="textarea resize-none textarea-bordered w-full"
              placeholder="Comment"
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default CommentList;