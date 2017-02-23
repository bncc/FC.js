const readline = require('readline');
const async = require('async');
const _ = require('lodash');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var loop = true;
var states = null;

try{
    states = JSON.parse(fs.readFileSync('./pipeExample.json'));
}
catch(e){
    console.log(e);
    return;
}

var showActions = (state) => {
    return _.map(state.actions, (action) => {
        return action.name;
    });
};

// TODO this will need a callback for sure
var execAction = (state, action) => {
    if(_.indexOf(showActions(state), action) !== -1) {
        var actionList = state.actions;

        for(var i = 0; i < actionList.length; i++){
            var stateAction = actionList[i];

            if(stateAction.name === action){

                if(_.isEmpty(stateAction.recipient)){
                    return null;
                }

                return states[stateAction.recipient];
            }

        }
    }
    return null;
};

var actualState = states.start;

async.whilst(
    () => {
        return loop;
    },
    (callback) => {
        var text = `What do you want to do? ${JSON.stringify(showActions(actualState))}`;
        rl.question(text, (command) => {
            
            var nextState = execAction(actualState, command);

            if(_.isNull(nextState)){
                console.log(`unable to execute ${command} on state, remaining here ${actualState.name}`);
                return callback();
            }

            console.log(`${command}  executed on state ${actualState.name}. Will now move to state ${nextState.name}`);
            actualState = nextState;
            return callback();

        });
    },
    (err) => {
        if(err){
            console.log('error '+ err);
        }

        rl.close();
    }
);

