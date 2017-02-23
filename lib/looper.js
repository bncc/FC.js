// TODO most likely useless, should probably be killed


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

