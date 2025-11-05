import express from "express";
const app = express();
app.use(express.json());

// Verification endpoint
app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = "lkfnklenfkewnflkefnlewfe4123knkelfn"; // your token
  if (req.query["hub.verify_token"] === VERIFY_TOKEN) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(403);
  }
});

// Webhook receiver
app.post("/webhook", (req, res) => {
  console.log("📩 Webhook event received:");
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
