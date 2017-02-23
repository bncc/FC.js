'use strict';

module.exports = {
    "config" : {
	"begin": "uno",
	"end": "uno"
    },
    "states" : {
	"start" : {
	    module: "mods/testMod.js",
	    function: "testFun"	
	}
    }
};
