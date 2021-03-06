const moment = require('moment');
import { http } from './http';
import { ui } from './ui';
// import { survey } from './survey';



// Get clients on DOM load
document.addEventListener('DOMContentLoaded', getClients);

// Gets Clients from API using Get Request
function getClients(){
    http.get('http://104.236.92.35/api/oec/')
    // http.get('http://localhost:5000/api/oec/search/FUSION')
    .then(data => ui.showClients(data))
    .catch(err => console.log(err))
}

//SEARCH 
    document.querySelector('#search-Submit').addEventListener('click', searchOEC)

function searchOEC(){

    const searchClientInput = document.querySelector('#search-client').value;
    console.log(searchClientInput)
    const searchTypeOfClientInput = document.querySelector('#search-typeOfClient').value;
    const webAddress = 'http://104.236.92.35/api/oec/search/' 
    let queryString = `search?typeOfClient=${searchTypeOfClientInput}&clientCompanyName=${searchClientInput}`
    let finalOutput = webAddress + queryString
    http.get(finalOutput)
        // http.get('http://localhost:5000/api/oec/search/FUSION')
        .then(data => ui.showClients(data))
        .catch(err => console.log(err))

    console.log (finalOutput)


}

// Listen for delete
document.querySelector('#contract').addEventListener('click',deleteCard);

//Listen for edit
document.querySelector('#contract').addEventListener('click',enableEdit)


document.getElementById('type-of-client').addEventListener('change', contractSort); //Shows parts of form
document.querySelector('#submit-it').addEventListener('click', submitButtonPush); //UPDATE THIS
document.getElementById('new-contract-btn').addEventListener('click',newContractBtn);
document.getElementById('load-contract-btn').addEventListener('click',loadContractsBtn);
document.getElementById('weekend-schedule-btn').addEventListener('click', weekendScheduleBtn);
// document.getElementById('weekend-schedule-btn').addEventListener('click',weekendScheduleBtn);

//Calendar Submit button
document.getElementById('submit-calendar').addEventListener('click', submitCalendar); 


// Hide parts of UI
const forms = document.querySelectorAll('div.big-form-input');
const contracts = document.querySelector('div.load-contracts');
const weekendPart = document.querySelector('div#weekend-schedule');
const scheduleSubmit = document.querySelector('div.calendar-submit')

function submitButtonPush() {
  submitPost()
  ui.clearForm()
  getClients()
  hideMainForms()
  getClients()
  loadContractsBtn();  
}


// function initializeElement(element, text) {
//     var div = document.createElement('div');
//     div.className = 'form-group';
//     var label = document.createElement('label');
//     label.className = 'col-sm-2 control-label';
//     label.innerHTML = 'Comments';
//     label.for = 'inputText';
//     var div1 = document.createElement('div');
//     div1.className = 'col-sm-10';
//     var commentText = document.createElement('textarea');
//     commentText.className = 'form-control';
//     commentText.id = 'inputText';
//     commentText.rows = '3';
//     commentText.placeholder = 'Write your comments';
//     div.appendChild(label);
//     div1.appendChild(commentText);
//     div.appendChild(div1);

//     document.body.appendChild(div);
// }
//     //Creates Calendar input
// var div = document.createElement('div');
// div.className = 'form-group col-lg';
// var label = document.createElement('label');
// label.className = 'col-form-label col-form-label-lg';
// label.innerHTML = 'Date';
// var div1 = document.createElement('div');
// div1.className = 'form-group';
// var div2 = document.createElement('div');
// div2.className = 'input-group mb-3';
// var div3 = document.createElement('div');
// div3.className = 'input-group-prepend';
// var span = document.createElement('span');
// span.className = 'input-group-text';
// span.innerHTML = '<i class="fas fa-calendar"></i>';
// var dateInput = document.createElement('INPUT');
// dateInput.setAttribute("type", "date");
// dateInput.className = 'form-control form-control-lg';
// div.appendChild(label);
// div3.appendChild(span);
// div1.appendChild(div2)
// div2.appendChild(div3)
// div3.appendChild(dateInput)
// div.appendChild(div1)
// //appends to end of element
// document.getElementById('calendar-social').appendChild(div)


// Sections
        const sectionBasicInfo = document.querySelector('#Section-BasicInfo')

        function hideSection(section){
            section.classList.add('collapse');
        };

        // hideSection()

        // fusionOrder = [sectionBasicInfo, production, disclaimer,promotions,webOTT, store, socialMedia]

// Submit Posts
function submitCalendar() {
    // Calendar

    const calendarStartDate = document.querySelector('#search-start-date').value;
    const calendarStartTime = document.querySelector('#search-start-time').value;
    const calendarEndDate = document.querySelector('#search-start-date').value;
    const calendarEndTime = document.querySelector('#search-end-time').value;
    const text = document.querySelector('#calendar-title').value;
    const episode = document.querySelector('#calendar-episode').value;
    const description = document.querySelector('#calendar-description').value;
    const isNew = document.querySelector('#search-is-new').value;
    const evType = document.querySelector('#search-category-type').value;
    // const nativeEditor = `"!nativeeditor_status" : "inserted"` 

    const start_date = `${calendarStartDate} ${calendarStartTime}`//May have to make a custom function to convert this using moment
    const end_date = `${calendarEndDate} ${calendarEndTime}`

    const nativeeditor_status = {"!nativeeditor_status" : "inserted"}

    const calendarData = {
        start_date,
        end_date,
        text,
        episode,
        isNew,
        description,
        evType,
        ...nativeeditor_status
            }
            //convert to JSON
            var data = JSON.stringify(calendarData)


//USE AJAX to send to server
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://104.236.92.35/data",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Postman-Token": "2df46f71-0c7a-492c-9fab-0ad8d2eb1fa9"
    },
    "processData": false,
    "data": JSON.stringify(calendarData)
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}

function submitPost() {
    //Contract Info
        const soldByPerson = document.querySelector('#sold-by').value;
        const typeOfClient = document.querySelector('#type-of-client').value;
        const clientCompanyName = document.querySelector('#client').value;
        const clientPersonName = document.querySelector('#contact-name').value;
        const clientPersonTitle = document.querySelector('#contact-title').value;
        const clientPhone = document.querySelector('#contact-phone').value;
        const clientEmail = document.querySelector('#contact-email').value;
        const productionCompany = document.querySelector('#production-company').value;
        const productionCompanyPerson = document.querySelector('#production-contact-name').value;
        const productionCompanyPersonTitle = document.querySelector('#production-contact-title').value;
        const productionCompanyPhone = document.querySelector('#production-contact-phone').value;
        const productionCompanyEmail = document.querySelector('#production-contact-email').value;
        const copyright = document.querySelector('input[name="copyright-license"]:checked').value;
        const contractSignDate = document.querySelector('#contract-sign-date').value;
        const contractStartDate = document.querySelector('#contract-start').value;
        const contractEndDate = document.querySelector('#contract-end').value;
        const airDatesTimes = document.querySelector('#air-dates-times').value;
        const contractAdditionalInfo = document.querySelector('#additional-info').value;

        // Web OTT Indentification
        const payWall = document.querySelector('input[name="paywall-permission"]:checked').value;
        const webCategory = document.querySelector('#web-category').value;
        const selectVideoOnDemand = document.querySelector('input[name="svod-gallery"]:checked').value;
        const otherVideoOnDemand = document.querySelector('#vod-other-description').value;
        const webGraphicRequired = document.querySelector('input[name="web-graphics"]:checked').value;
        const webProgramDescription = document.querySelector('#program-description').value;
        const webButton = document.querySelector('#web-buttons').value;

        // Store Duplication FTP
        const persmissionToSell = document.querySelector('input[name="sell-permission"]:checked').value;
        const placeInStore = document.querySelector('input[name="pcn-store-permission"]:checked').value;
        const compSelection = document.querySelector('input[name="comps"]:checked').value;
        const compFormat = document.querySelector('#comp-format').value;
        const fTPInstructions = document.querySelector('input[name="ftp-instructions"]:checked').value;
        const compDueDate = document.querySelector('#comp-due-date').value;
        const compNumbersPerEpisode = document.querySelector('#comp-per-episode').value;
        const compGraphicDesign = document.querySelector('input[name="comp-design"]:checked').value;
        const compAdditionalInfo = document.querySelector('#additional-comp').value;

        // Social Media
        const socialMediaPermission = document.querySelector('input[name="social-media-permission"]:checked').value;
        const fullFacebookVideo = document.querySelector('input[name="facebook-video-permission"]:checked').value;
        const socialMediaStartDate = document.querySelector('#social-media-start-date').value;
        const socialMediaEndDate = document.querySelector('#social-media-end-date').value;
        const socialFrequency = document.querySelector('#social-media-frequency').value;
        const socialAdditionalInfo = document.querySelector('#additional-social-media-info').value;
        // Production
        const productionLocation = document.querySelector('#production-location').value;
        const productionNameOfShow = document.querySelector('#show-name').value;
        const productionLengthOfProgram = document.querySelector('input[name="program-length"]:checked').value;
        const productionProducer = document.querySelector('#producer').value;
        const productionMethodToRecieve = document.querySelector('#production-receive').value;
        const productionHighlight = document.querySelector('input[name="production-highlight"]:checked').value;
        const productionAdditionalInfo = document.querySelector('#additional-production-info').value;

        // Billboards
        const billboardNewExisting = document.querySelector('input[name="billboard-new-existing"]:checked').value;
        const billboardGraphics = document.querySelector('input[name="billboard-graphics"]:checked').value;
        const billboardScript = document.querySelector('#billboard-graphic-name').value;
        const billboardLength = document.querySelector('#billboard-script').value;
        const billboardNameServer = document.querySelector('#billboard-runTime').value;
        const billboardAirSchedule = document.querySelector('#server-name').value;
        const billboardAirProgram = document.querySelector('#billboard-air-schedule-time').value;
        const billboardNumberOfAirings = document.querySelector('#billboard-number-airings').value;
        const billboardNumberOfBillboards = document.querySelector('#billboard-number-billboards').value;
        const billboardDueDate = document.querySelector('#billboard-due-date').value;

        // Promotions
        const promotionsOrgination = document.querySelector('#promo-origination').value;
        const promotionsRunOfSchedule = document.querySelector('#promo-ROS').value;
        const promotionsTimesPerDay = document.querySelector('#number-ROS').value;
        const promotionsAirDuringSpecificPrograms = document.querySelector('#run-during-specific-program').value;
        const promotionsTimesPerProgram = document.querySelector('#number-per-program').value;
        const promotinsAirDatesStart = document.querySelector('#air-start-date').value;
        const promotionsAirDatesEnd = document.querySelector('#air-end-date').value;
        const promotionsGraphics = document.querySelector('input[name="promo-graphic-required"]:checked').value;
        const promotionsMethodToRecieve = document.querySelector('#promo-receive').value;
        const promotionsSocialMediaPermission = document.querySelector('input[name="promo-social-media-permission"]:checked').value;
        const promotionsApproval = document.querySelector('#promo-approval').value;
        const promotionsApprovalDate = document.querySelector('#promo-approval-date').value;

        // Paid Spots
        const paidSpotPermission = document.querySelector('input[name="paid-spot"]:checked').value;
        const numberOfDifferentSpots = document.querySelector('#number-spots').value;
        const totalNumberOfAirings = document.querySelector('#total-number-airings').value;
        const nameSavedInServer = document.querySelector('#paid-spot-name').value;
        const timeSavedInServer = document.querySelector('#paid-spot-time').value;
        const numberOfAiring = document.querySelector('#paid-spot-number-airings').value;
        const paidSpotPlacements = document.querySelector('#paid-spots-placement').value;
        const paidSpotDuplicationPermission = document.querySelector('input[name="paid-spot-duplication-permission"]:checked').value;
        const paidSpotMethodToRecieve = document.querySelector('#paid-spots-receive').value;
        const paidSpotApprovedBy = document.querySelector('#paid-spots-approval').value;
        const paidSpotApprovedDate = document.querySelector('#paid-spots-approval-date').value;

        // Disclaimers
        const disclaimerExist = document.querySelector('input[name="disclaimer-exist"]:checked').value;
        const disclaimerGraphicRequired = document.querySelector('input[name="disclaimer-graphic-required"]:checked').value;
        const disclaimerGraphicName = document.querySelector('#disclaimer-graphic-name').value;
        const disclaimerScript = document.querySelector('#disclaimer-script').value;
        const disclaimerRunTime = document.querySelector('#disclaimer-runTime').value;
        const disclaimerServerName = document.querySelector('#disclaimer-server-name').value;
        const disclaimerDueDate = document.querySelector('#disclaimer-due-date').value;


        const id = document.querySelector('#id').value;

    
    
        const data = {
            id,
        soldByPerson,
        typeOfClient,
        clientCompanyName,
        clientPersonName,
        clientPersonTitle,
        clientPhone,
        clientEmail,
        productionCompany,
        productionCompanyPerson,
        productionCompanyPersonTitle,
        productionCompanyPhone,
        productionCompanyEmail,
        copyright,
        contractSignDate,
        contractStartDate,
        contractEndDate,
        airDatesTimes,
        contractAdditionalInfo,
        webOTT: [
            {
            payWall,
            webCategory,
            selectVideoOnDemand,
            otherVideoOnDemand,
            webGraphicRequired,
            webProgramDescription,
            webButton
        }
    ],
        duplication: [
            {
            persmissionToSell,
            placeInStore,
            compSelection,
            compFormat,
            fTPInstructions,
            compDueDate,
            compNumbersPerEpisode,
            compGraphicDesign,
            compAdditionalInfo
        }
    ],
        social: [{
            socialMediaPermission,
            fullFacebookVideo,
            socialMediaStartDate,
            socialMediaEndDate,
            socialFrequency,
            socialAdditionalInfo
        }],
        production: [{
            productionLocation,
            productionNameOfShow,
            productionLengthOfProgram,
            productionProducer,
            productionMethodToRecieve,
            productionHighlight,
            productionAdditionalInfo
        }],
        billboards: [{
            billboardNewExisting,
            billboardGraphics,
            billboardScript,
            billboardLength,
            billboardNameServer,
            billboardAirSchedule,
            billboardAirProgram,
            billboardNumberOfAirings,
            billboardNumberOfBillboards,
            billboardDueDate
        }],
        promotions: [{
            promotionsOrgination,
            promotionsRunOfSchedule,
            promotionsTimesPerDay,
            promotionsAirDuringSpecificPrograms,
            promotionsTimesPerProgram,
            promotinsAirDatesStart,
            promotionsAirDatesEnd,
            promotionsGraphics,
            promotionsMethodToRecieve,
            promotionsSocialMediaPermission,
            promotionsApproval,
            promotionsApprovalDate
        }],
        paidSpots: [{
            paidSpotPermission,
            numberOfDifferentSpots,
            totalNumberOfAirings,
            nameSavedInServer,
            timeSavedInServer,
            numberOfAiring,
            paidSpotPlacements,
            paidSpotDuplicationPermission,
            paidSpotMethodToRecieve,
            paidSpotApprovedBy,
            paidSpotApprovedDate
        }],
        disclaimer: [{
            disclaimerExist,
            disclaimerGraphicRequired,
            disclaimerGraphicName,
            disclaimerScript,
            disclaimerRunTime,
            disclaimerServerName,
            disclaimerDueDate 

        }]

    };

    

//http://localhost:5000/api/oec/

    if(id === '') {
        // Create Post
    http.post('http://104.236.92.35/api/oec', data)
        .then(console.log(data))
        .then( hideMainForms())
        //have some spinner or message and then direct to main page
        //Show Message
        .catch(console.log(data))
    } else {
         // Update Post
         console.log(id)
         console.log(id)
         console.log(id)
      http.put(`http://104.236.92.35/api/oec/${id}`, data)
      .then(data => {
        console.log('Post updated', 'alert alert-success');
        console.log('add');
        getPosts();
      })
      .catch(err => console.log(err));
//     }
    }

    function createMessage(){
        var newDiv = document.createElement("div").classList.add('alert')
        var newContent = document.createTextNode("OEC Saved to the DATABASE")
        newDiv.appendChild(newContent)
    }


}


//Try to Clean this up later

let selectValue = document.querySelector('#type-of-client').value.toLowerCase();

function contractSort() {
    const clientType = document.querySelector('#type-of-client').value.toLowerCase()
    hideForms(clientType)
}

function hideForms(typeOfShow){
    const fusion = document.querySelectorAll('div.fusion');
    const partner = document.querySelectorAll('div.partner');
    const underwriter = document.querySelectorAll('div.underwriter');

    console.log(typeOfShow)

    if (typeOfShow === 'fusion') {

            hideAllDiv()
            showDiv(fusion);
    } else if
        (typeOfShow === 'partner'){
            hideAllDiv()
            showDiv(partner);
        } else if (
            typeOfShow === 'underwriter'){
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

};

function newContractBtn(){
    hideContracts()
    hideWeekendSection()
    // hideSurveyJs()
    showMainForms();
};

function loadContractsBtn(){
    hideMainForms()
    hideSection(weekendPart)
    showSection(contracts);
};

function weekendScheduleBtn(){
    hideMainForms()
    hideContracts()
    showWeekendSection()
    console.log('Weekend Schedule');
};

function showMainForms(){
    showDiv(forms)
};

function hideMainForms(){
    hideDiv(forms)
};

/// Use this to replace a bunch of functions
function showSection(section){
    section.classList.remove('collapse')
}

function hideSection(section){
    section.classList.add('collapse')
}

function showContracts(){
    contracts.classList.remove('collapse');
};
function hideContracts(){
    contracts.classList.add('collapse');
};

function hideWeekendSection(){
    weekendPart.classList.add('collapse');
};

function showWeekendSection(){
    weekendPart.classList.remove('collapse');
};

function hideCalendarInput(){
    scheduleSubmit.classList.remove('collapse');
}

function showDiv(elementToMapOver){ 
    [].map.call(elementToMapOver, (el) => 
    {el.classList.remove('collapse')}
)};

function hideDiv(elementToMapOver){ 
    [].map.call(elementToMapOver, (el) => 
    {el.classList.add('collapse')}
)};




// function submitPosts() {
// const typeOfClient = document.querySelector('#type-of-client').value;

// console.log(typeOfClient)

// }

// Delete OEC
function deleteCard(e) {
    if(e.target.parentElement.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.id;
      if(confirm('Are you sure You want to Delete?')) {
        http.delete(`http://104.236.92.35/api/oec/${id}`)
          .then(data => {
            // ui.showAlert('Post removed', 'alert alert-success');
            getClients()
            loadContractsBtn();
          })
          .catch(err => console.log(err));
      }
    }
    e.preventDefault();
  }

  //Enable Edit State
  function enableEdit(e){
      if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        http.get(`http://104.236.92.35/api/oec/${id}`)
        .then(data =>{
            console.log(data)
            console.log(data._id)
            console.log(data._id)
            //load show oec
            showMainForms()
            hideContracts()
            // sort form to only show type of client
            hideForms(data.typeOfClient.toLowerCase())
              // Fill form with data
            ui.fillForm(data);
        })
        .catch(err => console.log(err));
    }
    


      e.preventDefault();

  }

