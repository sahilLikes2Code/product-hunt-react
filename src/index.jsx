import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";

let id = 0;

let data = [
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    img:
      "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["Analytics", "Developer Tools"],
    number: 77,
    comments: 18,
    id: id++
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers.",
    img:
      "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["iPhone", "Dating"],
    number: 61,
    comments: 24,
    id: id++
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    img:
      "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["Analytics", "Developer Tools"],
    number: 74,
    comments: 14,
    id: id++
  },
  {
    name: "SaaS Landing Page",
    description: "The best SaaS landing page examples for design inspiration.",
    img:
      "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["Design Tools", "Developer Tools"],
    number: 37,
    comments: 18,
    id: id++
  },
  {
    name: "Mailbrew",
    description: "Automated email digests from Twitter, Reddit, YouTube & more",
    img:
      "https://ph-files.imgix.net/f64667ec-0201-4f20-9a03-161ab227a936?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["Email", "Productivity", "Social Media Tools"],
    number: 56,
    comments: 24,
    id: id++
  },
  {
    name: "AR Gear",
    description: "Automated email digests from Twitter, Reddit, YouTube & more",
    img:
      "https://ph-files.imgix.net/9bf5ba0e-c23b-4049-8075-ceb42c3456f5?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["Email", "Productivity", "Social Media Tools"],
    number: 56,
    comments: 24,
    id: id++
  },
  {
    name: "Orbiter AI",
    description: "Automated email digests from Twitter, Reddit, YouTube & more",
    img:
      "https://ph-files.imgix.net/b2d5684a-d04a-4477-baf5-11e05290d8ad?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    tags: ["Email", "Productivity", "Social Media Tools"],
    number: 56,
    comments: 24,
    id: id++
  }
];

//Header

function Header(props) {
  return (
    <div className="bg-white">
      <div className="flex-container width-1100" id="header">
        <div id="navBarWithoutLogin" className="flex-container">
          <a class="logo_7d0b3" href="/">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                  fill="#DA552F"
                ></path>
                <path
                  d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </a>
          <div className="search-box">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
                fill="#BBB"
                fill-rule="evenodd"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Discover you next favorite thing..."
            />
          </div>
          <ul id="nav-items" className="flex-container">
            <li>Deals</li>
            <li>Jobs</li>
            <li>Makers</li>
            <li>Radio</li>
            <li>Ship</li>
            <li>...</li>
          </ul>
        </div>
        <div>
          <a id="loginBtn">LOG IN</a>
          <a id="signUpBtn">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

////Card Section

function Card(props) {
  console.log(props);
  return (
    <div id="card" className="flex-container">
      <div className="logo-and-desc flex-container">
        <div>
          <img src={props.img} alt={props.name} />
        </div>
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div id="tags">
            <span className="comment">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z"
                  fill="#6f6f6f"
                  fill-rule="evenodd"
                ></path>
              </svg>
              {props.comments}
            </span>
            {props.tags.map(tag => (
              <span className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div id="boxWithTriangle" onClick={() => props.updateNumber(props.id)}>
        <span>▲</span>
        <span>{props.number}</span>
      </div>
    </div>
  );
}

//Cards Section

function Cards(props) {
  return (
    <>
      <div id="cards-component">
        <div className="flex-container space-between">
          <h2>Today</h2>
          <div className="flex-container">
            <h3>Popular</h3>
            <h3>Newest</h3>
          </div>
        </div>
        <div id="cards">
          {props.data.map(product => (
            <Card {...product} updateNumber={props.updateNumber} />
          ))}
        </div>
      </div>
    </>
  );
}

// Makers section (in sidebar)
function Makers(props) {
  return (
    <>
      {/* <div id="maker-icons-group"> */}
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
//Newsletter section(in sidebar)
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

//sidebar
function Sidebar() {
  return (
    <div id="sidebar">
      <Makers />
      <Radio />
      <Newsletter />
    </div>
  );
}

//App
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }
  updateNumber = id => {
    let updatedState = data.map(product => {
      if (product.id === id) {
        product.number += 1;
      }
      return product;
    });
    this.setState({
      data: updatedState
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="flex-container width-1100" id="mid-section">
          <Cards data={data} updateNumber={this.updateNumber} />
          {/* <div id> */}
          <Sidebar />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

// ReactDOM.render(header, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
