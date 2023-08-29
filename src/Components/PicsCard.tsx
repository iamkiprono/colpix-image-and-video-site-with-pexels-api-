import { pics } from "./Homepage";

const PicsCard = ({ pic }: { pic: pics }) => {
  return (
    <div className="">
      <img
        className="md:w-64 w-[350px] h-96 object-cover"
        src={pic.src.large}
        alt={pic.alt}
      />
    </div>
  );
};

export default PicsCard;
