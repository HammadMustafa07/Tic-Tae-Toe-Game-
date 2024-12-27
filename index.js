var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("#reset-btn");
var newGameBtn = document.querySelector("#new-btn");
var msgContainer = document.querySelector(".msg-container");
var msg = document.querySelector("#msg");
var turnO = true; //player0playerx
var winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
var resetGame = function () {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue";
        }
        box.disabled = true;
        checkWinner();
    });
});
var disableBoxes = function () {
    for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        var box = boxes_1[_i];
        box.disabled = true;
    }
};
var enableBoxes = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.disabled = false;
        box.innerText = "";
    }
};
var showWinner = function (winner) {
    msg.innerText = "Congratulations, Winner is ".concat(winner);
    msgContainer.classList.remove("hide");
    disableBoxes();
};
var checkWinner = function () {
    for (var _i = 0, winPatterns_1 = winPatterns; _i < winPatterns_1.length; _i++) {
        var pattern = winPatterns_1[_i];
        // console.log(pattern[0], pattern[1], pattern[2]);
        var pos1Val = boxes[pattern[0]].innerText;
        var pos2Val = boxes[pattern[1]].innerText;
        var pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
    ;
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
