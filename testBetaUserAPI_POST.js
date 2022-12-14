const axios = require("axios");

// { headers: { "Content-Type": "appliction/json" } }
axios
  .post(
    "https://pmc-ms-config-manager.pmc-dev.prismamp.com/v1/config/beta-users",
    { fiid: "DEMO", document_type: "1", document: "33119022" }
  )
  .then((response) => {
    console.log(response.status);
  });
