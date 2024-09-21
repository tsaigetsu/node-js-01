import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const data = await readContacts();
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        console.log(error.message);
        
    }
};

console.log(await countContacts());
