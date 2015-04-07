/**
 * 
 * @author TSG
 */
function FormSumsPerFlat() {
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
        model.requery();
        aPanel.add(form.view);
    };
    
    model.params.onRequeried = function(event) {
        model.dsSums.params.date = model.params.date_id;
        model.dsSums.requery();
    };

    form.onWindowOpened = function(event) {
        model.dsSums.params.date = model.params.date_id;
        model.dsSums.requery();
    };

}
