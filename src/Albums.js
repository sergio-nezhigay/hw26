import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Albums = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") ?? "";

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <p>{album.title}</p>
            <Link to={`/photos?albumId=${album.id}`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
