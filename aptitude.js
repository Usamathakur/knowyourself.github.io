var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var alertModal = document.getElementById("alertModal");
var alertMsg = document.getElementById("alertMsg");
var modalBtn = document.querySelector(".modal-btn");
var ans1 = document.getElementById("1d");
var ans2 = document.getElementById("2c");
var ans3 = document.getElementById("3b");
var ans4 = document.getElementById("4c");
var ans5 = document.getElementById("5b");
var ans6 = document.getElementById("6d");
var ans7 = document.getElementById("7b");
var ans8 = document.getElementById("8a");
var ans9 = document.getElementById("9b");
var ans10 = document.getElementById("10b");
var ans = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10];
var score = 0;
var checked = 0;
var percentage = 0;
var msg;
var buttons = document.getElementsByTagName("input");

function reset() {
    score = 0;
    checked = 0;
    percentage = 0;
}
submitBtn.addEventListener("click", function() {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            checked++;
        }
    }
    if (checked) {
        for (var i = 0; i < ans.length; i++) {
            if (ans[i].checked) {
                score++;
            }
        }
        percentage = (score / 10) * 100;
        // console.log(percentage);
        if (percentage >= 70) {
            msg = "Congratulations! You are better of without them";
            alertMsg.textContent = msg;
            $('#alertModal').modal('show');
            // modalBtn.addEventListener("click", function() {
            //     window.location = "CollisionCoding.html";
            // });

        } else {
            msg = "You need to rethink your decisions for them";
            alertMsg.textContent = msg;
            $('#alertModal').modal('show');
            //alertModal.modal('show');
        }
    } else {
        msg = "Select options to proceed.";
        alertMsg.textContent = msg;
        $('#alertModal').modal('show');
        //alertModal.modal('show');

    }
    reset();
});

resetBtn.addEventListener("click", function() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].checked = false;
    }
});
