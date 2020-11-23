window.addEventListener('DOMContentLoaded', (event) => {
    var name = document.querySelector('#name');
    var textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayRoll()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });
    
    //uc2 validting salary
    var salary = document.querySelector('#salary');
    var output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });

    // uc2 validating date 
    var day = document.querySelector('#day');
    var month = document.querySelector('#month');
    var year = document.querySelector('#year');
    var dateError = document.querySelector('.date-error');
    day.addEventListener('input', function(){
        if(day.value!="--Select Day--" && month.value!="" && year.value!=""){
            checkDate();
        }
    });
    month.addEventListener('input', function(){
        if(day.value!="" && month.value!="--Select Month--" && year.value!=""){
            checkDate();
        }
    });
    year.addEventListener('input', function(){
        if(day.value!="" && month.value!="" && year.value!="--Select Year--"){
            checkDate();
        }
    });
    function checkDate(){
        try{
            let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
            date = new Date(Date.parse(date));
            (new EmployeePayRoll()).startDate = date;
            dateError.textContent = "";
        }catch(e){
            dateError.textContent = e;
        }
    }
});

//defining the save method for saving all emp details
//this save method was already declared in the form onsubmit="save()";
const save = ()=>{ 
    try{
        //storing the value returned by the function
        let employeePayrollData=createEmployeePayroll(); 
    }
    catch(e)
    {
        return;
    }
};
 const createEmployeePayroll =()=>{
    let employeePayrollData = new EmployeePayRoll();
     try{
        //we have created an employeePayrollData object at top 
        //getting the name value from user and storing it in name attribute of class and validating also
         employeePayrollData.name=getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    //getSelectedValue is a function created at bottom to  get properties which have multiple values
    employeePayrollData._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData._gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData._department = getSelectedValues('[name=department]');
    //getinputvaluesbyid is a function created at bottom to get info by id
    employeePayrollData._salary = getInputValueById('#salary');
    employeePayrollData._note = getInputValueById('#notes');
    let startDate = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
                      getInputValueById('#year') ;
        try {
            (new EmployeePayrollData()).startDate = new Date(Date.parse(startDate));
            setTextValue('.date-error', "");
        } catch (e) {
            setTextValue('.date-error', e);
        }
        alert(employeePayrollData.toString());
    return employeePayrollData;
};

//function called by createemployeepayroll to get multiple values
const getSelectedValues = (propertyValue) =>
    {
        //an array to store all the values like of gender male and female
        let allItems = document.querySelectorAll(propertyValue); 
        //empty array to get value selected by user can also be multiple like for department
        let sellItems = [];
        //iterating through each item
        allItems.forEach(item => 
        {
            //item is choosen by user it is pushes into sellitems
            if(item.checked) 
            sellItems.push(item.value);
        });
        return sellItems;
    }

//function called by createemployeepayroll to get single value by id     
const getInputValueById=(id)=>
    {
        let value=document.querySelector(id).value;
        return value;
    }

// this method id not used anywhere just could be a replacement for above method 
const getInputElementValue = (id) =>
    {
        let value = document.getElementById(id).value;
        return value; 
    }    
