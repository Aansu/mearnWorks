var student = [
    { id: 1000, name: "Anupama", mathemathics: 90, english: 100, physics: 100, biology: 95, chemistry: 98 },
    { id: 1001, name: "Basith", mathemathics: 65, english: 60, physics: 70, biology: 80, chemistry: 92 },
    { id: 1002, name: "Clinto", mathemathics: 100, english: 90, physics: 100, biology: 75, chemistry: 99 },
    { id: 1003, name: "Dani", mathemathics: 80, english: 70, physics: 60, biology: 77, chemistry: 93 },
    { id: 1004, name: "Edna", mathemathics: 77, english: 90, physics: 90, biology: 70, chemistry: 96 },
]
var mathemathics=student.map(sub1=>sub1.mathemathics)
console.log(mathemathics);