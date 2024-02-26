import { Link, Navigate } from "react-router-dom";
import { findOtterBySlug } from "../stores/otters";

import { useParams, Outlet } from "react-router-dom";

export function OtterDetails() {
  // usepararms returns an object: whatever the dynamic route (after :) is called is the property name of that object
  // the value of that property is whatever is in the url eg:
  // '/otters/:id'
  // '/otters/smooth-coat
  let { id } = useParams();

  // lets say the user visited /otters/smooth-coat
  // id = 'smooth-coat'
  const otterInfo = findOtterBySlug(id);

  console.log(otterInfo);
  if (!otterInfo) {
    // Navigate the user to not found page, and replace browser history with the not found page
    return <Navigate to="/not-found" replace={true} />;
  }

  return (
    <div>
      <Outlet />
      <h2>Otter slug: {id}</h2>
      <p>{otterInfo.name}</p>
      <p> Scientific Name: {otterInfo.scientificName}</p>
      <img src={otterInfo.image} />
      <p>Location: {otterInfo.location}</p>
      <p>Diet: {otterInfo.diet}</p>
      <p>Size: {otterInfo.size}</p>

      <Link to="conservation">
        <p>Conservation {otterInfo.conservationStatus}</p>
      </Link>
      {/*Outlet = placeholder for component that may exist */}
      {/*otters/smooth-coat/conservation */}
      {/*otters/smooth-coat/ */}
    </div>
  );
}
