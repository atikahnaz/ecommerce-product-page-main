import { useState } from "react";
import Images from "../images.json";
import Next from "../images/icon-next.svg";
import Previous from "../images/icon-previous.svg";

function ImagePreview({ slides }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [lightBoxGallery, setLightBoxGallery] = useState(false);
  const [mainLightBoxDisplay, setMainLightBoxDisplay] = useState(
    slides[imageIndex].img
  );
  const length = slides.length;

  const NextImage = () => {
    setImageIndex(imageIndex === length - 1 ? 0 : imageIndex + 1);
  };

  const PreviousImage = () => {
    setImageIndex(imageIndex === 0 ? length - 1 : imageIndex - 1);
  };

  const closeGallery = () => {
    setLightBoxGallery(false);
  };

  const openGallery = () => {
    setLightBoxGallery(true);
  };

  return (
    <>
      {/**image gallery desktop */}

      <div className="hidden md:flex flex-col w-full mt-16">
        <div className=" mb-10">
          <img src={slides[imageIndex].img} alt="" className=" rounded-2xl" />
        </div>
        <div className="flex space-x-6 cursor-pointer" onClick={openGallery}>
          <img
            src="src/images/image-product-1-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg hover:opacity-25"
          />
          <img
            src="src/images/image-product-2-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg hover:opacity-25"
          />
          <img
            src="src/images/image-product-3-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg hover:opacity-25"
          />
          <img
            src="src/images/image-product-4-thumbnail.jpg"
            alt=""
            className="flex-1 w-1/5 object-cover rounded-lg hover:opacity-25"
          />
        </div>
      </div>

      {/**lightbox gallery */}

      {lightBoxGallery && (
        <>
          <div className="hidden md:flex absolute top-0 left-0 w-screen h-screen bg-FEBlackLightBox opacity-80"></div>
          <div className="absolute top-0 left-0 w-screen h-screen ">
            <div className="flex flex-col w-full h-full justify-center items-center">
              <div className="w-1/3 h-auto object-contain ">
                <div className="flex justify-end">
                  <img
                    src="src/images/icon-close.svg"
                    alt=""
                    className="mb-4"
                    onClick={closeGallery}
                  />
                </div>

                {/**main image lightbox */}
                <div className="relative">
                  <img
                    src={slides[imageIndex].img}
                    alt=""
                    className="rounded-xl "
                  />
                  {/**previous  */}
                  <div className="flex absolute top-1/2 -left-3 bg-white rounded-full w-10 h-10">
                    <img
                      src="src/images/icon-previous.svg"
                      alt=""
                      className="p-3"
                      onClick={PreviousImage}
                    />
                  </div>
                  {/**next  */}
                  <div className="flex absolute top-1/2 -right-6 bg-white rounded-full w-10 h-10">
                    <img
                      src="src/images/icon-next.svg"
                      alt=""
                      className="p-3"
                      onClick={NextImage}
                    />
                  </div>
                </div>
              </div>

              {/**thumbnail image lightbox gallery */}
              <div className="flex w-1/4 space-x-5 mt-6">
                <div className="flex-1 w-1/5">
                  <img
                    src="src/images/image-product-1-thumbnail.jpg"
                    alt=""
                    className="rounded-lg object-contain hover:contrast-50 border-2 border-FEOrange"
                    onClick={() => setImageIndex(0)}
                  />
                </div>

                <img
                  src="src/images/image-product-2-thumbnail.jpg"
                  alt=""
                  className="flex-1 w-1/5 object-cover rounded-lg"
                  onClick={() => setImageIndex(1)}
                />
                <img
                  src="src/images/image-product-3-thumbnail.jpg"
                  alt=""
                  className="flex-1 w-1/5 object-cover rounded-lg"
                  onClick={() => setImageIndex(2)}
                />
                <img
                  src="src/images/image-product-4-thumbnail.jpg"
                  alt=""
                  className="flex-1 w-1/5 object-cover rounded-lg"
                  onClick={() => setImageIndex(3)}
                />
              </div>
              {/**<img
              src={slides[imageIndex].img}
              alt=""
              className="w-1/3 h-auto object-contain "
            /> */}
            </div>
            <div></div>
          </div>
        </>
      )}

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
