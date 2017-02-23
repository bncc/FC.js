/**
 * @param state a state object
 * @returns the list of possible actions
 */
const showActions = function(state) {
    // TODO check if it is a proper array, check state as well
    return state.actions.map( action => action.name );
};

/**
 * @param state a state object
 * @param action the desired action to execute
 * @return the next state or null in case of error
 */
const execAction = function(states, actualState, action) {
    if( showActions(actualState).indexOf(action) === -1 ) {
        return null;
    }
    
    const availableActionsList = actualState.actions;

    for(let i = 0; i < availableActionsList.length; i++){
        const stateAction = availableActionsList[i];
        const stateActionName = stateAction.name;
        const stateActionRecipient = stateAction.recipient;

        // check if the action is the required one
        if(stateActionName === action){
            // TODO this is unsafe and should be done better
            if(!stateActionRecipient){
                return null;
            }

            return states[stateActionRecipient];
        }
    }
    
    return null;
};

module.exports.showActions = showActions;
module.exports.execAction = execAction;
