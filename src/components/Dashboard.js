import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import path from "path";
import Login from "./Login";
import Cookies from "universal-cookie";

const imgPath = path.join(__dirname, "../utils/img/");

export default (props) => {
  // console.log("dashboard", props.group);
  // const cookies = new Cookies(Request.headers.cookie);
  // const loginStatus = cookies.get("loginStatus");
  // const loginStatus = props.cookies.get("loginStatus");
  // console.log("dashoar", loginStatus);

  let baseGroup = props.group.length > 0 ? props.group : [];
  const template = (
    <div>
      <img
        src="https://www.iskconpune.com/dev/wp-content/uploads/2015/02/SSRVC_15.jpg"
        alt="pic"
        height="400px"
        widht="850px"
      />
      <br />
      <br />
      <div class="row">
        {baseGroup.map((element) => {
          return (
            <div class="card-deck">
              <div class="card">
                <img
                  src="https://www.forthepleasureoflordkrishna.com/wp-content/uploads/2014/04/japa.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{ height: "150px", width: "300px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{element.name}</h5>
                  <p class="card-text">
                    <b>Group Leader:</b> {element.leader}
                  </p>
                  <Link to={`/facilitator/${element._id}`}>
                    <button class="btn btn-primary">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      {props.group.length ? template : <Loading />}
      {/* {template} */}
    </div>
  );
};
