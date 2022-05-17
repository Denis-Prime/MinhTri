let person = {
    name: "bob",
    occupation: "web dev ",
    hobbies: "painting",
    getHobbies() {
        return this.hobbies;
    }
}
// Truy cập bằng toán tử chấm
alert(person.name)
// Truy cập bằng getter
alert(person.getHobbies())

// Bài 2
let obj = {
    b: 2,
    a: 1,
    c: 3
}
let arr = []
for (key in obj) {
    arr.push(key.toUpperCase())
}
console.log(arr)

// Bài 3

let myFamily = {
    quartly: 4,
    member: ["Dad", "Mon", "Me", "Daughter"],
    location: "VietNam"
}

let family = {
    myFamily,
}

// Bài 4
let obj2 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", "null", { xyz: 6 }, 88],
    qux: [4, 8, 12],
}


// Cách 1: 
function changeXyz1() {
    obj2.bar[3].xyz = 606
}

// Cách 2 có phải là sài setter không anh, nếu sai tối anh chỉ giáo cho em nhé






