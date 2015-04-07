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
    
    function all_datesOnScrolled(evt) {//GEN-FIRST:event_all_datesOnScrolled
        //   if (!changed){
        if (model.params.date_id !== self.all_dates.per_date_id) {
            model.params.date_id = self.all_dates.per_date_id;
        }
        if (self.all_dates.rowIndex == 1)
            self.btn_prev.enabled = false;
        else
            self.btn_prev.enabled = true;

        if (self.all_dates.rowIndex == self.all_dates.length)
            self.btn_last.enabled = self.btn_next.enabled = false;
        else
            self.btn_last.enabled = self.btn_next.enabled = true;   
}

function paramsOnChanged(evt) {//GEN-FIRST:event_paramsOnChanged
        if (!scrolled) {
            changed = true;
            self.all_dates.scrollTo(self.all_dates.findById(self.parDateID));
        }
        else
            scrolled = false;

        if (self.all_dates.rowIndex == 1)
            self.btn_prev.enabled = false;
        else
            self.btn_prev.enabled = true;

        if (self.all_dates.rowIndex == self.all_dates.length)
            self.btn_last.enabled = self.btn_next.enabled = false;
        else
            self.btn_last.enabled = self.btn_next.enabled = true;         
}

    model.requery(function () {
        // TODO : place your code here
    });
    
    form.btn_prev.onActionPerformed = function(event) {
        self.all_dates.prev();
    };
    form.btn_next.onActionPerformed = function(event) {
        self.all_dates.next();
    };
    
    self.add = function(aPanel){
        aPanel.add(form.view);
    }
    
    form.onWindowOpened = function(event) {
        model.all_dates.last();
        all_datesOnScrolled();        
    };

    form.mcDate.onValueChange = function(event) {
        model.params.schema.date_id = model.all_dates.cursor.per_date_id;
    };

}
