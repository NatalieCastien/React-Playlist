import React from "react";

const About = () => {
  return (
    <div>
      <div className="header-container">
        <span className="h1">About</span>
      </div>
      <div className="about-box">
        <img src="assets/foto.jpg" alt="profile picture" />
        <p>
          Hi! <br />
          <br />
          My name is Natalie, I am 28 years old and I live in the Netherlands.
          My passions are playing the guitar, singing, drawing and programming.
          I love creating things, especially when others can enjoy it as well.{" "}
          <br />
          <br />I built this website as a part of a Front-end development
          course. It's a web application to add music to the songlist and you're
          able to sort this list, filter on genre and delete songs as you will.
          The Javascript framework 'React' was used for this purpose. Moreover,
          a connection with an API makes it possible to receive and save the
          data to an external database.
        </p>
      </div>
    </div>
  );
};

export default About;
