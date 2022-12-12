import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import FavouriteButton from "./FavouriteBtn";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: any) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow px-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <FavouriteButton />
        </div>

        <h4 className="text-xl pt-2">{title}</h4>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex items-center justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div className="flex flex-col">
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
