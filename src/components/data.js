let groups = {
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

let friends = {
    1: {Name: 'Muhammad Haseeb'},
    2: {Name: 'Muzammil Hussain'},
    3: {Name: 'Abdul Manan'},
    4: {Name: 'Abdul Rafae Noor'},
    5: {Name: 'Salman Shoaib'},
    6: {Name: 'Salman Shahid'},
};
export default groups;


export const addGroup = (newGroup) => {
    const k = (Object.keys(groups)).length + 1;
    groups[k] = newGroup;
    groups = {...groups};
};
