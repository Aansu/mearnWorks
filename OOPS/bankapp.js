//createAccount()
//deposit()
//withdrawal()
//balanceEnquiry()

class Bank{
    status=0;
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
        }
        return accounts
    }

    auth(username,pwd){
        let ac_details=this.getAccountDetails();
        if(username in ac_details){
            if(pwd==ac_details[username]["password"]){
                this.status=1;
                return 1
            }else{
                return -1
            }
        }else{
            return 0
        }
    }

    deposit(amt)// amt local variable
    {
    this.bal+=amt;
     console.log(`your account ${this.ac_no} has been credited with Rs${amt} and your available balance is ${this.bal}`);
    }
    withdrawal(amt)
    {
     if(this.bal<amt){
         console.log("Transaction failed,Insufficient Balance");
     }else{
         this.bal-=amt;
         console.log(`your account ${this.ac_no} has been debited with Rs${amt} and your available balance is ${this.bal}`);
  
     }

    }

    balanceEnq(){
        console.log("your available balance is",this.bal);
    }
}

var obj1=new Bank();
// obj1.createAccount(1001,"Nirupama",500);
// obj1.deposit(100);
// obj1.withdrawal(600);
// obj1.balanceEnq();

var user=obj1.auth(100,"test");
var res=user==0?"invalid":user==-1?"invalid pwd":"success";
console.log(res);