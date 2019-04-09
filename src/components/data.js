let groups = {
    1: {Title: 'Software Engineers', Paragraph: 'Recently eating at KFC!'},
    2: {Title: 'Hardware Engineers', Paragraph: 'Recently eating at PDC!'},
    3: {Title: 'Electrical Engineers', Paragraph: 'Recently eating at their own home!'}
};

export default groups;


export const addGroup = (newGroup) => {
    const k = (Object.keys(groups)).length + 1;
    groups[k] = newGroup;
    groups = {...groups};
};
