import React, { useState } from "react";
import { Modal, Effect, ModalManager } from "react-dynamic-modal";

let tempData = [];

export default (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const sessionFormSubmit = (e) => {
    // console.log("hit");

    e.preventDefault();
    //console.log(e.target.id);

    // set the session of indiviaual member
    // debugger;
    props.modifySessionMemberList(props.currentMemId, tempData);
    //closeModal();
    tempData = [];
  };

  // const closeModal = () => {
  //   ModalManager.close;
  // };

  const handleSessionForm = (e, isCheck, setIsCheck) => {
    //console.log(e.target.id);
    setIsDisabled(true);
    let found = false;
    props.sessionData.map((s) => {
      //debugger;

      switch (e.target.id) {
        case s._id: {
          let t = { sessionId: s._id, status: e.target.value };
          // setTempData([...tempData, t[0]]);
          if (!tempData.length) tempData.push(t);

          if (e.target.checked === true) document;

          tempData.length &&
            tempData.map((t) => {
              if (t.sessionId === s._id) {
                // setTempData({ ...t, status: e.target.value });
                t.status = e.target.checked;
                found = true;
              }
              // else
              //   tempData.push({ sessionId: s._id, status: e.target.checked });
              //debugger;
            });

          if (found === false)
            tempData.push({ sessionId: s._id, status: e.target.checked });

          // console.log(tempData);

          setIsCheck(!isCheck);
          break;
        }
        default: {
        }
      }
    });
  };
  return (
    <div>
      <Modal effect={Effect.Fall} onRequestClose={props.onRequestClose}>
        <div width="400px" height="100px" style={{ padding: "50px" }}>
          <b>Session List:</b>
          <br />
          Please select the session :<br />
          <small style={{ background: "red", color: "white" }}>
            Please choose one at a time.{" "}
          </small>
          <br />
          <br />
          <form onSubmit={sessionFormSubmit}>
            {props.sessionData.map((s, i = index) => {
              //debugger;

              let foundArr =
                props.sessionToMember &&
                props.sessionToMember.filter((p) => {
                  if (
                    p.memberId === props.currentMemId &&
                    p.sessionId === s._id
                  )
                    return true;
                  else return false;
                });
              // if (foundArr.length) setIsChecked(foundArr[0].status);
              // console.log("foundArr", foundArr);

              let [isCheck, setIsCheck] = useState(
                foundArr.length ? foundArr[0].status : false
              );

              return (
                <>
                  <input
                    type="checkbox"
                    id={s._id}
                    // value={s.members.filter((a) => a.memId === currentMemId)}
                    // defaultchecked={() =>
                    // //   s.members.filter((a) => a.memId === props.currentMemId )
                    // } //yes or n
                    checked={isCheck}
                    disabled={isDisabled}
                    onChange={() =>
                      handleSessionForm(window.event, isCheck, setIsCheck)
                    }
                  />
                  Session {++i}: {s.topic}
                  <br />
                </>
              );
            })}

            <button class="btn btn-primary" onClick={ModalManager.close}>
              Submit
            </button>
          </form>
        </div>
      </Modal>
      {/* <Modal effect={Effect.Newspaper}> */}
      {/* <h1>What you input : {props.sessionToMember[0].sessionId} </h1> */}
      {/* <button onClick={ModalManager.close}>Close Modal</button> */}
      {/* </Modal> */}
    </div>
  );
};
