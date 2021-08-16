// import { connect } from "./db/connection";

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const dataRoutes = require("./routers/DataSheet");
const facilitatorRoutes = require("./routers/Facilitator");
const groupRoutes = require("./routers/Group");
const sessionRoutes = require("./routers/Session");
const sessionToMemberRoutes = require("./routers/SessionToMember");

app.use(cors());
app.use(express.json());

app.use("/", dataRoutes);
app.use("/facilitator", facilitatorRoutes);
app.use("/group", groupRoutes);
app.use("/session", sessionRoutes);
app.use("/sessionToMember", sessionToMemberRoutes);

app.listen(1515, () => {
  console.log("server running on port 9000");
});
