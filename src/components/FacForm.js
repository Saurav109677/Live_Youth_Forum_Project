import React, { useState } from "react";

export default (props) => {
  const group = props.group;
  // const fac = props.fac;
  const paramGroupId = props.groupId;
  // console.log("Detail from form", props.facId);
  const [editedData, setEditedData] = useState(
    props.details ? props.details[0] : {}
  );
  // console.log("editedData", editedData);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // const newMember = {
    // firstName: document.getElementById("inputFName").value,
    // lastName: document.getElementById("inputLName").value,
    // mobile: document.getElementById("inputMobile").value,
    // address: document.getElementById("inputAddress").value,
    // facilitator: !document.getElementById("inputFacilitator").value
    //   ? "Not assigned"
    //   : document.getElementById("inputFacilitator").value,
    // group: !document.getElementById("inputGroup").value
    //   ? "Not Assigned"
    //   : document.getElementById("inputGroup").value
    // };
    // // console.log(newMember);
    // let getGroup = "";

    // fac.filter((f) => {
    //   // console.log("FID", f._id);
    //   // console.log("FID", paramFacId);

    //   if (f._id === paramFacId) {
    //     getGroup = f.code;
    //     //getFName = f.name;
    //   }
    // });

    // console.log(getGroupArr);
    let getGroupName = "";
    group.filter((f) => {
      if (f._id === paramGroupId) {
        getGroupName = f.name;
      }
    });
    setEditedData({ ...editedData, group: getGroupName });
    const member = {
      name: editedData.name,
      code: paramGroupId,
      group: getGroupName,
      passingYear: editedData.passingYear
    };
    console.log(("FAc", member));

    if (props.details) props.editMem(props.details[0]._id, member);
    else props.addFac(member);
  };

  const handleForm = (e) => {
    // console.log(e.target);

    switch (e.target.id) {
      case "inputFacName":
        setEditedData({ ...editedData, name: e.target.value });
        break;
      case "inputPassingYear":
        setEditedData({ ...editedData, passingYear: e.target.value });
        break;

      case "inputGroupName":
        // console.log(e.target.value);
        setEditedData({ ...editedData, group: e.target.value });
        break;

      default:
        break;
    }
  };

  return (
    <div class="card" style={{ width: "50rem", align: "center" }}>
      <div class="card-body">
        <form onSubmit={onFormSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name (Mandatory)</label>
              <input
                type="text"
                class="form-control"
                id="inputFacName"
                value={editedData.name}
                placeholder="Name"
                onChange={handleForm}
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Group</label>
              <input
                type="text"
                class="form-control"
                id="inputGroupName"
                placeholder={editedData.group}
                onChange={handleForm}
                disabled
              />
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Passing year: (Mandatory)</label>
            <input
              type="text"
              class="form-control"
              id="inputPassingYear"
              value={editedData.passingYear}
              placeholder="passing year"
              onChange={handleForm}
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
