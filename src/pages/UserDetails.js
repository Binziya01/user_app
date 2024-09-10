import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
    const { users } = useContext(UserContext);
  const { userId } = useParams();
// console.log(users);
// console.log(userId);

  const singleUser = users.find((user) => user.id === parseInt(userId));
  console.log(singleUser);
  const {name, username, email, address,geo, phone, website, company} = singleUser
  

  return (
    <div>
        <div className="pt-5 px-6 dark:bg-[#C4B69D] min-h-screen">
      <h1 className="text-lg"><strong>Id:</strong> {userId}</h1>
      <h1 className="text-lg"><strong>Name:</strong> {name}</h1>
      <h2 className="text-lg"><strong>Username:</strong> {username}</h2>
      <p className="text-lg"><strong>Email:</strong> {email}</p>
      {/* <p>Address: {address}</p> */}
      <div className="mt-4">
          <h3 className="text-lg font-semibold">Address:</h3>
          <p>{address.street}, {address.suite}</p>
          <p>{address.city}, {address.zipcode}</p>
          <div>
                <p>Latitude: {address.geo.lat}</p>
                <p>Longitude: {address.geo.lng}</p>
              </div>
        </div>


      <p className="text-lg"><strong>Phone:</strong> {phone}</p>
      <p className="text-lg"><strong>Website:</strong> {website}</p>
      <div className="mt-4">
            <h3 className="text-lg font-semibold">Company:</h3>
            <p><strong>Name:</strong> {company.name}</p>
            <p><strong>Catchphrase:</strong> {company.catchPhrase}</p>
            <p><strong>BS:</strong> {company.bs}</p>
          </div>
      <div className="mt-10">
      <Link to="/" className="dark:bg-emerald-600 rounded-md px-4 py-2 text-white">Back to Homepage</Link>
      </div>
    </div>
    </div>
  )
}

export default UserDetails