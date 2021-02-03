## 꼭 알아둬야할 자료 구조: 배열(Array)


### <strong>배열이란?</strong> 

- 데이터를 나열하고, 각 데이터를 인덱스에 대응하도록 구성한 구조
- 연관된 데이터를 그룹핑해서 효율적으로 핸들링하기 위한 자료구조 

### <strong>배열의 필요성</strong>  
- 같은 종류의 데이터를 효율적으로 관리하기 위해 사용
- 같은 종류의 데이터를 순차적으로 저장

### <strong>배열의 장점</strong>  
- 사용하고자 하는 데이터의 주소(인덱스)를 알고 있다면 , 인덱스 번호로 직접 접근하여 데이터를  
  사용할 수 있음으로 빠른 접근이 가능하다 

### <strong>배열의 단점</strong> 
-  중간의 요소가 삭제된 경우 항상 메모리에 순차적으로 이어져 있어야 함으로  모든 요소들을 앞으로 한칸씩 이동시켜줘야한다
   - 배열에서 중간 요소를 삭제하는 경우 다른 자료구조에 비해 느릴수 있다

- 배열은 처음 생성될때 일정한 크기를 메모리에 올려놓기때문에 메모리에 할당된 크기보다 더 큰 사이즈의 데이터를 넣을 경우 더 큰 배열을 생성하고 데이터를 복사해서 사용해야한다  

### <strong>배열의 사용</strong> 
- 데이터의 요소가 자주 삭제되 되거나 추가되지 않을때(단순 viewer)
- 특정 요소를 빠르게 읽어야할때
- 순서가 굉장히 중요할때 

### <strong>자바스크립트의 배열</strong> 

-  자바스크립트에서 배열은 자바와 다르게 배열의 길이와 자료형이 고정 되있지 않음
- 자료형에 대해서 엄격 하지 않지만 서로 다른 자료형을 혼합해서 사용할 경우 데이터        핸들링이 쉽지 않음
- 배열의 길이가 고정되있지 않다는 점은 자바의 리스트와 유사하다

- 자바스크립트에서는 배열 리터럴 (<strong>[ ]</strong>) 또는  Array() 생성자로 사용 한다 
  - 배열 리터널 예시  
  ``` 
  let arr = [1,2,3];
  ```
  - 생성자 예시 
  ```
  let arr = new Array("1","2","3")
  ```


### <strong>배열 연습</strong>
#### 연습1.  아래 2차원 배열에서 배열의 요소 중 7,8,9 순서대로 출력해보시오
```
const data = [[1,2,3],[4,5,6],[7,8,9]]

answer : data[2][0], data[2][1], data[2][2]
```


#### 연습2. 아래 dataset에서 전체 이름 안에 M(대문자)이 몇번 나왔는지 빈도수 출력해보시오
```
const dataset = ['Braund, Mr. Owen Harris' ,
'Cumings, Mrs. John Bradley (Florence Briggs Thayer)' ,
'Heikkinen, Miss. Laina' ,
'Futrelle, Mrs. Jacques Heath (Lily May Peel)' ,
'Allen, Mr. William Henry' ,
'Moran, Mr. James' ,
'McCarthy, Mr. Timothy J' ,
'Palsson, Master. Gosta Leonard' ,
'Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)' ,
'Nasser, Mrs. Nicholas (Adele Achem)' ,
'Sandstrom, Miss. Marguerite Rut' ,
'Bonnell, Miss. Elizabeth' ,
'Saundercock, Mr. William Henry' ,
'Andersson, Mr. Anders Johan' ,
'Vestrom, Miss. Hulda Amanda Adolfina' ,
'Hewlett, Mrs. (Mary D Kingcome) ' ,
'Rice, Master. Eugene' ,
'Williams, Mr. Charles Eugene' ,
'Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)' ,
'Masselmani, Mrs. Fatima' ,
'Fynney, Mr. Joseph J' ,
'Beesley, Mr. Lawrence' ,
'McGowan, Miss. Anna' ,
'Sloper, Mr. William Thompson' ,
'Palsson, Miss. Torborg Danira' ,
'Asplund, Mrs. Carl Oscar (Selma Augusta Emilia Johansson)' ,
'Emir, Mr. Farred Chehab' ,
'Fortune, Mr. Charles Alexander' ,
'Dwyer, Miss. Ellen ' ,
'Todoroff, Mr. Lalio']



const extractNumber = dataset.reduce(function(acc,result){
     let length = result.replace(/[^M]/g,"").length;
     return acc+length;
},0)

console.log(extractNumber);
```




