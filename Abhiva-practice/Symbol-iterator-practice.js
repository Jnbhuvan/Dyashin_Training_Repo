class User{
    constructor(){
        this.players = ['Virat','Bumrah','Rohit','Rahul'];
    }

    [Symbol.iterator](){
        let index = 0;

        return {
            next: ()=>{
                if(index<this.players.length){
                    value: this.players.pop();
                    done: false;
                    index--;
                };
            }
            return{
                value: undefined,
                done: true,
            }
        }
    }
}