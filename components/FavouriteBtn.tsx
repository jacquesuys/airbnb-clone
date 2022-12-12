import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

function FavouriteButton() {
  const [favourite, setFavourite] = useState(false);

  return (
    <HeartIcon
      className={`h-7 cursor-pointer transition duration-200 ease-out ${
        favourite ? "fill-red-400" : "fill-white"
      }`}
      onClick={() => setFavourite(!favourite)}
    />
  );
}

export default FavouriteButton;
