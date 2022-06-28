import { Wrapper } from "@googlemaps/react-wrapper";
import React, {useState, useEffect} from "react";
import "./Map.css"

const markers = [
  { lat: -25.363, lng: 131.044 },
  { lat: -15.363, lng: 122.044 }
];

const Map = ({ onClick, onIdle, children, style, ...options }) => {

// [START maps_react_map_component_add_map_hooks]

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

// [END maps_react_map_component_add_map_hooks]
// [START maps_react_map_component_options_hook]
// because React does not do deep comparisons, a custom hook is used
// see discussion in https://github.com/googlemaps/js-samples/issues/946

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

// [END maps_react_map_component_options_hook]
// [START maps_react_map_component_event_hooks]

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

// [END maps_react_map_component_event_hooks]
// [START maps_react_map_component_return]

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

// [END maps_react_map_component_return]



// [START maps_react_map_marker_component]

const Marker = (options) => {
  const [marker, setMarker] = React.useState();
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

// remove marker from map on unmount

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  '<div id="bodyContent">' +
  "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
  "sandstone rock formation in the southern part of the " +
  "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
  "south west of the nearest large town, Alice Springs; 450&#160;km " +
  "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  "features of the Uluru - Kata Tjuta National Park. Uluru is " +
  "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  "Aboriginal people of the area. It has many springs, waterholes, " +
  "rock caves and ancient paintings. Uluru is listed as a World " +
  "Heritage Site.</p>" +
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  "(last visited June 22, 2009).</p>" +
  "</div>" +
  "</div>";

  React.useEffect(() => {
    if (marker) {
      const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
      });
      marker.setOptions(options);

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          shouldFocus: false
        });
      });
    }
  }, [marker, options]);

  return null;
};

// [END maps_react_map_marker_component]

export default function MapComponent() {

  const [positions, setPositions] = useState([]);
  const lastIndexOfPositions = positions.length -1;

  useEffect(() => {
      fetch('http://localhost:3002/locations')
          .then(response => response.json())
          .then(json => {setPositions(json) })
  }, [])

  return (
    <section className="mapplace">
      <section className="map">
      <Wrapper apiKey={"AIzaSyCZCT3bmiMcc3TcYVE1UQTbf3suEJmgpa4"}>
        <Map
          center={positions.at(lastIndexOfPositions)}
          zoom={6}
          style={{height: "100%" }}
        >
          {positions.map((position) => {
            return <Marker position={{lat: position.lat, lng: position.lng}} />;
          })}
        </Map>
      </Wrapper>
    </section>
    </section>
  );
}