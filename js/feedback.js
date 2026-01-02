function saveFeedback() {
    const name = document.getElementById("fname").value.trim();
    const phone = document.getElementById("fphone").value.trim();
    const email = document.getElementById("femail").value.trim();
    const rating = document.getElementById("frating").value;
    const feedback = document.getElementById("ffeedback").value.trim();

    const phoneRegex = /^[6789][0-9]{9}$/;
    const emailRegex = /^[\w.-]+@[\w.-]+\.com$/

    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits and start with 6, 7, 8, or 9");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email (example@gmail.com)");
        return;
    }

    if (rating === "" || feedback === "") {
        alert("Please fill all required fields");
        return;
    }

    const data =
`Name: ${name}
Phone: ${phone}
Email: ${email}
Rating: ${rating}
Feedback: ${feedback}`;

    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback.txt";
    link.click();
}

