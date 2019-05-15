let data = {};
let updateData = (part) => {
    /*
    * {
    *   1: {to: '', from: '', amount: '', toEm: '', fromEm: ''}
    * }
    * */
    console.log(part, ' its part');

    data[Object.keys(part)[0]] = part[Object.keys(part)[0]];
    console.log(data, ' its data')
};

let gist = '';
let updateGist = (g) => {
    gist = g;
};

/*
* let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let temp = {};
        temp["creator"] = CurrentUser['profile']['name'];
        temp["creatorID"] = CurrentUser['profile']['email'].hashCode();
        temp['time'] = time ;
        temp['transaction'] = data;
        temp['title'] = gist;
        temp['groupID'] = groupToShow.hashCode();
        updateCurrentTransaction(temp);
*
* */
let CurrentTransaction = {};
let updateCurrentTransaction = (t) => {

    CurrentTransaction = t;
};



export{
    data,
    updateData,
    gist,
    updateGist,
    updateCurrentTransaction,
    CurrentTransaction,
}
