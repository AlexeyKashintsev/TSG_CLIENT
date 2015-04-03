/**
 * 
 * @author TSG
 */
function FormFlatWorkSheet() {
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
        var fmSum = new FormSumsPerFlat();
        fmSum.parentForm = self;
        fmSum.add(form.pnlSumsPerFlat);
        var fmSaldo = new FormSaldoHistory();
        fmSaldo.parentForm = self;
        fmSaldo.add(form.pnlSaldoHistory);
        var fmCounter = new FormCounterValuesInFlat();
        fmCounter.parentForm = self;
        fmCounter.add(form.pnlCounterValues);
        var fmPay = new FormPaymentsInFlat();
        fmPay.parentForm = self;
        fmPay.add(form.pnlPayments);
    };
}
