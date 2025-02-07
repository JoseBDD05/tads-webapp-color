document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redValue = document.getElementById("redValue");
    const greenValue = document.getElementById("greenValue");
    const blueValue = document.getElementById("blueValue");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        
        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;
        
        let hex = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`;
        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
    }

    function updateSlider() {
        red.value = redValue.value;
        green.value = greenValue.value;
        blue.value = blueValue.value;
        updateColor();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);
    
    redValue.addEventListener("input", updateSlider);
    greenValue.addEventListener("input", updateSlider);
    blueValue.addEventListener("input", updateSlider);

    updateColor();
});
