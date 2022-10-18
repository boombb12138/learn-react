import React, { memo } from "react";

const Profile = memo((props) => {
  console.log("profile render");
  return <div>Profile:{props.message}</div>;
});

export default Profile;
