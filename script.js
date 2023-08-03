const container = document.querySelector("#container");

for(let i= 1; i<=16; i++){
    const gridDivs = document.createElement("div");
    container.appendChild(gridDivs);
    gridDivs.className = "outerDiv";

    for(let j = 1; j<=16;j++){
        const innerDivs = document.createElement("div");
        innerDivs.className = "innerDiv";
        gridDivs.appendChild(innerDivs);
    }
}
