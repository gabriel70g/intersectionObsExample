import React from "react";
import { PhotoCard } from "../photoCard";
import { photos } from "../../db/db.json";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
