//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function Student(Name,Age,DateOfBirth,Gender){
    return {
        name:Name,
        age:Age,
        DateOfBirth:DateOfBirth,
        gender:Gender,
    }
   }

   ////Create an array and fill it with 5 students

   var array=[]
   array.push(student('aya',1,'1/1/2020','female'))
   array.push(student('ala',2,'1/2/2020','female'))
   array.push(student('alma',3,'1/3/2020','female'))
   array.push(student('naya',4,'1/4/2020','female'))
   array.push(student('ana',5,'1/5/2020','female'))

   ////////////Create a function that takes a student as parameter and print out the details of the student
   
