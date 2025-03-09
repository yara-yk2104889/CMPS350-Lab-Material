import promptSync from "prompt-sync";
const prompt = promptSync();

function getStudents(){
    const students=[];
    for (let i=0; i<5; i++){
        const name = prompt('Student name: ')
        const gender = prompt('Student Gender: ');
        const grade = Math.floor(Math.random()*101);
        const age = Math.floor(Math.random()*(35-17+1))+17;
        const student = {
            name,
            gender,
            grade,
            age,
        };
        students.push(student)
    }
    return students;
}

let students=[];
students=getStudents();
console.log('Students:', students);

//a. youngest student
const youngestStud= (students)=>students.reduce((youngest, student)=>(student.age<youngest.age ? student : youngest), students[0]);

//b. oldest student
const oldestStud= (students)=>students.reduce((oldest, student)=>(student.age>oldest.age ? student : oldest), students[0]);

//c. average age
const avgAge= (students)=> students.reduce((sum, student)=>sum+student.age, 0) / students.length;

//d. median age
const medianAge= (students)=> {
    const ages= students.map(s=>s.age).sort((a,b)=>a-b);
    const mid = Math.floor(ages.length/2);
    return ages.length%2 !== 0 ? ages[mid] : (ages[mid-1]+ages[mid])/2;
};

//e. mean of grades
const meanGrade= (students)=>students.reduce((sum, student)=>sum+student.grade, 0)/students.length;

//d. var of grades
const varGrade=(students)=> {
    const mean = meanGrade(students);
    return students.reduce((sum, student)=>sum+Math.pow(student.grade-mean,2), 0)/(students.length-1);
  };

//g. Get students by gender to return either male of female students.
const getStudGender= (gender)=>students.filter(student=>student.gender.toLowerCase()===gender.toLowerCase());

// h. Display the student information sorted in alphabetical order by name
const sortStudentsByName = ()=>[...students].sort((a, b)=>a.name.localeCompare(b.name));

// i. Display the student information sorted in descending order by grade
const sortStudGrade= ()=>[...students].sort((a, b)=>b.grade-a.grade);

// j. Determine if there are any students with failing grades (below 60)
const hasFailing= ()=>students.some(student=>student.grade<60);

//k. Find the student(s) with the highest grade
const studentHighest= ()=> {
    const highestGrade=Math.max(...students.map(student=>student.grade));
    return students.filter(student=>student.grade===highestGrade);
}; 

// l. Find the student(s) with the highest grade among the female students
const studentHighestFemale=()=> {
    const females=students.filter(student=>student.gender.toLowerCase()==="female" || student.gender.toLowerCase()==="f");
    const highestGrade=Math.max(...females.map(student=> student.grade)); 
    return females.filter(student=> student.grade===highestGrade);
};

// m. Find the average grade for male students
const avgGradeMale = () => {
    const males = students.filter(student => student.gender.toLowerCase() === "male" || student.gender.toLowerCase() === "m");
    return males.length ? males.reduce((sum, student) => sum + student.grade, 0) / males.length : 0; // Fixed 'maleStudents' to 'males'
};

// n. Display the student information with an additional property that indicates whether the student has a passing grade (60 or higher).
const passing=() => students.map(student=> ({...student, passing: student.grade>=60}));



console.log("Youngest student:", youngestStud(students));
console.log("Oldest student:", oldestStud(students));
console.log("Average age:", avgAge(students).toFixed(2));
console.log("Median age:", medianAge(students));
console.log("Mean grade:", meanGrade(students).toFixed(2));
console.log("Variance of grades:", varGrade(students).toFixed(2));
console.log("Female students:", getStudGender("female"));
console.log("Student info sorted by name:", sortStudentsByName());
console.log("Sorted by desc grade:", sortStudGrade());
console.log("Has a failing grade:", hasFailing());
console.log("Student with highest grade:", studentHighest());
console.log("Highest grade female students:", studentHighestFemale());
console.log("Average grade male students:", avgGradeMale());
console.log("Students info with passing grades:", passing());
