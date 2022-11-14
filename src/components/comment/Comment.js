const Comment = () => {
  return (
    <div className="flex border-b-gray-600 border-b pb-4 last:border-none">
      <div className="avatar self-start">
        <div className="w-7 rounded-full">
          <img src="https://placeimg.com/192/192/people" alt={'avatar'}/>
        </div>
      </div>
      <div className="pl-4">
        <p className="font-semibold">strahsvid17</p>
        <p className="pt-3 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
          dolorem eum facilis id laboriosam minima, neque porro quam quasi
          repellat sapiente vel, vitae. Architecto consectetur impedit nam neque
          perspiciatis quis, quod soluta voluptate? Adipisci aliquam, aliquid
          architecto atque consequatur, corporis culpa dolorem error est eveniet
          explicabo facere fuga illum impedit iure iusto laboriosam minima nemo
          obcaecati officia perferendis perspiciatis porro possimus provident
          quam quibusdam quis reiciendis rem repellat, repellendus saepe sed
          temporibus ullam velit veritatis voluptatem voluptates. Animi
          assumenda beatae consectetur cum dolor dolore ducimus fugiat incidunt
          minus nemo nobis optio quo ratione repudiandae sed tempora unde, vero
          voluptatum.
        </p>
      </div>
    </div>
  );
};

export default Comment;
