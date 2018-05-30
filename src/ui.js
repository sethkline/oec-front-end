const moment = require('moment');

// Constructor Don't forget to add empty ID input
class UI {
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
        this.productionCompanyPhoneInput = document.querySelector('#production-contact-phone');
        this.productionCompanyEmailInput = document.querySelector('#production-contact-email');
        this.copyrightInput = document.querySelector('input[id="copyright-license"]:checked');
        this.contractSignDateInput = document.querySelector('#contract-sign-date');
        this.contractStartDateInput = document.querySelector('#contract-start');
        this.contractEndDateInput = document.querySelector('#contract-end');
        this.airDatesTimesInput = document.querySelector('#air-dates-times');
        this.contractAdditionalInfoInput = document.querySelector('#additional-info');

        this.copyrightFillInput = document.querySelector('#copyright-license');
        this.copyrightFillNoInput = document.querySelector('input[name="copyright-no"]');

        // Web OTT Indentification
        this.payWallInput = document.querySelector('input[id="paywall-permission"]:checked');
        this.webCategoryInput = document.querySelector('#web-category');
        this.selectVideoOnDemandInput = document.querySelector('input[id="svod-gallery"]:checked');
        this.otherVideoOnDemandInput = document.querySelector('#vod-other-description');
        this.webGraphicRequiredInput = document.querySelector('input[id="web-graphics"]:checked');
        this.webProgramDescriptionInput = document.querySelector('#program-description');
        this.webButtonInput = document.querySelector('#web-buttons');

        this.payWallRadioInFrontInput = document.querySelector('input[name="paywall-in-front"]');
        this.payWallRadioBehindInput = document.querySelector('input[name="paywall-behind"]');
        this.selectVideoOnDemandPCNSelectInput = document.querySelector('input[name="web-svod-pcn-select"]')
        this.selectVideoOnDemandOtherInput = document.querySelector('input[name="web-svod-pcn-other"]')
        this.webGraphicRequiredYesInput = document.querySelector('input[name="webott-web-graphic-yes"]')
        this.webGraphicRequiredNoInput = document.querySelector('input[name="webott-web-graphic-no"]')
        this.webGraphicRequiredExisitingInput = document.querySelector('input[name="webott-web-graphic-existing"]')

        // Store Duplication FTP
        this.persmissionToSellInput = document.querySelector('input[id="sell-permission"]:checked');
        this.placeInStoreInput = document.querySelector('input[id="pcn-store-permission"]:checked');
        this.compSelectionInput = document.querySelector('input[id="comps"]:checked');
        this.compFormatInput = document.querySelector('#comp-format');
        this.fTPInstructionsInput = document.querySelector('input[id="ftp-instructions"]:checked');
        this.compDueDateInput = document.querySelector('#comp-due-date');
        this.compNumbersPerEpisodeInput = document.querySelector('#comp-per-episode');
        this.compGraphicDesignInput = document.querySelector('input[id="comp-design"]:checked');
        this.compAdditionalInfoInput = document.querySelector('#additional-comp');

        this.persmissionToSellYesInput = document.querySelector('input[name="sell-permission-yes"]')
        this.persmissionToSellNoInput = document.querySelector('input[name="sell-permission-no"]')
        this.placeInStoreYesInput = document.querySelector('input[name="pcn-store-permission-yes"]')
        this.placeInStoreNoInput = document.querySelector('input[name="pcn-store-permission-no"]')
        this.compSelectionYesInput = document.querySelector('input[name="comps-permission-yes"]')
        this.compSelectionNoInput = document.querySelector('input[name="comps-permission-no"]')
        this.fTPInstructionsCheckInput = document.querySelector('input[name="ftp-instructions-sent"]')
        this.compGraphicDesignYesInput = document.querySelector('input[name="comp-design-gfx-yes"]')
        this.compGraphicDesignNoInput = document.querySelector('input[name="comp-design-gfx-no"]')


        // Social Media
        this.socialMediaPermissionInput = document.querySelector('input[id="social-media-permission"]:checked');
        this.fullFacebookVideoInput = document.querySelector('input[id="facebook-video-permission"]:checked');
        this.socialMediaStartDateInput = document.querySelector('#social-media-start-date');
        this.socialMediaEndDateInput = document.querySelector('#social-media-end-date');
        this.socialFrequencyInput = document.querySelector('#social-media-frequency');
        this.socialAdditionalInfoInput = document.querySelector('#additional-social-media-info');

        this.socialMediaPermissionYesInput = document.querySelector('input[name="social-media-permission-yes"]')
        this.socialMediaPermissionNoInput = document.querySelector('input[name="social-media-permission-no"]')
        this.fullFacebookVideoYesInput = document.querySelector('input[name="facebook-video-permission-yes"]')
        this.fullFacebookVideoNoInput = document.querySelector('input[name="facebook-video-permission-no"]')
        
        // Production
        this.productionLocationInput = document.querySelector('#production-location');
        this.productionNameOfShowInput = document.querySelector('#show-name');
        this.productionLengthOfProgramInput = document.querySelector('#program-length');
        this.productionProducerInput = document.querySelector('#producer');
        this.productionMethodToRecieveInput = document.querySelector('#production-receive');
        this.productionHighlightInput = document.querySelector('#production-highlight');
        this.productionAdditionalInfoInput = document.querySelector('#additional-production-info');


        this.productionLengthOfProgram30Input = document.querySelector('input[name="program-length-30"]')
        this.productionLengthOfProgram60Input = document.querySelector('input[name="program-length-60"]')
        this.productionHighlightYesInput = document.querySelector('input[name="Production-highlight-yes"]')
        this.productionHighlightNoInput = document.querySelector('input[name="Production-highlight-no"]')

        // Billboards
        this.billboardNewExistingInput = document.querySelector('input[id="billboard-new-existing"]:checked');
        this.billboardGraphicsInput = document.querySelector('input[id="billboard-graphics"]:checked');
        this.billboardScriptInput = document.querySelector('#billboard-graphic-name');
        this.billboardLengthInput = document.querySelector('#billboard-script');
        this.billboardNameServerInput = document.querySelector('#billboard-runTime');
        this.billboardAirScheduleInput = document.querySelector('#server-name');
        this.billboardAirProgramInput = document.querySelector('#billboard-air-schedule-time');
        this.billboardNumberOfAiringsInput = document.querySelector('#billboard-number-airings');
        this.billboardNumberOfBillboardsInput = document.querySelector('#billboard-number-billboards');
        this.billboardDueDateInput = document.querySelector('#billboard-due-date');

        this.billboardNewExistingNewInput = document.querySelector('input[name="billboard-new-existing-new"]')
        this.billboardNewExistingExistingInput = document.querySelector('input[name="billboard-new-existing-existing"]')
        this.billboardGraphicsYesInput = document.querySelector('input[name="billboard-graphics-yes"]')
        this.billboardGraphicsNoInput = document.querySelector('input[name="billboard-graphics-no"]')
        this.billboardGraphicsExistingInput = document.querySelector('input[name="billboard-graphics-existing"]')

        // Promotions
        this.promotionsOrginationInput = document.querySelector('#promo-origination');
        this.promotionsRunOfScheduleInput = document.querySelector('#promo-ROS');
        this.promotionsTimesPerDayInput = document.querySelector('#number-ROS');
        this.promotionsAirDuringSpecificProgramsInput = document.querySelector('#run-during-specific-program');
        this.promotionsTimesPerProgramInput = document.querySelector('#number-per-program');
        this.promotinsAirDatesStartInput = document.querySelector('#air-start-date');
        this.promotionsAirDatesEndInput = document.querySelector('#air-end-date');
        this.promotionsGraphicsInput = document.querySelector('input[id="promo-graphic-required"]:checked');
        this.promotionsMethodToRecieveInput = document.querySelector('#promo-receive');
        this.promotionsSocialMediaPermissionInput = document.querySelector('#promo-social-media-permission');
        this.promotionsApprovalInput = document.querySelector('#promo-approval');
        this.promotionsApprovalDateInput = document.querySelector('#promo-approval-date');

        this.promotionsGraphicsYesInput = document.querySelector('input[name="promo-graphic-required-yes"]')
        this.promotionsGraphicsNoInput = document.querySelector('input[name="promo-graphic-required-no"]')
        this.promotionsGraphicsExistingInput = document.querySelector('input[name="promo-graphic-required-existing"]')
        this.billboardNewExistingNewInput = document.querySelector('input[name="promo-social-media-permission-yes"]')
        this.billboardNewExistingNewInput = document.querySelector('input[name="promo-social-media-permission-no"]')


        // Paid Spots
        this.paidSpotPermissionInput = document.querySelector('input[id="paid-spot"]:checked');
        this.numberOfDifferentSpotsInput = document.querySelector('#number-spots');
        this.totalNumberOfAiringsInput = document.querySelector('#total-number-airings');
        this.nameSavedInServerInput = document.querySelector('#paid-spot-name');
        this.timeSavedInServerInput = document.querySelector('#paid-spot-time');
        this.numberOfAiringInput = document.querySelector('#paid-spot-number-airings');
        this.paidSpotPlacementsInput = document.querySelector('#paid-spots-placement');
        this.paidSpotDuplicationPermissionInput = document.querySelector('input[id="paid-spot-duplication-permission"]:checked');
        this.paidSpotMethodToRecieveInput = document.querySelector('#paid-spots-receive');
        this.paidSpotApprovedByInput = document.querySelector('#paid-spots-approval');
        this.paidSpotApprovedDateInput = document.querySelector('#paid-spots-approval-date');

        this.paidSpotPermissionYesInput = document.querySelector('input[name="paid-spot-yes"]')
        this.paidSpotPermissionNoInput = document.querySelector('input[name="paid-spot-no"]')

         // Disclaimers
         this.disclaimerExistInput = document.querySelector('input[id="disclaimer-exist"]:checked');
         this.disclaimerGraphicRequiredInput = document.querySelector('input[id="disclaimer-graphic-required"]:checked');
         this.disclaimerGraphicNameInput = document.querySelector('#disclaimer-graphic-name');
         this.disclaimerScriptInput = document.querySelector('#disclaimer-script');
         this.disclaimerRunTimeInput = document.querySelector('#disclaimer-runTime');
         this.disclaimerServerNameInput = document.querySelector('#disclaimer-server-name');
         this.disclaimerDueDateInput = document.querySelector('#disclaimer-due-date');
 

        //Submit Button
        this.postSubmit = document.querySelector('post-submit');
        this.idInput = document.querySelector('#id');
        this.contract = document.querySelector('#contract');
        this.forState = 'add';


    }

    showClients(contracts){
      let output = '';
      console.log(contracts)

      contracts.forEach((contract) => {
        output +=`<div class="card mb-4" id="OEC-card">
                  <div class="card-head">
                  <h4 class="card-title">${contract.typeOfClient}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">${contract.soldByPerson}</h6>
                  <p class="card-text">${contract.clientCompanyName}</p>
                  <p class="card-text"> <span class = "badge badge-primary">START DATE</span>  ${contract.contractStartDate}</p>
                  <p class="card-text"> <span class = "badge badge-warning">END DATE</span>  ${contract.contractEndDate}</p>
                  <a href="#" class="edit card-link" data-id="${contract._id}"><i class="fas fa-pencil-alt"></i></a>
                  <a href="#" class="delete card-link" data-id="${contract._id}"><i class="fas fa-times"></i></a>
                </div>
              </div>


        `
      })
      this.contract.innerHTML = output;
    }

    //Clear Fields
    clearFields() {
      console.log('clear fields update this')
    }


    // Fill form to Edit
    fillForm(data) {
      this.typeOfClientInput.value = data.typeOfClient;
      this.soldByPersonInput.value = data.soldByPerson;
      this.clientCompanyNameInput.value = data.clientCompanyName;
      this.clientPersonNameInput.value = data.clientPersonName;
      this.clientPersonTitleInput.value = data.clientPersonTitle;
      this.clientPhoneInput.value = data.clientPhone;
      this.clientEmailInput.value = data.clientEmail;
      this.productionCompanyInput.value = data.productionCompany;
      this.productionCompanyPersonInput.value = data.productionCompanyPerson;
      this.productionCompanyPersonTitleInput.value = data.productionCompanyPersonTitle;
      this.productionCompanyPhoneInput.value = data.productionCompanyPhone;
      this.productionCompanyEmailInput.value = data.productionCompanyEmail;
      this.copyrightFillInput.checked = RadioButton(data.copyright, 'YES');
      this.copyrightFillNoInput.checked = RadioButton(data.copyright, 'NO');
      this.contractSignDateInput.value = data.contractSignDate;
      this.contractStartDateInput.value = data.contractStartDate;
      this.contractEndDateInput.value = data.contractEndDate;
      this.airDatesTimesInput.value = data.airDatesTimes;
      this.contractAdditionalInfoInput.value = data.contractAdditionalInfo;

      // Web OTT Indentification
      this.payWallRadioInFrontInput.checked = RadioButton(data.webOTT[0].payWall, 'In Front');
      this.payWallRadioBehindInput.checked= RadioButton(data.webOTT[0].payWall, 'Behind');
      this.webCategoryInput.value= data.webOTT[0].webCategory;
      this.selectVideoOnDemandPCNSelectInput.checked = RadioButton(data.webOTT[0].selectVideoOnDemand, 'PCN Select');//RADIO BUTTON
      this.selectVideoOnDemandOtherInput.checked = RadioButton(data.webOTT[0].selectVideoOnDemand, 'Other');//RADIO BUTTON
      this.otherVideoOnDemandInput.value= data.webOTT[0].otherVideoOnDemand;
      this.webGraphicRequiredYesInput.checked= RadioButton(data.webOTT[0].webGraphicRequired,'yes');//RADIO BUTTON=====
      this.webGraphicRequiredNoInput.checked= RadioButton(data.webOTT[0].webGraphicRequired,'no');//RADIO BUTTON=====
      this.webGraphicRequiredExisitingInput.checked = RadioButton(data.webOTT[0].webGraphicRequired,'existing');//RADIO BUTTON
      this.webProgramDescriptionInput.value= data.webOTT[0].webProgramDescription;
      this.webButtonInput.value= data.webOTT[0].webButton;

      //Store Duplication FTP
      this.persmissionToSellYesInput.checked = RadioButton(data.duplication[0].persmissionToSell,'Yes');//RADIO BUTTON=
      this.persmissionToSellNoInput.checked = RadioButton(data.duplication[0].persmissionToSell,'No');//RADIO BUTTON===
      this.placeInStoreYesInput.checked = RadioButton(data.duplication[0].placeInStore,'Yes' );//RADIO BUTTON=====
      this.placeInStoreNoInput.checked = RadioButton(data.duplication[0].placeInStore,'No' );//RADIO BUTTON=====
      this.compSelectionYesInput.checked = RadioButton(data.duplication[0].compSelection, 'Yes');//RADIO BUTTON=====
      this.compSelectionNoInput.checked = RadioButton(data.duplication[0].compSelection, 'No');//RADIO BUTTON=====
      this.compFormatInput.value = data.duplication[0].compFormat;
      this.fTPInstructionsCheckInput.checked = RadioButton(data.duplication[0].fTPInstructions, 'true');//RADIO BUTTON=====CHECKBOX  THIS WILL BE UPDATED ADD NAME ftp-instructions-sent
      this.compDueDateInput.value = data.duplication[0].compDueDate;
      this.compNumbersPerEpisodeInput.value = data.duplication[0].compNumbersPerEpisode;
      this.compGraphicDesignYesInput.checked = RadioButton(data.duplication[0].compGraphicDesign, 'Yes');//RADIO BUTTON=====
      this.compGraphicDesignNoInput.checked = RadioButton(data.duplication[0].compGraphicDesign, 'No');//RADIO BUTTON=====
      this.compAdditionalInfoInput.value= data.duplication[0].compAdditionalInfo;

      // Social Media
      this.socialMediaPermissionYesInput.checked = RadioButton(data.social[0].socialMediaPermission, 'Yes');//RADIO BUTTON=====
      this.socialMediaPermissionNoInput.checked = RadioButton(data.social[0].socialMediaPermission, 'No');//RADIO BUTTON=====
      this.fullFacebookVideoYesInput.checked = RadioButton(data.social[0].fullFacebookVideo, 'Yes');//RADIO BUTTON=====
      this.fullFacebookVideoNoInput.checked = RadioButton(data.social[0].fullFacebookVideo, 'No');//RADIO BUTTON=====
      this.socialMediaStartDateInput.value= data.social[0].socialMediaStartDate;
      this.socialMediaEndDateInput.value= data.social[0].socialMediaEndDate;
      this.socialFrequencyInput.value= data.social[0].socialFrequency;
      this.socialAdditionalInfoInput.value= data.social[0].socialAdditionalInfo;

      // Production
      this.productionLocationInput.value= data.production[0].productionLocation;
      this.productionNameOfShowInput.value= data.production[0].productionNameOfShow;
      this.productionLengthOfProgram30Input.checked = RadioButton(data.production[0].productionLengthOfProgram, '30 Minutes');//RADIO BUTTON=====
      this.productionLengthOfProgram60Input.checked = RadioButton(data.production[0].productionLengthOfProgram, '60 Minutes');//RADIO BUTTON=====
      this.productionProducerInput.value= data.production[0].productionProducer;
      this.productionMethodToRecieveInput.value= data.production[0].productionMethodToRecieve;
      this.productionHighlightYesInput.checked = RadioButton(data.production[0].productionHighlight, 'Yes');//RADIO BUTTON=====
      this.productionHighlightNoInput.checked = RadioButton(data.production[0].productionHighlight, 'No');//RADIO BUTTON=====
      this.productionAdditionalInfoInput.value= data.production[0].productionAdditionalInfo;

      //Billboards
      this.billboardNewExistingNewInput.checked = RadioButton(data.billboards[0].billboardNewExisting, 'new');//RADIO BUTTON=====
      this.billboardNewExistingExistingInput.checked = RadioButton(data.billboards[0].billboardNewExisting, 'existing');//RADIO BUTTON=====
      this.billboardGraphicsYesInput.checked = RadioButton(data.billboards[0].billboardGraphics, 'yes');//RADIO BUTTON=====
      this.billboardGraphicsNoInput.checked = RadioButton(data.billboards[0].billboardGraphics, 'no');//RADIO BUTTON=====
      this.billboardGraphicsExistingInput.checked = RadioButton(data.billboards[0].billboardGraphics, 'existing');//RADIO BUTTON=====
      this.billboardScriptInput.value= data.billboards[0].billboardScript;
      this.billboardLengthInput.value= data.billboards[0].billboardLength;
      this.billboardNameServerInput.value= data.billboards[0].billboardNameServer;
      this.billboardAirScheduleInput.value= data.billboards[0].billboardAirSchedule;
      this.billboardAirProgramInput.value= data.billboards[0].billboardAirProgram;
      this.billboardNumberOfAiringsInput.value= data.billboards[0].billboardNumberOfAirings;
      this.billboardNumberOfBillboardsInput.value= data.billboards[0].billboardNumberOfBillboards;
      this.billboardDueDateInput.value= data.billboards[0].billboardDueDate;

      // Promotions
      this.promotionsOrginationInput.value= data.promotions[0].promotionsOrgination;
      this.promotionsRunOfScheduleInput.value= data.promotions[0].promotionsRunOfSchedule;
      this.promotionsTimesPerDayInput.value= data.promotions[0].promotionsTimesPerDay;
      this.promotionsAirDuringSpecificProgramsInput.value= data.promotions[0].promotionsAirDuringSpecificPrograms;
      this.promotionsTimesPerProgramInput.value= data.promotions[0].promotionsTimesPerProgram;
      this.promotinsAirDatesStartInput.value= data.promotions[0].promotinsAirDatesStart;
      this.promotionsAirDatesEndInput.value= data.promotions[0].promotionsAirDatesEnd;
      this.promotionsGraphicsYesInput.checked = RadioButton(data.promotions[0].promotionsGraphics, 'yes');//RADIO BUTTON=====
      this.promotionsGraphicsNoInput.checked = RadioButton(data.promotions[0].promotionsGraphics, 'no');//RADIO BUTTON=====
      this.promotionsGraphicsExistingInput.checked = RadioButton(data.promotions[0].promotionsGraphics, 'existing');//RADIO BUTTON=====
      this.promotionsMethodToRecieveInput.value= data.promotions[0].promotionsMethodToRecieve;
      this.billboardNewExistingNewInput.checked = RadioButton(data.promotions[0].promotionsSocialMediaPermission, 'Yes');//RADIO BUTTON=====
      this.billboardNewExistingNewInput.checked = RadioButton(data.promotions[0].promotionsSocialMediaPermission, 'No');//RADIO BUTTON=====
      this.promotionsApprovalInput.value= data.promotions[0].promotionsApproval;
      this.promotionsApprovalDateInput.value= data.promotions[0].promotionsApprovalDate;

      // Paid Spots
      this.paidSpotPermissionYesInput.checked = RadioButton(data.paidSpots[0].paidSpotPermission, 'yes');//RADIO BUTTON=====
      this.paidSpotPermissionNoInput.checked = RadioButton(data.paidSpots[0].paidSpotPermission, 'no');//RADIO BUTTON=====
      this.numberOfDifferentSpotsInput.value= data.paidSpots[0].numberOfDifferentSpots;
      this.totalNumberOfAiringsInput.value= data.paidSpots[0].totalNumberOfAirings;
      this.nameSavedInServerInput.value= data.paidSpots[0].nameSavedInServer;
      this.timeSavedInServerInput.value= data.paidSpots[0].timeSavedInServer;
      this.numberOfAiringInput.value= data.paidSpots[0].numberOfAiring;
      this.paidSpotPlacementsInput.value= data.paidSpots[0].paidSpotPlacements;
      this.paidSpotDuplicationPermissionInput.value= data.paidSpots[0].paidSpotDuplicationPermission;
      this.paidSpotMethodToRecieveInput.value= data.paidSpots[0].paidSpotMethodToRecieve;
      this.paidSpotApprovedByInput.value= data.paidSpots[0].paidSpotApprovedBy;
      this.paidSpotApprovedDateInput.value= data.paidSpots[0].paidSpotApprovedDate;

      // Disclaimers
      this.disclaimerExistInput.value= data.disclaimer[0].disclaimerExist;
      this.disclaimerGraphicRequiredInput.value= data.disclaimer[0].disclaimerGraphicRequired;
      this.disclaimerGraphicNameInput.value= data.disclaimer[0].disclaimerGraphicName;
      this.disclaimerScriptInput.value= data.disclaimer[0].disclaimerScript;
      this.disclaimerRunTimeInput.value= data.disclaimer[0].disclaimerRunTime;
      this.disclaimerServerNameInput.value= data.disclaimer[0].disclaimerServerName;
      this.disclaimerDueDateInput.value= data.disclaimer[0].disclaimerDueDate;

      this.idInput.value = data._id

      function RadioButton(dataValue,firstValue){
        if (dataValue === firstValue) {return true}
        else { return false };
      }

    }


    clearForm() {
      this.typeOfClientInput.value = "";
      this.soldByPersonInput.value = "";
      this.clientCompanyNameInput.value = "";
      this.clientPersonNameInput.value = "";
      this.clientPersonTitleInput.value = "";
      this.clientPhoneInput.value = "";
      this.clientEmailInput.value = "";
      this.productionCompanyInput.value = "";
      this.productionCompanyPersonInput.value = "";
      this.productionCompanyPersonTitleInput.value = "";
      this.productionCompanyPhoneInput.value = "";
      this.productionCompanyEmailInput.value = "";
      this.copyrightInput.value = "";
      this.contractSignDateInput.value = "";
      this.contractStartDateInput.value = "";
      this.contractEndDateInput.value = "";
      this.airDatesTimesInput.value = "";
      this.contractAdditionalInfoInput.value = "";

      // Web OTT Indentification
      this.payWallInput.value= "";
      this.webCategoryInput.value= "";
      this.selectVideoOnDemandInput.value= "";
      this.otherVideoOnDemandInput.value= "";
      this.webGraphicRequiredInput.value= "";
      this.webProgramDescriptionInput.value= "";
      this.webButtonInput.value= "";

      //Store Duplication FTP
      this.persmissionToSellInput.value= "";
      this.placeInStoreInput.value= "";
      this.compSelectionInput.value= "";
      this.compFormatInput.value= "";
      this.fTPInstructionsInput.value= "";
      this.compDueDateInput.value= "";
      this.compNumbersPerEpisodeInput.value= "";
      this.compGraphicDesignInput.value= "";
      this.compAdditionalInfoInput.value= "";

      // Social Media
      this.socialMediaPermissionInput.value= "";
      this.fullFacebookVideoInput.value= "";
      this.socialMediaStartDateInput.value= "";
      this.socialMediaEndDateInput.value= "";
      this.socialFrequencyInput.value= "";
      this.socialAdditionalInfoInput.value= "";

      // Production
      this.productionLocationInput.value= "";
      this.productionNameOfShowInput.value= "";
      this.productionLengthOfProgramInput.value= "";
      this.productionProducerInput.value= "";
      this.productionMethodToRecieveInput.value= "";
      this.productionHighlightInput.value= "";
      this.productionAdditionalInfoInput.value= "";

      //Billboards
      this.billboardNewExistingInput.value= "";
      this.billboardGraphicsInput.value= "";
      this.billboardScriptInput.value= "";
      this.billboardLengthInput.value= "";
      this.billboardNameServerInput.value= "";
      this.billboardAirScheduleInput.value= "";
      this.billboardAirProgramInput.value= "";
      this.billboardNumberOfAiringsInput.value= "";
      this.billboardNumberOfBillboardsInput.value= "";
      this.billboardDueDateInput.value= "";

      // Promotions
      this.promotionsOrginationInput.value= "";
      this.promotionsRunOfScheduleInput.value= "";
      this.promotionsTimesPerDayInput.value= "";
      this.promotionsAirDuringSpecificProgramsInput.value= "";
      this.promotionsTimesPerProgramInput.value= "";
      this.promotinsAirDatesStartInput.value= "";
      this.promotionsAirDatesEndInput.value= "";
      this.promotionsGraphicsInput.value= "";
      this.promotionsMethodToRecieveInput.value= "";
      this.promotionsSocialMediaPermissionInput.value= "";
      this.promotionsApprovalInput.value= "";
      this.promotionsApprovalDateInput.value= "";

      // Paid Spots
      this.paidSpotPermissionInput.value= "";
      this.numberOfDifferentSpotsInput.value= "";
      this.totalNumberOfAiringsInput.value= "";
      this.nameSavedInServerInput.value= "";
      this.timeSavedInServerInput.value= "";
      this.numberOfAiringInput.value= "";
      this.paidSpotPlacementsInput.value= "";
      this.paidSpotDuplicationPermissionInput.value= "";
      this.paidSpotMethodToRecieveInput.value= "";
      this.paidSpotApprovedByInput.value= "";
      this.paidSpotApprovedDateInput.value= "";

      // Disclaimers
      this.disclaimerExistInput.value= "";
      this.disclaimerGraphicRequiredInput.value= "";
      this.disclaimerGraphicNameInput.value= "";
      this.disclaimerScriptInput.value= "";
      this.disclaimerRunTimeInput.value= "";
      this.disclaimerServerNameInput.value= "";
      this.disclaimerDueDateInput.value= "";
    }
    

}



class BI {
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