import { useState } from "react";
import Images from "../images.json";
import Next from "../images/icon-next.svg";
import Previous from "../images/icon-previous.svg";

function ImagePreview({ slides }) {
  const [imageIndex, setImageIndex] = useState(0);
  const length = slides.length;

  const NextImage = () => {
    setImageIndex(imageIndex === length - 1 ? 0 : imageIndex + 1);
  };

  const PreviousImage = () => {
    setImageIndex(imageIndex === 0 ? length - 1 : imageIndex - 1);
  };

  return (
    <div className="relative">
      <img src={slides[imageIndex].img} alt="" />
      <img
        className="flex absolute top-1/2 left-3 bg-white rounded-full px-4 py-3"
        src={Previous}
        onClick={PreviousImage}
        alt="previous"
      />
      <img
        className="flex absolute top-1/2 right-3  bg-white rounded-full px-4 py-3"
        src={Next}
        onClick={NextImage}
        alt="next"
      />
    </div>
  );
}

export default ImagePreview;
