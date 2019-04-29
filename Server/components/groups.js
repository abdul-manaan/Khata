const firebase_conn = require('./firebase_conn');
const transactions = require('./transactions');
const users = require('./users');

function create_group(info) {
    // Creates a unique key in /users/
    let unique_id = firebase_conn.db.ref().child('groups').push().key;
    if (info === undefined)
        return;

    let groupData = {
        name: info['name'],
        members: info['members'],
        transactions: info['transactions'] || [],
    };
    firebase_conn.db.ref('groups/' + unique_id).set(groupData);
    info['members'].forEach(uid => {
        users.add_user_to_group(uid,unique_id);
    })
}

function add_group_transactions(groupID,info){
    if(info === undefined)
        return;
    let unique_id = firebase_conn.db.ref().child(`groups/${groupID}/transactions`).push().key;

    let tidList = [];

    info['list'].forEach(trans => {
        let tid = transactions.create_transaction({"to":trans['to'],"from":trans['from'],'status':true,'amount':trans['amount']});
        tidList.push(tid);
    });

    let groupTransactionData = {
        "creator_id": info['creator_id'],
        "time":info['time'],
        "description":info['description'],
        "transactions":tidList,
    };

    return firebase_conn.db.ref(`groups/${groupID}/transactions/${unique_id}`).set(groupTransactionData);
}

async function get_group_transactions(groupID) {
    let snapshot = await firebase_conn.db.ref(`groups/${groupID}/transactions`).once('value');
        if (snapshot.val() === null) {
            console.log(`No transactions for group ${groupID}`)
        } else {
            let transactionList = snapshot.val();
            console.log(transactionList);
            return transactionList;
        }

}

async function get_group(groupID){
    let snapshot = await firebase_conn.db.ref(`groups/${groupID}`).once('value');

    if(snapshot.val() === null){
        console.log(`GroupID: ${groupID} does not exist...`);
        return null;
    } else {
        console.log(`Recieved ${JSON.stringify(snapshot.val())}`);
        return snapshot.val();
    }
}



async function delete_group(groupID){
    let groupObj = await get_group(groupID);

    if(groupObj != null){
        groupMembers = groupObj['members'];

        groupMembers.forEach(uid => {
            users.remove_group(uid,groupID);
        })
    }
    firebase_conn.db.ref('groups/'+groupID).remove();
}

async function leave_group(userID, groupID){
    let snapshot = await firebase_conn.db.ref("groups/"+groupID+'/members').once('value');
    if(snapshot.val() === null)
        return;
    else {
        let memberList = snapshot.val();

        if(memberList.indexOf(userID) != -1){
            let newList = memberList.filter(ele => {
                return ele != userID;
            });
            firebase_conn.db.ref('groups/'+groupID+'/members').set(newList);

            let snap = await firebase_conn.db.ref('users/'+userID+'groups').once('value');

            if(snap.val() === null){
                return;
            } else {
                let userList = snap.val();
                userList = userList.filter(g => {
                    return g != groupID;
                });

                return firebase_conn.db.ref('users/'+userID+'/groups').set(userList);
            }
        }
    }
}

module.exports = {
    create_group: create_group,
    get_group_transactions: get_group_transactions,
    add_group_transactions: add_group_transactions,
    get_group: get_group,
    delete_group: delete_group,
    leave_group: leave_group,
};
