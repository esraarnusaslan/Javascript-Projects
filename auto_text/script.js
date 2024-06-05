const dataCont = document.querySelectorAll('.auto_text');
//console.log(dataCont);
const texts = Array.from(dataCont).map((text) => text.getAttribute('data'));
//console.log(texts);

var reverse = false; //write, does not delete
var idx = 0;
var txtNum = 0;
var speed = 100;
var waitAtTheEnd = 2;

const write = () => {
    const currentText = texts[txtNum];

    if (!reverse) {
        if (idx < currentText.length + waitAtTheEnd) {
            dataCont[0].innerText = currentText.slice(0, idx);
            idx++;
        } else {
            reverse = true;
            idx--;
        }
    } else {
        if (idx > 0) {
            dataCont[0].innerText = currentText.slice(0, idx);
            idx--;
        } else {
            reverse = false;
            txtNum = (txtNum + 1) % texts.length;
        }
    }
};

setInterval(write, speed);






/* dataCont.forEach((text) => {
    let data = text.getAttribute('data');
    texts.push(data);
});

var write = setInterval(() => {
    if (idx == 0 || (idx < texts[txtNum].length + waitAtTheEnd && !reverse)) {
        reverse = false;
        dataCont[0].innerText = texts[txtNum].toString().slice(0, idx);
        idx++;
    } else {
        reverse = true;
        dataCont[0].innerText = texts[txtNum].toString().slice(0, idx);
        idx--;
        if (idx == 0) {
            txtNum == texts.length - 1 ? (txtNum = 0) : txtNum++;
        }
    }
}, speed); */
