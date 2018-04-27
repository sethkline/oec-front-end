const moment = require('moment');
import { http } from './http';
import { ui } from './ui';

const greeting = 'Hello World';
console.log(submitPosts());

document.getElementById('type-of-client').addEventListener('change', hideForms)


// Submit Posts


function hideForms(){
    
    let selectValue = document.querySelector('#type-of-client').value.toLowerCase();
    const fusion = document.querySelectorAll('div.fusion');
    const partner = document.querySelectorAll('div.partner');
    const underwriter = document.querySelectorAll('div.underwriter');

    

    if (selectValue === 'fusion') {

            hideAllDiv()
            showDiv(fusion);
    } else if
        (selectValue === 'partner'){
            hideAllDiv()
            showDiv(partner);
        } else if (
            selectValue === 'underwriter'){
                hideAllDiv()
                showDiv(underwriter);
    } else { 
        hideAllDiv();
     };


    function hideAllDiv(){
        hideDiv(fusion)
        hideDiv(partner)
        hideDiv(underwriter)
    };


}




function showDiv(elementToMapOver){ 
    [].map.call(elementToMapOver, (el) => 
    {el.classList.remove('collapse')}
)};

function hideDiv(elementToMapOver){ 
    [].map.call(elementToMapOver, (el) => 
    {el.classList.add('collapse')}
)};




function submitPosts() {
const typeOfClient = document.querySelector('#type-of-client').value;

console.log(typeOfClient)

}
