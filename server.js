const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { response, application } = require("express");

const app = express();

app.use(express.json());

app.get("/checkBetaUser", async (req, res) => {
  try {
    let response = await axios.post(
      "https://pmc-ms-config-manager.pmc-dev.prismamp.com/v1/config/beta-users",
      { fiid: "DEMO", document_type: "1", document: "33119022" }
    );
    console.log(`Beta user is: ${response.status}`);
    res.sendStatus(response.status);
  } catch (error) {
    console.log("error: ", error.message);
  }
});

app.get("/isBetaUser", async (req, res) => {
  // TEST - Ok - http://localhost:5000/isBetaUser?fiid=DEMO&document_type=1&document=33119022
  // TEST - NOk - http://localhost:5000/isBetaUser?fiid=DEMO&document_type=1&document=36298723
  try {
    let response = await axios.post(
      "https://pmc-ms-config-manager.pmc-dev.prismamp.com/v1/config/beta-users",
      {
        fiid: `${req.query.fiid}`,
        document_type: `${req.query.document_type}`,
        document: `${req.query.document}`,
      }
    );
    response.status === 200 && res.send({ message: "Es Beta User" });
  } catch (error) {
    res.send({ message: "No es Beta User" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
