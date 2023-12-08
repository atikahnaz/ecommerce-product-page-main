import { useState } from "react";
import Images from "../images.json";

function ImagePreview() {
  const [imageIndex, setImageIndex] = useState(0);
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);

  return (
    <div>
      {Images &&
        Images.map((item, index) => <img src={item.img} alt={item.id} />)}
    </div>
  );
}

export default ImagePreview;
