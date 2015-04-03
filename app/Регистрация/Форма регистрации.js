/**
 * 
 * @author TSG
 */
function formRegistration() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var mdFunctional = null;
    
    self.show = function () {
        form.show();
    };
    
     form.mcTSG.onValueChange = function(event){
        model.dsMainGroup.params.parParent = event.source.value.grp_groups_id;
        model.dsMainGroup.requery();
    };
  
    form.mcGroup.onValueChange = function(event){
        model.dsFlatsByGroup.params.parGroupID = event.source.value.grp_groups_id;
        model.dsFlatsByGroup.requery();
    };
    
    form.onWindowOpened = function(event) {
            model.requery();
        };
       
    form.btnRegistration.onActionPerformed = function(event) {
        mdFunctional = new moduleFunctional();
        mdFunctional.user_registration(model.dsFlatsByGroup.lc_flat_id, form.textPhone.text,
            form.textEmail.text, form.textPswd.text);
    };
    
    self.add = function(aPanel){
        aPanel.add(form.view);
    }
    
}
