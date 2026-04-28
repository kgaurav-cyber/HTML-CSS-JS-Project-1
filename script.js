document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Email validation
    if (!email.endsWith("@uppolice.in")) {
        message.style.color = "red";
        message.textContent = "Email must end with @uppolice.in";
        return;
    }

    // Dummy API call (will fail intentionally)
    fetch("https://jsonplaceholder.typicode.com/invalid-endpoint", {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("API failed");
            }
        })
        .catch(error => {
            // Even if API fails, show success message
            message.style.color = "green";
            message.textContent = "Login successful (dummy response)";
        });
});