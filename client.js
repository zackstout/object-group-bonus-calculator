
$(document).ready(function(){

var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

$('#buttTest').on('click', function(){
$('#buttTest').css('background-color','green' );
console.log(employees);

function Emp(employee){
  this.name = employee.name;
  this.salary = parseInt(employee.annualSalary);
  this.bonus = bonus(employee.employeeNumber, this.salary, employee.reviewRating);
  this.totalBonus = Math.floor((this.bonus/100)*this.salary);
  this.totalCompensation = (this.salary + this.totalBonus);
//return employee;
}

var empArr = [];

for (var i = 0; i < employees.length; i++){
  var oldEmp = employees[i];
  var newEmp = new Emp(oldEmp);
  empArr.push(newEmp);
//return(empArr);
}

for (var k = 0; k < empArr.length; k++){
  $.each(empArr[k], function (index, value){
    //console.log(index,": ",value);
    $('p').append(index);
    $('p').append(": ");
    $('p').append(value);
    $('p').append('</br>');
  });
  $('p').append('</br>');
}
/*
$.each(empArr, function (index, value){
    $.each(new Emp(), function (index, value){
      console.log(value);
    }
);
});
*/

console.log(empArr);

/*
var atty = new Emp(atticus);
console.log(atty);


var rob = new Emp(robert);
console.log(rob);
*/

function bonus(num, sal, rate){
  var bon = 0;
  if (num.length === 4){
    bon += 5;
  }
  if (sal >= 65000){
    bon -= 1;
  }
  if (rate === 3){
    bon += 4;
  }
  if (rate === 4){
    bon += 6;
  }
  if (rate === 5){
    bon += 10;
  }
  if (rate <= 2) {
    bon = 0;
  }
  if (bon > 13) {
    bon = 13;
  }
  if (bon < 0) {
    bon = 0;
  }
  return bon;
}

/*

for (var j = 0; j < empArr.length; j++){
  document.write(empArr[j]);
}

*/

//document.getElementById('emp').innerHTML = empArr;
});

/*

$('p').append('hello world');
});

*/

});
