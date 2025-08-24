// src/apis/reels.js
import axios from "axios";

import video1 from "../assets/videos/video1.mov";
import video2 from "../assets/videos/video2.mov";
import video3 from "../assets/videos/video3.mov";
import video4 from "../assets/videos/video4.mov";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mov";
import video7 from "../assets/videos/video7.mov";
import video8 from "../assets/videos/video8.mov";
import video9 from "../assets/videos/video9.mp4";

import ukIcon from "../assets/uk.svg";
import zaIcon from "../assets/za.svg";
import zmIcon from "../assets/zm.svg";
import ZwIcon from "../assets/zim.svg";

const mockReels = [
  { name: "Sophie Turner", flag: ukIcon, location: "London, UK", url: video1 },
  { name: "Raj Laxmi", flag: zaIcon, location: "Mumbai, India", url: video2 },
  { name: "Emma Watson", flag: zmIcon, location: "Paris, France", url: video3 },
  { name: "Zara Khan", flag: ZwIcon, location: "Cape Town, South Africa", url: video4 },
  { name: "Priya Singh", flag: ukIcon, location: "Delhi, India", url: video5 },
  { name: "Ava Patel", flag: zaIcon, location: "Johannesburg, South Africa", url: video6 },
  { name: "Lily James", flag: zmIcon, location: "Lusaka, Zambia", url: video7 },
  { name: "Sara Ali", flag: ZwIcon, location: "Harare, Zimbabwe", url: video8 },
  { name: "Maya Kapoor", flag: ukIcon, location: "London, UK", url: video9 },
];

export const fetchReels = async () => {
  try {
    await axios.get("/api/reels"); // Simulated request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockReels);
      }, 1000); // Simulate network delay
    });
  } catch (error) {
    console.log(error.message)
    throw new Error("Failed to fetch reels");
  }
};
