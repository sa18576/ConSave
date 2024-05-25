 // Array to store contacts
 let contacts = [];

 // Function to add contact
 function addContact(event) {
     event.preventDefault();
     const firstName = document.getElementById('firstName').value;
     const lastName = document.getElementById('lastName').value;
     const phoneNumber = document.getElementById('phoneNumber').value;
     const email = document.getElementById('email').value;

     const contact = {
         firstName,
         lastName,
         phoneNumber,
         email
     };

     contacts.push(contact);
     displayContacts();
     document.getElementById('contactForm').reset();
 }

 // Function to display contacts
 function displayContacts() {
     const contactList = document.getElementById('contactList');
     contactList.innerHTML = '';
     contacts.forEach((contact, index) => {
         const contactDiv = document.createElement('div');
         contactDiv.innerHTML = `
         <p>Name: ${contact.firstName} ${contact.lastName}</p>
         <p>Phone: ${contact.phoneNumber}</p>
         <p>Email: ${contact.email}</p>
         <button onclick="updateContact(${index})">Update</button>
         <button onclick="deleteContact(${index})">Delete</button>
     `;
         contactList.appendChild(contactDiv);
     });
 }

 // Function to delete contact
 function deleteContact(index) {
     contacts.splice(index, 1);
     displayContacts();
 }

 // Function to update contact
 function updateContact(index) {
     const contact = contacts[index];
     document.getElementById('firstName').value = contact.firstName;
     document.getElementById('lastName').value = contact.lastName;
     document.getElementById('phoneNumber').value = contact.phoneNumber;
     document.getElementById('email').value = contact.email;

     contacts.splice(index, 1);
     displayContacts();
 }

 document.getElementById('contactForm').addEventListener('submit', addContact);