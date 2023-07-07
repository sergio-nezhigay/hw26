import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Photos.css";

export default function Photos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((photos) => {
        setPhotos(photos);
      });
  }, [albumId]);

  return (
    <>
      <h1>Photos List</h1>
      <ul className="photos-list">
        {photos.map((photo) => (
          <li key={photo.id} className="photos-list-item">
            <div>
              <span className="photo-title">{photo.title}</span>
            </div>
            <Link
              to={photo.url}
              target="_blank"
              rel="noreferrer"
              className="photo-link"
            >
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="photo-image"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
