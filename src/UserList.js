import React, { useEffect, useState } from "react";
import axios from "axios"

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState();

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res)
        setListOfUsers(res.data)
      }).catch(err => {
        console.log(err)
      })
    }, []);

    return (
      <div>
        <ol>
          {listOfUsers?.map(listOfUser => (
            <li key={listOfUser.id}>
              {listOfUser.name}
            </li>
          ))}
        </ol>
    </div>
    );
   };
   
   export default UserList;
   