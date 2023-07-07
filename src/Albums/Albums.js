import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Albums.css";

export default function Albums() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((albums) => {
        setAlbums(albums);
      });
  }, [userId]);

  return (
    <>
      <h1>Albums List</h1>
      <ul className="albums-list">
        {albums.map((album) => (
          <li key={album.id} className="albums-list-item">
            <div>
              <span className="album-title">{album.title}</span>
            </div>
            <Link to={`/photos/${album.id}`} className="album-photos-link">
              Photos
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
