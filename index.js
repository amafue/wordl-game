const inputs = document.querySelectorAll(".row input");
const usedLetter = document.querySelectorAll(".used-letter .letter");

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
                usedLetter.forEach((letter)=>{
                    if (letter.textContent===input.value){
                        letter.style.backgroundColor = "lightgreen";
                        letter.style.borderColor = "lightgreen";
                    }
                })
            } else{
                input.style.backgroundColor = "rgb(202, 199, 199)";
                usedLetter.forEach((letter)=>{
                    if (letter.textContent===input.value){
                        letter.style.backgroundColor = "grey";
                        letter.style.borderColor = "grey";
                    }
                    
                })
            }
        }
    });
});