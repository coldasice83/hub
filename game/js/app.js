/**
 * Created by NHNent on 2014-05-12.
 */
/*function resize(){
    if (screen.width != globalVars.width || screen.height != globalVars.height) {
        var clientWidth = document.body.clientWidth;
        var clientHeight = document.body.clientHeight;

        var ratioW = clientWidth / globalVars.width;
        var ratioH =  clientHeight / globalVars.height;

        collie.Renderer.resize(globalVars.width * ratioW, globalVars.height * ratioH, true, true, false);
        collie.Renderer.refresh();
    }
}*/
(function(){
    if (screen.width != config.statc.width || screen.height != config.statc.height) {

        var clientWidth = document.body.clientWidth;
        var clientHeight = document.body.clientHeight;

        var ratioW = clientWidth / globalVars.width;
        var ratioH =  clientHeight / globalVars.height;

        collie.Renderer.resize(globalVars.width * ratioW, globalVars.height * ratioH, true, true, false);
        collie.Renderer.refresh();
    }
})();
