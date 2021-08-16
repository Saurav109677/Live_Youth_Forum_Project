import React, { useState } from "react";
import Loading from "./Loading";

export default (props) => {
  let [isAddSession, setIsAddSession] = useState(false);
  let [topic, setTopic] = useState();
  let [mode, setMode] = useState();
  const sessions = props.sessions;
  let [selectedId, setSelectedId] = useState();
  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("hit");

    if (mode === "Edit") props.editSession(selectedId, { topic: topic });
    else {
      props.addSession({ topic: topic });
    }
  };

  const editSession = (id) => {
    setMode("Edit");
    let found = sessions.filter((s) => s._id === id);
    setTopic(found[0].topic);
    setIsAddSession(true);
    setSelectedId(id);
  };

  const template = (
    <div class="container">
      <button
        class="btn btn-warning"
        onClick={() => {
          setIsAddSession(true);
          setMode("Add");
          setTopic("");
        }}
      >
        Add Session
      </button>

      <div class="row">
        <div class="col">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Topic</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            {sessions.length ? (
              <>
                <tbody>
                  {sessions.length &&
                    sessions.map((s, i = index) => (
                      <>
                        <tr key={s._id}>
                          <th scope="row">{++i}</th>
                          <td>Session{i}</td>
                          <td>{s.topic}</td>
                          <td>
                            {/* <Link to={`/edit/${d._id}/${d.facilitator}`}> */}
                            <button
                              className="btn btn-warning"
                              onClick={() => editSession(s._id)}
                            >
                              Edit
                            </button>
                            {/* </Link> */}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => props.removeSession(s._id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </>
            ) : (
              <>
                <center>
                  <p>No Records Found</p>
                </center>
              </>
            )}
          </table>
        </div>
        <div class="col-4">
          <form
            onSubmit={onFormSubmit}
            style={{ border: "1px solid black", padding: "10px" }}
            hidden={!isAddSession}
          >
            <p>
              <b>{mode} Session</b>
            </p>
            <div class="form-group">
              <label for="topic">Topic:</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setTopic(e.target.value)}
                value={topic}
              />
              {/* <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>

            <button class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {!props.inProgress ? template : <Loading />}
      {/* {console.log("from detail", props.inProgress)} */}
    </div>
  );
};
