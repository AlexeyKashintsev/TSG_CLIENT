/**
 * Datasource module is stateless data fetch/apply provider.
 * @author TSG
 * @constructor 
 */
function dsSums() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    this.schema = [
        {name: "services_id", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "calc_value", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "rate", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "calc", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "benefit", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "recalc", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "full_calc", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true}
        // TODO : place schema definition here, such as:
        /*
         {name: "property1Name", entity: "optionalEntityName", description: "Some property1 description", type: String, key: true},
         {name: "property2Name", entity: "optionalEntityName", description: "Some property2 description", type: String, ref: {property: "referencedPropertyName", entity: "referencedEntityName"}},
         {name: "property3Name", entity: "optionalEntityName", description: "Some property3 description", type: Number, required: true}
         */
    ];
    
    this.params = [
        {name: "date", type: Number},
        {name: "flat", type: Number},
        {name: "account", type: Number}
        // TODO : place parameters definition here, such as:
        /*
         {name: "param1Name", type: String}
         {name: "param2Name", type: Date}
         */
    ];
    
    /**
     * Method invoked by platypus runtime in data fetching purposes.
     * @param aParams Object, with properties as defined in this.params.
     * Properties values are setted by platypus runtime engine.
     * @param aOnSuccess Succes callback for asynchronous version.
     * @param aOnFailure Failure callback for asynchronous version.
     */
    this.fetch = function (aParams, aOnSuccess, aOnFailure) {
        if (aOnSuccess) {
            // TODO : place here your asynchronous data achivement code. Fetching from mongodb for example
            // aOnSuccess(/*some data*/);
        } 
        else {
            // TODO : place here your synchronous data achivement code. Fetching from mongodb for example
        }
        var Sums = [];
        model.dsSumsPerFlat.params.flat_id = 139195614740789;
        //model.dsSumsPerFlat.params.date_id = 142304158225655;
        model.dsSumsPerFlat.params.parAccount = 142486607303119;
        model.dsSumsPerFlat.params.date_id = model.params.schema.date_id;
        model.dsSumsPerFlat.requery();        
        model.dsSumsPerFlat.forEach(function(aRow) {
            Sums.push({services_id: aRow.services_id, calc_value: aRow.calc_value, rate: aRow.rate,
            calc: aRow.calc, benefit: aRow.benefit, recalc: aRow.recalc, full_calc: aRow.full_calc});
        })
        return Sums;
            /*[
             {property1Name: "object 1 name", property2Name: "object 1 description", property3Name: 2},
             {property1Name: "object 2 name", property2Name: "object 2 description", property3Name: 20},
             {property1Name: "object 3 name", property2Name: "object 3 description", property3Name: 12},
             {property1Name: "object 4 name", property2Name: "object 4 description", property3Name: 85},
             {property1Name: "object 5 name", property2Name: "object 5 description", property3Name: 20},
             ];
             */
        
    };
    
    /**
     * Method invoked by platypus runtime in data applying purposes.
     * @param aLog Array of changes - log of changes made by clients or server side data driven code to be applied.
     * @param aOnSuccess Succes callback for asynchronous version.
     * @param aOnFailure Failure callback for asynchronous version.
     */
    this.apply = function (aLog, aOnSuccess, aOnFailure) {
        P.Logger.info("dsSums. aLog.length: " + aLog.length + ";");
        for (var i = 0; i < aLog.length; i++) {
            var change = aLog[i];
            /**
             * Common API of changes:
             *   var data = change.data;
             *   var keys = change.keys;
             *   var type = change.type; // 'Update', 'Delete', 'Insert'
             *   var entity = change.entity
             *   ...
             */
        }
        ;
        if (aOnSuccess) {
            // TODO : place here your asynchronous data storing code.
            // aOnSuccess(/*number of changed objects in backend*/);
        } else {
            // TODO : place here your synchronous data storing code.
            return /*number of changed objects in backend*/;
        }
    };
    
}
