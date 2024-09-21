
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    try {
        const data = await readContacts();
        const contacts = JSON.parse(data);
        for(let index = 0; index < number; index++) {
            contacts.push(createFakeContact());
        }
        await writeContacts(contacts);
    } catch (error) {
        console.log(error.message);
        
    }
};

generateContacts(5);
