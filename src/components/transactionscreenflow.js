let data = {};
let updateData = (part) => {
    /*
    * {
    *   1: {to: '', from: '', amount: '', toEm: '', fromEm: ''}
    * }
    * */
    data[Object.keys(part)[0]] = part[Object.keys(part)[0]]
};

export{
    data,
    updateData,
}