/**
 * Created by NHNent on 2014-05-02.
 */
function tel(id) {
    Tel.prototype = new NumberManager();
    Tel.prototype.constructor = Tel;
    var app = new Tel(id);
    return app;
}

function Tel(id) {
    this.phone = document.getElementById(id);
    this.input = null;
    this.list = {send:null, receive: null};
    this.make();
}


function NumberManager() {
    function makeNumber() {
        var numberCap = this.phone.querySelectorAll('.numbers')[0];
        var numberStr = '';
        for(var i = 1; i <= 10; i++) {
            numberStr += '<div class="num number'+(i % 10)+'">'+i % 10+'</div>';
        }
        numberStr += '<div class="num sharp">\#</div>';
        numberStr += '<div class="num asterisk">\*</div>';
        numberCap.innerHTML = numberStr;
    }
    function inputNumber(number) {
        this.input += number;
    }
    function resetNumber() {
        this.input = null;
    }
    function clearOneNumber() {
        this.input = this.input.slice(0, -1);
    }
    return {
        make: makeNumber,
        input: inputNumber,
        reset: resetNumber,
        clear: clearOneNumber
    }
}

function SendManager() {
    var effectiveExp = /^(01[016789]{1}|02|0[3-6]{1}[1-5]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    var celNumExp = /^01[016789]{1}[0-9]{7,8}$/;
    var telNumExp = /^(02|0[3-6]{1}[1-5]{1})[0-9]{7,8}$/;
    function checkNumber(number) {
        return effectiveExp.test(number);
    }
    function isCellNumber(number) {
        return celNumExp.test(number);
    }
    function isTelNumber(number) {
        return telNumExp.test(number);
    }
}