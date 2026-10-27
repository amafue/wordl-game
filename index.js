const inputs = document.querySelectorAll(".row input");

inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }

            if (input.value === input.dataset.answer) {
                input.style.backgroundColor = "lightgreen";
                input.style.borderColor = "lightgreen";
            } else{
                input.style.backgroundColor = "rgb(202, 199, 199)";
            }
        }
    });
});