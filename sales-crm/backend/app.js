const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let leads = [
  {
    id: 1,
    name: "John Doe",
    phone: "1234567890",
    email: "john@example.com",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "9876543210",
    email: "jane@example.com",
    status: "Pending",
  },
];

// Get leads
app.get("/api/leads", (req, res) => res.json(leads));

// Add a new lead
app.post("/api/leads", (req, res) => {
  const { name, phone, email } = req.body;
  const newLead = {
    id: leads.length + 1,
    name,
    phone,
    email,
    status: "Pending",
  };
  leads.push(newLead);
  res.status(201).json(newLead);
});

// Update lead status
app.put("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const lead = leads.find((lead) => lead.id === parseInt(id));
  if (lead) {
    lead.status = status;
    res.json(lead);
  } else {
    res.status(404).json({ message: "Lead not found" });
  }
});

// Remove a lead
app.delete("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  leads = leads.filter((lead) => lead.id !== parseInt(id));
  res.json({ message: "Lead removed" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
