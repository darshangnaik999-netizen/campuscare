document.getElementById("complaintForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let studentId = document.getElementById("studentId").value;
    let category = document.getElementById("category").value;
    let complaint = document.getElementById("complaint").value;

    let complaintId = "CC" + Math.floor(1000 + Math.random() * 9000);

    let data = {
        id: complaintId,
        name: name,
        studentId: studentId,
        category: category,
        complaint: complaint,
        status: "Received"
    };

    localStorage.setItem(complaintId, JSON.stringify(data));

    alert(
        "Complaint Submitted Successfully!\n\n" +
        "Your Complaint ID: " + complaintId
    );

    document.getElementById("complaintForm").reset();
});


function trackComplaint() {

    let id = document.getElementById("complaintId").value;

    let data = localStorage.getItem(id);

    let result = document.getElementById("result");

    if (data) {

        let complaint = JSON.parse(data);

        result.innerHTML =
            "<h2>Complaint Found</h2>" +
            "<p><b>Complaint ID:</b> " + complaint.id + "</p>" +
            "<p><b>Student:</b> " + complaint.name + "</p>" +
            "<p><b>Category:</b> " + complaint.category + "</p>" +
            "<p><b>Status:</b> " + complaint.status + "</p>";

    } else {

        result.innerHTML =
            "<p>❌ Complaint not found.</p>";

    }
}