// TODO not sure if makes sense ATM

var modLoader = function(modlist){
    
    var stateList = Object.keys(modList.states);
    for(var s in stateList){
	var state = stateList[s];
	var module = state.module;
	
	try{
	    state.__module = require(module);
	}
	catch(ex){
	    console.log('Error in loading module ' + module + ': ' + JSON.stringify(ex)); // TODO please make a better output here
	}
    }
   
};

module.exports = modLoader;
