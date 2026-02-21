// Existing functions preserved from your code
function generateId(prefix) { return prefix + Math.floor(Math.random() * 1000000); }
function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }
function saveData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

// New Detail: Handle Form with Visual Feedback
const complaintForm = document.getElementById("complaintForm");
if (complaintForm) {
    complaintForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const complaint = {
            id: generateId("CIV"),
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            description: document.getElementById("description").value,
            status: "Pending",
            createdAt: new Date().toLocaleDateString()
        };

        const complaints = getData("complaints");
        complaints.push(complaint);
        saveData("complaints", complaints);

        // Visual Success Feedback
        document.getElementById("complaintMessage").innerHTML = `
            <div style="background: #dcfce7; padding: 15px; border-radius: 10px; margin-top: 20px; border: 1px solid #16a34a">
                <p style="color: #16a34a">Success! Tracking ID: <strong>${complaint.id}</strong></p>
            </div>
        `;
        complaintForm.reset();
    });
}