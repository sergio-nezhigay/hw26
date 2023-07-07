import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Photos = () => {
  const [searchParams] = useSearchParams();
  const albumId = searchParams.get("albumId") ?? "";

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
