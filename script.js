function addToCalc(value){
    document.getElementById('output').value += value;
}
function resultCalc(){
    var input = document.getElementById('output').value;
    document.getElementById('output').value = eval(input)
} 
function clearCalc(){
    document.getElementById('output').value = '';
}