const bt1 = document.querySelector("#one");
const bt2 = document.querySelector("#two");
const bt3 = document.querySelector("#reset");
const input = document.querySelector("#score");
const oneScore = document.querySelector("#oneScore");
const twoScore = document.querySelector("#twoScore");

let oS = 0;
let tS = 0;
let winningScore = 5;

bt1.addEventListener('click', function () {
    if (oS !== winningScore) {
        oS += 1;
        oneScore.innerText = oS;
    };
    if (oS === winningScore || tS === winningScore) {
        bt1.disabled = true;
        bt2.disabled = true;
        oneScore.classList.add('has-text-success');
        twoScore.classList.add('has-text-danger');
    };
});
bt2.addEventListener('click', function () {
    if (tS !== winningScore) {
        tS += 1;
        twoScore.innerText = tS;
    };
    if (oS === winningScore || tS === winningScore) {
        bt1.disabled = true;
        bt2.disabled = true;
        twoScore.classList.add('has-text-success');
        oneScore.classList.add('has-text-danger');
    };
});
bt3.addEventListener('click', function () {
    oneScore.innerText = 0;
    twoScore.innerText = 0;
    oS = 0;
    tS = 0;
    bt1.disabled = false;
    bt2.disabled = false;
    input.value = 0;
    oneScore.classList.remove('has-text-success', 'has-text-danger');
    twoScore.classList.remove('has-text-danger', 'has-text-success');
});

input.addEventListener('change', function () {
    winningScore = parseInt(this.value);

});