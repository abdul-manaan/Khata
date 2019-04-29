let data = {};
let updateData = (part) => {
    /*
    * {
    *   1: {to: '', from: '', amount: '', toEm: '', fromEm: ''}
    * }
    * */
    data[Object.keys(part)[0]] = part[Object.keys(part)[0]]
};

let gist = '';
let updateGist = (g) => {
    gist = g;
}



export{
    data,
    updateData,
    gist,
    updateGist,
}
