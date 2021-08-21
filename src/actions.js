// actions
const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

// action creators
const changeInterval = (value) =>({
    type: CHANGE_INTERVAL,
    payload: value,
});

export {CHANGE_INTERVAL, changeInterval};