import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
// import MemberDetails from "./MemberDetails";

export default (props) => {
  let fData = props.fData;
  let selectedGroup = props.match.params.gId;
  let isRecordFound = false;
  let group = props.group;
  // let [currentGroup, setCurrentGroup] = useState();
  // console.log(typeof selectedGroup);
  // console.log("Props from fac details", props.history);
  // useEffect(() => {
  //   setGroupName();
  // },[]);

  const deleteFac = (id) => {
    props.removeFac(id);
  };

  const goBack = () => {
    props.history.goBack();
  };

  const setGroup = () => {
    let found = group.filter((g) => g._id === selectedGroup);
    return found.length ? found[0] : undefined;
  };

  const template = (
    <div>
      <img
        class="card-img-top"
        src="data:image/png;base64,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"
        alt=" Back "
        style={{
          float: "right",
          width: "50px",
          height: "50px",
          cursor: "pointer"
        }}
        onClick={goBack}
      />
      <h5>Group: {setGroup().name}</h5>
      <h6>Leader: {setGroup().leader}</h6>
      <h6>Facilitator Details</h6>
      <br />
      <Link to={`/addFac/${selectedGroup}`}>
        <button className="btn btn-primary">Add Facilitator</button>
      </Link>
      <br />
      <br />
      <div class="card-deck" style={{ margin: "auto" }}>
        {fData.length &&
          fData.map((d) => {
            // console.log(d.code === selectedGroup);

            if (d.code === selectedGroup) {
              isRecordFound = true;
              return (
                <div>
                  <div class="card" style={{ width: "18rem" }}>
                    {/* <img
                    class="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6HnkckDg_Knd1Ip0jiQdvDkQvPjKpIJJWw&usqp=CAU"
                    alt="Delete icon"
                    width="50px"
                    style={{ float: "right" }}
                  /> */}
                    <img
                      class="card-img-top"
                      src="https://www.forthepleasureoflordkrishna.com/wp-content/uploads/2014/04/japa.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <img
                        class="card-img-top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6HnkckDg_Knd1Ip0jiQdvDkQvPjKpIJJWw&usqp=CAU"
                        alt="Delete icon"
                        style={{
                          float: "right",
                          width: "30px",
                          height: "30px",
                          cursor: "pointer"
                        }}
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure? \n This will delete me from your group.\n Please give me one more chance."
                            ) === true
                          ) {
                            deleteFac(d._id);
                          }
                        }}
                      />

                      <h5 class="card-title">{d.name}</h5>
                      <p class="card-text">
                        Passing Year: {d.passingYear}
                        <br />
                        Status: Active <br /> Total Members: {d.totalMembers}
                      </p>
                      <Link to={`/detail/${d._id}`}>
                        <button class="btn btn-primary">Members</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <center>
        <p hidden={isRecordFound == true}>No recods found !</p>
      </center>
    </div>
  );
  return <div>{!props.inProgress ? template : <Loading />}</div>;
};
