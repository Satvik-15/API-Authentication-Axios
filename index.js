import express from "express";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://secrets-api.appbrewery.com";

// Credentials Required:
const yourUsername = "jalan";
const yourPassword = "jalan1";
const yourAPIKey = "7e3a6f4c-28cf-4c6f-af72-34b78258833e";
const yourToken = "d1d902b3-36df-488d-b677-345d33882bf0";

// Initial Render
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API response" });
});

// No Authentication required:
app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("ERROR 404 hehe");
  }
});

// basic Auth required:
app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(
      API_URL + "/all?page=2", // declaring Endpoint with param page 2.
      {},
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("ERROR 404 in basic Auth");
  }
});

// Api key Authentication required:
app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5, //param score 5 or above
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("ERROR 404 IN filter");
  }
});

// Token Required:
app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourToken}`,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("ERROR 404 IN Token");
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
