window.addEventListener('DOMContentLoaded',(event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input',function(){
      if(name.value.length == 0){
          textError.textContent = "";
          return;
      }
      try{
          (new EmployeePayrollData()).name = name.value;
          textError.textContent = "";
      } catch(e){
          textError.textContent = e;
      }
    });
  const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
  output.textContent = salary.value;
});

});
const save = () =>{
  try{
      let employeePayrollData = createEmployeePayroll();
      createAndUpdateStorage(employeePayrollData);
  } catch(e){
      return;
  }

}
function createAndUpdateStorage(employeePayrollData){
  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

  if(employeePayrollList != undefined){
      employeePayrollList.push(EmployeePayrollData);
  } else{
      employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try{
      employeePayrollData.name = getInputValueById('#name');
  } catch(e){
      setTextValue('.text-error',e);
      throw e;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.department = getSelectedValues('[name=department]');
  employeePayrollData.salary = getInputValueById('#salary');
  employeePayrollData.note = getInputValueById('#notes');
  let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
          getInputValueById('#year');
  employeePayrollData.date = Date.parse(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let setItems = [];
  allItems.forEach(item => {
      if(item.checked) setItems.push(item.value);
  });
  return setItems;
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
}


});


const text = document.querySelector("#name");
const textError = document.querySelector(".text-error");
const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
text.addEventListener("input", function () {
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
});

function save(){
  var name= document.getElementById("name").value;
  var picture = document.querySelector('input[name = profile]:checked').value;
  var gender = document.querySelector('input[name = gender]:checked').value;
  var department =document.querySelector('input[name = department]:checked').value;
  var salary = document.getElementById("salary").value;
 var day = document.getElementById("day").value;
 var month = document.getElementById("month").value;
 var year = document.getElementById("year").value;
  var note = document.getElementById("notes").value;
  var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  

 const employee = new EmployeePayrollData(name, picture, gender, department, salary, startDate, note);

 alert("Thank you. your data is saved" + employee.toString());
}


