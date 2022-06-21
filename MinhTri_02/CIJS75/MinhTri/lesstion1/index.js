//--------TRAC NGHIEM-------------
//Cau 1: 
// bởi vì biến var có hoisting nên nó sẽ được khai báo lên đầu của file -> chọn False

//Câu 2:
//Khác với var, const không có hoisting nên phạm vi của ó đúng thật là có phạm vi trong block -> chọn true

//Câu 3:
//let cũng giống const, đều ko có hoisting -> chọn true

//Câu 4: 
//Em nghĩ câu lệnh này sẽ thực hiện như sau: 
//Tìm thuộc tính bar trong obj, nếu có, replace giá trị của bar bằng 2
//                              Nếu không, thì create một thuộc tính mới có giá trị bằng 2
// Vì obj trong bài lúc đầu không có thuộc tính bar, nên sẽ rơi vào trường hợp thứ 2, tạo ra thuộc tính mới
//=> obj{foo:1,bar:2}

//Câu 5:
//Em hiểu toán tử $() có nghĩa là chuyển biến trong ngoặc thành string,
//xem như $(<any>) là một string
//Theo cách em giải thích, thì $(speed) trong đề dc hiểu là 'quick'
//Đáp án là 'The quick brown fox jumps over the lazy dog'

//Câu 6:
//Câu lệnh obj[123] cũng tương tự obj.123, đều trỏ tới thuộc tính '123'
//của obj nhưng, trong obj lại không có thuộc tính 123, nên giá trị của
//câu lệnh obj[123] là underfined

//Câu 7:
// array được khai báo là biến hằng số, vì vậy câu lệnh làm thay đối trực tiếp nó
// sẽ xảy ra lỗi (array = [...extension, ...array]) nên giá trị của array sẽ không
// thay đổi
//==>> chọn [1,2,3]

//Câu 8:
//Đây là cách để truyền tham số không giới hạn cho hàm mystery, và sẽ được hiểu như là 1 mảng
//==>>Chọn [1, 23, 4]

//Câu 9:
//Qua vài lần thử, em chỉ rút ra được là nếu như truyền tham số cho spread là một chuỗi thì nó sẽ
//tách chuỗi ra thành từng kí tự(em không biết giải thích ntn)
//==>> chọn 3

// Câu 10:
// Đây là cú pháp Destructing asignment để swap giá trị của hai biến a và b
// ==>> Chọn a = 3, b = 12

//Câu 11:
//Hàm sayHello sẽ tạo ra một object và có value bằng value của biến x dc truyền vào
//Sau đó thêm thuộc tính name có value bằng "Code Intensive"
// Vì nó chỉ sao chép value nên obj dc truyền vào hàm sẽ không bị thay đổi giá trị
// ==>> chọn {name:"Mindx"} (trong code của đề, lời gọi hàm bị sai, dù code có làm thay đổi
// được giá trị name của obj ban đầu thì kết quả vẫn là {name: "Mindx"})

// Câu 12:
// Phương thức map() gọi một hàm call back trên mọi phần tử của
// mảng và trả về một mảng mới chứa kết quả. 
// item là các value trong arr
// hàm sẽ chạy nhiều lầm tương ứng với các giá trị trong arr ban đầu
// nếu item là số chẵn, trả về chính nó
// nếu item là số lẻ, trả về item*2
// NHƯNG: code trong đề lại không có gán mảng được tạo cho cái gì hết => arr không thay đổi
// ==>> Chọn [1, 2, 3, 4, 5] 


// Câu 13:
// Phương thức filer sẽ tạo ra một mảng mới với các giá trị đủ điều kiện được đặt ra
// Phương thức reduce em có tham khảo trên mạng nhưng chưa hiểu rõ
// ==>> chưa chọn



//PROBLEM01
const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]

Output: result = [
  '<div><h1>Angelina Jolie</h1><h2>8</h2></div>',
  '<div><h1>Eric Jonies</h1><h2>2</h2></div>'
  
]

//Solution 
function bai1(arr = []) {
  let res = arr.map((user) => {
    return `<div><h1>${user.name}</h1><h2>${user.age}</h2></div>`;
  });
  return res;
}
// console.log(bai1(users));




// Problem 2:

const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'other' }
];

function Problem2(students) {
    let resutl  = students.filter((student)=>{
        if(student.gender!=='female'){
            return student
        }
    })
    return resutl
}
//console.log(Problem2(students))




//Problem 3:
//input: 
let strs = ["eat","tea","tan","ate","nat","bat"]
function getTotalASCII(str){
    let total = 0
    let arr = [...str]
    for(i of arr){
        total += i.charCodeAt(0)
    }
    return total
}

function problem3(strs){
    let strsCopy = [...strs]
    let resArr = []
    let indexloai = []
    for(let i = 0;i<strs.length;i++){
        let arrnew = []
        if(indexloai.indexOf(i)>=0){
            continue
        }
        arrnew.push(strs[i])
        for(let j = i+1;j<strs.length;j++){
            if(indexloai.indexOf(i)>=0){
                continue
            }
            if( getTotalASCII(strs[i])===getTotalASCII(strs[j])){
                arrnew.push(strs[j])
                indexloai.push(j)
            }
        }
        resArr.push(arrnew)
    }
    return resArr
}
//console.log(problem3(strs))

//Problem 4:
nums = [1,2,1,0,2]
function problem4(nums){
    for(let i in nums){
        if(nums.lastIndexOf(nums[i]) == nums.indexOf(nums[i])){
             return nums[i]
        }
    }
}
//console.log(problem4(nums))