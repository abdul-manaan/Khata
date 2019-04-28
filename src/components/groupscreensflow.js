let groupToShow = {};

let updateGTS = (g) => {
    groupToShow = g;
};

let fetched_once_GC = false;

let fetch_once_GC = () => {
    fetched_once_GC = true;
};


let currentGroupMembers = [];
let setCGM = (lis) => {
    currentGroupMembers = lis;
};
export {
    groupToShow,
    updateGTS,
    fetched_once_GC,
    fetch_once_GC,
    currentGroupMembers,
    setCGM,
}
