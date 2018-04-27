const moment = require('moment');

// Constructor Don't forget to add empty ID input
class BI {
    constructor(){
        //Contract Info
        this.soldByPersonInput = document.querySelector('#sold-by');
        this.typeOfClientInput = document.querySelector('#type-of-client');
        this.clientCompanyNameInput = document.querySelector('#client');
        this.clientPersonNameInput = document.querySelector('#contact-name');
        this.clientPersonTitleInput = document.querySelector('#contact-title');
        this.clientPhoneInput = document.querySelector('#contact-phone');
        this.clientEmailInput = document.querySelector('#contact-email');
        this.productionCompanyInput = document.querySelector('#production-company');
        this.productionCompanyPersonInput = document.querySelector('#production-contact-name');
        this.productionCompanyPersonTitleInput = document.querySelector('#production-contact-title');
        this.productionCompanyPhoneInput = document.querySelector('#production-phone');
        this.productionCompanyEmail = document.querySelector('#production-email');
        this.copyrightInput = document.querySelector('#copyright-license');
        this.contractSignDateInput = document.querySelector('#contract-sign-date');
        this.contractStartDateInput = document.querySelector('#contract-start');
        this.contractEndDateInput = document.querySelector('#contract-end');
        this.airDatesTimesInput = document.querySelector('#air-dates-times');
        this.contractAdditionalInfoInput = document.querySelector('#additional-info');

        // Web OTT Indentification
        this.payWallInput = document.querySelector('#paywall-permission');
        this.webCategory = document.querySelector('#web-category');
        this.selectVideoOnDemandInput = document.querySelector('#svod-gallery');
        this.otherVideoOnDemandInput = document.querySelector('#vod-other');
        this.webGraphicRequiredInput = document.querySelector('#web-graphics');
        this.webProgramDescriptionInput = document.querySelector('#program-description');
        this.webButtonInput = document.querySelector('#web-buttons');

        // Store Duplication FTP
        this.persmissionToSellInput = document.querySelector('#sell-permission');
        this.placeInStoreInput = document.querySelector('#pcn-store-permission');
        this.compSelectionInput = document.querySelector('#comps');
        this.compFormatInput = document.querySelector('#comp-format');
        this.fTPInstructionsInput = document.querySelector('#ftp-instructions');
        this.compDueDateInput = document.querySelector('#comp-due-date');
        this.compNumbersPerEpisodeInput = document.querySelector('#comp-per-episode');
        this.compGraphicDesignInput = document.querySelector('#comp-design');
        this.compAdditionalInfoInput = document.querySelector('#additional-comp');

        // Social Media
        this.socialMediaPermissionInput = document.querySelector('#social-media-permission');
        this.fullFacebookVideoInput = document.querySelector('#facebook-media-permission');
        this.socialMediaStartDateInput = document.querySelector('#social-media-start-date');
        this.socialMediaEndDateInput = document.querySelector('#social-media-end-date');
        this.socialFrequencyInput = document.querySelector('#social-media-frequency');
        this.socialAdditionalInfoInput = document.querySelector('#social-media-additional-info');
        
        // Production
        this.productionLocationInput = document.querySelector('#production-location');
        this.productionNameOfShowInput = document.querySelector('#show-name');
        this.productionLengthOfProgramInput = document.querySelector('#program-length');
        this.productionProducerInput = document.querySelector('#producer');
        this.productionMethodToRecieveInput = document.querySelector('#production-method-to-recieve');
        this.productionHighlightInput = document.querySelector('#production-highlight');
        this.productionHighlightInput = document.querySelector('#additional-production-info');

        // Billboards
        this.billboardNewExistingInput = document.querySelector('#billboard-new-existing');
        this.billboardGraphicsInput = document.querySelector('#billboard-graphics');
        this.billboardScriptInput = document.querySelector('#billboard-graphic-name');
        this.billboardLengthInput = document.querySelector('#billboard-script');
        this.billboardNameServerInput = document.querySelector('#billboard-runTime');
        this.billboardAirScheduleInput = document.querySelector('#server-name');
        this.billboardAirProgramInput = document.querySelector('#billboard-air-schedule-time');
        this.billboardNumberOfAiringsInput = document.querySelector('#billboard-number-airings');
        this.billboardNumberOfBillboardsInput = document.querySelector('#billboard-number-billboards');
        this.billboardDueDateInput = document.querySelector('#billboard-due-date');

        // Promotions
        this.promotionsOrginationInput = document.querySelector('#promo-orgination');
        this.promotionsRunOfScheduleInput = document.querySelector('#promo-ROS');
        this.promotionsTimesPerDayInput = document.querySelector('#number-ROS');
        this.promotionsAirDuringSpecificProgramsInput = document.querySelector('#run-during-specific-program');
        this.promotionsTimesPerProgramInput = document.querySelector('#number-per-program');
        this.promotinsAirDatesStartInput = document.querySelector('#air-start-date');
        this.promotionsAirDatesEndInput = document.querySelector('#air-end-date');
        this.promotionsGraphicsInput = document.querySelector('#promo-graphic-required');
        this.promotionsMethodToRecieveInput = document.querySelector('#promo-recieve');
        this.promotionsSocialMediaPermissionInput = document.querySelector('#social-media-permission');
        this.promotionsApprovalInput = document.querySelector('#promo-approval');
        this.promotionsApprovalDate = document.querySelector('#promo-approval-date');







        this.postSubmit = document.querySelector('post-submit')


    }

}



class UI {
  constructor() {
    this.post = document.querySelector('#posts'); //references empty div that is used to build each post
    this.programNameInput = document.querySelector('#programName');
    this.episodeNameInput = document.querySelector('#episodeName');
    this.descriptionInput = document.querySelector('#description');
    this.typeOfClientInput = document.querySelector('#typeOfClient');
    this.startTimeInput = document.querySelector('#startTime');
    this.endTimeInput = document.querySelector('#endTime');
    this.runTimeInput = document.querySelector('#runTime');
    this.marketingAssignInput = document.querySelector('#marketingAssign');
    this.socialApprovalDateInput = document.querySelector('#socialApprovalDate');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  // Show all posts
  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output +=`
        <div class="card mb-3 ">
          <div class="card-body ${colorBackground(post.typeOfClient)}">
            <h5 class="card-title text-white"><span>${post.typeOfClient.toUpperCase()}</span></h5>
            <h4 class="card-title text-white"><strong><span id="postStartTime"><strong>${convertTime(post.startTime)}</strong></span> - <span><strong>${convertTime(post.endTime)}</strong></span></strong></h4>
            <h3 class="card-title text-white"><strong><span id="postProgramName"><strong>${post.programName}</strong></span> - <strong><span id="postEpisodeName">${post.episodeName}</span></strong></strong></h3>
            <h4 class="card-title text-white"><span>${post.runTime}</span> Run Time</h4>
            <p class="card-text text-white">${post.description}</p>
            <p class="card-text text-white">Assigned to <span><em>${post.marketingAssign}</span> - <span>${post.socialApprovalDate}</span></em></p>
            <a href="#" class="edit card-link text-white" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.postsContainer');
    // Get posts
    const posts = document.querySelector('#posts');
    // Insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear all fields
  clearFields() {
    this.programNameInput.value = '';
    this.episodeNameInput.value = '';
    this.descriptionInput.value = '';
    this.typeOfClientInput.value = '';
    this.startTimeInput.value = '';
    this.endTimeInput.value = '';
    this.runTimeInput.value = '';
    this.marketingAssignInput.value = '';
    this.socialApprovalDateInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    this.programNameInput.value = data.programName;
    this.episodeNameInput.value = data.episodeName;
    this.descriptionInput.value = data.description;
    this.typeOfClientInput.value = data.typeOfClient;
    this.startTimeInput.value = data.startTime;
    this.endTimeInput.value = data.endTime;
    this.runTimeInput.value = data.runTime;
    this.marketingAssignInput.value = data.marketingAssign;
    this.socialApprovalDateInput.value = data.socialApprovalDate;
    this.idInput.value = data.id;
    this.changeFormState('edit');
  }

  // Clear ID hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  // Change the form state
  changeFormState(type) {
    if(type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      // Create cancel button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      // Get parent
      const cardForm = document.querySelector('.card-form');
      console.log(cardForm.insertBefore(button, formEnd))
      // Get element to insert before
      const formEnd = document.querySelector('.form-end');
      // Insert cancel button
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      // Remove cancel btn if it is there
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      // Clear ID from hidden field
      this.clearIdInput();
      // Clear text
      this.clearFields();
    }
  }
}

// Changes background color based on variable
  function colorBackground(typeOfClient) {
    if (typeOfClient === 'fusion'){
      return 'bg-success';
    } else if  (typeOfClient === 'paid programing'){
      return 'bg-info';
    } else if (typeOfClient === 'public affairs'){
      return 'bg-primary';
    } else {
      return 'bg-dark';
    }

 
  }
  // convert Time
  function convertTime(input) {
    return moment(input, 'HH:mm').format('h:mm A');
}

export const ui = new UI();