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



module.exports = {
    create_transaction: create_transaction,
};





