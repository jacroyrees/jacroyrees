import React from "react";
import ImageContent from "./ImageContent";
import Description from "./Description";

function Content() {
  return (
    <div className="w-[100%] h-[90%] flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-[60%] p-4 text-white items-center justify-center flex">
        <Description />
      </div>
      <div className="w-full lg:w-[40%] p-4 flex justify-center items-center relative mt-4 lg:mt-0">
        <ImageContent />
      </div>
    </div>
  );
}

export default Content;