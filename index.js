const inputs = document.querySelectorAll(".row input")

inputs.forEach((input, index)=>{
    input.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") {
            event.preventDefault();

            if(index < inputs.length - 1){
                inputs[index+1].focus();
            }
        }
    })
})