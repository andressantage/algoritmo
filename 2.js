const droppable1 = document.getElementById("t1");
const droppable2 = document.getElementById("t2");
const droppable3 = document.getElementById("t3");
const droppable4 = document.getElementById("t4");
const droppable5 = document.getElementById("t5");
const droppable6 = document.getElementById("t6");
const droppable7 = document.getElementById("t7");
const droppable8 = document.getElementById("t8");
const droppable9 = document.getElementById("t9");
const droppable10 = document.getElementById("t10");

let draggable1 = document.getElementById("disco1");
let draggable2 = document.getElementById("disco2");
let draggable3 = document.getElementById("disco3");
let draggable4 = document.getElementById("disco4");
let draggable5 = document.getElementById("disco5");
let draggable6 = document.getElementById("disco6");
let draggable7 = document.getElementById("disco7");
let draggable8 = document.getElementById("disco8");
let draggable9 = document.getElementById("disco9");
let draggable10 = document.getElementById("disco10");

draggable1.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

draggable2.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});

draggable3.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});

draggable4.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

draggable5.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

draggable6.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

draggable7.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

draggable8.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});

draggable9.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

draggable10.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});

droppable1.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable1.addEventListener("drop", (event) => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable1.appendChild(draggedElement);
});

droppable2.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable2.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable2.appendChild(draggedElement);
});

droppable3.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable3.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable3.appendChild(draggedElement);
});

droppable4.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable4.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable4.appendChild(draggedElement);
});


droppable5.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable5.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable5.appendChild(draggedElement);
});

droppable6.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable6.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable6.appendChild(draggedElement);
});

droppable7.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable7.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable7.appendChild(draggedElement);
});

droppable8.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable8.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable8.appendChild(draggedElement);
});

droppable9.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable9.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable9.appendChild(draggedElement);
});

droppable10.addEventListener("dragover", (event) => {
    event.preventDefault();
});
droppable10.addEventListener("drop", () => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    droppable10.appendChild(draggedElement);
});