const firebase_conn = require('./firebase_conn');
const users = require('./users');

function create_transaction(info){
    if(info === null)
        return;

    let unique_id = firebase_conn.db.ref().child('transactions').push().key;

    let transactionData = {
        "to": info['to'],
        "from": info['from'],
        "status": info['status'] || "pending",
        "amount": info['amount']
    };

    // Add transaction to transaction database
    firebase_conn.db.ref('transactions/' + unique_id).set(transactionData);

    // Add transaction to each users transactions list
    users.add_transaction(info['to'],unique_id);
    users.add_transaction(info['from'],unique_id);

    return unique_id;
}

async function fetch_transaction(tID){
    let snapshot = await firebase_conn.db.ref('transactions/'+tID).once('value');

    if(snapshot.val() === null) {
        console.log(`No transaction with tiD: ${tID}`);
        return null;
    }

    let transaction_object = snapshot.val();

    let from_snapshot = await firebase_conn.db.ref('users/'+transaction_object['from']).once('value');
    let to_snapshot = await firebase_conn.db.ref('users/'+transaction_object['to']).once('value');

    if(from_snapshot.val() === null || to_snapshot.val() === null){
        console.log('one of the users doesnt exist...');
        return null;
    }

    transaction_object['from_name'] = from_snapshot.val()['profile']['name'];
    transaction_object['to_name'] = to_snapshot.val()['profile']['name'];

    console.log(transaction_object);

    return transaction_object;

}


module.exports = {
    create_transaction: create_transaction,
    fetch_transaction, fetch_transaction,
};





