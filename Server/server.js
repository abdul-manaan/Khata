const users = require('./components/users');
const groups = require('./components/groups');
const transactions = require('./components/transactions');


console.log('Connection Started!');

//transactions.create_transaction({"from":'-LcKQXZFY7TnXMl8bvWu',"to": '-LcKaNtEHfb7JkIjIYBc',"status":true,"amount":5000})

/*groups.add_group_transactions('-LcKWeIzAVoHLOs8yKEx',{"list":[{"to":"-LcKQXZFY7TnXMl8bvWu","from":'-LcKaNtEHfb7JkIjIYBc',
    "amount":512}], "creator_id":'123', "time": JSON.stringify(new Date()),"description":"Pizza Party",});
*/

//users.edit_info('-LcKQXZFY7TnXMl8bvWu',{"name":"NotRafae"});

users.create_user({"name":"haseeb","password":"123","phone":123,"email":"haseeb@lums.edu.pk"});






