import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center justify-center mt-24">
       <Image src="https://www.google.pt/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" width="300" height="100" alt="Google Banner"/>
       <HomeSearch/>
      </div>
    </>
  );
}
