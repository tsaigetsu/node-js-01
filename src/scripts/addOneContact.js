import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact());
    await writeContacts(contacts);
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
