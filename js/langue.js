document.querySelector("#langue select").addEventListener('change',language);

function language() {
    let s = document.querySelector("#langue select");
    let val = s.selectedIndex;
    if (val === 0) {
        toFR();
    }
    else if (val === 1) {
        toEN();
    }
}

function toEN() {
    if (document.location.href.includes("CV")) {
        document.location.href = "../en/CV.html";
    }
    else if (document.location.href.includes("index")) {
        document.location.href = "../en/index.html";
    }
}

function toFR() {
    if (document.location.href.includes("CV")) {
        document.location.href = "../fr/CV.html";
    }
    else if (document.location.href.includes("index")) {
        document.location.href = "../fr/index.html";
    }
}