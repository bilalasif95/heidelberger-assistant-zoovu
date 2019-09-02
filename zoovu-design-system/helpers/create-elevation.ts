export default (elevation?: object): object => {
    return elevation || {
        modal: 1300,
        tooltip: 1500
    };
};