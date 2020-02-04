function User(first_name, last_name, email, password){
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
}

let user1 = new User('ankesh', 'kumar', 'ankesh@gmail', '123');
console.log(user1);

User.prototype.emailDomain = '@gmail.com';
console.log(user1.first_name+user1.last_name+user1.emailDomain);

