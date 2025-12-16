import React, { useEffect, useState } from "react";
import UserData from "./UserData";
const API = "https://jsonplaceholder.typicode.com/users";

function JsonData() {
  const [users, setUsers] = useState([]);
  //          Calling Api using async await here                  //
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
        if (!res.ok) throw new Error("users Data is not Found!🧐🧐");

        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  //  calling API using promisess //

  //   useEffect(() => {
  //   const fetchUsers = () => {
  //     fetch(API)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Failed to fetch users");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setUsers(data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
}

export default JsonData;
