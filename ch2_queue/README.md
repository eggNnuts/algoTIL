## 꼭 알아둬야할 자료 구조: 큐(queue)


### <strong>큐 란?</strong> 

- 가장 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 자료구조
- FIFO(First-In, First-Out) 또는 LILO(Last-In, Last-Out) 방식으로 스택과 꺼내는 순서가 반대 

### <strong>큐의 용어</strong>  
- Enqueue : 큐에 데이터를 넣는 기능
- Dequeue : 큐에서 데이터를 꺼내는 기능 



### <strong>큐 연습</strong>

#### 연습1. 큐를 구현해 보시오
```
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
```

 