import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>
        Welcome To Home Page Boss. Not have a account ser?
        <Link to={"/login"}>
          {" "}
          <u>Register</u>
        </Link>
      </h1>
    </>
  );
};

export default Home;
