let groupToShow = {};

let updateGTS = (g) => {
    groupToShow = g;
};

let fetched_once_GC = false;

let fetch_once_GC = () => {
    fetched_once_GC = true;
};

export {
    groupToShow,
    updateGTS,
    fetched_once_GC,
    fetch_once_GC,
}
