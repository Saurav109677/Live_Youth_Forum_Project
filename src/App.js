import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles.css";
// import MemberDetails from "./components/MemberDetails";
import EditMember from "./components/EditMember";
import AddMember from "./components/AddMember";
import addDatatoDB from "./axios/addData";
import Loading from "./components/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import removeDataFromDB from "./axios/removeData";
import editDataFromDB from "./axios/editData";
import editSessionToDB from "./axios/editSessionToDB";
// import fetchFaciliator from "./axios/fetchFaciliator";

import axios from "axios";
import MemberDetails from "./components/MemberDetails";
import FacilitatorDetails from "./components/FacilitatorDetails";
import AddFacilitator from "./components/AddFacilitator";
import addFacDatatoDB from "./axios/addFac";
import removeFacFromDB from "./axios/removeFac";
import removeSessionFromDB from "./axios/removeSessionFromDB";
import updateSessionToMember from "./axios/updateSessionToMember";
import addSessionToMember from "./axios/addSessionToMember";
import ErrorPage from "./components/404Error";
import SessionsDetails from "./components/SessionsDetails";
import addSessionToDB from "./axios/addSessionToDB";
import Login from "./components/Login";
import UnderMaintainence from "./components/UnderMaintainence";
import Filter from "./components/Filter";
// import fetchFaciliator from "./axios/fetchFaciliator";

export default (props) => {
  const [data, setData] = useState({});
  const [facilitator, setFacilitator] = useState({});
  const [group, setGroup] = useState({});
  const [sessions, setSessions] = useState({});
  const [inDBProgress, setInDBProgress] = useState(0);
  const [sessionToMember, setSessionsToMember] = useState({});
  // console.log(props.cookies);
  const cookies = props.cookies;
  const [loginStatus, setLoginStatus] = useState(false);
  const [headerVisibility, setHeaderVisibility] = useState(true);
  //const [filter, setFilter] = useState({});

  // const filterInit = {
  //   group: "",
  //   facilitator: ""
  // };

  //setFilter(filterInit);

  // sessionStorage.setItem("loginStatus", false);
  // console.log(sessionStorage.getItem('loginStatus'));

  const getCurrentStateFromDB = () => {
    try {
      axios.get("https://kpcb9.sse.codesandbox.io/").then((res) => {
        // const arr = res.data.map((d) => d);
        // console.log("ARray type", arr);
        // const toObj = Object.entries(res.data);
        const toObj = res.data;
        setData(toObj);

        // setData(Object.entries(res.data));
        // setData(Object.values(res.data));
        // console.log("REs data:", res.data);
      });

      axios.get("https://kpcb9.sse.codesandbox.io/facilitator/").then((res) => {
        // const arr = res.data.map((d) => d);
        // console.log("ARray type", arr);
        // const toObj = Object.entries(res.data);
        setFacilitator(res.data);

        // setData(Object.entries(res.data));
        // setData(Object.values(res.data));
        // console.log("REs data:", res.data);
      });

      axios.get("https://kpcb9.sse.codesandbox.io/group/").then((res) => {
        // const arr = res.data.map((d) => d);
        // console.log("ARray type", arr);
        // const toObj = Object.entries(res.data);
        setGroup(res.data);
      });

      // setData(Object.entries(res.data));
      // setData(Object.values(res.data));
      // console.log("REs data:", res.data);

      axios.get("https://kpcb9.sse.codesandbox.io/session/").then((res) => {
        // const arr = res.data.map((d) => d);
        // console.log("ARray type", arr);
        // const toObj = Object.entries(res.data);
        setSessions(res.data);
      });

      axios
        .get("https://kpcb9.sse.codesandbox.io/sessionToMember/")
        .then((res) => {
          // const arr = res.data.map((d) => d);
          // console.log("ARray type", arr);
          // const toObj = Object.entries(res.data);
          setSessionsToMember(res.data);
        });
    } catch (e) {
      return "Error";
    }
  };

  useEffect(() => {
    getCurrentStateFromDB();
  }, []);

  console.log(data);
  console.log(facilitator);
  console.log(group);

  //setData([...data, { firstName: "sdfds", lastName: "dsafsa", mobile: 38787 }]);

  const addMember = (newMem) => {
    // add in state and db
    // console.log("from app", newMem);

    addDatatoDB(newMem, setData, data, setInDBProgress);
    //setData([...data, newMem]);
    //
  };

  const addFacilitator = (newMem) => {
    // add in state and db
    // console.log("from app", newMem);

    addFacDatatoDB(newMem, setFacilitator, facilitator, setInDBProgress);
    //setData([...data, newMem]);
    //
  };

  const removeMember = (id) => {
    removeDataFromDB(id, setData, data, setInDBProgress);
  };

  const editMember = (id, updates) => {
    editDataFromDB(id, updates, setData, data, setInDBProgress);
  };

  const removeFac = (id) => {
    removeFacFromDB(id, setFacilitator, facilitator, setInDBProgress);
  };

  const modifySessionMemberList = (memId, sessionStatusData) => {
    //debugger;
    sessionStatusData.map((s) => {
      let object = {
        sessionId: s.sessionId,
        memberId: memId,
        status: s.status
      };
      let oldObject = sessionToMember.filter(
        (p) => p.sessionId === s.sessionId && p.memberId === memId
      );
      if (!oldObject.length) {
        //     //add the data
        addSessionToMember(
          object,
          sessionToMember,
          setSessionsToMember,
          setInDBProgress
        );
      } else {
        //update the data

        // let newObj = { ...oldObject, status: s.status };
        // console.log("oObject", oldObject);
        // console.log("nObject", newObj);

        updateSessionToMember(
          oldObject[0]._id,
          { status: s.status },
          sessionToMember,
          setSessionsToMember,
          setInDBProgress
        );
      }
    });
  };

  const addSession = (newSession) => {
    // add in state and db
    console.log("from app", newSession);

    addSessionToDB(newSession, setSessions, sessions, setInDBProgress);
    //setData([...data, newMem]);
    //
  };

  const editSession = (id, updates) => {
    // debugger;
    editSessionToDB(id, updates, setSessions, sessions, setInDBProgress);
  };

  const removeSession = (id) => {
    removeSessionFromDB(id, setSessions, sessions, setInDBProgress);
  };

  // const template01 = (
  //   <>
  //     <Header />

  // );

  return (
    <div>
      <BrowserRouter>
        {/* {headerVisibility ? (
          (props) => <Header history={props.history} />
        ) : (
          <></>
        )} */}

        <Switch>
          <Route
            path="/"
            exact
            component={
              !sessionStorage.getItem("loginStatus")
                ? (props) => {
                    // console.log(sessionStorage.getItem("loginStatus"));

                    setHeaderVisibility(false);
                    return (
                      <Login
                        history={props.history}
                        setLoginStatus={setLoginStatus}
                        // getCookies={cookies.get}
                        // setCookies={cookies.set}
                      />
                    );
                  }
                : (props) => <Redirect to="/dashboard" />
            }
          />
          <Route
            path="/dashboard"
            exact
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <Dashboard
                        data={data}
                        group={group}
                        // getCookies={props.cookies.get}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />

          <Route
            path="/filter"
            exact
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <Filter
                        data={data}
                        removeMem={removeMember}
                        inProgress={inDBProgress}
                        facilitator={facilitator}
                        sessions={sessions}
                        match={props.match}
                        history={props.history}
                        group={group}
                        modifySessionMemberList={modifySessionMemberList}
                        sessionToMember={sessionToMember}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />

          <Route
            path="/detail/:facId"
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <MemberDetails
                        data={data}
                        removeMem={removeMember}
                        inProgress={inDBProgress}
                        facilitator={facilitator}
                        sessions={sessions}
                        match={props.match}
                        history={props.history}
                        modifySessionMemberList={modifySessionMemberList}
                        sessionToMember={sessionToMember}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />

          <Route
            path="/edit/:id/:facId"
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <EditMember
                        history={props.history}
                        data={data}
                        fac={facilitator}
                        group={group}
                        match={props.match}
                        editMemFun={editMember}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />

          <Route
            path="/add/:facId"
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <AddMember
                        history={props.history}
                        inProgress={inDBProgress}
                        addMemFun={addMember}
                        fac={facilitator}
                        group={group}
                        match={props.match}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
            // render={(props) => (
            //   <AddMember
            //     history={props.history}
            //     inProgress={inDBProgress}
            //     addMemFun={addMember}
            //     fac={facilitator}
            //     group={group}
            //     match={props.match}
            //   />
            // )}
          />

          <Route
            path="/facilitator/:gId"
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <FacilitatorDetails
                        fData={facilitator}
                        match={props.match}
                        inProgress={inDBProgress}
                        removeFac={removeFac}
                        history={props.history}
                        group={group}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />
          <Route
            path="/addFac/:gId"
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <AddFacilitator
                        fData={facilitator}
                        match={props.match}
                        addFacFun={addFacilitator}
                        history={props.history}
                        group={group}
                        inProgress={inDBProgress}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />
          <Route
            path="/sessions"
            component={
              sessionStorage.getItem("loginStatus")
                ? (props) => (
                    <>
                      <Header history={props.history} />
                      <SessionsDetails
                        inProgress={inDBProgress}
                        addSession={addSession}
                        sessions={sessions}
                        editSession={editSession}
                        removeSession={removeSession}
                      />
                    </>
                  )
                : () => <Redirect to="/" />
            }
          />
          <Route component={ErrorPage} />
        </Switch>

        {/* {sessionStorage.getItem("loginStatus") ? template01 : <>not eligible</>} */}
      </BrowserRouter>
    </div>
  );
};
