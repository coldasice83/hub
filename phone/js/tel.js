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
    this.state = 'none';
    this.phone = document.getElementById(id);
    this.addNumber = this.phone.querySelectorAll('.addedNumber')[0];
    this.input = null;
    this.list = {send:null, receive: null};
    this.make();
    this.setEvent();
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
    function setEvent() {
        var self = this;
        var timer = null;
        this.phone.addEventListener('click', function(e) {
            if(e.target.className.indexOf('num ') != -1) {
                self.add(e.target.innerText);
                var text = self.get();
                if(sendManager.checkNumber(text) && self.state != 'call') {
                    self.state = 'call';
                    timer = setTimeout(function() {
                        console.log('Calling start number ', text);
                    }, 2000);
                } else {
                    clearTimeout(timer);
                    // recursion
                }
            }
        });
    }
    function getNumber() {
        return this.input;
    }
    function inputNumber(number) {
        this.input = this.input || '';
        this.input += number;
        this.addNumber.innerHTML = this.input;
    }
    function resetNumber() {
        this.input = null;
    }
    function clearOneNumber() {
        this.input = this.input.slice(0, -1);
    }
    return {
        make: makeNumber,
        add: inputNumber,
        reset: resetNumber,
        clear: clearOneNumber,
        setEvent: setEvent,
        get: getNumber
    }
}

var sendManager = {
    effectiveExp : /^(01[016789]{1}|02|0[3-6]{1}[1-5]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
    celNumExp : /^01[016789]{1}[0-9]{7,8}$/,
    telNumExp : /^(02|0[3-6]{1}[1-5]{1})[0-9]{7,8}$/,
    checkNumber : function(number) {
        return this.effectiveExp.test(number);
    },
    isCellNumber : function(number) {
        return this.celNumExp.test(number);
    },
    isTelNumber : function(number) {
        return this.telNumExp.test(number);
    }
}