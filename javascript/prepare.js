function onClick(id) {
    console.log("On Click:", id);

    // Alterações
    var svg = document.getElementById("svg");
    var svgDoc = svg.contentDocument;

    var current = svgDoc.getElementById(id).textContent;
    var replace = "";
    while (replace === "") {
        replace = prompt("Enter new text:", current);
    }
    if (replace === null) {
        console.log("Nothing to do ...");
    } else {
        svgDoc.getElementById(id).textContent = replace;
        console.log("New text: ", replace);
    }
}

function onmouseOut(id) {
    console.log("On Mouse Out:", id);

    // Alterações
    var svg = document.getElementById("svg");
    var svgDoc = svg.contentDocument;
    svgDoc.getElementById(id).setAttribute("fill", "#000000");
}

function onmouseOver(id) {
    console.log("On Mouse Over:", id);

    // Alterações
    var svg = document.getElementById("svg");
    var svgDoc = svg.contentDocument;
    svgDoc.getElementById(id).setAttribute("fill", "#FF0000");
}