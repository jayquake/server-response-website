const express = require("express");
const app = express();
const port = 3001; // Use a different port from your React app

app.get("/status/none", (req, res) => {
  res.send("None");
});

app.get("/status/ok", (req, res) => {
  res.status(200).send("OK");
});

app.get("/status/redirected", (req, res) => {
  res.redirect("/status/ok"); // Example redirect to the /ok path
});

app.get("/status/not-found", (req, res) => {
  res.status(404).send("Not Found");
});

app.get("/status/blocked", (req, res) => {
  // Simulate a blocked response (no standard HTTP status for "blocked")
  res.status(403).send("Blocked");
});

app.get("/status/no-response", (req, res) => {
  // Simulate no response by not sending a response
  // NOTE: In a real scenario, you might not want to leave requests hanging
});

app.get("/status/internal-error", (req, res) => {
  res.status(500).send("Internal Error");
});

app.get("/status/access-denied", (req, res) => {
  res.status(403).send("Access Denied");
});

app.get("/status/blocked-by-cloudflare", (req, res) => {
  // Simulate a Cloudflare block (no standard HTTP status for this)
  res.status(403).send("Blocked by Cloudflare");
});

app.get("/status/failed-request", (req, res) => {
  // Simulate a failed request (no standard HTTP status for "failed")
  res.status(400).send("Failed Request");
});

app.get("/status/server-error", (req, res) => {
  res.status(500).send("Server Error");
});

app.get("/status/invalid-domain", (req, res) => {
  // Simulate an invalid domain (no standard HTTP status for "invalid domain")
  res.status(404).send("Invalid Domain");
});

app.get("/status/page-scan-interrupted", (req, res) => {
  // Simulate a page scan interrupted (no standard HTTP status for this)
  res.status(503).send("Page Scan Interrupted");
});

app.get("/status/page-timeout", (req, res) => {
  // Simulate a timeout (no standard HTTP status for "timeout")
  res.status(408).send("Page Timeout");
});

app.get("/status/page-scan-aborted", (req, res) => {
  // Simulate a page scan aborted (no standard HTTP status for this)
  res.status(503).send("Page Scan Aborted");
});

app.get("/status/non-licensed-domain", (req, res) => {
  // Simulate a non-licensed domain (no standard HTTP status for this)
  res.status(403).send("Non Licensed Domain");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
