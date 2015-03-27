/**
 * 
 * @author TSG
 */
function formRegistrationAuthorization() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    // TODO : place your code here
    
    model.requery(function () {
        // TODO : place your code here
    });
    
    form.btnAuthorization.onActionPerformed = function(event) {
        var fmAut = new formAuthorization();
        fmAut.show();
    };
    form.btnRegistration.onActionPerformed = function(event) {
        var fmReg = new formRegistration();
        fmReg.show();
    };
}
