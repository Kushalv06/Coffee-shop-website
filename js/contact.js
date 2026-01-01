function saveContact() {
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const phone = document.getElementById("cphone").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    const phonePattern = /^[6789][0-9]{9}$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits and start with 6, 7, 8, or 9");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Email must be valid and end with .com");
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters long");
        return;
    }

    const data =
    `Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}`;

    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact.txt";
    link.click();
}


function loadContact(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const lines = e.target.result.split("\n");

        document.getElementById("cname").value = lines[0].split(": ")[1] || "";
        document.getElementById("cemail").value = lines[1].split(": ")[1] || "";
        document.getElementById("cmessage").value = lines[2].split(": ")[1] || "";
    };
    reader.readAsText(file);
}
