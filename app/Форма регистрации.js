/**
 * 
 * @author TSG
 */
function formRegistration() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    form.mcGroup.onValueChange = function(event){
        model.dsFlatsByGroup.params.parGroupID = event.source.value.grp_groups_id;
        model.dsFlatsByGroup.requery();
    };
}
