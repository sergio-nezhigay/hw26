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
    <>
      <h1>Users List.</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-list-item">
            <div>
              <span className="user-name">{user.name}</span>
            </div>
            <Link to={`/albums/${user.id}`} className="user-albums-link">
              Albums
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
