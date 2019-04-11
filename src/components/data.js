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
    info: 'Haseeb Sucks'
};


let profileName = 'Suleman Shahid';

const updateQR = (update) => {
    qrInfo['info'] = update;
};


let login_details = {Admin: 'Admin'};

const signin = (email, pass) => {
    if (login_details[email] === pass) {
        return 0;
    } else {
        return 1;
    }
};

export {
    groups,
    friends,
    addGroup,
    qrInfo,
    updateQR,
    profileName,
    signin,
};
