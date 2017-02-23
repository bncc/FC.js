const VALIDATOR_RESULTS = {
    SUCCESS: {success: true},
    BAD_NAME: {
        success: false,
        reason: `name should be a non empty string`
    }
};

const STATES = {
    END_STATE = {
        "name": "endstate"
    }
};

module.exports.VALIDATOR_RESULTS = VALIDATOR_RESULTS;
module.exports.STATES = STATES;