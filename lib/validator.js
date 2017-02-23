const _ = require('lodash');

const results = require('../const/stateconsts').VALIDATOR_RESULTS;

// Implement a DFS search that validates all possible path from begin to an end-state.
// it should definitely discover loops. It should potentially print paths

// check that a state has the proper format. So far validates only the name
function validateSyntax(state){
    
    if(!_.isString(state.name) || _.isEmpty(state.name)){
        return results.BAD_NAME;
    }

}

function validate(stateList){
    const queue = [];
}


module.exports.validateSyntax = validateSyntax;
module.exports.validate = validate;