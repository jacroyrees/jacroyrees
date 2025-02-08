import React from "react";
import ImageContent from "./ImageContent";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Description from "./Description";
import Personal from "./Personal";

function Content() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Jac Rees Resume.pdf`;
    link.href = "Jac Rees Resume.pdf";
    link.click();
  };

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