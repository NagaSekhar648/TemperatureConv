var slider = document.getElementById("ba");
var fahrenheitOutput = document.getElementById("fahrenheit");
var celsiusOutput = document.getElementById("celsius");
fahrenheitOutput.innerHTML = slider.value + "° F";

celsiusOutput.innerHTML = ((Number(slider.value) - 32) * (5/9)).toFixed(2) + "° C";

slider.oninput = function () {
	fahrenheitOutput.innerHTML = "Fahrenheit="+this.value + "° F";
	celsiusOutput.innerHTML = "Celsius="+((Number(this.value) - 32) * (5/9)).toFixed(2) + "° C";
};