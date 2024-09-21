import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const data = await readContacts();
        const products = JSON.parse(data);
        return products;
    } catch (error) {
        console.log(error.message);
        
    }
};

console.log(await getAllContacts());
