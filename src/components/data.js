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


let login_details = {Admin: 'Admin'};
let CurrentUser = {};

const signin = async (phone, pass) => {
    let res = await get_user(phone);
    console.log(res);
    if (res) {
        if (res['profile']['password'] === pass) {
            return 0;
        } else {
            return 1;
        }
    }
    return 0;

};

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
import {db,} from '../config';

//const transactions = require('./transactions');

function create_group(info) {
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
}


function create_user(info) {
    if (info === undefined)
        return;

    //let unique_id = db.ref().child('users').push().key;
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

    db.ref('users/' + info['phone'] + '/').set(userData);
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
// async function get_group(groupID){
//     let snapshot = await firebase_conn.db.ref(`groups/${groupID}`).once('value');
//
//     if(snapshot.val() === null){
//         console.log(`GroupID: ${groupID} does not exist...`);
//         return null;
//     } else {
//         console.log(`Recieved ${JSON.stringify(snapshot.val())}`);
//         return snapshot.val();
//     }
// }

// module.exports = {
//     create_group: create_group,
//     get_group_transactions: get_group_transactions,
//     add_group_transactions: add_group_transactions,
//     get_group: get_group
// };


export {
    groups,
    friends,
    addGroup,
    qrInfo,
    updateQR,
    profileName,
    signin,
    create_group,
    create_user,
};
