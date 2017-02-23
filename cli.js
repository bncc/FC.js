const readline = require('readline');
const async = require('async');
const _ = require('lodash');
const fs = require('fs');

const engine = require('./lib/engine');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let loop = true;
let states = null;

try{
    states = JSON.parse(fs.readFileSync('./example/pipeExample.json'));
}
catch(e){
    console.log(e);
    return;
}

let actualState = states.start;

async.whilst(
    () => {
        return loop;
    },
    (callback) => {
        const text = `What do you want to do? ${JSON.stringify(engine.showActions(actualState))}> `;
        rl.question(text, (command) => {
            
            const nextState = engine.execAction(states, actualState, command);

            // TODO an exit mode need to be added

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

