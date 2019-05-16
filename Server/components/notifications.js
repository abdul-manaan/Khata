const firebase_conn = require('./firebase_conn');


async function add_notification(info, userID){
    return firebase_conn.db.ref('users/'+userID+'/notifications').once('value').then(snapshot => {
       if(snapshot.val() === null){
           firebase_conn.db.ref('users/'+userID+'/notifications').set([info]);
       } else {
           let notList = snapshot.val();
           notList.unshift(info);
           firebase_conn.db.ref('users/'+userID+'/notifications').set(notList);
       }
    });
}

async function fetch_notification(userID){
    let snapshot = await firebase_conn.db.ref('users/'+userID+'/notifications').once('value');
    return snapshot.val();
}

module.exports = {
    add_notification: add_notification,
    fetch_notification: fetch_notification,
};


