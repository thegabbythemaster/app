const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);


let ContactList = [];
let ContactName = document.getElementById('CName');
let ContactNumber = document.getElementById('CPhone');

let NoContacts = {
    no: true,
    output: "You dont have any contacts yet!",
}

function AddInfo(){
  let person = {
    list: true,
    name: ContactName,
    number: ContactNumber,
  };
  ContactList.push(person);
}


