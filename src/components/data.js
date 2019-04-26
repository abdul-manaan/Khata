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
    console.log('Added', groups)
};

let qrInfo = {
    info: 'Muzammil Sucks'
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
    console.log(result);
    if (result === null) {
        console.log('User doesnt exist');
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
    let unique_id = db.ref().child('groups').push().key;
    if (info === undefined)
        return;

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
        console.log(groupList);
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
        console.log("User already exists, not making an account");
        return;
    }


    db.ref('users/' + unique_id).set(userData);
    auth.createUserWithEmailAndPassword(userProfile['email'], userProfile['password']);
}

//
// function add_group_transactions(groupID,info){
//     if(info === undefined)
//         return;
//     let unique_id = firebase_conn.db.ref().child(`groups/${groupID}/transactions`).push().key;
//
//     let tidList = [];
//
//     info['list'].forEach(trans => {
//         let tid = transactions.create_transaction({"to":trans['to'],"from":trans['from'],'status':true,'amount':trans['amount']});
//         tidList.push(tid);
//     });
//
//     let groupTransactionData = {
//         "creator_id": info['creator_id'],
//         "time":info['time'],
//         "description":info['description'],
//         "transactions":tidList,
//     };
//
//     return firebase_conn.db.ref(`groups/${groupID}/transactions/${unique_id}`).set(groupTransactionData);
// }
//
// function get_group_transactions(groupID) {
//     return firebase_conn.db.ref(`groups/${groupID}/transactions`).once('value').then(snapshot => {
//         if (snapshot.val() === null) {
//             console.log(`No transactions for group ${groupID}`)
//         } else {
//             let transactionList = snapshot.val();
//             console.log(transactionList);
//             return transactionList;
//         }
//     })
// }
//
async function get_group(groupID) {
    let snapshot = await db.ref(`groups/${groupID}`).once('value');

    if (snapshot.val() === null) {
        console.log(`GroupID: ${groupID} does not exist...`);
        return null;
    } else {
        console.log(`Recieved ${JSON.stringify(snapshot.val())}`);
        return snapshot.val();
    }
}

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
    console.log('Called ', CurrentUser);
    return CurrentUser;
};

let encryptEmail = (em) => {
    console.log(`EMail: ${em}`);
    return em.hashCode()
};
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
    CurrentUser,
    get_Current_user,
    create_user,
    encryptEmail,
};
