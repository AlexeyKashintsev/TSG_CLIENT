/**
 * Datasource module is stateless data fetch/apply provider.
 * @author TSG
 * @constructor 
 */
function dsCounterValues() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    this.schema = [
        {name: "services_id", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "beg_val", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "end_val", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true},
        {name: "cons_val", entity: "optionalEntityName", description: "Some property1 description", type: Number, key: true}
        // TODO : place schema definition here, such as:
        /*
         {name: "property1Name", entity: "optionalEntityName", description: "Some property1 description", type: String, key: true},
         {name: "property2Name", entity: "optionalEntityName", description: "Some property2 description", type: String, ref: {property: "referencedPropertyName", entity: "referencedEntityName"}},
         {name: "property3Name", entity: "optionalEntityName", description: "Some property3 description", type: Number, required: true}
         */
    ];
    
    this.params = [
        {name: "date_id", type: Number},
        {name: "flat_id", type: Number},
        {name: "parAccount", type: Number}
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
        } else {};
        var Counters = [];
        model.counters_values_by_flat.params.flat_id = 139195614740789;
        model.counters_values_by_flat.params.date_id = 142304158225655;
        model.counters_values_by_flat.parAccount = 142486607303119;
        model.counters_values_by_flat.requery();
        model.counters_values_by_flat.forEach(function(aRow) {
            Counters.push({services_id: aRow.services_id, beg_val: aRow.beg_val, 
            end_val: aRow.end_val, cons_val: aRow.cons_val});
        })
        return Counters;
            // TODO : place here your synchronous data achivement code. Fetching from mongodb for example

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
        P.Logger.info("dsCounterValues. aLog.length: " + aLog.length + ";");
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
