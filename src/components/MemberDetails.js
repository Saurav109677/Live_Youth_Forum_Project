import React, { useState } from "react";
import App from "../App";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { ErrorPage } from "./404Error";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import MyModal from "./MyModal";

export default (props) => {
  let randomString,
    sessionCount = 1;
  let random = "a";
  let baseData = props.data;
  let sessionData = props.sessions;
  let sessionToMember = props.sessionToMember;
  let modifySessionMemberList = props.modifySessionMemberList;
  // console.log("member", props.match);
  let facId = props.match.params.facId;
  let isRecordPresent = false;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let [currentMemId, setCurrentMemId] = useState();
  //let [isChecked, setIsChecked] = useState(true);
  // const [tempData, setTempData] = useState([]);
  const tempData = [];
  const openModal = (memId) => {
    setCurrentMemId(memId);
    setIsOpen(true);

    ModalManager.open(
      <MyModal
        currentMemId={memId}
        sessionToMember={sessionToMember}
        sessionData={sessionData}
        modifySessionMemberList={modifySessionMemberList}
        onRequestClose={() => true}
      />
    );

    //debugger;
  };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const afterOpenModal = (sessionId) => {
  //   // let foundArr = [];
  //   // foundArr = sessionToMember.filter(
  //   //   (p) => p.memberId === currentMemId && p.sessionId === s._id
  //   // );
  // };

  // const sessionFormSubmit = (e) => {
  //   e.preventDefault();
  //   //console.log(e.target.id);

  //   // set the session of indiviaual member
  //   //debugger;
  //   props.modifySessionMemberList(currentMemId, tempData);
  // };

  // const handleSessionForm = (e) => {
  //   //console.log(e.target.id);
  //   let found = false;
  //   sessionData.map((s) => {
  //     //debugger;

  //     switch (e.target.id) {
  //       case s._id: {
  //         let t = { sessionId: s._id, status: e.target.value };
  //         // setTempData([...tempData, t[0]]);
  //         if (!tempData.length) tempData.push(t);

  //         tempData.length &&
  //           tempData.map((t) => {
  //             if (t.sessionId === s._id) {
  //               // setTempData({ ...t, status: e.target.value });
  //               t.status = e.target.checked;
  //               found = true;
  //             }
  //             // else
  //             //   tempData.push({ sessionId: s._id, status: e.target.checked });
  //             //debugger;
  //           });

  //         if (found === false)
  //           tempData.push({ sessionId: s._id, status: e.target.checked });

  //         console.log(tempData);

  //         break;
  //       }
  //       default: {
  //       }
  //     }
  //   });
  // };

  // const isChecked = (sessionId) => {
  //   //debugger;
  //   let foundArr = sessionToMember.filter(
  //     (s) => s.memberId === currentMemId && s.sessionId === sessionId
  //   );
  //   if (!foundArr.length) return foundArr[0].status ? "true" : "false";
  //   else return "false";
  // };

  // const hasAttendedTheSession = () => {
  //   debugger;
  //   toReturn = false;
  //   sessionData.map((s) => {
  //     s.attendedMemberId.map((a) => {
  //       //console.log(a.memId === currentMemId);
  //       if (a.memId === currentMemId) toReturn = true;
  //     });
  //   });
  //   return toReturn;
  // };
  // console.log(facId);

  //console.log("base", props.data);
  // console.log("Filter:", props.filter);

  // if (props.data) {
  //   baseData = props.data;
  //   sessionStorage.setItem("baseData", props.data);
  // } else baseData = sessionStorage.getItem("baseData");

  // console.log("Storage", sessionStorage.getItem("baseData").values);

  const goBack = () => {
    props.history.goBack();
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
      {/* {console.log("From", props)} */}
      <h4> Detail Screen</h4>
      <Link to={`/add/${facId}`}>
        <button className="btn btn-primary">Add Member</button>
      </Link>
      {/* <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Remark</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {baseData.length &&
            baseData.map((d) => {
              if (d.facilitator === facId) {
                isRecordPresent = true;
                return (
                  <tr key={d._id}>
                    <th scope="row">{count++}</th>
                    <td>{d.firstName}</td>
                    <td>{d.email}</td>
                    <td>{d.mobile}</td>
                    <td>{d.remark}</td> */}
      {/* <td>
                      <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                      <p>
                        <a
                          class="btn btn-primary"
                          data-toggle="collapse"
                          href="#collapseExample"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Link with href
                        </a>
                      </p>
                    </td> */}
      {/* <td>
                      <Link to={`/edit/${d._id}/${d.facilitator}`}>
                        <button className="btn btn-warning">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => props.removeMem(d._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              }
            })} */}
      <br />
      <br />
      {baseData.length &&
        baseData.map((d) => {
          if (d.facilitator === facId) {
            random = random + "x";
            randomString = "#" + random;
            //debugger;
            isRecordPresent = true;
            return (
              <div class="accordion" id="accordionExample">
                <div class="card" key={d._id}>
                  <div
                    class="card-header collapsed"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target={randomString}
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    style={{ cursor: "pointer" }}
                  >
                    <h5 class="mb-5">
                      <p>{d.firstName}</p>
                      <div style={{ float: "right" }}>
                        {sessionData.length &&
                          sessionData.map((s, index) => {
                            let foundArr =
                              sessionToMember &&
                              sessionToMember.filter((p) => {
                                if (
                                  p.memberId === d._id &&
                                  p.sessionId === s._id
                                )
                                  return true;
                                else return false;
                              });

                            // debugger;
                            return (
                              <>
                                {}
                                <span
                                  class={
                                    foundArr.length &&
                                    foundArr[0].status === true
                                      ? "badge badge-success"
                                      : "badge badge-danger"
                                  }
                                >
                                  {++index}
                                </span>
                                <span> </span>
                              </>
                            );
                          })}

                        <img
                          src="https://cdn0.iconfinder.com/data/icons/glyphpack/19/edit-512.png"
                          height="20px"
                          widht="20px"
                          alt="edit"
                          onClick={() => openModal(d._id)}
                        />
                      </div>

                      {/* <input
                              class="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                              readOnly
                              
                            /> */}
                    </h5>
                  </div>

                  <div
                    id={random}
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body row" style={{ background: "grey" }}>
                      <div class="col">
                        <p>
                          <b>Email:</b>
                          {d.email}
                        </p>
                        <p>
                          <b>Mobile:</b>
                          {d.mobile}
                        </p>
                        <p>
                          <b>Remarks:</b>
                          {d.remark}
                        </p>
                      </div>
                      <div class="col">
                        <div class="container">
                          <Link to={`/edit/${d._id}/${d.facilitator}`}>
                            <button className="btn btn-warning">Edit</button>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => props.removeMem(d._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <center>
                  <p hidden={isRecordPresent == true}>No recods found !</p>
                </center>
              </div>
            );
          }
        })}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
      >
        (sessionToMember) &&
        {
          <>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///+8EBD//v6rAAD8/////v+qAAD///26EBD8//z3+PixAAC9Dg2+ERH///y0AADah4e5AADUe3q1DAz39fTbiYfnqar6+Pv14N/BVlS6Cwn3///GXl+4LCrdo5/67OzWkIzkvba9IB+2NS3Mdna/Q0Poubru0Mz20tbsx8jIZmXKcm6/Ghf45uT87/XipqH43d64OjjemprDTk/msrXyx8fqubuvFRXWd3jXnJm/Q0TAWFXNX1zVgHjz4OHy4NjLLQu5AAAO3ElEQVR4nO1di3bauBaVbcmSkY1jcDBxE0iblECANm3TaafTTP7/r+6RIIWAH7LlBzfjvVbTZjVEPj7S1nlKCHXo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw7VwjQRovJfdPPNm4NDESHyX4RQ6rT8NHXApPt4izrE+NV3bT1GnZjOZ48jgcfZfNr2w2iAIkr7pkMJwgSD3vrjxWJyb/i2bVtbcPhj275xP1ksxn1QLvykGSHH7FO6JaNTBkF908TEFE8aPo8uL6587gcxY4bheQYTgL8N+FccwP9cXVyOnkP4WWqCmGYfkbYFyIVDCMgHy2w+WXLLDoLYYy6IFBuvAd97LvPiIAClLidz8VmQjvwfkCzQJJ4+n10NebDyXNCVwYTq4OtrsJf/cY1VwIdXT89TjMzTn6QCD9dfxMQExYEEYkoyKelrEZnhenLmbuZv7Pv8y/VD24+eAbH2JEus33+weeAZJRBz+8P7NfwO2geKOjFtgnSw/Ah+HtwEvltGPAnXD25+PmNCMUEnxjnA9wSR+b3FY8Njh0tOFUCzRmxZ93Oxf5DTMgqAAZ31r6HvGS4ssPI6NIB3PT78tXZOj1XXS+6LXU/oodQqBHhS/7BT+vx2fRKzVKwWBBRD0PTc1lh+Ccr0rXOw7MAIoOJraxKCZUYp7uNwdAPzs+zqSwIzPP9mFMLvhgHa1CbYWbSPHr7B9sBWlepwxbyAf3tAfWqarVIOdWjv6xDkg129Uh3K3xgMv/ZghFYFpOjTPzwWVok0PiuDMFlBTpdffBKDtAFgAEp6GH+2ggoFO0ZgfxbeFW1eTkKETxfe8kOfoWrE1m0YCb5umm4wGFZ4/JG7Va6+JMBM/TiGsWjTfANvFN/xQOzv9QJsgIDf4ebNVFgVI86k+1czwPViwxEiDa5DQk2Ko96A18sx+wispx5MVJM2o0jw3hAKBzyue4Lu4Ll8EIK70VAg2cQOwb/5qjH5BFb8N3gbDREqxlG45GA51r4Ed/LBH74Mm7LfwKO4B0fiOLZUH5iw6/1lA16GKcMV4W/emGz74L/DyAE91przEAL2Bn79e0QCGPMHPRi/3rUowjFPDZPMDiv+tHW7a4Mw1SYWsHcbMq5gd7ImwoCrUUIwtxfgLIG724aEMG7MF7W5/I7M3UZj3sYS3IHxcSTowKxj7wemxuHH5ky1ZAQfQ2mGV69IEdI2ya0/bM5WS4I39G/JhvEql1BstxPuNrjPJ4EZLp8IPq1DQrP/yYpr9wfzAGxjferXsekTbIYXvsoT1C6kfxGaTvU6hF3oazvG2jH4V1RDUIOi8VAl6gQ+R+mlqvrZeDiuI73Y+xYoPbmns1LVPsyCb70atv3PXE03PvdL5558teAkY9bnaoUDYwZNb/JT1+ByuPHw7pq7rHCaFEja5dd3w/g45X8ML7iZwjytTI9UeCxPvoLL6xoxf8ThmWUMC3Iq84aedR7iR1jsuXsuPIn/JAsAK5KQmJiMbYPlRX/hB2LrO44wGlhuQdvHG7rWAMFnF7DnKgxk2GtwMqpSIjYJXfqGQvosHs6QSCj2QIsFdWhYZz2RLkQz0GLeZ92V4S8dUlncBmP8LywtNy977cbW7B0mkUmiHmixkISgwV4kyznezaw8uhHVAi7/F+PKNkWCf+VYM64ITcfD71uDGIyqcxBRcS0CLbnW+W6w70A3Xm7Bg/+rumIGjO6GOcOJ54mHj3hbN2qaKDxXpRsgGQNI5qUyGn6HEt24w3llVaoE//TVSKa/XRkO6gu68ZToRpDMT7AKtxrBtI+/K9CNx5eVzVKc79gzFv+YiVqmvvwE7C9UmW42JENfuB/YxsSzH3Hepsg8Pq5sHQ54Hm24rj17R/4EiYhJTRT1firRzYZkTMfccj8Fvnk3s928heHxQSXS9Qka32TzN7xtH0jm8IXCsjqzhXWTMVWFJbMjmR0w0I2fl7qLb9aI9DXlo+JXvPfzGCMe/nW8/Uq6sTOLNCTJnIXH7Rcwyf/Kc2VAie+FAvQMG5g6JvrgG9nU7fE7HEXR4WeFEzews3QotonBjmR2iHoRvuOZPAVP5H8QZeV6W4ZIEzzYbl54lH8NjxPtG7oRWkxXgyQZk/QP9QC/LcxxuJm7cq0HMLj0JKQw1DXPzjMJr5WfI/Nwlkq6Ib2Bna5/135NMrvPgsnApUecJaPBr+H59GYpWKTTLwo+G+xovQiBSEeL8YVujl5RGslIgRXNvvjLlGq2UMEGcKcSnTnY0/YkTLNupLuURDKF9lIgAN1cFEUDhQCbIR4XKKOPDhfFhm4SnKmtu3RMMg4IiH4qul/+rW7AhkT4SiWOf2Bb7r2hNI2kkkwhmza4wpGeDgme/1Byg15W1dHGtrFujlfVoSWzD/BLFEsd4x9zzcgpRRP1IKl86BS6eeVMvXaX9l+HOsls4PkTLfmEDpdqMUT54Ip0kz6l++C2F4oPsGCpm6MJcy22vRe6JY8EunnlTB24S3s/R1JoKX3IlR/qORj42VKPKKnSTaauz8SLUI/xeNazpoQjK1afMmJ92WepdPPiTOWQTJHkDow30nQSL9WX4QbCECOZ1k0myWSYeIkSGsGlnoD0IiiYMWSGfZ5BN8xlyZZMYZKR8Fhwoechjq+K5kTBWbJT6EbaKl42yRQeLb4aa0m4KJwyFFu1nU431/Z1qiVTIhkgdsSFpoRF09peJt3QcBZSVAnJSDDGuJ6EfwdGmVr1VGcqCcUtmT0JXRb8rSXhfVCqES11x0tCIXfpGMG9loSeaLkuPmqqM5WEQu7S4UDMiA0tCblRqrwk1bpJQiF36Xgo19eWsMzAac5UCtTdpaRxygpHHYKpbZSapRKpztQOOiSzkZAZnk0xccoEa0ygialVcmQ5ej7dlLRk9scwDGtauu2LoocCnsURUp2pHYq7SwnDWA9lYzWEou9W+bZlFbop4S4lSPj9OFarBJhe6DE7sJ4jYZp1sydhOUvm9TDWowjrlhERdD+ydOvwYqCbjHUIJKPbwMiskcY61JeQMTFR0yDcKe0R2pYQ2HyWOsLM1m9yb13CN6/DU16HlJjoUUvCfNMtPTNVRMLSXLrdDzUETMku7UmoZXRv4FkzVLbAjaJ5FTZNRuVSamaqkITzkjbNH7u0vM2Ykl3ae4d6zq+mXWqCb4EEm5cdPSvwu0VqZkpZQrEbmeBblM4iWuIwrjIjpwR+E1+lhukmjhIr7R9K+OUmaXM+PnxGz8c34sySpjSkZpeSUKjM73Ag5mnGae6DcjpsLNbGdGNtIl5aYlwFktmhUJnf0UiGZrx0wfNbAw6QWScjY94kKzNVMA+kHfNeFO4OSS3G28RkZN4iLTOVXeaXMpxm3qJM7im7TmaTe0qpu8ks80uWUDf31C+RP8yokzmT+cP0zFRmmV8SPCP4R7PC9LIomaYW46GXwG96Ziq7zC8J+jlgPOLqeXzVYrwSZX6pI8aWZh6/aC2GUjFe8TK/dGjXYqCwwBkYqsV4xcv8Ml6qnx4jUYKoiVJ+n6rFeMXL/NKH1K6JomiiviMqF+MVLvNLB59oll8SZ/5Dra2zaDGecplf9kv9MdfUoX59aVp2qRq60a8vhSlwq1YjXLQYT7XMLxv+QLtGuIo678TsUjV0o1/nbZqqtfpFi/FUy/wyIWr1iV6t/p9+iwxs+y2OOqsVivFSy/zgsRvqt5A9M5a7yikbSu6ZyU9hp5b5Ndcz44gLJ9T6nnpHfU/5xXipZX5R1FTf06Z3jZfuXcspxkst82uud032H65vssdK6T9E+Vt3aplfc/2HGwxylXjUQ1qgTubQmWq6hxRt+oDzmnJlH7BZUR8wUeoDNvi6sl7ud/eqvdxbQi1UjHfgTGFTrZeb8fvKGp1PtR//rrJ+fKfwmQqoUDHea2dK/UwFXNnZwqrnYnibczEILn0uhhltzsXI+yxMYdeq8FwMcNudkzrbxHPFea00quzAVnHty1r1fJqF5vk0SiQDi8JeR9XdtlP4jKHz4sV422QAfuTx5pqkbKzkGUOabsUehGVU7JyoEm0FYN2onhPlynOiHO0W4AN8Vitf8oIGzvoyqj7rS4Cc1nltYfXntZ3YmXs1HEj39s9NJM5pnX1Z/fmeJ3V+aS0Xtf4HzqB98+cIv/2zoP8L53kjedHa5kz2NsTcGHaLqm2119ieq9/SWoSNiNd9rr68QmPAVy3pcMUHNXHMnoSEot6gLduGD3qkwpNnk2DCjkGjXm7orRYM+X0voqjmO0oEYJosfaPRm3SYFzPWyD0zWxFNeVeQ0eAlF5446jKMqjuSNROEOAQ1e9+Tyzb3PeHaJ6iEIy43Dge80isds8E8/hTC5MlobKgS8t410nuq+W7HfbjWUy9Cjd27JgFjjYZMISqmDXF3Hh+hxu/pfvv3H/4H7rDc3kOq3T6Yh9buIaXiLlmM8We7qbtkm9koEuT8dCFnal33Af/T2n3ALyLWfadz2PKdzvXey21dtH4vd913q/dETVerd6sLZ5Sa4uv03PIr1aFvn09FZaR8ka1err4FRutb7oOJw4QNUDr3JPZ38OVdn9+u2xbpAOBtOOtfQ+6J/G15Zboivevx4a9/HaR0xlRzAKMDdse7peXHRvlInNB/zPn9HItwzCnMzR3IZrWQ58FNoLEgXT+4GTxjcbGN2bgRkwOK8MZ7W7//YJe7Ut4LuP3h/RrWNO2DSdjqNpiDh+sv3Pdjkc9lTH71DpPzTH4rbCE5p5kXBz7/cv3Q9qMrAQxIPH1+uhryYGW4QpKVFO/14mRSNPk/rrcK+PDq7HmK0Ulrbgtx+LRcQfPJkltWEMQbk/Vw4kqhhe4Cy+LLyVwWJoELcVoMmgSC+qYgCqGM8Hl0eXHlcz+QtZSeJ2cn29QjMDcIuH91cTl6Fs1ZFOQzzX6L9osqwM+hfdNBwqcThWf98WIxuTd827atHeA737j/e7EY90XZnKi2po7ZFz5Z2wJoYHo3exwJPM7upm0/TB14tYE3FNptFuI0GLoB/N2Ox14vQG3iPj8q6wArq+49JRCyFxHUvFikQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp0OMb/AGGxORUAf2FiAAAAAElFTkSuQmCC"
              onClick={closeModal}
              alt="close"
              width="40px"
              height="40px"
              style={{ float: "right", cursor: "pointer" }}
            />
            <h5>Session List:</h5>
            <p>Please select the session: </p>
            <form onSubmit={sessionFormSubmit}>
              {sessionData.length &&
                sessionData.map((s, i = index) => {
                  //debugger;

                  // let foundArr = sessionToMember.filter((p) => {
                  //   if (p.memberId === currentMemId && p.sessionId === s._id)
                  //     return true;
                  //   else return false;
                  // });
                  // if (foundArr.length) setIsChecked(foundArr[0].status);

                  return (
                    <>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id={s._id}
                        // value={s.members.filter((a) => a.memId === currentMemId)}
                        // checked={() =>
                        //   s.members.filter((a) => a.memId === currentMemId)
                        // } //yes or no
                        checked="true"
                        onChange={handleSessionForm}
                      />
                      Session {++i}: {s.topic}
                      <br />
                    </>
                  );
                })}

              <button class="btn btn-primary">Submit</button>
            </form>
          </>
        }
      </Modal> */}
    </div>
  );

  // const isCheck = () => {
  //   // let foundArr = sessionToMember.filter(
  //   //   (p) => p.memberId === currentMemId && p.sessionId === s._id
  //   // );
  //   //setIsChecked(foundArr ? foundArr[0].status : false);

  //   return true;
  // };

  return (
    <div>
      {!props.inProgress ? template : <Loading />}{" "}
      {/* {console.log("from detail", props.inProgress)} */}
    </div>
  );
};
