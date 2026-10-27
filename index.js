const usedLetter = document.querySelectorAll(".used-letter .letter");
const rows = document.querySelectorAll(".row");

rows.forEach((row, rowIndex)=>{
    const inputs = row.querySelectorAll("input");

    inputs.forEach((input, index)=>{
        input.addEventListener("input", ()=>{
            if (input.value !== "" && index<inputs.length-1) {
                inputs[index+1].focus()
            }
        });
        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                event.preventDefault();

                input.value = "";

                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    row.addEventListener("keydown", (event)=>{
        if (event.key === "Enter"){
            event.preventDefault();

            const allFilled = Array.from(inputs).every(input=>input.value.trim()!=="");

            if(!allFilled){
                return;
            }

            inputs.forEach((input)=>{
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
                input.readOnly=true;
            });
            if (rowIndex<rows.length-1) {
                rows[rowIndex+1].querySelector("input").focus();
            }
        }
    })
})