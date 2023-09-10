import "./App.css";
import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-side">
        <h1>Customer Reviews</h1>
        <div>
          <div className="reviewBox">
            <p>
              ""I recently had the pleasure of ordering their Fish & chips dish.
            </p>
            <p>It was an absolute culinary masterpiece.</p>
            <p>
              The flavors were perfectly balanced, and every bite was a
              delight.""
            </p>
          </div>
        </div>
        <div>
          <div className="reviewBox">
            <p>""Their Italian Pizza is pure culinary magic!</p>
            <p>
              Each bite was a flavor explosion, and the service was top-notch.
            </p>
            <p>A must-order for food enthusiasts!""</p>
          </div>
        </div>
        <div>
          <div className="reviewBox">
            <p>
              ""Eating the Mexican Taco was like embarking on a flavorful
              adventure.
            </p>
            <p>Each bite revealed a symphony of flavors.""</p>
          </div>
        </div>
        <p>Note:</p>{" "}
        <p>
          {" "}
          These reviews have been kept anonymous to protect our customers
          privacies
        </p>
        <hr />
        <h1 id="Contact-Side">Contact Me</h1>
        <a href="https://github.com/MZabil" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-zabil/" target="_blank">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/m.zabil6/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:m.zabil.mehboob@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </>
  );
}

export default Contact;
