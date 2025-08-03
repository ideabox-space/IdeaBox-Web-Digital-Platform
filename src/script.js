// ====== Navigation Animation ======
const menu = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});

// ====== Feedback Form Submission ======
const feedbackForm = document.getElementById('feedback-form');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', async function (e) {
        e.preventDefault(); // Stop normal page reload

        const form = e.target;

        const data = new URLSearchParams();
        data.append('feedback-name', form['feedback-name'].value);
        data.append('feedback-email', form['feedback-email'].value);
        data.append('feedback-text', form['feedback-text'].value);

        try {
            const response = await fetch('submit_feedback.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data
            });

            const result = await response.text();
            alert(result);
            form.reset();
        } catch (err) {
            alert("Oops! Something went wrong.");
            console.error(err);
        }
    });
}