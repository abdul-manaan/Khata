const users = require('./components/users');
const groups = require('./components/groups');
const transactions = require('./components/transactions');


console.log('Connection Started!');

//transactions.create_transaction({"from":'-LcKQXZFY7TnXMl8bvWu',"to": '-LcKaNtEHfb7JkIjIYBc',"status":true,"amount":5000})

/*groups.add_group_transactions('-LcKWeIzAVoHLOs8yKEx',{"list":[{"to":"-LcKQXZFY7TnXMl8bvWu","from":'-LcKaNtEHfb7JkIjIYBc',
    "amount":512}], "creator_id":'123', "time": JSON.stringify(new Date()),"description":"Pizza Party",});
*/

//users.edit_info('-LcKQXZFY7TnXMl8bvWu',{"name":"NotRafae"});

//users.create_user({"name":"Admin","password":"123456","phone":123,"email":"admin@live.com"});

//users.create_user({"name":"Rafae", "password":123456,"phone":"12345","email":"rafae@live.com"});
users.addString("lolol");



/*async function check_login(email,password){
    result = await users.is_valid_user(email,password);
    console.log(result);
}*/

//check_login("haseeb@lums.edu.pk","1234567");
//users.get_user('03004193395');






