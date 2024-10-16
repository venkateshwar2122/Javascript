let student = [{sid:101,name:"venkatesh",dept:"cse",marks:100},
                {sid:102,name:"henil",dept:"ise",marks:75},
                {sid:103,name:"omkar",dept:"ece",marks:69 }
]
//display students details whose marks b/w 70 to 80

for(let i = 0; i<student.length;i++){
    if(student[i].marks>70 && student[i].marks<80){
        console.log(student[i].sid)
        console.log(student[i].name)
        console.log(student[i].dept)
        console.log(student[i].marks)
    }

}
//display student detrails whose dept is either cse or ece

for(let i =0;i<student.length;i++){
    if(student[i].dept=="cse" || student[i].dept=="ece"){
        console.log(student[i].sid)
        console.log(student[i].name)
        console.log(student[i].dept)
        console.log(student[i].marks)

    }
}

//delet student details whose dept is cse or ece

for(let i = 0; i<student.length;i++){
    if(student[i].dept=="cse"||student[i].dept=="ece"){
        student.splice(i,1)
    }
}
console.log(student)
