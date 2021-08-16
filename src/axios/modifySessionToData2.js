import React from "react";
import axios from "axios";

export default (
  memId,
  sessionStatusData,
  sessionToMember,
  setSessionsToMember,
  setInDBProgress
) => {
  debugger;
 
    

}
     

      sessionStatusData.map((s) => {
        let object = { sessionId: s.sessionId, memberId: memId, status: s.status };
        let oldObject = sessionToMember.filter((s) => s.sessionId === s.sessionId);
          
      }
  

      // try {
      //   if (!oldObject.length) {
      //     //add the data
      //   setInDBProgress(1);
      //   axios
      //     .post("https://kpcb9.sse.codesandbox.io/sessionToMember/add", object)
      //     .then((res) => {
      //       // console.log("edited successfuly");
      //       // const updatedData = data.map((element) => {
      //       //   if (element._id === id) {
      //       //     console.log("enter");
      //       //     return {
      //       //       ...element,
      //       //       ...updates
      //       //     };
      //       //   } else return element;
      //       // });

      //       // setData(updatedData);
      //       setInDBProgress(0);
      //     });
      //   }
      // } catch (e) {
      //   console.log("error");
      // }

    

