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
    <svg fill="var(--svgcolor)" <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
`;

list.append(node);
}

