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
        
    });
    
    form.onWindowOpened = function(event) {
        model.all_dates.requery();
        model.all_dates.cursorPos = model.all_dates.length;
    };

    
    self.add = function(aPanel){
        aPanel.add(form.view);
    };
    form.btnPrev.onActionPerformed = function(event) {
        model.all_dates.cursorPos--;
        model.params.schema.date_id = model.all_dates.per_date_id;
    };
    form.btn_next.onActionPerformed = function(event) {
        model.all_dates.cursorPos++;
        model.params.schema.date_id = model.all_dates.per_date_id;
    };
}
