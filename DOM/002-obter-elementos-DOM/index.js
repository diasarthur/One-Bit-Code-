function show() {
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    const listElements = document.getElementsByTagName('li');
    console.log(listElements);

    const inputContact = document.getElementsByClassName('contact-input');
    console.log(inputContact);

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts)

    const firstContact = document.querySelectorAll('#contact-list > li > label')
}
