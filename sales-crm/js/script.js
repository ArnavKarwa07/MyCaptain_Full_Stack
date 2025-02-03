document.addEventListener("DOMContentLoaded", () => {
  const leadsContainer = document.getElementById("leads");
  const addLeadForm = document.getElementById("addLeadForm");

  // Fetch leads
  const fetchLeads = async () => {
    const response = await fetch("http://localhost:3000/api/leads");
    const leads = await response.json();
    renderLeads(leads);
  };

  // Render leads
  const renderLeads = (leads) => {
    leadsContainer.innerHTML = "";
    leads.forEach((lead) => {
      const leadEl = document.createElement("div");
      leadEl.classList.add("lead");
      leadEl.innerHTML = `
        <h3>${lead.name}</h3>
        <p>Phone: <a href="tel:${lead.phone}">${lead.phone}</a></p>
        <p>Email: <a href="mailto:${lead.email}">${lead.email}</a></p>
        <p>Status: ${lead.status}</p>
        <button class="call">Call</button>
        <button class="email">Email</button>
        <button class="sold" data-id="${lead.id}" data-status="Sold">Mark as Sold</button>
        <button class="not-sold" data-id="${lead.id}" data-status="Not Sold">Mark as Not Sold</button>
        <button class="remove" data-id="${lead.id}">Remove Lead</button>
      `;
      leadsContainer.appendChild(leadEl);

      // Event listeners for buttons
      leadEl
        .querySelector(".sold")
        .addEventListener("click", () => updateStatus(lead.id, "Sold"));
      leadEl
        .querySelector(".not-sold")
        .addEventListener("click", () => updateStatus(lead.id, "Not Sold"));
      leadEl
        .querySelector(".remove")
        .addEventListener("click", () => removeLead(lead.id));
    });
  };

  // Add new lead
  addLeadForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    await fetch("http://localhost:3000/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email }),
    });

    addLeadForm.reset();
    fetchLeads();
  });

  // Update status
  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:3000/api/leads/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchLeads();
  };

  // Remove lead
  const removeLead = async (id) => {
    await fetch(`http://localhost:3000/api/leads/${id}`, { method: "DELETE" });
    fetchLeads();
  };

  fetchLeads();
});
