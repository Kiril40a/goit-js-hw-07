document.querySelector('.login-form').addEventListener('submit', function (event) {  
    event.preventDefault();

    const form = event.target;
    const formData = {};  
 
    for (let element of form.elements) {  
        if (element.tagName.toLowerCase() === 'button') continue;  

        if (element.value.trim() === '') {  
            alert('All form fields must be filled in');  
            return;
        }  
        formData[element.name] = element.value.trim();   
    }  

    console.log(formData);  
    form.reset();  
});  
