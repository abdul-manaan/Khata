var groups = {
    1: {
        Title: 'Software Engineers',
        Paragraph: 'Recently eating at KFC!',
        Members: ['Muhammad Haseeb', 'Muzammil Hussain']
    },
    2: {Title: 'Hardware Engineers', Paragraph: 'Recently eating at PDC!', Members: ['Muhammad Haseeb', 'Abdul Manan']},
    3: {
        Title: 'Electrical Engineers',
        Paragraph: 'Recently eating at their own home!',
        Members: ['Muhammad Haseeb', 'Abdul Rafae Noor']
    }
};



var Notifications = {
    1: {
        Creator: 'Muzammil',
        Title: 'Recently eating at KFC!',
        Transaction: {From: "Haseeb Chutia" , To: "Manan", Amount : 50}},
    2: {Creator: 'Awais', Title: 'Recently eating at PDC!', Members: ['Muhammad Haseeb', 'Abdul Manan']},
    3: {
        Creator: 'Haseeb',
        Title: 'Recently eating at their own home!',
        Members: ['Muhammad Haseeb', 'Abdul Rafae Noor']
    }
};


async function fetch_notification(userID){
    let snapshot = await db.ref('users/'+userID+'/notifications').once('value');
    CurrentUser=await get_user(userID);
    return snapshot.val();
}


/*GROUP STRUCTURE
    group_id: {
     "name": "str",
     "members": [ids of users],
     "transactions": [ids of transactions]
 }

 */

//User Structure
/*
   user_id: {
    profile:{
    name: string,
    phone: string/int,
    email: string,
    password: [],
    picture: url,
    notifications:[list of notification]
    },
    groups: [list of group_ids],
    transaction_history = [list of transaction ids],
    friends_list: [list of user ids],
    payables: [],
    recievables: []
   }





 */

let friends = [
    'Muhammad Haseeb',
    'Muzammil Hussain',
    'Abdul Manan',
    'Abdul Rafae Noor',
    'Salman Shoaib',
    'Salman Shahid',
];


const addGroup = (newGroup) => {

    const k = (Object.keys(groups)).length + 1;
    groups[k] = newGroup;
    //groups = {...groups};
};

let qrInfo = {
    info: 'Muzammil'
};

let profileName = 'Suleman Shahid';

const updateQR = (update) => {
    qrInfo['info'] = update;
};




String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash = hash % 47055833459; // Convert to 32bit integer
        if (hash < 0) {
            hash = hash * -1
        }
    }
    return hash;
};

let hashify = (str) => {
   // console.log(str, " hereere");
    return str.toString().hashCode();
};


let CurrentUser = {};

let current_email = '';
const signin = async (email, pass) => {
    let verify = await is_valid_user(email, pass);
    if (!verify) {
        return 1;
    }
    current_email = email;
    CurrentUser = await get_user(email.hashCode());
    return 0;

};

async function is_valid_user(email, password) {
    let isValid = true;
    await auth.signInWithEmailAndPassword(email, password).catch((err) => {
        isValid = false;
    });
    return isValid;

}

async function get_user(userID) {
    let snapshot = await db.ref('users/' + userID).once('value');
    let result = snapshot.val();
    // console.log(result);
    if (result === null) {
        // console.log('User doesnt exist');
        return null;
    } else {
        return result;
    }
}

//NEW

//const firebase_conn = require('../config');
import {auth, db} from '../config';

//const transactions = require('./transactions');

async function create_group(info) {
    // Creates a unique key in /users/
    if (info === undefined) {
        return;
    }


    // let unique_id = db.ref().child('groups').push().key;
    let unique_id = info['name'].hashCode();

    let groupData = {
        name: info['name'],
        members: info['members'],
        transactions: info['transactions'] || [],
    };
    db.ref('groups/' + unique_id).set(groupData);
    info['members'].forEach(uid => {
        add_user_to_group(uid, unique_id);
    });
}


async function add_user_to_group(userID, groupID) {
    let snap = await db.ref(`users/` + userID + '/groups').once('value');
    if (snap.val() === null) {
        db.ref('users/' + userID + '/groups').set([groupID]);
    } else {
        let groupList = snap.val();
        // console.log(groupList);
        groupList.push(groupID);
        db.ref('users/' + userID + '/groups').set(groupList);
    }
}

async function create_user(info) {
    if (info === undefined)
        return;

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
    let unique_id = userProfile['email'].hashCode();

    let snapshot = await db.ref('users/' + unique_id).once('value');
    //let strRef = stor.ref();

    //strRef.putString("abc");

    if (snapshot.val() != null) { // User already exists no need to create account
        // console.log("User already exists, not making an account");
        return;
    }


    db.ref('users/' + unique_id).set(userData);
    auth.createUserWithEmailAndPassword(userProfile['email'], userProfile['password']);
}
function add_group_transactions(groupID,info){
    if(info === undefined)
        return;
    let unique_id = db.ref().child(`groups/${groupID}/transactions`).push().key;

    let tidList = [];
    let IT = info['transaction'];

    Object.keys(info['transaction']).forEach(key => {
        let tid = create_transaction({"to":IT[key]['toEm'].hashCode(),"from":IT[key]['fromEm'].hashCode(),'status':true,'amount':IT[key]['amount']});
        tidList.push(tid);
    });

    let groupTransactionData = {
        "creatorID": info['creatorID'],
        "time":info['time'] || 0,
        "title":info['title'],
        "transactions":tidList,
    };

    return db.ref(`groups/${groupID}/transactions/${unique_id}`).set(groupTransactionData);
}

function create_transaction(info){
    if(info === null)
        return;

    let unique_id = db.ref().child('transactions').push().key;

    let transactionData = {
        "to": info['to'],
        "from": info['from'],
        "status": info['status'] || "pending",
        "amount": info['amount']
    };

    // Add transaction to transaction database
    db.ref('transactions/' + unique_id).set(transactionData);

    // Add transaction to each users transactions list
    add_transaction(info['to'],unique_id);
    add_transaction(info['from'],unique_id);

    return unique_id;
}



function add_transaction(userID, transactionID) {
    return db.ref(`users/${userID}/transaction_history/`).once('value').then(snapshot => {
        if (snapshot.val() === null) {
            db.ref(`users/${userID}/transaction_history/`).set([transactionID]);
        } else {
            let transactionList = snapshot.val();

            if (transactionList.includes(transactionID)) {
                // console.log(`${transactionID} already exists for user ${userID}`);
                return;
            }

            transactionList.push(transactionID);
            db.ref(`users/${userID}/transaction_history/`).set(transactionList);
        }
    })
}

async function get_transaction(tID) {
    let snapshot = await db.ref('users/' + tID).once('value');
    let result = snapshot.val();
    // console.log(result);
    if (result === null) {
        // console.log('User doesnt exist');
        return null;
    } else {
        return result;
    }
}


function get_group_transactions(groupID) {
    return db.ref(`groups/${groupID.hashCode()}/transactions`).once('value').then(snapshot => {
        if (snapshot.val() === null) {
        } else {
            let transactionList = snapshot.val();
            let temp = [];

            Object.values(transactionList).forEach(t => {
                let lit = {};
                lit['title'] = t['title'];
                lit['trans'] = Object.values(t['transactions']);
                temp.push(lit);
            });

            return temp;
        }
    })
}
//
async function get_group(groupID) {
    let snapshot = await db.ref(`groups/${groupID}`).once('value');

    if (snapshot.val() === null) {
        return null;
    } else {
        let res = snapshot.val();
        res['id'] = groupID;
        return res;
    }
}


async function get_friends() {
    let snapshot = await db.ref(`users/${CurrentUser['profile']['email'].hashCode()}/friends_list`).once('value');

    if (snapshot.val() === null) {
        return null;
    } else {
        let friendsDic = snapshot.val();
        let myFriends = {};
        await Promise.all(Object.keys(friendsDic).map(async g => myFriends[friendsDic[g]] = await get_user(friendsDic[g]) ));
        return myFriends;
    }
}

async function add_notification(info, userID){
    return db.ref('users/'+userID+'/notifications').once('value').then(snapshot => {
        if(snapshot.val() === null){
            db.ref('users/'+userID+'/notifications').set([info]);
        } else {
            let notList = snapshot.val();
            notList.unshift(info);
            db.ref('users/'+userID+'/notifications').set(notList);
        }
    });
}



async function replyNotification(userID, creatorID, transactionID,response){
    let responseObj = {"userID":userID,"name": CurrentUser['profile']['name'] ,"response":response};

    let snapshot = await db.ref('users/'+creatorID+'/responseList/'+transactionID).once('value');

    if(snapshot.val() === null){
        return db.ref('users/'+creatorID+'/responseList/'+transactionID).set([responseObj]);
    } else {
        let responseList = snapshot.val();

        responseList.push(responseObj);

        return db.ref('users/'+creatorID+'/responseList/'+transactionID).set(responseList);
    }
}



/*
* {
*   "creator": "muzammil",
*   "creatorID": "12345",
*   "title": "Eating sth at sth",
*   "transaction": {"from": "haseeb", "to": "muzammil", "amount": "1564"}
* }
*
* */
/*
* {
*   group_name: name
*   transaction_info: {
*       0: {to: '', from: '', amount: '', toEm: '', fromEm: ''}
*       1: {to: '', from: '', amount: '', toEm: '', fromEm: ''}
*   }
* }
*
* */

let send_notifications = (data) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    Object.keys(data["transaction_info"]).map(m => {
        let temp = {};
        temp["creator"] = CurrentUser['profile']['name'];
        temp["creatorID"] = CurrentUser['profile']['email'].hashCode();
        temp['time'] = time ;
        temp['transaction'] = data["transaction_info"][m];
        temp['title'] = data['title'];
        add_notification(temp,data["transaction_info"][m]['toEm'].hashCode());
        add_notification(temp,data["transaction_info"][m]['fromEm'].hashCode());
    });


};


// module.exports = {
//     create_group: create_group,
//     get_group_transactions: get_group_transactions,
//     add_group_transactions: add_group_transactions,
//     get_group: get_group
// };

let recent_group_name = '';
let update_rgn = (n) => {
    recent_group_name = n;
};

let get_Current_user = async () => {
    CurrentUser = await get_user(current_email.hashCode());
    return CurrentUser;
};

let encryptEmail = (em) => {
    return em.hashCode()
};


function add_friend(userID, friendID) {
    return db.ref(`users/${userID}/friends_list`).once('value').then(snapshot => {
        if (snapshot.val() === null) {
            db.ref(`users/${userID}/friends_list/`).set([friendID]);
        } else {

            let friendsList = snapshot.val();
            if (friendsList.includes(friendID)) {
                console.log(`${userID} is already friends with ${friendID}`);
                return;
            }
            friendsList.push(friendID);
            db.ref(`users/${userID}/friends_list/`).set(friendsList);

        }
    })

}
export {
    recent_group_name,
    update_rgn,
    groups,
    friends,
    addGroup,
    qrInfo,
    updateQR,
    profileName,
    signin,
    create_group,
    get_group,
    get_user,
    CurrentUser,
    get_Current_user,
    create_user,
    Notifications,
    get_group_transactions,
    encryptEmail,
    get_friends,
    send_notifications,
    fetch_notification,
    replyNotification,
    add_group_transactions,
    hashify,
    add_friend,
    get_transaction,
};
