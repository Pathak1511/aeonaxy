import React from "react";

function Cards({ description, img, id, setPassionBox }) {
  return (
    <div className=" w-[240px] height=[240px] p-4 flex items-center justify-center flex-col rounded-lg border-2">
      <img src={img} width="180px" height="180px" />
      <p className="pb-2 font-bold">{description}</p>
      <input
        type="checkbox"
        className="checkboxBorder rounded-full"
        onChange={() => setPassionBox(id)}
      />
    </div>
  );
}

export default Cards;
