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
        {photos.map(({ id, title, url, thumbnailUrl }) => (
          <li key={id} className="photos-list-item">
            <Link
              to={url}
              target="_blank"
              rel="noreferrer"
              className="photo-link"
            >
              <img src={thumbnailUrl} alt={title} className="photo-image" />
              <div>
                <span className="photo-title">{title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
