/**
 * 
 * @author TSG
 */
function FormSaldoHistory() {
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
    
    self.add = function(aPanel){
        aPanel.add(form.view);
    }
}
