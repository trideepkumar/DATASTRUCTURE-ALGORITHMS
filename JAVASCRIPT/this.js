this.name = "marley";

const obj1 = {
    name: 'bob',
    fun: () => {
        console.log("not",this.name);
    },
    norFun: function nam() {
        console.log(this.name);
    }
};

obj1.fun();
obj1.norFun();



//this in arrow function will point in the window 
//in the normal fucntion it will point in the object itself
