const acc = document.getElementsByClassName("head");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none"

        } else {
            answer.style.display = "block";
            answer.style.color = "gray";
            answer.style.padding = "1rem";

        }
    })
}



