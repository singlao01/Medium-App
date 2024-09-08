import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import landingImage from "./../img/landing-img.webp";
import './Home.css';

function Home() {
  return (
    <div className="container-fluid d-flex vh-100">
      <div className="row flex-nowrap w-100">
        {/* Sidebar with Illustration Image */}
        <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center bg-light sidebar">
          <img
            src={landingImage}
            alt="Illustration - Drawing a flower"
            className="img-fluid landing-image mx-auto d-block"
          />
        </div>

        {/* Hero Text & Button */}
        <div className="col-lg-8 col-md-8 col-sm-12 d-flex flex-column justify-content-center">
          <div className="px-4">
            <h1 className="display-1 my-4 fw-bolder hero-title">
              Human <br /> stories & ideas
            </h1>
            <div className="lead my-5 fw-medium">
              A place to read, write, and deepen your understanding
            </div>
            <div className="my-4">
              <a
                className="btn btn-black"
                href="https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h5 className="px-4">Start reading</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;