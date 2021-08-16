import React, { useState } from "react";

export default (props) => {
  const group = props.group;
  const fac = props.fac;
  const paramFacId = props.facId;
  // console.log("Detail from form", props.facId);
  const [editedData, setEditedData] = useState(
    props.details ? props.details[0] : {}
  );
  console.log("editedData", editedData);

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
    // console.log(newMember);
    let getGroup = "";

    fac.filter((f) => {
      // console.log("FID", f._id);
      // console.log("FID", paramFacId);

      if (f._id === paramFacId) {
        getGroup = f.code;
        //getFName = f.name;
      }
    });

    // console.log(getGroupArr);

    const member = {
      firstName: editedData.firstName,
      lastName: editedData.lastName,
      mobile: editedData.mobile,
      address: editedData.address,
      // facilitator: !editedData.facilitator
      //   ? "Not assigned"
      //   : editedData.facilitator,
      // group: !editedData.group ? "Not Assigned" : editedData.group
      facilitator: editedData.facilitator ? editedData.facilitator : paramFacId,
      group: getGroup,
      email: editedData.email,
      remark: editedData.remark
    };
    console.log(("Member", member));

    if (props.details) props.editMem(props.details[0]._id, member);
    else props.addMem(member);
  };

  const handleForm = (e) => {
    // console.log(e.target);

    switch (e.target.id) {
      case "inputFName":
        setEditedData({
          ...editedData,
          firstName: e.target.value
        });
        break;
      case "inputLName":
        setEditedData({ ...editedData, lastName: e.target.value });
        break;
      case "inputAddress":
        setEditedData({ ...editedData, address: e.target.value });
        break;
      case "inputMobile":
        setEditedData({ ...editedData, mobile: e.target.value });
        break;
      case "inputFacilitator":
        setEditedData({ ...editedData, facilitator: e.target.value });
        break;
      case "inputEmail":
        setEditedData({ ...editedData, email: e.target.value });
        break;
      case "inputRemark":
        setEditedData({ ...editedData, remark: e.target.value });
        break;
      // case "inputGroup":
      //   // console.log(e.target.value);
      //   setEditedData({ ...editedData, group: e.target.value });
      //   break;

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
                id="inputFName"
                value={editedData.firstName}
                placeholder="First Name"
                onChange={handleForm}
                required
              />
            </div>
            {/* <div class="form-group col-md-6" >
              <label for="inputPassword4">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="inputLName"
                value={editedData.lastName}
                placeholder="Last name"
                onChange={handleForm}
              />
            </div> */}
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              value={editedData.address}
              placeholder="1234 Main St"
              onChange={handleForm}
            />
          </div>
          <div class="form-group">
            <label for="inputEmail">Email (Mandatory)</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              value={editedData.email}
              placeholder="xyz@abc.com"
              onChange={handleForm}
              required
            />
          </div>
          <div class="form-group">
            <label for="mobile">Mobile (Mandatory)</label>
            <input
              type="number"
              class="form-control"
              id="inputMobile"
              value={editedData.mobile}
              placeholder="9123456789"
              onChange={handleForm}
              required
            />
          </div>
          <div class="form-group">
            <label for="inputRemark">Remark</label>
            <textarea
              class="form-control"
              id="inputRemark"
              value={editedData.remark}
              placeholder="Write something"
              onChange={handleForm}
            ></textarea>
          </div>
          <div class="form-group">
            <label for="inputAddress">Facilitator</label>
            {/* <input
              type="text"
              class="form-control"
              id="inputFacilitator"
              value={editedData.facilitator}
              placeholder="1234 Main St"
              onChange={handleForm}
            /> */}

            <select
              class="form-control"
              id="inputFacilitator"
              value={editedData.facilitator}
              onChange={handleForm}
            >
              {fac &&
                fac.map((f) => {
                  return (
                    <option value={f._id} selected={f._id === paramFacId}>
                      {f.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div class="form-group">
            {/* <label for="inputAddress">Group</label> */}
            {/* <input
              type="text"
              class="form-control"
              id="inputGroup"
              value={editedData.group}
              placeholder="1234 Main St"
              onChange={handleForm}
            /> */}
            {/* <select
              class="form-control"
              id="inputGroup"
              value={editedData.group}
              onChange={handleForm}
            >
              {group.map((g) => {
                return <option value={g._id}>{g.name}</option>;
              })}
            </select> */}
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          {/* <button type="cancel">Cancel</button> */}
        </form>
      </div>
    </div>
  );
};
