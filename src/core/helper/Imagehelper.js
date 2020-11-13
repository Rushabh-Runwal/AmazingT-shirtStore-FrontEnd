import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const ImgUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://rushabh-me.netlify.app/static/media/me.cf8f5953.png";

  return (
    <div className="rounded border border-info">
      <img
        src={ImgUrl}
        alt="alt_photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className ="rounded"
      />
    </div>
  );
};

export default ImageHelper;
