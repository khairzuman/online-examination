function createExam() {

    // Get Teacher Name
    let teacher = document.getElementById("teacherName").value;

    // Get Exam Title
    let title = document.getElementById("examTitle").value;

    // Get Exam Time
    let time = document.getElementById("examTime").value;

    // Check Empty Fields
    if (teacher === "" || title === "" || time === "") {
        alert("Please fill all fields!");
        return;
    }

    // Create Exam Information
    let exam = {
        teacherName: teacher,
        examTitle: title,
        examTime: time,
        examDate: new Date().toLocaleDateString()
    };

    // Save Exam in Browser
    localStorage.setItem("examData", JSON.stringify(exam));

    // Show Success Message
    document.getElementById("message").innerHTML =
        "Examination Created Successfully!";

    alert("Your Examination has been created!");
}