function generateNumber() {
    const min = 
    Math.ceil(Number(document.querySelector('.input-main').value));
    const max = 
    Math.floor(Number(document.querySelector('.inpunt-max').value));

    const result =
    Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}