import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        const contacts = JSON.parse(data);
        const newArr = contacts.slice(0, contacts.length -1);
        await writeContacts(newArr);
    } catch (error) {
        console.log(error.message);
    }
};

removeLastContact();
