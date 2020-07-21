let contacts = [];

let empty = document.getElementById('');
function submit() {
    let ContactName = document.getElementById('input');
    let ContactPhoneNumber = document.getElementById('input');
    
    let person = {
        name: ContactName,
        phone: ContactPhoneNumber,
    };
    contacts.push(person);
};

if(contacts.length === 0 || contacts === undefined){
 console.log(empty);
}
else{
    console.log(contacts);
}


