
/*if the contacts array doesn't exist in local storage, then create a contacts array and put it in local storage*/
if (localStorage.getItem("mycontacts") === null){
    window.alert('it is null'); //for testing
    var contacts = [];
    localStorage.setItem("mycontacts",JSON.stringify(contacts)); //only strings can be stored in local storage, so this turns the array into a string
}
else{
    window.alert('not null'); //for testing
}

function add_contact() {
    var person = {
    contactname: document.getElementById('CName'),
    contactnumber: document.getElementById('CPhone')
    }

    let people = JSON.parse(localStorage.getItem("mycontacts"));

    people.push(person);

    window.alert(people.size); //for testing-- I'm getting undefined, so there must be some issue turning the string back into an array
}

