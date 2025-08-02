<?php
$host = "116.193.191.108";
$dbname = "ideabox";
$username = "root";
$password = "Weareleadingthechange27.";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    echo "Database connection failed.";
    exit;
}

$name = isset($_POST['feedback-name']) ? $conn->real_escape_string($_POST['feedback-name']) : '';
$email = isset($_POST['feedback-email']) ? $conn->real_escape_string($_POST['feedback-email']) : '';
$feedback = isset($_POST['feedback-text']) ? $conn->real_escape_string($_POST['feedback-text']) : '';

$sql = "INSERT INTO feedback_website (name, email, feedback_text) VALUES ('$name', '$email', '$feedback')";

if ($conn->query($sql)) {
    echo "Thank you for your feedback!";
} else {
    http_response_code(500);
    echo "Failed to submit feedback.";
}

$conn->close();
?>
