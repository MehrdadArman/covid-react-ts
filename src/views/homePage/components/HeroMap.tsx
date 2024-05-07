import { useRef, useState } from "react";
import Map, {
  Source,
  Layer,
  MapLayerMouseEvent,
  MapRef,
  MapGeoJSONFeature,
  Popup,
  LngLat,
  NavigationControl,
} from "react-map-gl/maplibre";
import CountryGeoJson from "@/constants/countries.geo.json";
import { Polygon, Position } from "geojson";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { mapStyleUrl } from "@/assets/data/urlConfig";

interface SelectedCountryIF {
  name: string;
  polygonCoordinates: Position[][];
  center: LngLat;
}
const HeroMap = () => {
  //**  navigation */
  const navigate = useNavigate();

  // ** Ref
  const mapRef = useRef<MapRef>(null);

  // ** State
  const [selectedCountry, setSelectedCountry] =
    useState<SelectedCountryIF | null>(null);

  // Handle click on the map
  const handleClickOnMap = (e: MapLayerMouseEvent) => {
    //  If map is not initialized yet
    if (mapRef.current === null) return;

    // If a country is already selected, unselect it
    if (selectedCountry) setSelectedCountry(null);

    // Get the features of the clicked point
    let features: MapGeoJSONFeature[] = mapRef.current?.queryRenderedFeatures(
      e.point,
      {
        validate: false,
      }
    );

    // If no features found, return
    if (features.length === 0 || features[0].properties.name === undefined)
      return;

    let countryName = features[0].properties.name;
    let countryGeometry = features[0].geometry as Polygon;

    // Fly to the clicked country
    mapRef.current?.flyTo(
      {
        center: e.lngLat,
        zoom: 4,
      },
      { duration: 1000 }
    );

    setSelectedCountry({
      name: countryName,
      polygonCoordinates: countryGeometry.coordinates,
      center: e.lngLat,
    });
  };

  //
  const handleClickCountryPopUp = (countryName: string) => {
    // Redirect to the country page
    navigate(`/country/${countryName}`);
  };

  return (
    <Map
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 1,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={mapStyleUrl}
      onClick={handleClickOnMap}
      ref={mapRef}
      maplibreLogo={false}
    >
      <Source type="geojson" data={CountryGeoJson} id="country-geo-json">
        <Layer
          id="geojson-layer"
          type="fill"
          paint={{
            "fill-color": "#00ffbb",
            "fill-opacity": 0.2,
          }}
        />
      </Source>

      {selectedCountry && (
        <Source
          type="geojson"
          data={{
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: selectedCountry.polygonCoordinates,
            },
          }}
          id="selected-country-geo-json"
        >
          <Layer
            id="selected-geojson-layer"
            type="fill"
            paint={{
              "fill-color": "#ff0000",
              "fill-opacity": 0.5,
            }}
          />
        </Source>
      )}
      {selectedCountry?.center && (
        <Popup
          longitude={selectedCountry.center.lng}
          latitude={selectedCountry.center.lat}
          anchor="bottom"
          closeButton={false}
          key={selectedCountry.center.lng + selectedCountry.center.lat}
        >
          <div className="shadow-lg p-5">
            <h1 className="text-gray-800 text-lg  mb-2">
              {selectedCountry.name}
            </h1>
            <Button
              onClick={() => handleClickCountryPopUp(selectedCountry.name)}
              variant={"default"}
              size={"sm"}
            >
              View COVID Data
            </Button>
          </div>
        </Popup>
      )}
      <NavigationControl />
    </Map>
  );
};

export default HeroMap;
