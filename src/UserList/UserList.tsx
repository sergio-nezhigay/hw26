import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div className="container">
      <h1>Users List.</h1>
      <ul className="user-list">
        {users.map(({ id, name }) => (
          <li key={id} className="user-list-item">
            <div>
              <span className="user-name">{name}</span>
            </div>
            <Link to={`/albums/${id}`} className="user-albums-link">
              Albums
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
