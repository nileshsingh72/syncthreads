import React, { useEffect } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Box } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Notlogged from "../components/Notlogged";
import { getCoordinates, logoutAction } from "../redux/auth.action";
import Navbar from "../components/Navbar";
function Dashboard() {
  const dispatch = useDispatch();
  const { lati, long, isAuth, user } = useSelector((state) => state.auth);
  var name = user.name || "";
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  useEffect(() => {
    dispatch(getCoordinates());
  }, [lati, long]);
  return (
    <>
      {isAuth ? <Navbar handleLogout={handleLogout} name={name} /> : null}
      <Box w="50%" m="auto">
        {isAuth ? (
          <Map
            mapLib={maplibregl}
            initialViewState={{
              longitude: long,
              latitude: lati,
              zoom: 13,
            }}
            style={{
              marginTop: "30px",
              borderRadius: "5%",
              border: "2px solid lightgreen",
              width: "100%",
              height: " calc(100vh - 77px)",
            }}
            // mapStyle={process.env.REACT_APP_URL_KEY}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=vdoNW1KXk1pqLcleSY8p"
          >
            <Marker longitude={long} latitude={lati} anchor="bottom">
              <GoLocation fontSize={"22px"} />
            </Marker>
            <NavigationControl position="top-right" />
          </Map>
        ) : (
          <Notlogged />
        )}
      </Box>
    </>
  );
}

export default Dashboard;
