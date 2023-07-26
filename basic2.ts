//array
let hobbies:string[];
//이렇게 선언함으로써 hobbies는 string type array라는 것을 알 수 있다.

hobbies = ['soccer','basketball','wactingmovies']

//타입으로 객체를 선언 할 수 있음!
let person: {
  name:string;
  age:number;
};//객체로 타입 정의 함 
//이렇게 객체로 타입을 정의를 해주면 

person={
  name:'ws',
  age:27
}
//객체는 어느 타입이나 올 수 있다
// 커서 올려보면 any라고 쓰여있음 

/* person={
  isEmployee:true;
} 
이건 지금 에러가 날거야
왜? isEmployee타입을 강제해주지 않았거든

*/
let person2:{}

person2={
  name:'mz',
  age:25,
  isEmployee:'true'
}


let people: {
  name:'mz',
  age:25,
  isEmployee:'true'
}[];
//객체로 만들고 배열로 만들려면 뒤에 대괄호로 만들어야 함
//people이라는 객체에 객체하나만 저장하는게 아니라 객체배열ㄹ을 저장하겠다고 표시 

//타입추론
//지금까지 변수를 선언하면 타입을 강제 해줫었다

//let course ="리액트뽀시기"
//course=1234;
//course="1234";
// 타입을 정해주지앙ㄶ았는데 왜 여기서 에러가 날까 //course=1234;
// course를 string으로 강제해줬는데 course는 숫자 라고 초기화해줬기 때문에 그렇다
//타입스크립트는 지속적으로 타입을 유추하려고 한다 


//let drama:string
//이렇게 해줄 필요가 없다 왜?  
let drama = "천국의계단";
//불필요한 코드다 
// 그냥 
let office ="강남"
//이렇게 해주면 이미 ts는 타입을 정해져있다 

//한개 이상의 타입을 써야 할 땐 뭘 써야 할까?
//union 타입이란것 을 써야함 

let course:string|number|boolean|string[]|{} ="리액트뿌셔뿌셔"
// 유니온 타입을 쓰면 |문법을 사용해서 타입혼용 할 수 있음
course = 123;
course="노잼"
course =false
course = ["sdklf","asflja"]

//타스의 핵심적인 문법으로  값과 타입을 유연하게 사용 할 수 있음
