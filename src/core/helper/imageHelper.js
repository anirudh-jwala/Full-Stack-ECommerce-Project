import React from "react";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? product.image
    : `https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg`;

  return (
    <div className="mb-3 rounded">
      <img
        src={imageUrl}
        style={{ height: "240px", maxWidth: "100%" }}
        className="rounded border border-success p-2"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
