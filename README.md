This is a simple Node.js application that makes requests to the Secrets API. The application is secured with basic auth, API key, and bearer token authentication.

To run the application, install the dependencies and start the server:

```
npm install
npm start
```

The application will be running on port 3000. You can access the application at http://localhost:3000.

## No Authentication Required

The `/noAuth` endpoint does not require any authentication. To make a request to this endpoint, use the following code:

```
const result = await axios.get(API_URL + "/random");
```

The `result` object will contain the response from the API.

## Basic Auth Required

The `/basicAuth` endpoint requires basic auth. To make a request to this endpoint, use the following code:

```
const result = await axios.get(
  API_URL + "/all?page=2",
  {},
  {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  }
);
```

The `result` object will contain the response from the API.

## API Key Required

The `/apiKey` endpoint requires an API key. To make a request to this endpoint, use the following code:

```
const result = await axios.get(API_URL + "/filter", {
  params: {
    score: 5,
    apiKey: yourAPIKey,
  },
});
```

The `result` object will contain the response from the API.

## Token Required

The `/bearerToken` endpoint requires a bearer token. To make a request to this endpoint, use the following code:

```
const result = await axios.get(API_URL + "/secrets/42", {
  headers: {
    Authorization: `Bearer ${yourToken}`,
  },
});
```

The `result` object will contain the response from the API.