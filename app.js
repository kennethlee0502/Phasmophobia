const emfCheckbox = document.querySelector("#emf");
const fingerprint = document.querySelector("#fingerprint");
const ghostWriting = document.querySelector("#gw");
const freezing = document.querySelector("#freezing");
const dot = document.querySelector("#dot");
const ghostOra = document.querySelector("#go");
const spirit = document.querySelector("#spirit");

let noEmf = document.querySelectorAll(".ghost:not(.emf)");
noEmf.forEach((target) => {
  emfCheckbox.addEventListener("click", () => {
    if (document.getElementById("emf").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});

let noFringerprint = document.querySelectorAll(".ghost:not(.fingerprint)");
noFringerprint.forEach((target) => {
  fingerprint.addEventListener("click", () => {
    if (document.getElementById("fingerprint").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});

let noGhostWriting = document.querySelectorAll(".ghost:not(.gw)");
noGhostWriting.forEach((target) => {
  ghostWriting.addEventListener("click", () => {
    if (document.getElementById("gw").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});

let nofreezing = document.querySelectorAll(".ghost:not(.freezing)");
nofreezing.forEach((target) => {
  freezing.addEventListener("click", () => {
    if (document.getElementById("freezing").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});

let nodot = document.querySelectorAll(".ghost:not(.dot)");
nodot.forEach((target) => {
  dot.addEventListener("click", () => {
    if (document.getElementById("dot").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});

let nogo = document.querySelectorAll(".ghost:not(.go)");
nogo.forEach((target) => {
  ghostOra.addEventListener("click", () => {
    if (document.getElementById("go").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});

let nospirit = document.querySelectorAll(".ghost:not(.spirit)");
nospirit.forEach((target) => {
  spirit.addEventListener("click", () => {
    if (document.getElementById("spirit").checked) {
      return (target.style.color = "grey");
    } else {
      return (target.style.color = "white");
    }
  });
});
