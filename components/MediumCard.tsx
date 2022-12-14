import Image from "next/image";
import { MediumCardType } from "../types";

function MediumCard({ img, title }: MediumCardType) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-xl" alt={title} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
