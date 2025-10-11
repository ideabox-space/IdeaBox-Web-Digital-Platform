// ====== Navigation Animation ======
const menu = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', function(){
    menu.classList.add('open');
});

closeBtn.addEventListener('click', function(){
    menu.classList.remove('open');
});

function validateFeedback(){
    var feedback_name = document.getElementById("feedback-name");
    var feedback_email = document.getElementById("feedback-email");
    var feedback_text = document.getElementById("feedback-text");

    if (feedback_name.value === "" || feedback_email.value === "" || feedback_text.value === ''){
        alert("Please fill out all fields");
        return false;
    }
    return true;
}

// // ====== Feedback Form Submission ======
// const feedbackForm = document.getElementById('feedback-form');

// if (feedbackForm) {
//     feedbackForm.addEventListener('submit', async function (e) {
//         e.preventDefault(); // Stop normal page reload

//         const form = e.target;

//         const data = new URLSearchParams();
//         data.append('feedback-name', form['feedback-name'].value);
//         data.append('feedback-email', form['feedback-email'].value);
//         data.append('feedback-text', form['feedback-text'].value);

//         try {
//             const response = await fetch('submit_feedback.php', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 body: data
//             });

//             const result = await response.text();
//             alert(result);
//             form.reset();
//         } catch (err) {
//             alert("Oops! Something went wrong.");
//             console.error(err);
//         }
//     });
// }

// // ====== Request Data Submission ======
// const requestForm = document.getElementById('request-form');

// if (requestForm) {
//     requestForm.addEventListener('submit', async function (e) {
//         e.preventDefault(); // Stop normal page reload

//         const form = e.target;

//         const data = new URLSearchParams();
//         data.append('request-name', form['request-name'].value);
//         data.append('request-email', form['request-email'].value);
//         data.append('request-text', form['request-text'].value);

//         try {
//             const response = await fetch('submit_request.php', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 body: data
//             });

//             const result = await response.text();
//             alert(result);
//             form.reset();
//         } catch (err) {
//             alert("Oops! Something went wrong.");
//             console.error(err);
//         }
//     });
// }