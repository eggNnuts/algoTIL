// make queue
function queue(){
    this.task =[];
    this.enQueue = function(value){
        if(value){
            this.task.push(value);
        }else{
            throw "value is empty"
        }
    }

    this.deQueue = function(){
        if(this.task.length  < 1) throw "task is empty";

        return this.task.shift();
    }

    this.empty = function(){
        return this.task.length===0;
    }

    this.peek = function(){
        if(this.task.length  < 1) throw "task is empty";
        return this.task[0];
    }


}

let q = new queue();
 