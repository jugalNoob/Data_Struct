class Stack{

    constructor(data){

        this.array=[];
    }

    push(data){


        this.array.push(data)

    }

    pop(){

        this.array.pop()

    }

    leng(){ // check the last elemnt of stack

 console.log(     this.array[this.array.length-1]);
    }

    size(){


      console.log(  this.array.length+1);
    }

}

const stack=new Stack();

stack.push(10);
stack.push(20);

stack.push(30);
stack.push(40);

stack.pop()
stack.pop()

stack.size()

stack.leng()
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack)