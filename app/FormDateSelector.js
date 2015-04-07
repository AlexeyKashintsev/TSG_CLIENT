/**
 * 
 * @author TSG
 */
function FormDateSelector() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var scrolled = false;
    var changed = false;
    
    self.show = function () {
        form.show();
    };
    
    // TODO : place your code here

    model.requery(function () {
        model.all_dates.;
    });
    
    self.add = function(aPanel){
        aPanel.add(form.view);
    };
}
