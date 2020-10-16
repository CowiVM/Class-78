name_of_student_array= []

 function Submit() {
    var student_1 = document.getElementById("Student1").value;
    var student_2 = document.getElementById("Student2").value;
    var student_3 = document.getElementById("Student3").value;
    var student_4 = document.getElementById("Student4").value;

    name_of_student_array.push(student_1);
    name_of_student_array.push(student_2);
    name_of_student_array.push(student_3);
    name_of_student_array.push(student_4);

    console.log(name_of_student_array);

    document.getElementById("display_name").innerHTML = name_of_student_array;
    document.getElementById("Submit_button").style.visibility="hidden";
    document.getElementById("Sort_button").style.visibility="visible";
}

function Sorting() {
    name_of_student_array.sort();

    console.log(name_of_student_array);

    document.getElementById("display_name").innerHTML = name_of_student_array;
}