import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchResultsType } from "../types";

function Map({ searchResults }: SearchResultsType) {
  const [location, setLocation] = useState(searchResults[0]);

  const coordinates = searchResults.map((res: any) => ({
    latitude: res.lat,
    longitude: res.long,
  }));

  const { latitude, longitude }: any = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    latitude,
    longitude,
    zoom: 11,
  });

  return (
    <ReactMapGl
      {...viewport}
      style={{ width: "100%", height: "100%" }}
      mapStyle={`mapbox://styles/jaxuys/clbjulmfi002314nubtuczvty`}
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(ev) => setViewPort(ev.viewState)}
    >
      {searchResults.map((result: any) => (
        <div>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              onClick={() => setLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="golf-course"
            >
              ⛳
            </p>
          </Marker>
        </div>
      ))}
    </ReactMapGl>
  );
}

export default Map;
