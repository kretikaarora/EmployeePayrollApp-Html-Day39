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

    const date = document.querySelector('#date');
    var dateError = document.querySelector('.date-error');
    date.addEventListener('input', function() {
        let startDate = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
                      getInputValueById('#year') ;
        try {
            (new EmployeePayRoll()).startDate = new Date(Date.parse(startDate));
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }
    });

    var salary = document.querySelector('#salary');
    var output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });

    
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


