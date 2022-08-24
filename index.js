class Link{


    constructor (data){

        this.head={

            value:data,
            next:null,
        }

        this.tail=this.head

        this.length=1;
    }

    push(ux){


        const newnode={

            value:ux,
            next:null,
        }

        this.tail.next=newnode
        this.tail=newnode;
        this.length ++;
    }

    unshift(ui){

        const newnode={

            value:ui,

            next:null,

        }

        newnode.next=this.head;

        this.head=newnode
        this.length++;
    }
}


const link=new Link(10);

link.push(20)

link.unshift(5)

console.log(link)