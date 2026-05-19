import React from 'react';
import rainIcon from "../../../assets/rains.png";
import cloudIcon from "../../../assets/cloud.png";
import sunIcon from "../../../assets/suntwo.png";
import overcastIcon from "../../../assets/heavyclouds.png";

const forecast8 = [
  { day: "Fri, Oct 13", icon: rainIcon, max: 23, min: 14, desc: "light rain" },
  { day: "Sat, Oct 14", icon: rainIcon, max: 22, min: 10, desc: "light rain" },
  { day: "Sun, Oct 15", icon: rainIcon, max: 13, min: 6, desc: "light rain" },
  { day: "Mon, Oct 16", icon: cloudIcon, max: 12, min: 4, desc: "few clouds" },
  { day: "Tue, Oct 17", icon: overcastIcon, max: 12, min: 4, desc: "overcast clouds" },
  { day: "Wed, Oct 18", icon: sunIcon, max: 13, min: 3, desc: "clear sky" },
  { day: "Thu, Oct 19", icon: overcastIcon, max: 12, min: 5, desc: "overcast clouds" },
  { day: "Fri, Oct 20", icon: cloudIcon, max: 9, min: 3, desc: "scattered clouds" },
];

export default forecast8;