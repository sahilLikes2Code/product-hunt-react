import React from "react";

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

//export

export default Card;
