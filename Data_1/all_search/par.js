
// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i<10; i++) {

    
//     console.log(i)

//     for(let j = 0; j<10; j++) {


     


//         string += "*";
      
     
//     } 

//     string += "\n";
// }

// console.log(string)



class Link{

    construct(data){

        this.head={

            head:data,
            next:null,
        }
        this.tail=this.head;

        // this.length=1;
    
    }
  

}

const link=new Link(10);


console.log(link)
