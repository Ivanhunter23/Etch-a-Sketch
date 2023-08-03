const container = document.querySelector("#container");
createGrid(prompt("Number of squares"))

function createGrid(squares){
    for(let i= 0; i<squares; i++){
        const gridDivs = document.createElement("div");
        container.appendChild(gridDivs);
        gridDivs.className = "outerDiv";
    
        for(let j = 0; j<squares;j++){
            const innerDivs = document.createElement("div");
            innerDivs.className = "innerDiv";
            innerDivs.style.width = `${squares}px`
            innerDivs.style.height = `${squares}px`
    
            innerDivs.id = "innerDiv";
            gridDivs.appendChild(innerDivs);
        }
    }

}


const innerDivSelector = document.querySelectorAll("#innerDiv");
innerDivSelector.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black"
    });
  }); 