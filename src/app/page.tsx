"use client"

import Bidpage from "@/components/bidpage";
import MediaCard from "@/components/card";
import NavBar from "@/components/navbar";
import Recommended from "@/components/recommended";


export default function Home() {
  return (
    <>
   <NavBar/>
   <MediaCard/>
   <Bidpage/>
   <Recommended/>
    </>
  );
}
