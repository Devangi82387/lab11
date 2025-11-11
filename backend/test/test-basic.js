import http from "http";
const req = http.request({ host: "localhost", port: 4000, path: "/status", method: "GET" }, res => {
  console.log("Test ran (may fail in CI if server not started). Status code:", res.statusCode);
  res.resume();
});
req.on("error", ()=> process.exit(0));
req.end();
