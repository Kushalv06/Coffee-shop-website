function saveFeedback() {
    const name = document.getElementById("fname").value;
    const rating = document.getElementById("frating").value;
    const feedback = document.getElementById("ffeedback").value;

    const data =
`Name: ${name}
Rating: ${rating}
Feedback: ${feedback}`;

    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback.txt";
    link.click();
}

function loadFeedback(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const lines = e.target.result.split("\n");

        document.getElementById("fname").value = lines[0].split(": ")[1] || "";
        document.getElementById("frating").value = lines[1].split(": ")[1] || "";
        document.getElementById("ffeedback").value = lines[2].split(": ")[1] || "";
    };
    reader.readAsText(file);
}
