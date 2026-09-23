let contacts= [];

function renderContacts(contact){
    localStorage.setItem("contacts", JSON.stringify(contacts));


const list = document.querySelector(".contact_list");

const item = document.querySelector(`[data-key='${contact.id}']`);

if (contact.deleted) {
    item.remove();
    return;
}

const node = document.createElement("article");
node.setAttribute("class", "person");
node.setAttribute("data-key", contact.id);

node.innerHTML = `
<img src ="${contact.imageurl}">
<div class="contactdetail">
<h1> <i class="fas fa-user-circle contactIcon"></i> ${contact.name}</h1>
<p> <i class="fas fa-envelope contactIcon"></i> ${contact.email}</p>
<p> <i class="fas fa-phone-alt contactIcon"></i> ${contact.contactnumber}</p>
</div>
<button class="delete-contact js-delete-contact">
<i class="fa-solid fa-trash-can"></i>
</button>
`;

list.append(node);
}

const list= document.querySelector(".contact_list");
list.addEventListener("click", (event)=> {
    if(event.target.classList.contains("js-delete-contact")){
        const itemKey= event.target.parentElement.dataset.key;
        deleteContact(itemKey);
    }
});

function deleteContact(key){
    const index = contacts.findIndex((item) => item.id === Number (key));

    const UpdatedContactObject = {
        deleted: true,
        ...contacts [index],
    };

    contacts = contacts.filter((item) => item.id !== Number(key));

    renderContacts(UpdatedContactObject);
}

function addContact(name, email, imageurl, contactnumber, id){
    const contactObject ={
        name: document.getElementById("fullName").value,
        email: document.getElementById("myEmail").value,
        imageurl: document.getElementById("imgurl").value,
        contactnumber: document.getElementById("myTel").value,
        id: Date.now(),
    };
    contacts.push(contactObject);
    renderContacts(contactObject);
}

const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    addContact();
    form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const ref = localStorage.getItem("contacts");
    if(ref){
        contacts = JSON.parse(ref);
        contacts.forEach((t) =>{
            renderContacts(t);
        })
    }
})