class ContactPerson {
    name;
    mobileNumber;
    addressCompany;
    contacts = [];
    constructor(name, mobileNumber, addressCompany, contacts) {
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.addressCompany = addressCompany;
        this.contacts = contacts;
    };
    get info() {
        return `
    Name: ${this.name}
    mobileNumber: ${this.mobileNumber}
    address Company : ${this.addressCompany}`
    };
    set info(data) {
        this.name = data.name;
        this.mobileNumber = data.mobileNumber;
        this.addressCompany = data.addressCompany;
    };
    addContact(contact) {
        if (contact instanceof ContactPerson) {
            this.contacts.push(contact)
        } else {
            console.log(" Truyền tham số linh tinh");
        };
    };
    findContacts(mobileNumber) {
        let result = this.contacts.filter(function(contact) {
            return contact.mobileNumber == mobileNumber;
        });
        return result;
    }
    deleteContacts(mobilenumber) {
        let foundIndex = this.contacts.findIndex(function(contact) {
            return contact.mobileNumber == mobilenumber;
        })
        if (foundIndex >= 0) {
            this.contacts.splice(foundIndex, 1);
        };

    };
    showContacts() {
        this.contacts.forEach(function(contact, index) {
            if (contact instanceof ContactPerson) {
                console.log(`${index+1}. ${contact.name}, ${contact.mobileNumber}, ${contact.addressCompany} `);
            }
        })
    };
    updateContacts(id, data) {
        let found = this.contacts.find(function(contact) {
            return contact.id == id;
        });
        if (found != null) {
            found.info = data
        };
    };
}
let tung = new ContactPerson('Nguyen Thanh Tung', '0123345345', 'Phú Thọ');
let Hoai = new ContactPerson('Nguyen Thanh Tung', '0123345345', 'Phú Thọ');
let Thương = new ContactPerson('Nguyen Thanh Tung', '0123345345', 'Phú Thọ');
let Thanh = new ContactPerson('Nguyen Thanh Tung', '0123345345', 'Phú Thọ');
let Nguyen = new ContactPerson('Nguyen Thanh Tung', '0123345345', 'Phú Thọ');
let contacts = [tung, Hoai, Thương, Thanh, Nguyen]
let tung1 = new ContactPerson('Nguyen Thanh Tung', '0123345345', 'Phú Thọ', contacts);
console.log(tung.info);
tung1.showContacts()