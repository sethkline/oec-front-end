import { http } from './http';

Survey.Survey.cssType = "bootstrap";


const surveyJSON = {
  pages: [
    {
      name: "basicContractInfo",
      elements: [
        { type: "text", name: "id", visible: false, title: "id" },
        {
          type: "dropdown",
          name: "soldBy",
          title: "SOLD BY",
          isRequired: true,
          choices: [
            { value: "Mitzi Jones", undefined: "Mitzi Jones" },
            { value: "Joel Bechtel", undefined: "Joel Bechtel" }
          ]
        },
        {
          type: "dropdown",
          name: "typeOfClient",
          title: "TYPE OF CLIENT",
          isRequired: true,
          choices: [
            { value: "Fusion", undefined: "Fusion" },
            { value: "Underwriter", undefined: "Partner" },
            { value: "Partner", undefined: "Underwriter" }
          ],
          choicesOrder: "asc"
        },
        {
          type: "text",
          name: "Client Name",
          title: "CLIENT",
          isRequired: true,
          placeHolder: "Company Name"
        },
        {
          type: "paneldynamic",
          name: "question2",
          title: "Client Contact Information",
          templateElements: [
            {
              type: "text",
              name: "contactName",
              title: "CONTACT NAME",
              placeHolder: "John Doe"
            },
            {
              type: "text",
              name: "Contact Title",
              startWithNewLine: false,
              title: "TITLE",
              placeHolder: "CEO"
            },
            {
              type: "text",
              name: "Contact Phone",
              title: "PHONE",
              inputType: "tel"
            },
            {
              type: "text",
              name: "contactEmail",
              startWithNewLine: false,
              title: "EMAIL",
              inputType: "email"
            }
          ]
        },
        {
          type: "paneldynamic",
          name: "question1",
          title: "Production Company Contact Information",
          templateElements: [
            {
              type: "text",
              name: "question3",
              title: "CLIENT",
              placeHolder: "Company Name"
            },
            {
              type: "text",
              name: "contactName",
              title: "CONTACT NAME",
              placeHolder: "John Doe"
            },
            {
              type: "text",
              name: "Contact Title",
              startWithNewLine: false,
              title: "TITLE",
              placeHolder: "CEO"
            },
            {
              type: "text",
              name: "Contact Phone",
              title: "PHONE",
              inputType: "tel"
            },
            {
              type: "text",
              name: "contactEmail",
              startWithNewLine: false,
              title: "EMAIL",
              inputType: "email"
            }
          ]
        },
        {
          type: "checkbox",
          name: "copyrightedMaterial",
          title: "Valid license to copyrighted material",
          choices: ["YES", "NO"]
        },
        {
          type: "text",
          name: "dateContractSigned",
          title: "DATE CONTRACT SIGNED",
          inputType: "date"
        },
        {
          type: "text",
          name: "contractStartDate",
          title: "CONTRACT START DATE",
          inputType: "date"
        },
        {
          type: "text",
          name: "contractEndDate",
          startWithNewLine: false,
          title: "CONTRACT END DATE",
          inputType: "date"
        },
        {
          type: "paneldynamic",
          name: "Air Dates and Times",
          templateElements: [
            {
              type: "text",
              name: "airDatesStartTime",
              title: "START TIME",
              isRequired: true,
              inputType: "datetime-local"
            },
            {
              type: "text",
              name: "airDatesEndTime",
              title: "END TIME",
              isRequired: true,
              inputType: "datetime-local"
            }
          ]
        },
        {
          type: "comment",
          name: "additionalInfo",
          title: "Additional Information"
        }
      ],
      title: "BASIC CONTRACT INFO"
    },
    {
      name: "webIndentification",
      elements: [
        {
          type: "radiogroup",
          name: "paywall",
          title: "PAYWALL",
          choices: ["In Front", "Behind"]
        },
        {
          type: "dropdown",
          name: "webCategory",
          title: "Category",
          choices: [
            { value: "politics", text: "Politics and Policy" },
            { value: "sports", text: "Sports" },
            { value: "culture", text: "History and Culture" }
          ]
        },
        {
          type: "radiogroup",
          name: "svodGallery",
          title: "SVOD GALLERY:",
          choices: [
            { value: "select", text: "Select" },
            { value: "other", text: "Other" }
          ]
        },
        {
          type: "comment",
          name: "describeOther",
          visibleIf: '{svodGallery} = "other"',
          title: "Describe Other",
          placeHolder: "Describe Other"
        },
        {
          type: "radiogroup",
          name: "webLogoRequired",
          title: "LOGO / GRAPHIC REQUIRED",
          choices: ["Yes", "No", "Existing"]
        },
        {
          type: "comment",
          name: "webProgramDescription",
          title: "Program Description"
        },
        {
          type: "comment",
          name: "buttonsPage",
          title: "Specific Buttons or another page?"
        }
      ],
      title: "WEB / OTT IDENTIFICATION"
    },
    {
      name: "store",
      elements: [
        {
          type: "radiogroup",
          name: "permissionToSell",
          title: "PERMISSION TO SELL:",
          choices: ["YES", "NO"]
        },
        {
          type: "radiogroup",
          name: "placeInPCNStore",
          visibleIf: '{permissionToSell} = "YES"',
          title: "PLACE  IN PCN STORE:",
          choices: ["YES", "NO"]
        },
        {
          type: "radiogroup",
          name: "complimentaryDuplication",
          title: "COMPLIMENTARY DUPLICATION:",
          choices: ["YES", "NO"]
        },
        {
          type: "dropdown",
          name: "compFormat",
          visibleIf: '{complimentaryDuplication} = "YES"',
          title: "Format of Comp",
          choices: ["FTP", "DVD"]
        },
        {
          type: "checkbox",
          name: "ftpInstructions",
          visibleIf: '{compFormat} = "FTP"',
          title: "FTP Instructions Sent",
          titleLocation: "hidden",
          choices: [{ value: "yes", text: "FTP Instructions Sent" }]
        },
        {
          type: "text",
          name: "duplicationDueDate",
          visibleIf: '{complimentaryDuplication} = "YES"',
          title: "Due By",
          inputType: "datetime-local"
        },
        {
          type: "text",
          name: "duplicationNumberPerEpisode",
          visibleIf: '{complimentaryDuplication} = "YES"',
          startWithNewLine: false,
          title: "Number per episode:",
          inputType: "number"
        },
        {
          type: "radiogroup",
          name: "dubGraphicDesignRequired",
          title: "GRAPHIC DESIGN REQUIRED:",
          choices: ["YES", "NO"]
        },
        {
          type: "comment",
          name: "dubAdditionalInformation",
          title: "ADDITIONAL INFORMATION"
        }
      ],
      title: "STORE / DUPLICATION FTP"
    },
    {
      name: "socialMedia",
      elements: [
        {
          type: "radiogroup",
          name: "socialMediaPermission",
          titleLocation: "hidden",
          choices: ["YES", "NO"]
        },
        {
          type: "text",
          name: "twitterHandle",
          visibleIf: '{socialMediaPermission} = "YES"',
          title: "Twitter Handle",
          placeHolder: "@something"
        },
        {
          type: "radiogroup",
          name: "fullVideoOnFacebook",
          visibleIf: '{socialMediaPermission} = "YES"',
          startWithNewLine: false,
          title: "FULL VIDEO ON FACEBOOK:",
          choices: ["YES", "NO"]
        },
        {
          type: "html",
          name: "PROMOTION DATES",
          visibleIf: '{socialMediaPermission} = "YES"',
          html: "<legend> PROMOTION DATES </legend>"
        },
        {
          type: "text",
          name: "socialMediaStartDate",
          visibleIf: '{socialMediaPermission} = "YES"',
          title: "Start Date",
          inputType: "datetime-local"
        },
        {
          type: "text",
          name: "socialMediaEndDate",
          visibleIf: '{socialMediaPermission} = "YES"',
          startWithNewLine: false,
          title: "End Date",
          inputType: "datetime-local"
        },
        {
          type: "text",
          name: "socialFrequency",
          visibleIf: '{socialMediaPermission} = "YES"',
          startWithNewLine: false,
          title: "Frequency",
          inputType: "number",
          placeHolder: "number of times per week"
        },
        {
          type: "comment",
          name: "socialMediaAdditionalInfo",
          visibleIf: '{socialMediaPermission} = "YES"',
          title: "ADDITIONAL INFORMATION"
        }
      ],
      title: "SOCIAL MEDIA"
    },
    {
      name: "production",
      elements: [
        {
          type: "dropdown",
          name: "productionLocation",
          title: "Production Location",
          choices: [
            { value: "studio", text: "PCN Studio" },
            { value: "field", text: "PCN Field" },
            { value: "outside", text: "OUTSIDE of PCN" }
          ]
        },
        {
          type: "radiogroup",
          name: "productionLengthOfFinished Program",
          title: "Length of Finished Program",
          hasOther: true,
          choices: [
            { value: "30", text: "30 Minutes" },
            { value: "60", text: "60 Minutes" }
          ]
        },
        {
          type: "text",
          name: "productionNameOfShow",
          title: "Name of Show",
          placeHolder: "Example Show"
        },
        {
          type: "text",
          name: "productionProducer",
          title: "PCN Producer",
          placeHolder: "PCN Producer"
        },
        {
          type: "dropdown",
          name: "productionMethodToReceive",
          title: "Method to receive",
          hasOther: true,
          choices: ["DISC", "FTP", "DROPBOX", "HARDDRIVE"]
        },
        {
          type: "radiogroup",
          name: "productionHighlight",
          title: "Shoot highlight or testimonial:",
          choices: ["Yes", "No"]
        },
        {
          type: "comment",
          name: "productionAdditionalInfo",
          title: "ADDITIONAL INFORMATION"
        }
      ],
      visibleIf: '{typeOfClient} = "Fusion" or ({typeOfClient} = "Partner")',
      title: "PRODUCTION/SHOW"
    },
    {
      name: "disclaimer",
      elements: [
        {
          type: "radiogroup",
          name: "disclaimerNew",
          title:
            "Air before/after Fusion program, states does not reflect views of PCN",
          choices: ["New", "Existing"]
        },
        {
          type: "radiogroup",
          name: "disclaimerLogoGraphic",
          title: "LOGO / GRAPHIC REQUIRED",
          choices: ["Yes", "No", "Existing"]
        },
        {
          type: "text",
          name: "disclaimerFileName",
          title: "Logo/Graphic File Name:",
          placeHolder: "graphic.png"
        },
        {
          type: "comment",
          name: "disclaimerScript",
          title: "Script or Special Wording:"
        },
        {
          type: "text",
          name: "disclaimerLength",
          title: "Length in seconds:",
          inputType: "number"
        },
        {
          type: "html",
          name: "question4",
          html:
            "<legend>Name saved in server</legend>\n<h5>this is the EXACT name so it can be located easily</h5>"
        },
        {
          type: "text",
          name: "disclaimerName",
          titleLocation: "hidden",
          placeHolder: "SPBB"
        },
        {
          type: "text",
          name: "disclaimerDueDate",
          title: "Due Date",
          inputType: "datetime-local"
        }
      ],
      visibleIf: '{typeOfClient} = "Fusion"',
      title: "DISCLAIMER"
    },
    {
      name: "billboards",
      elements: [
        {
          type: "radiogroup",
          name: "billboardsInitialize",
          title:
            'Air before/after sponsored program, states paid in part by "Company"',
          choices: ["New", "Existing"]
        },
        {
          type: "radiogroup",
          name: "billboardsLogoGraphic",
          title: "LOGO / GRAPHIC REQUIRED",
          choices: ["Yes", "No", "Existing"]
        },
        {
          type: "text",
          name: "billboardGraphicName",
          title: "Logo/Graphic File Name:",
          placeHolder: "graphic.png"
        },
        {
          type: "comment",
          name: "billboardScript",
          title: "Script or Special Wording:"
        },
        { type: "html", name: "question10", html: "<legend>Length</legend>" },
        {
          type: "text",
          name: "billboardLength",
          title: "in seconds:",
          inputType: "number"
        },
        {
          type: "html",
          name: "question12",
          html: "<legend>Name saved in server</legend>"
        },
        {
          type: "text",
          name: "billboardServerName",
          title: "this is the EXACT name so it can be located easily",
          placeHolder: "SPBB"
        },
        {
          type: "text",
          name: "billboardAirSchedule",
          title: "Air Schedule or Time:"
        },
        {
          type: "text",
          name: "billboardAirDuringProgram",
          title: "Air During Specific Program:"
        },
        {
          type: "text",
          name: "billboardNumberOfAirings",
          title: "Number of Airings:",
          inputType: "number"
        },
        {
          type: "text",
          name: "billboardNumberOfBillboards",
          title: "Number of Billboards:",
          inputType: "number"
        },
        {
          type: "text",
          name: "billboardDueDate",
          title: "Due Date:",
          inputType: "datetime-local"
        }
      ],
      visibleIf:
        '{typeOfClient} = "Underwriter" or ({typeOfClient} = "Partner")',
      title: "BILLBOARDS"
    },
    {
      name: "paidSpots",
      elements: [
        {
          type: "radiogroup",
          name: "paidSpotsClientProvides",
          title: "Client provides",
          choices: ["Yes", "No"]
        },
        {
          type: "text",
          name: "paidSpotsNumberOfDifferentSpots",
          title: "Number of Different Spots:",
          inputType: "number"
        },
        {
          type: "text",
          name: "paidSpotsTotalNumberOfAirings",
          startWithNewLine: false,
          title: "Total Number of Airings:",
          inputType: "number"
        },
        {
          type: "paneldynamic",
          name: "paidSpotsinfo",
          title: "Spots Information",
          templateElements: [
            {
              type: "html",
              name: "question5",
              html: "<Legend>Name saved in server and Length</Legend>"
            },
            {
              type: "text",
              name: "paidSpotsName",
              titleLocation: "hidden",
              placeHolder: "Exact Name"
            },
            {
              type: "text",
              name: "paidSpotLength",
              startWithNewLine: false,
              titleLocation: "hidden",
              inputType: "number",
              placeHolder: "30"
            },
            {
              type: "text",
              name: "paidSpotsNumberOfAirings",
              title: "Number of Airings:",
              inputType: "number"
            },
            {
              type: "text",
              name: "paidSpotsPlacement",
              title: "Placement",
              placeHolder: "only during pony pulls, Girls 4A BB, Daily"
            },
            {
              type: "radiogroup",
              name: "paidSpotsDuplicationPermission",
              title: "Ok to be used in duplication (SVOD/DD/Disc)",
              choices: ["Yes", "No"]
            },
            {
              type: "dropdown",
              name: "paidSpotMethodToReceive",
              title: "Method to receive",
              hasOther: true,
              choices: [
                { value: "DISC", text: "Disc" },
                "FTP",
                { value: "DROPBOX", text: "DropBox" },
                { value: "HARDDRIVE", text: "Hard Drive" }
              ]
            }
          ]
        },
        { type: "text", name: "paidSpotsApprovedBy", title: "Approved By:" },
        {
          type: "text",
          name: "paidSpotsApprovalDate",
          startWithNewLine: false,
          title: "DATE",
          inputType: "date"
        }
      ],
      visibleIf: '{typeOfClient} = "Underwriter"',
      title: "PAID SPOTS"
    },
    {
      name: "promotions",
      elements: [
        {
          type: "text",
          name: "promotionsOrigination",
          title: "ORIGINATION",
          placeHolder: "provided by client/edited by PCN"
        },
        {
          type: "text",
          name: "promotionsAirRunOfSchedule",
          title: "Air ROS: (Run of Schedule)"
        },
        {
          type: "text",
          name: "promotionsROSTimesPerDay",
          startWithNewLine: false,
          title: "Times per Day",
          inputType: "number"
        },
        {
          type: "text",
          name: "promotionsAirDuringSpecificPrograms",
          title: "Air during specific programs:"
        },
        {
          type: "text",
          name: "promotionsTimesPerProgram",
          startWithNewLine: false,
          title: "Times per Program",
          inputType: "number"
        },
        {
          type: "html",
          name: "Air Dates",
          html: "<legend>Air Dates</legend>\n<h2> Start/End </h2>"
        },
        {
          type: "text",
          name: "promotionsAirDatesStart",
          title: "Start Date",
          inputType: "datetime-local"
        },
        {
          type: "text",
          name: "promotionsAirDatesEnd",
          startWithNewLine: false,
          title: "End Date",
          inputType: "datetime-local"
        },
        {
          type: "radiogroup",
          name: "promotionsLogoGraphicRequired",
          title: "Logo/Graphic Required",
          choices: ["Yes", "No", "Existing"]
        },
        {
          type: "dropdown",
          name: "promotionsMethodToRecieve",
          title: "Method to receive",
          hasOther: true,
          choices: [
            { value: "disc", text: "XD CAM Disc" },
            { value: "ftp", text: "FTP" },
            { value: "dropbox", text: "DROPBOX" },
            { value: "hd", text: "HARD DRIVE" }
          ]
        },
        {
          type: "radiogroup",
          name: "promotionsPermissionToUseSocial",
          title: "Permission to use for Social Media",
          choices: ["Yes", "NO"]
        },
        {
          type: "text",
          name: "promotionsApprovedBy",
          title: "Promotions Approved By"
        },
        {
          type: "text",
          name: "promotionsApprovalDate",
          startWithNewLine: false,
          title: "DATE",
          inputType: "date"
        }
      ],
      visibleIf: '{typeOfClient} = "Partner" || {typeOfClient} = "Fusion"',
      title: "PROMOTIONS"
    }
  ],
  sendResultOnPageNext: true,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  clearInvisibleValues: "none"

};

var testJSON = {pages:[{name:"data",elements:[{type:"text",name:"id",visible:false},{type:"text",name:"start_date",inputType:"datetime"},{type:"text",name:"end_date",inputType:"datetime"},{type:"text",name:"text"},{type:"text",name:"episode"},{type:"boolean",name:"isNew"},{type:"dropdown",name:"evType",choices:[{value:"1",text:"item 1"},{value:"2",text:"item 2"},{value:"3",text:"item 3"}]},{type:"text",name:"runTime",inputType:"time"},{type:"expression",name:"question1",displayStyle:"none"},{type:"dropdown",name:"question2",choices:["item1","item2","item3"]}]}],
completedHtml: "<div class='container'><p><h4>Thank you for sharing this information with us.</h4></p></div>",
clearInvisibleValues: "none"
}



const survey = new Survey.Model(testJSON);
// const survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer,
  clearInvisibleValues: 'none'
});

    // var storageName = "oecData";
    // function saveSurveyData(survey) {
    //     var data = survey.data;
    //     data.pageNo = survey.currentPageNo;
    //     window
    //         .localStorage
    //         .setItem(storageName, JSON.stringify(data));
    // }

    //     survey
    //     .onPartialSend
    //     .add(function (survey) {
    //         saveSurveyData(survey);
    //     });

    //     survey.onComplete.add(function (survey, options) {
    //         saveSurveyData(survey);
    //     });
    //     var prevData = window.localStorage.getItem(storageName) || null;
    //     if (prevData) {
    //         var data = JSON.parse(prevData);
    //         survey.data = data;
    //         if (data.pageNo) {
    //             survey.currentPageNo = data.pageNo;
    //         }
    //     }



// window.survey = new Survey.Model(surveyJSON);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .innerHTML = "result: " + JSON.stringify(result.data);
//     });

//     var storageName = "survey_patient_history";
//     function saveSurveyData(survey) {
//         var data = survey.data;
//         data.pageNo = survey.currentPageNo;
//         window
//             .localStorage
//             .setItem(storageName, JSON.stringify(data));
//     }
//     survey
//         .onPartialSend
//         .add(function (survey) {
//             saveSurveyData(survey);
//         });
//     survey
//         .onComplete
//         .add(function (survey, options) {
//             saveSurveyData(survey);
//         });
    
//     survey.sendResultOnPageNext = true;
//     var prevData = window
//         .localStorage
//         .getItem(storageName) || null;
//     if (prevData) {
//         var data = JSON.parse(prevData);
//         survey.data = data;
//         if (data.pageNo) {
//             survey.currentPageNo = data.pageNo;
//         }
//     }
//     $("#surveyElement").Survey({model: survey});



function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  console.log(resultAsString);
  console.log(`partial ${survey}`)
  isNew(survey);
  emailAlert(survey);
  survey.mode = "display";
  console.log(survey.data)

  survey.sendResultOnPageNext = true;
  
  function isNew(survey) {
    if (survey.data.id == "") {
      console.log("NEW");
    
    } else {
        console.log(survey.data.id)
    }
  }

  function emailAlert(survey) {
    if (survey.data.text == "a") {
      console.log("Email it");
    }
  }
}
