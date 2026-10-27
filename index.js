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
                } else if (Array.from(inputs).some(otherInput =>
                    otherInput.dataset.answer === input.value
                )){
                    input.style.backgroundColor = "yellow";
                    input.style.borderColor = "yellow";
                    
                }else{
                    input.style.backgroundColor = "rgb(202, 199, 199)";
                }

                usedLetter.forEach((letter)=>{
                        if (letter.textContent===input.value){
                            if (input.style.backgroundColor === "lightgreen") {
                                letter.style.backgroundColor = "lightgreen";
                                letter.style.borderColor = "lightgreen";
                                letter.dataset.status="green";

                            }else if (input.style.backgroundColor === "yellow" && letter.dataset.status !== "green"){
                                letter.style.backgroundColor = "yellow";
                                letter.style.borderColor = "yellow";
                                letter.dataset.status="yellow";

                            }else if (letter.dataset.status !== "yellow" && letter.dataset.status !== "green"){
                                letter.style.backgroundColor = "grey";
                                letter.style.borderColor = "grey";
                                letter.dataset.status="grey";
                            }
        
                        }
                    })

                input.readOnly=true;
            });
            if (rowIndex<rows.length-1) {
                rows[rowIndex+1].querySelector("input").focus();
            }
        }
    })
})