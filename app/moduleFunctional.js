/**
 * 
 * @author TSG
 * @constructor
 */ 
function moduleFunctional() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.user_registration = function(flatID, phoneNumber, email, password){
        var now = new Date();
        model.dsAllUsers.push({
            lc_flat_id:     flatID,
            phone_number:   phoneNumber,
            email:          email,
            password:       password,
            active:         false,
            date:           now
        });
    };    
    self.execute = function () {
        // TODO : place application code here
    };
}
