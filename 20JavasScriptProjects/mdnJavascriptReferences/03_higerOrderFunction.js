function UserFullName(){
    return "John" 
}


function UserProfile(User){
User(console.log(this));
return function(){}

}

console.log(UserProfile(UserFullName))