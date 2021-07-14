//book

class StudentsList {
    status = 0;
    getStudent() {
        let student = {
            "Anupama": { name: "100", mathemathics: 90, english: 100,physics: 100,biology: 95, chemistry: 98 },
            "Basith": { name: "101",  mathemathics: 65, english: 60, physics: 70, biology: 80, chemistry: 92 },
            "Clinto": { name: "102",  mathemathics: 100,english: 90, physics: 100,biology: 75, chemistry: 99 },
            "Dani": { name: "103",    mathemathics: 80, english: 70, physics: 60, biology: 77, chemistry: 93 },
            "Edna": { name: "104",    mathemathics: 77, english: 90, physics: 90, biology: 70, chemistry: 96 }
        }
        return student
    }


    findAverageMarks(name) {
        let students = this.getStudent();
        if (name in students) {

             console.log("Student available");
             var total_marks=students[name]["mathemathics"]+students[name]["english"]+students[name]["physics"]+students[name]["biology"]+students[name]["chemistry"];
             console.log(total_marks);

        } else {
            console.log("There is no student with this name");

        }

    }

}
var stud1 = new StudentsList();
var avg_marks = stud1.findAverageMarks("Anupama");
console.log(avg_marks);


