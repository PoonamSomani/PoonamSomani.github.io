import React from "react";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import HomeIcon from "@material-ui/icons/Home";

export const WEBSOCKET_URL = "http://kaboom.rksv.net/watch";
export const APP_URL = "http://kaboom.rksv.net/api/";
export const OVERVIEW_URL = APP_URL + "historical";

export enum TRANSLATION_TYPES {
  "TRANSLATION" = "translation",
}
export const menuItems = [
  { text: `navigationMenu.overview`, icon: <HomeIcon />, link: "/" },
  {
    text: `navigationMenu.liveChart`,
    icon: <LiveTvIcon />,
    link: "/live",
  },
];
