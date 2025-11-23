import { Arrow } from "../../Utils/SVGs";

const Button = ({ name, onClick }) => {
  return (
    <div
      className="actionbutton cursor-pointer  sm:text-base bg-stone-900 rounded-2xl px-8 py-2 w-48 text-neutral-200 flex text-lg uppercase  hover:text-rose-400 gap-2"
      onClick={onClick}
    >
      {name}
      <Arrow />
    </div>
  );
};

export default Button;
