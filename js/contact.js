function saveContact() {
    const name = document.getElementById("cname").value;
    const email = document.getElementById("cemail").value;
    const message = document.getElementById("cmessage").value;

    const data =
`Name: ${name}
Email: ${email}
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
