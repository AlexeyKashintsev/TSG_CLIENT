/**
 * 
 * @author TSG
 */
function formMain() {
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
    
    form.onWindowOpened = function(event) {
        var fmRegAut = new formRegistrationAuthorization();
        fmRegAut.parentForm = self;
        fmRegAut.add(form.panel);
    };
    
    self.panelAdd = function(formView){
        formView.add(form.panel);
    }
    
}
