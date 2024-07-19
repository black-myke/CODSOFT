let result = document.getElementById("inputext");
let justCalculated = false;

let calculate = (number) => {
  if (justCalculated) {
    result.value = "";
    justCalculated = false;
  }
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
    justCalculated = true;
  } catch (err) {
    alert("Enter a valid input");
  }
};

let clr = () => {
  result.value = "";
  justCalculated = false;
};

let del = () => {
  if (!justCalculated) {
    result.value = result.value.slice(0, -1);
  }
};