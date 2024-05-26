const textF = document.getElementById('text-field');


document.getElementById('bold-btn').addEventListener('click', function () {
       
       const isBold = textF.style.fontWeight === "700"
       if (isBold) {
              textF.style.fontWeight = "400";
       }
       else {
              textF.style.fontWeight = "700";
       }
})

document.getElementById('i-btn').addEventListener('click', function () {
       const isItalic = textF.style.fontStyle === "italic"
       if (isItalic) {
              textF.style.fontStyle = "normal";
       }
       else {
              textF.style.fontStyle = "italic";
       }
})

document.getElementById('u-btn').addEventListener('click', function () {
       const isUnderline = textF.style.textDecoration === "underline"
       if (isUnderline) {
              textF.style.textDecoration = "none";
       }
       else {
              textF.style.textDecoration = "underline";
       }
})

document.getElementById('a-left').addEventListener('click', function () {
       textF.style.textAlign = "left";
})

document.getElementById('a-center').addEventListener('click', function () {
       textF.style.textAlign = "center";
})

document.getElementById('a-right').addEventListener('click', function () {
       textF.style.textAlign = "right";
})

document.getElementById('a-just').addEventListener('click', function () {
       textF.style.textAlign = "justify";
})

document.getElementById('text-size').addEventListener('change', function(event){
       const tValue = event.target.value;
       textF.style.fontSize = tValue;
})

document.getElementById('text-case').addEventListener('change', function(event){
       const tValue = event.target.value;
       textF.style.textTransform = tValue;
})

document.getElementById('text-color').addEventListener('input', function(event){
       const tValue = event.target.value;
       textF.style.color = tValue;
})