// LIBRARIES
import React from "react";
import Image from "next/legacy/image";

// COMPONENTS
import addClassName from "components/hooks/addClassName";

// PROPS
interface responsiveImageProps {
  aspectRatio: string;
  alt: string;
  className?: string;
  src: string;
  height?: number;
  width?: number;
}

// FC
const ResponsiveImage = ({
  aspectRatio,
  alt,
  className = "",
  src,
  height,
  width,
}: responsiveImageProps) => {
  // aspectRatio MUST have a / in its string
  const aspectX =
    aspectRatio.indexOf("/") >= 0
      ? parseInt(aspectRatio.slice(0, aspectRatio.indexOf("/")))
      : 0;
  const aspectY =
    aspectRatio.indexOf("/") >= 0
      ? parseInt(aspectRatio.slice(aspectRatio.indexOf("/") + 1))
      : 0;

  const getHeightFromWidth = () => {
    if (width) return (aspectY / aspectX) * width;
    else {
      console.log("No width provided to ResponsiveImage");
      return 0;
    }
  };
  const getWidthFromHeight = () => {
    if (height) return (aspectX / aspectY) * height;
    else {
      console.log("No height provided to ResponsiveImage");
      return 0;
    }
  };

  return (
    <div className={"block h-full w-full" + addClassName(className)}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width ? width : getWidthFromHeight()}
        height={height ? height : getHeightFromWidth()}
      />
    </div>
  );
};

export default ResponsiveImage;
