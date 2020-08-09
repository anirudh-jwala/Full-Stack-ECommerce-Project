import React from "react";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? product.image
    : `https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg`;

  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUrl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
