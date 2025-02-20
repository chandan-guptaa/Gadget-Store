document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            // Get form values
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const message = form.querySelector('textarea[name="message"]').value.trim();

            // Basic validation
            if (name === "" || email === "" || message === "") {
                alert("All fields are required!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            // Show thank you message
            form.innerHTML = `<p class="thank-you">Thank you, ${name}! Your message has been sent.</p>`;
        });
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
