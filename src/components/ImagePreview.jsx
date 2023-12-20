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
    <>
      <div className="hidden md:flex md:flex-col md:w-full">
        <div className=" mb-10">
          <img src={slides[imageIndex].img} alt="" className=" rounded-2xl" />
        </div>
        <div className="flex space-x-6">
          <img
            src="src/images/image-product-1-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg"
          />
          <img
            src="src/images/image-product-2-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg"
          />
          <img
            src="src/images/image-product-3-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg"
          />
          <img
            src="src/images/image-product-4-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg"
          />
        </div>
      </div>

      {/**image preview for mobile */}
      <div className="relative h-72 md:hidden">
        <div className="">
          <img
            src={slides[imageIndex].img}
            alt=""
            className="absolute w-full h-full object-cover object-center  "
          />
        </div>

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
    </>
  );
}

export default ImagePreview;
