/**
 * Created by NHNent on 2014-05-02.
 */
function tel(id) {

}

function Tel() {
    this.input = null;
    this.list = {send:null, receive: null};
}

function NumberManager() {
    function inputNumber(number) {
        this.input += number;
    }
    function resetNumber() {
        this.input = null;
    }
    function clearOneNumber() {
        this.input = this.input.slice(0, -1);
    }
}

function SendManager() {
    //var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    function checkNumber(number) {
        //regExp.test(numbe)
    }
}