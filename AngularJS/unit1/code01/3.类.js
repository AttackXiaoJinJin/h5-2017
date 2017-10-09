class User{
    constructor(id,name,passwd){
        this.id=id;
        this.name=name;
        this.passwd=passwd;
    }
    show(){
        console.log(this.name);
    }
}

var u=new User("001","chen","123");
// u.show();

class Admin extends User{
    constructor(id,name,passwd,type){
        super(id,name,passwd);
        this.type=type;
    }
}
var adm=new Admin("002","shen","456","boss");
adm.show();









