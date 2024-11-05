// Function to handle login
function login() {
    const userRole = document.getElementById("userRole").value;
    
    if (userRole === "student") {
        window.location.href = "student.html";
    } else if (userRole === "parent") {
        window.location.href = "parent.html";
    } else if (userRole === "driver") {
        window.location.href = "driver.html";
    }
}

// Function to simulate tracking bus based on student and bus number
function trackBus() {
    const studentName = document.getElementById("studentName").value;
    const busNumber = document.getElementById("busNumber").value;

    // Placeholder logic for demo purposes
    if (studentName && busNumber) {
        document.getElementById("busLocation").innerText = `Location for ${studentName}'s bus (${busNumber}): Near School Main Gate`;
    } else {
        alert("Please enter both student name and bus number to track the bus.");
    }
}


// Handle student form submission
document.getElementById("studentForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("studentName").value;
    const studentClass = document.getElementById("studentClass").value;
    const busNumber = document.getElementById("busNumber").value;
    const location = document.getElementById("location").value;
    const contactNumber = document.getElementById("contactNumber").value;

    alert(`Student Details Submitted:\nName: ${name}\nClass: ${studentClass}\nBus Number: ${busNumber}\nLocation: ${location}\nContact Number: ${contactNumber}`);
});


// Handle driver form submission
document.getElementById("driverForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("busLocation").value;
    const status = document.getElementById("busStatus").value;
    alert(`Location: ${location}\nStatus: ${status}`);
});

// Function to handle emergency alert
function handleEmergency() {
    alert("Emergency Alert Sent!");
    // Here you could add code to notify the backend of an emergency, if needed
}

// Function to submit bus change and arrival time updates
function submitChanges() {
    const newBusNumber = document.getElementById("newBusNumber").value;
    const newEta = document.getElementById("newEta").value;

    // Logic to handle submitting new details
    if (newBusNumber || newEta) {
        // Display confirmation message
        document.getElementById("confirmationMessage").style.display = "block";

        // Placeholder for backend call to update data
        console.log("New Bus Number:", newBusNumber);
        console.log("New ETA:", newEta);
    } else {
        alert("Please enter a new bus number or ETA before submitting.");
    }
}
