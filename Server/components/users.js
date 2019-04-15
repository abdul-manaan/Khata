const firebase_conn = require('./firebase_conn');


function create_user(info) {
    if (info === undefined)
        return;

    let unique_id = firebase_conn.db.ref().child('users').push().key;
    let userProfile = {
        name: info['name'] || "",
        phone: info['phone'] || "",
        email: info['email'] || "",
        password: info['password'] || "",
        picture: "",
    };

    let userData = {
        "profile": userProfile,
        "groups": [],
        "transaction_history": [],
        "friends_list": [],
        "payables": [],
        "recievables": []
    };
    firebase_conn.db.ref('users/' + unique_id).set(userData);
}

function add_friend(userID, friendID) {
    return firebase_conn.db.ref(`users/${userID}/friends_list`).once('value').then(snapshot => {
        if (snapshot.val() === null) {
            firebase_conn.db.ref(`users/${userID}/friends_list/`).set([friendID]);
        } else {

            let friendsList = snapshot.val();
            if (friendsList.includes(friendID)) {
                console.log(`${userID} is already friends with ${friendID}`);
                return;
            }
            friendsList.push(friendID);
            firebase_conn.db.ref(`users/${userID}/friends_list/`).set(friendsList);

        }
    })

}


function remove_friend(userID, friendID) {
    return firebase_conn.db.ref(`users/${userID}/friends_list`).once('value').then(snapshot => {
        if (snapshot.val() != null) {
            let friendsList = snapshot.val();
            console.log(friendsList);
            if (friendsList.includes(friendID)) {
                firebase_conn.db.ref(`users/${userID}/friends_list/${friendsList.indexOf(friendID)}`).remove();
                return;
            }
            console.log(`${userID} is not friends with ${friendID}`);
        }
    })

}

function add_transaction(userID, transactionID) {
    return firebase_conn.db.ref(`users/${userID}/transaction_history/`).once('value').then(snapshot => {
        if (snapshot.val() === null) {
            firebase_conn.db.ref(`users/${userID}/transaction_history/`).set([transactionID]);
        } else {
            let transactionList = snapshot.val();

            if (transactionList.includes(transactionID)) {
                console.log(`${transactionID} already exists for user ${userID}`);
                return;
            }

            transactionList.push(transactionID);
            firebase_conn.db.ref(`users/${userID}/transaction_history/`).set(transactionList);
        }
    })
}

async function get_transactions(userID) {
    let snapshot = await firebase_conn.db.ref(`users/${userID}/transaction_history/`).once('value');
    let transactionList = snapshot.val();
    let transactions = [];

    for (let i = 0; i < transactionList.length; i++) {
        let sp = await firebase_conn.db.ref(`transactions/${transactionList[i]}`).once('value');
        transactions.push(sp.val())
    }
    console.log(transactions);
    return transactions;
}

function edit_info(userID, deltas) { // deltas would only contain key/values we want to update, not all fields in profile
    if (deltas === undefined)
        return;
    firebase_conn.db.ref(`users/${userID}/profile/`).once('value').then(snapshot => {
        if (snapshot.val() === null) {
            return;
        } else {
            return firebase_conn.db.ref(`users/${userID}/profile`).update(deltas);
        }
    })
}


module.exports = {
    create_user: create_user,
    add_friend: add_friend,
    remove_friend: remove_friend,
    add_transaction: add_transaction,
    get_transactions: get_transactions,
    edit_info: edit_info,
};
