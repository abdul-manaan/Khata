let data = {};
let updateData = (part) => {
    /*
    * {
    *   1: {to: '', from: '', amount: '', toEm: '', fromEm: ''}
    * }
    * */
    data[part['id']] = part['value']
};

export{
    data,
    updateData,
}