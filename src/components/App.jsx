import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

import "../style.css";

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

export default App;
