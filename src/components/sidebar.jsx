import React from "react";
import "../style.css";

// Makers
function Makers() {
  return (
    <>
      <div id="makers-component" className="sidebar-component">
        <div>
          <h3 className="makers-title">Makers working today</h3>
        </div>
        <div className="bg-white">
          <div className="flex-container" id="maker-icons-group">
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/826276/original" alt="" />
            </div>
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/1456069/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/1595131/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/1903430/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/17305/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/2091889/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/2424463/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/2397185/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/112495/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/629933/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/166755/original" alt="" />
            </div>{" "}
            <div className="maker-icon">
              <img src="https://ph-avatars.imgix.net/826276/original" alt="" />
            </div>
          </div>
          <div className="hr flex-container"></div>
          <div id="makers-text">
            <h6>Start working now</h6>
          </div>
        </div>
      </div>
    </>
  );
}

//Radio
function Radio(props) {
  return (
    <>
      <div id="radio-component" className="sidebar-component">
        <div>
          <h3 className="makers-title">Product hunt radio</h3>
        </div>
        <div className="flex-container bg-white" id="radio-desc">
          <p>
            <p>How to span and monetize communities with Jill Salzman</p>
          </p>
          <span id="cat-bg" className="flex-container">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              xmlns="http://www.w3.org/2000/svg"
              class="playIcon_465b6"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35zm-3.71-24.57a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z"
                  fill="#FFF"
                ></path>
                <path
                  d="M13.79 10.43a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z"
                  fill-opacity=".8"
                  fill="#545656"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <span></span>
      <span id="sponsored-headspin">
        <p>
          sponsored by <span>headspin</span>
        </p>
      </span>
    </>
  );
}
//Newsletter
function Newsletter() {
  return (
    <>
      <div id="newsletter-component" className="sidebar-component">
        <h3 className="makers-title">Newsletter</h3>
        <div className="flex-container bg-white" id="newsletter-desc">
          <div>
            <div>
              <div id="laptop-img"></div>
              <h2 id="remote-teams">Remote teams, this is for you</h2>
            </div>
            <div id="subscribe-section">
              <h2>Get the best new products in your inbox, every day 👇</h2>
              <input type="text" placeholder="Your email" />
              <div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Sidebar (main component)
function Sidebar() {
  return (
    <div id="sidebar">
      <Makers />
      <Radio />
      <Newsletter />
    </div>
  );
}

export default Sidebar;
