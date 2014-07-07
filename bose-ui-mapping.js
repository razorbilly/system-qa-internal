//var myMap = new UIMap();


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   BOSE
// BOSE
myMap.addPageset({
    name : 'bose',
    description : 'BOSE Page',
    pathRegexp : '.*'
}); 

myMap.addElement('bose', {name : 'middle-name',description : 'middle-name',locator : "xfm.av.//app:other-data/app:introduction/app:name/app:middle-name"});
myMap.addElement('bose', {name : 'introduction phone',description : 'phone',locator : "xfm.av.//app:other-data/app:introduction/app:phone/app:phone-number"});
myMap.addElement('bose', {name : 'introduction phone-number',description : 'phone-number',locator : "xfm.av.//app:other-data/app:introduction/app:caller/app:phone/app:phone-number"});
myMap.addElement('bose', {name : 'introduction cell-phone',description : 'cell-phone',locator : "xfm.av.//app:other-data/app:introduction/app:cell-phone/app:phone-number"});
myMap.addElement('bose', {name : 'caller/app:cell-phone',description : 'caller/app:cell-phone',locator : "xfm.av.//app:other-data/app:introduction/app:cell-phone/app:phone-number"});
myMap.addElement('bose', {name : 'caller/app:work-phone',description : 'caller/app:work-phone',locator : "xfm.av.//app:other-data/app:introduction/app:work-phone/app:phone-number"});
myMap.addElement('bose', {name : 'introduction/app:call-for',description : 'introduction/app:call-for',locator : "xfm.av.//app:other-data/app:introduction/app:call-for/@answer"});
myMap.addElement('bose', {name : 'introduction/app:call-for other',description : 'introduction/app:call-for other',locator : "document.forms[0].elements['xfm.av.//app:other-data/app:introduction/app:call-for/@answer'][1]"});
myMap.addElement('bose', {name : 'street',description : 'street',locator : "xfm.rv.1.[1]/app:street"});
myMap.addElement('bose', {name : 'zip',description : 'zip',locator : "xfm.rv.1.[1]/app:zip"});
myMap.addElement('bose', {name : 'gender',description : 'gender',locator : "xfm.av.//app:core-data/app:member/app:gender"});
myMap.addElement('bose', {name : 'gender F',description : 'gender F',locator : "document.forms[0].elements['xfm.av.//app:core-data/app:member/app:gender'][1]"});
myMap.addElement('bose', {name : 'birthday date',description : 'birthday date',locator : "xfm.av.//app:core-data/app:member/app:birthday/app:date"});
myMap.addElement('bose', {name : 'discussing-options',description : 'discussing-options',locator : "xfm.av.//app:other-data/app:introduction/app:discussing-options/@answer"});
myMap.addElement('bose', {name : 'discussing-options',description : 'discussing-options',locator : "document.forms[0].elements['xfm.av.//app:other-data/app:introduction/app:discussing-options/@answer'][1]"});
myMap.addElement('bose', {name : 'caller-identity',description : 'caller-identity',locator : "xfm.av.//app:other-data/app:introduction/app:caller-identity/@answer"});
myMap.addElement('bose', {name : 'caller-identity No',description : 'caller-identity No',locator : "document.forms[0].elements['xfm.av.//app:other-data/app:introduction/app:caller-identity/@answer'][1]"});
myMap.addElement('bose', {name : 'app:zip',description : 'app:zip',locator : "xfm.av.//app:other-data/app:introduction/app:caller/app:address/app:zip"});
myMap.addElement('bose', {name : 'first-name',description : 'first-name',locator : "xfm.av.//app:core-data/app:member/app:name/app:first-name"});
myMap.addElement('bose', {name : 'first-name',description : 'first-name',locator : "xfm.av.//app:core-data/app:member/app:name/app:first-name"});
myMap.addElement('bose', {name : 'middle-name',description : 'middle-name',locator : "xfm.av.//app:core-data/app:member/app:name/app:middle-name"});
myMap.addElement('bose', {name : 'last-name',description : 'last-name',locator : "xfm.av.//app:core-data/app:member/app:name/app:last-name"});
myMap.addElement('bose', {name : 'comments',description : 'comments',locator : "xfm.av.//app:other-data/app:disposition/app:comments"});
myMap.addElement('bose', {name : 'disposition',description : 'disposition',locator : "xfm.av.//app:other-data/app:disposition/app:disposition[1]"});
myMap.addElement('bose', {name : 'manager-override-code-input',description : 'manager-override-code-input',locator : "xfm.av.//app:other-data/app:misc-data/app:manager-override-code-input"});
myMap.addElement('bose', {name : 'confirm-conducted-on-an-inbound-call',description : 'confirm-conducted-on-an-inbound-call',locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:confirm-conducted-on-an-inbound-call/@answer"});
myMap.addElement('bose', {name : 'start-enrollment',description : 'start-enrollment',locator : "xfm.av.//app:other-data/app:pre-enrollment/app:start-enrollment/@answer"});
myMap.addElement('bose', {name : 'plan-type MA',description : 'plan-type MA',locator : "xfm.rv.1.[1]/app:plan-type"});
myMap.addElement('bose', {name : 'plan-type MS',description : 'plan-type MS',locator : "document.forms[0].elements['xfm.rv.1.[1]/app:plan-type'][1]"});
myMap.addElement('bose', {name : 'plan-type MD',description : 'plan-type MD',locator : "document.forms[0].elements['xfm.rv.1.[1]/app:plan-type'][2]"});
myMap.addElement('bose', {name : 'method',description : 'method',locator : "xfm.rv.1.[1]/app:method"});
myMap.addElement('bose', {name : 'method2',description : 'method',locator : "document.forms[0].elements['xfm.rv.1.[1]/app:method'][1]"});
myMap.addElement('bose', {name : 'carrier',description : 'carrier',locator : "xfm.rv.1.[1]/app:carrier"});
myMap.addElement('bose', {name : 'plan-key',description : 'plan-key',locator : "xfm.rv.1.[1]/app:plan-key"});
myMap.addElement('bose', {name : 'plan2 plan-type',description : 'plan2 plan-type',locator : "xfm.rv.2.[1]/app:plan-type"});
myMap.addElement('bose', {name : 'plan2 method1',description : 'plan2 method1',locator : "xfm.rv.2.[1]/app:method"});
myMap.addElement('bose', {name : 'plan2 method2',description : 'plan2 method2',locator : "document.forms[0].elements['xfm.rv.2.[1]/app:method'][1]"});
myMap.addElement('bose', {name : 'plan2-year1',description : 'plan2-year1',locator : "xfm.rv.2.[1]/app:plan-year"});
myMap.addElement('bose', {name : 'plan2-year2',description : 'plan2-year2',locator : "document.forms[0].elements['xfm.rv.2.[1]/app:plan-year'][1]"});
myMap.addElement('bose', {name : 'carrier2',description : 'carrier2',locator : "xfm.rv.2.[1]/app:carrier"});
myMap.addElement('bose', {name : 'plan-key2',description : 'plan-key2',locator : "xfm.rv.2.[1]/app:plan-key"});

// Eligibility1
myMap.addElement('bose', {
    name : 'can-ask-a-few-question-Yes',
    description : 'can-ask-a-few-question-Yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:can-ask-a-few-question/@answer"
});


myMap.addElement('bose', {
    name : 'have-ma-mb',
    description : 'have-ma-mb',
    locator : "xfm.av.//app:other-data/app:eligibility/app:have-ma-mb/@answer"
});


myMap.addElement('bose', {
    name : 'can-ask-a-few-question-No',
    description : 'can-ask-a-few-question-No',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:can-ask-a-few-question/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'want to continue with the call-Yes',
    description : 'want to continue with the call-Yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:do-not-have-to-provide-any-personal-information/@answer"
});


myMap.addElement('bose', {
    name : 'want to continue with the call-No',
    description : 'want to continue with the call-No',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:do-not-have-to-provide-any-personal-information/@answer'][1]"
});

// Eligibility2




myMap.addElement('bose', {
    name : 'have-ma-mb-both',
    description : 'have-ma-mb-both',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:have-ma-mb/@answer'][2]"
});




myMap.addElement('bose', {
    name : 'have-ma-mb-eligible-6months-No',
    description : 'have-ma-mb-eligible-6months-No',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:have-ma-mb/@answer'][4]"
});

myMap.addElement('bose', {
    name : 'enrolled-in-tricare-yes',
    description : 'enrolled-in-tricare-yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:enrolled-in-tricare/@answer"
});

myMap.addElement('bose', {
    name : 'enrolled-in-tricare-no',
    description : 'enrolled-in-tricare-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:enrolled-in-tricare/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'enrolled-in-va-or-fehbp-yes',
    description : 'enrolled-in-va-or-fehbp-yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:enrolled-in-va-or-fehbp/@answer"
});
myMap.addElement('bose', {
    name : 'enrolled-in-va-or-fehbp-no',
    description : 'enrolled-in-va-or-fehbp-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:enrolled-in-va-or-fehbp/@answer'][1]"
});



myMap.addElement('bose', {
    name : 'medicaid-or-subsidy-program-yes',
    description : 'medicaid-or-subsidy-program-yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:medicaid-or-subsidy-program/@answer"
});

myMap.addElement('bose', {
    name : 'medicaid-or-subsidy-program-no',
    description : 'medicaid-or-subsidy-program-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:medicaid-or-subsidy-program/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'end-stage-renal-disease-yes',
    description : 'end-stage-renal-disease-yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:end-stage-renal-disease/@answer"
});

myMap.addElement('bose', {
    name : 'end-stage-renal-disease-no',
    description : 'end-stage-renal-disease-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:end-stage-renal-disease/@answer'][1]"
});



myMap.addElement('bose', {
    name : 'reside-in-nursing-home-yes',
    description : 'reside-in-nursing-home-yes',
    locator : "xfm.av.//app:other-data/app:eligibility/app:reside-in-nursing-home/@answer"
});

myMap.addElement('bose', {
    name : 'reside-in-nursing-home-no',
    description : 'reside-in-nursing-home-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:eligibility/app:reside-in-nursing-home/@answer'][1]"
});

//analysis

myMap.addElement('bose', {
    name : 'analysis-plan-type-GAP',
    description : 'analysis-plan-type-GAP',
    locator : "xfm.av.//app:other-data/app:need-analysis/app:plan-type/@answer"
});

myMap.addElement('bose', {
    name : 'analysis-plan-type-PDP',
    description : 'analysis-plan-type-PDP',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:plan-type/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'analysis-plan-type-MAPD',
    description : 'analysis-plan-type-MAPD',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:plan-type/@answer'][2]"
});

myMap.addElement('bose', {
    name : 'analysis-plan-type-MA',
    description : 'analysis-plan-type-MA',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:plan-type/@answer'][3]"
});

myMap.addElement('bose', {
    name : 'analysis-plan-type-None',
    description : 'analysis-plan-type-None',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:plan-type/@answer'][4]"
});

myMap.addElement('bose', {
    name : 'analysis-proceed-to-MAPDandMA',
    description : 'analysis-proceed-to-MAPDandMA',
    locator : "xfm.av.//app:other-data/app:need-analysis/app:proceed-to/@answer"
});
myMap.addElement('bose', {
    name : 'analysis-proceed-to-PDP',
    description : 'analysis-proceed-to-PDP',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:proceed-to/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'analysis-proceed-to-GAP',
    description : 'analysis-proceed-to-GAP',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:proceed-to/@answer'][2]"
});

myMap.addElement('bose', {
    name : 'end-stage-renal-disease-PDPandGAP',
    description : 'analysis-proceed-to-PDPandGAP',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:need-analysis/app:proceed-to/@answer'][3]"
});

//presenting MA

myMap.addElement('bose', {
    name : 'ma-provide-drug-list-yes',
    description : 'ma-provide-drug-list-yes',
    locator : "xfm.av.//app:other-data/app:presenting/app:ma-provide-drug-list/@answer"
});

myMap.addElement('bose', {
    name : 'ma-provide-drug-list-no',
    description : 'ma-provide-drug-list-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:presenting/app:ma-provide-drug-list/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'ma-like-to-enroll-yes',
    description : 'ma-like-to-enroll-yes',
    locator : "xfm.av.//app:other-data/app:presenting/app:ma-like-to-enroll/@answer"
});
myMap.addElement('bose', {
    name : 'ma-like-to-enroll-no',
    description : 'ma-like-to-enroll-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:presenting/app:ma-like-to-enroll/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'presenting-ma-email',
    description : 'presenting-ma-email',
    locator : "xfm.av.//app:core-data/app:email"
});

myMap.addElement('bose', {
    name : 'presenting-ma-ok-to-sent-info-via-email',
    description : 'presenting-ma-ok-to-sent-info-via-email',
    locator : "xfm.av.//app:other-data/app:introduction/app:caller/app:ok-to-sent-info-via-email/@answer"
});


//presenting MD

myMap.addElement('bose', {
    name : 'pdp-provide-drug-list-yes',
    description : 'pdp-provide-drug-list-yes',
    locator : "xfm.av.//app:other-data/app:presenting/app:pdp-provide-drug-list/@answer"
});

myMap.addElement('bose', {
    name : 'pdp-provide-drug-list-no',
    description : 'pdp-provide-drug-list-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:presenting/app:pdp-provide-drug-list/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'pdp-like-to-enroll-yes',
    description : 'pdp-like-to-enroll-yes',
    locator : "xfm.av.//app:other-data/app:presenting/app:pdp-like-to-enroll/@answer"
});
myMap.addElement('bose', {
    name : 'pdp-like-to-enroll-no',
    description : 'pdp-like-to-enroll-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:presenting/app:pdp-like-to-enroll/@answer'][1]"
});

//presenting MS
myMap.addElement('bose', {
    name : 'gap-like-to-enroll-yes',
    description : 'gap-like-to-enroll-yes',
    locator : "xfm.av.//app:other-data/app:presenting/app:gap-like-to-enroll/@answer"
});
myMap.addElement('bose', {
    name : 'gap-like-to-enroll-no',
    description : 'gap-like-to-enroll-no',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:presenting/app:gap-like-to-enroll/@answer'][1]"
});


//disclosure


myMap.addElement('bose', {
    name : 'ppo-plans',
    description : 'ppo-plans',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:ppo-plans/@answer"
});

myMap.addElement('bose', {
    name : 'hmo-plans',
    description : 'hmo-plans',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:hmo-plans/@answer"
});

myMap.addElement('bose', {
    name : 'doctor-and-specialist-medical-co-pays',
    description : 'doctor-and-specialist-medical-co-pays',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:doctor-and-specialist-medical-co-pays/@answer"
});

myMap.addElement('bose', {
    name : 'outpatient-coverage',
    description : 'outpatient-coverage',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:outpatient-coverage/@answer"
});

myMap.addElement('bose', {
    name : 'hospital-in-patient',
    description : 'hospital-in-patient',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:hospital-in-patient/@answer"
});

myMap.addElement('bose', {
    name : 'ambulance-service',
    description : 'ambulance-service',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:ambulance-service/@answer"
});


myMap.addElement('bose', {
    name : 'urgent-care-and-emergency-care-services',
    description : 'urgent-care-and-emergency-care-services',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:urgent-care-and-emergency-care-services/@answer"
});

myMap.addElement('bose', {
    name : 'max-out-of-pocket-costs',
    description : 'max-out-of-pocket-costs',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:max-out-of-pocket-costs/@answer"
});


myMap.addElement('bose', {
    name : 'prescription-tier-coverage',
    description : 'prescription-tier-coverage',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:prescription-tier-coverage/@answer"
});

myMap.addElement('bose', {
    name : 'initial-coverage-limit',
    description : 'initial-coverage-limit',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:initial-coverage-limit/@answer"
});


myMap.addElement('bose', {
    name : 'part-d-coverage-gap-donut-hole',
    description : 'part-d-coverage-gap-donut-hole',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:part-d-coverage-gap-donut-hole/@answer"
});

myMap.addElement('bose', {
    name : 'catastrophic-coverage',
    description : 'catastrophic-coverage',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:catastrophic-coverage/@answer"
});

myMap.addElement('bose', {
    name : 'part-d-projected-costs',
    description : 'part-d-projected-costs',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:part-d-projected-costs/@answer"
});

myMap.addElement('bose', {
    name : 'mail-order',
    description : 'mail-order',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:review-list/app:mail-order/@answer"
});

myMap.addElement('bose', {
    name : 'ma-plan-disenroll-other-yes',
    description : 'ma-plan-disenroll-other-yes',
    locator : "xfm.av.//app:other-data/app:pre-enrollment/app:ma-plan-disenroll-other/@answer"
});


//enrollment- applicant Information
//created by jerryy//

myMap.addElement('bose', {
    name : 'part_b_month',
    description : 'month',
    locator : "xfm.rv.6.[1]/app:month"
});

myMap.addElement('bose', {
    name : 'part_b_year',
    description : 'year',
    locator : "xfm.rv.6.[1]/app:year"
});

myMap.addElement('bose', {
    name : 'election_type_aep',
    description : 'AEP',
    locator : "xfm.av.//app:core-data/app:enrollment/app:plan[1]/app:election-type"
});

myMap.addElement('bose', {
    name : 'election_type_icep',
    description : 'ICEP',
    locator : "document.forms[0].elements['xfm.av.//app:core-data/app:enrollment/app:plan[1]/app:election-type'][1]"
});

myMap.addElement('bose', {
    name : 'election_type_sep',
    description : 'SEP',
    locator : "document.forms[0].elements['xfm.av.//app:core-data/app:enrollment/app:plan[1]/app:election-type'][2]"
});

myMap.addElement('bose', {
    name : 'election_type_iep',
    description : 'IEP',
    locator : "document.forms[0].elements['xfm.av.//app:core-data/app:enrollment/app:plan[1]/app:election-type'][3]"
});

myMap.addElement('bose', {
    name : 'confirmationNumber',
    description : 'confirmation number',
    locator : "document.forms[0].elements['xfm.av.//app:core-data/app:enrollment/app:plan[1]/app:combination-number"
});

myMap.addElement('bose', {
    name : 'confirmation_number',
    description : 'confirmation number',
    locator : "xfm.av.//app:core-data/app:enrollment/app:plan[1]/app:combination-number"
});


myMap.addElement('bose', {
    name : 'go_to_next_page',
    description : 'confirmation number',
    locator : "document.forms[0].elements['document.forms[0].elements['xfm.event.NextPage.'][1]"
});

//enrollment_decision_maker.txt
//created by jerryy//

myMap.addElement('bose', {
    name : 'confirm_requesting_enrollment_yes',
    description : 'confirm requesting enrollment yes',
    locator : "xfm.rv.1.[1]/app:confirm-requesting-enrollment/@answer"
});

myMap.addElement('bose', {
    name : 'confirm_requesting_enrollment_no',
    description : 'confirm requesting enrollment no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:confirm-requesting-enrollment/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'confirm_plan_coverage_yes',
    description : 'confirm plan coverage yes',
    locator : "xfm.rv.1.[1]/app:confirm-plan-coverage/@answer"
});

myMap.addElement('bose', {
    name : 'confirm_plan_coverage_no',
    description : 'confirm plan coverage no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:confirm-plan-coverage/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'confirm_emergencies_urgent_yes',
    description : 'confirm emergencies urgent yes',
    locator : "xfm.rv.1.[1]/app:confirm-emergencies-urgent/@answer"
});

myMap.addElement('bose', {
    name : 'confirm_emergencies_urgent_no',
    description : 'confirm emergencies urgent no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:confirm-emergencies-urgent/@answer'][1]"
});


//created by jerryy//enrollment_disclaimers.txt

myMap.addElement('bose', {
    name : 'agree-statement-read_yes',
    description : 'agree-statement-read yes',
    locator : "xfm.rv.1.[1]/app:agree-statement-read/@answer"
});

myMap.addElement('bose', {
    name : 'agree-statement-read_no',
    description : 'agree-statement-read no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:agree-statement-read/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'understand-enrollment-explained_yes',
    description : 'understand-enrollment-explained yes',
    locator : "xfm.rv.1.[1]/app:understand-enrollment-explained/@answer"
});

myMap.addElement('bose', {
    name : 'understand-enrollment-explained_no',
    description : 'understand-enrollment-explained no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:understand-enrollment-explained/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'understand-treatment-payment_yes',
    description : 'understand-treatment-payment yes',
    locator : "xfm.rv.1.[1]/app:understand-treatment-payment/@answer"
});

myMap.addElement('bose', {
    name : 'understand-treatment-payment_no',
    description : 'understand-treatment-payment no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:understand-treatment-payment/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'understand-enrolling-plan_yes',
    description : 'understand-enrolling-plan yes',
    locator : "xfm.rv.1.[1]/app:understand-enrolling-plan/@answer"
});

myMap.addElement('bose', {
    name : 'understand-enrolling-plan_no',
    description : 'understand-enrolling-plan no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:understand-enrolling-plan/@answer'][1]"
});
//enrollment effective date

//created by jerryy//

myMap.addElement('bose', {
    name : 'election-period-enrolling-under_aep',
    description : 'election-period-enrolling-under aep',
    locator : "xfm.rv.1.[1]/app:election-period-enrolling-under"
});

myMap.addElement('bose', {
    name : 'election-period-enrolling-under_icep',
    description : 'election-period-enrolling-under icep',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:election-period-enrolling-under'][1]"
});

myMap.addElement('bose', {
    name : 'search_reason_icep',
    description : 'search_reason icep',
    locator : "search_reason"
});

myMap.addElement('bose', {
    name : 'effective_date_month',
    description : 'effective date month',
    locator : "xfm.rv.2.[1]/app:month"
});

myMap.addElement('bose', {
    name : 'effective_date_year',
    description : 'effective date year',
    locator : "xfm.rv.2.[1]/app:year"
});

myMap.addElement('bose', {
    name : 'can-we-contact-you-during-aep_yes',
    description : 'can-we-contact-you-during-aep yes',
    locator : "xfm.rv.1.[1]/app:can-we-contact-you-during-aep"
});

myMap.addElement('bose', {
    name : 'can-we-contact-you-during-aep_no',
    description : 'can-we-contact-you-during-aep no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:can-we-contact-you-during-aep'][1]"
});



//created by jerryy//

myMap.addElement('bose', {
    name : 'provide-email_yes',
    description : 'provide-email yes',
    locator : "xfm.rv.1.[1]/app:provide-email/@answer"
});

myMap.addElement('bose', {
    name : 'provide-email_no',
    description : 'provide-email no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:provide-email/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'core-data-email-address',
    description : 'email address',
    locator : "xfm.av.//app:core-data/app:email"
});

myMap.addElement('bose', {
    name : 'language-preference_eng',
    description : 'language-preference english',
    locator : "xfm.rv.1.[1]/app:language-preference"
});

myMap.addElement('bose', {
    name : 'language-preference_spa',
    description : 'language-preference spanish',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:language-preference'][1]"
});

myMap.addElement('bose', {
    name : 'language-preference_other',
    description : 'language-preference other',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:language-preference'][2]"
});

myMap.addElement('bose', {
    name : 'language-preference_input',
    description : 'language-preference input',
    locator : "xfm.rv.1.[1]/app:language-preference-other"
});

myMap.addElement('bose', {
    name : 'identify-pcp_yes',
    description : 'identify-pcp yes',
    locator : "xfm.rv.1.[1]/app:identify-pcp/@answer"
});

myMap.addElement('bose', {
    name : 'identify-pcp_no',
    description : 'identify-pcp no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:identify-pcp/@answer'][1]"
});


//created by jerryy//

myMap.addElement('bose', {
    name : 'be_notified_benefits_available_yes',
    description : 'be notified benefits available yes',
    locator : "xfm.rv.1.[1]/app:be-notified-benefits-available/@answer"
});

myMap.addElement('bose', {
    name : 'be_notified_benefits_available_no',
    description : 'be notified benefits available no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:be-notified-benefits-available/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'end-stage-renal-disease_yes',
    description : 'end-stage-renal-disease yes',
    locator : "xfm.rv.1.[1]/app:end-stage-renal-disease/@answer"
});

myMap.addElement('bose', {
    name : 'end-stage-renal-disease_no',
    description : 'end-stage-renal-disease no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:end-stage-renal-disease/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'enrolled-in-another-health-plan_yes',
    description : 'end-stage-renal-disease yes',
    locator : "xfm.rv.1.[1]/app:are-you-enrolled-in-another-health-plan/@answer"
});

myMap.addElement('bose', {
    name : 'enrolled-in-another-health-plan_no',
    description : 'enrolled-in-another-health-plan no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:are-you-enrolled-in-another-health-plan/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'esuccessful-kidney-transplant_yes',
    description : 'successful-kidney-transplant yes',
    locator : "xfm.rv.1.[1]/app:have-you-had-a-successful-kidney-transplant/@answer"
});

myMap.addElement('bose', {
    name : 'successful-kidney-transplant_no',
    description : 'successful-kidney-transplant no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:have-you-had-a-successful-kidney-transplant/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'require-regular-dialysis_yes',
    description : 'require-regular-dialysis yes',
    locator : "xfm.rv.1.[1]/app:do-you-still-require-regular-dialysis/@answer"
});

myMap.addElement('bose', {
    name : 'require-regular-dialysis_no',
    description : 'require-regular-dialysis no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:do-you-still-require-regular-dialysis/@answer'][1]"
});


//created by jerryy//

myMap.addElement('bose', {
    name : 'will-you-or-your-spouse-work_yes',
    description : 'will-you-or-your-spouse-work yes',
    locator : "xfm.rv.1.[1]/app:will-you-or-your-spouse-work/@answer"
});

myMap.addElement('bose', {
    name : 'will-you-or-your-spouse-work_no',
    description : 'will-you-or-your-spouse-work no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:will-you-or-your-spouse-work/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'other-group-health-coverage_yes',
    description : 'other-group-health-coverage yes',
    locator : "xfm.rv.1.[1]/app:will-you-or-your-spouse-have-other-group-health-coverage/@answer"
});

myMap.addElement('bose', {
    name : 'other_coverage_name',
    description : 'other coverage name',
    locator : "xfm.rv.1.[1]/app:carrier-info/app:carrier-name"
});

myMap.addElement('bose', {
    name : 'other_coverage_address',
    description : 'other coverage address',
    locator : "xfm.rv.1.[1]/app:carrier-info/app:address"
});

myMap.addElement('bose', {
    name : 'other_coverage_phone',
    description : 'other coverage phone',
    locator : "xfm.rv.1.[1]/app:carrier-info/app:phone/app:phone-number"
});

myMap.addElement('bose', {
    name : 'other_coverage_policy_number',
    description : 'other coverage policy number',
    locator : "xfm.rv.1.[1]/app:carrier-info/app:policy-number"
});

myMap.addElement('bose', {
    name : 'other_coverage_id_number',
    description : 'other coverage id number',
    locator : "xfm.rv.1.[1]/app:carrier-info/app:id-number"
});

myMap.addElement('bose', {
    name : 'other-group-health-coverage_no',
    description : 'other-group-health-coverage no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:will-you-or-your-spouse-have-other-group-health-coverage/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'other-rx-coverage-status_yes',
    description : 'other-rx-coverage-status yes',
    locator : "xfm.rv.1.[1]/app:other-rx-coverage-status/@answer"
});

myMap.addElement('bose', {
    name : 'name-of-other-coverage',
    description : 'name of other coverage',
    locator : "xfm.rv.1.[1]/app:name-of-other-coverage"
});

myMap.addElement('bose', {
    name : 'policy-number_rx',
    description : 'policy-number rx',
    locator : "xfm.rv.1.[1]/app:policy-number"
});

myMap.addElement('bose', {
    name : 'member-id-number_rx',
    description : 'member-id-number rx',
    locator : "xfm.rv.1.[1]/app:member-id-number"
});

myMap.addElement('bose', {
    name : 'other-rx-coverage-status_no',
    description : 'other-rx-coverage-status no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:other-rx-coverage-status/@answer'][1]"
});

//created by jerryy//

myMap.addElement('bose', {
    name : 'currently-on-medicaid_yes',
    description : 'currently-on-medicaid yes',
    locator : "xfm.rv.1.[1]/app:are-you-currently-on-medicaid/@answer"
});

myMap.addElement('bose', {
    name : 'currently-on-medicaid_no',
    description : 'currently-on-medicaid no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:are-you-currently-on-medicaid/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'medicaid_policy_number',
    description : 'medicaid policy number',
    locator : "xfm.rv.1.[1]/app:medicaid-policy-number"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care-facility_yes',
    description : 'nursing-home-or-long-term-care-facility yes',
    locator : "xfm.rv.1.[1]/app:are-you-currently-a-resident-in-a-nursing-home-or-long-term-care-facility/@answer"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_month',
    description : 'nursing-home-or-long-term-care month',
    locator : "xfm.rv.2.[1]/app:month"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_day',
    description : 'nursing-home-or-long-term-care day',
    locator : "xfm.rv.2.[1]/app:day"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_year',
    description : 'nursing-home-or-long-term-care year',
    locator : "xfm.rv.2.[1]/app:year"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_institution-name',
    description : 'nursing-home-or-long-term-care institution-name',
    locator : "xfm.rv.1.[1]/app:institution/app:institution-name"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_street',
    description : 'nursing-home-or-long-term-care street',
    locator : "xfm.rv.1.[1]/app:institution/app:address/app:street"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_street2',
    description : 'nursing-home-or-long-term-care street2',
    locator : "xfm.rv.1.[1]/app:institution/app:address/app:street-line-2"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_city',
    description : 'nursing-home-or-long-term-care city',
    locator : "xfm.rv.1.[1]/app:institution/app:address/app:city"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_state',
    description : 'nursing-home-or-long-term-care state',
    locator : "xfm.rv.3.[1]/self::node()"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_zip',
    description : 'nursing-home-or-long-term-care zip',
    locator : "xfm.rv.1.[1]/app:institution/app:address/app:zip"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_phone-number',
    description : 'nursing-home-or-long-term-care phone-number',
    locator : "xfm.rv.1.[1]/app:institution/app:phone/app:phone-number"
});

myMap.addElement('bose', {
    name : 'nursing-home-or-long-term-care_phone-number_no',
    description : 'nursing-home-or-long-term-care-facility no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:are-you-currently-a-resident-in-a-nursing-home-or-long-term-care-facility/@answer'][1]"
});

//created by jerryy//

myMap.addElement('bose', {
    name : 'permission_to_record_yes',
    description : 'permit to record',
    locator : "xfm.rv.1.[1]/app:permission-to-record/@answer"
});

myMap.addElement('bose', {
    name : 'permission_to_record_no',
    description : 'not permit to record',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:permission-to-record/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'complete_app_on_my_own',
    description : 'complete application on my own',
    locator : "xfm.rv.1.[1]/app:who-complete-your-app"
});

myMap.addElement('bose', {
    name : 'complete_app_by_translator',
    description : 'complete application by translator',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:who-complete-your-app'][1]"
});

myMap.addElement('bose', {
    name : 'complete_app_by_poa',
    description : 'complete application by POA',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:who-complete-your-app'][2]"
});

myMap.addElement('bose', {
    name : 'first_name_translator_or_poa',
    description : 'first name of translator and/or witness or a valid POA',
    locator : "xfm.rv.2.[1]/app:name/app:first-name"
});

myMap.addElement('bose', {
    name : 'last_name_translator_or_poa',
    description : 'last name of translator and/or witness or a valid POA',
    locator : "xfm.rv.2.[1]/app:name/app:last-name"
});

myMap.addElement('bose', {
    name : 'app_street1',
    description : 'Translator and/or Witness or a valid POA address1',
    locator : "xfm.rv.2.[1]/app:address/app:street"
});

myMap.addElement('bose', {
    name : 'app_street2',
    description : 'Translator and/or Witness or a valid POA address2',
    locator : "xfm.rv.2.[1]/app:address/app:street-line-2"
});

myMap.addElement('bose', {
    name : 'app_city',
    description : 'app city',
    locator : "xfm.rv.2.[1]/app:address/app:city"
});

myMap.addElement('bose', {
    name : 'app_state',
    description : 'app state',
    locator : "xfm.rv.3.[1]/self::node()"
});

myMap.addElement('bose', {
    name : 'app_zip',
    description : 'app zip',
    locator : "xfm.rv.2.[1]/app:address/app:zip"
});

myMap.addElement('bose', {
    name : 'relationship_to_applicant',
    description : 'relationship to applicant',
    locator : "xfm.av.//app:other-data/app:carrier-specialization/app:universal/app:script[1]/app:name-address/app:poa-info/app:relationship-to-applicant"
});

myMap.addElement('bose', {
    name : 'above_as_mail_address',
    description : 'Use above as Mailing Address',
    locator : "xfm.av.//app:other-data/app:carrier-specialization/app:universal/app:script[1]/app:name-address/app:poa-info/app:use-above-as-mailing-address/@answer"
});

myMap.addElement('bose', {
    name : 'provide_self_mr',
    description : 'provide self title mr',
    locator : "xfm.rv.1.[1]/app:self-info/app:title"
});

myMap.addElement('bose', {
    name : 'provide_self_mrs',
    description : 'provide self title mrs',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:self-info/app:title'][1]"
});

myMap.addElement('bose', {
    name : 'provide_self_ms',
    description : 'provide self title ms',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:self-info/app:title'][2]"
});

myMap.addElement('bose', {
    name : 'app_first_name',
    description : 'app first name',
    locator : "xfm.av.//app:core-data/app:member/app:name/app:first-name"
});

myMap.addElement('bose', {
    name : 'app_middle_name',
    description : 'app middle name',
    locator : "xfm.av.//app:core-data/app:member/app:name/app:middle-name"
});

myMap.addElement('bose', {
    name : 'app_last_name',
    description : 'app last name',
    locator : "xfm.av.//app:core-data/app:member/app:name/app:last-name"
});

myMap.addElement('bose', {
    name : 'permanent_address1',
    description : 'permanent address1',
    locator : "xfm.av.//app:core-data/app:home-address/app:street"
});

myMap.addElement('bose', {
    name : 'permanent_address2',
    description : 'permanent address2',
    locator : "xfm.rv.1.[1]/app:self-info/app:street2"
});

myMap.addElement('bose', {
    name : 'mail_address_diff_from_permanent_home_address_yes',
    description : 'mailing address different from the permanent home address',
    locator : "xfm.rv.1.[1]/app:different-mail-address/app:is-different-with-permanent-address/@answer"
});

myMap.addElement('bose', {
    name : 'mail_address_diff_from_permanent_home_address_use_translator',
    description : 'use translator address',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:different-mail-address/app:is-different-with-permanent-address/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'mail_address_no_diff_from_permanent_home_address',
    description : 'mailing address same to permanent home address',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:different-mail-address/app:is-different-with-permanent-address/@answer'][2]"
});

myMap.addElement('bose', {
    name : 'diff_mail_address1',
    description : 'different mail address1',
    locator : "xfm.rv.1.[1]/app:different-mail-address/app:street"
});

myMap.addElement('bose', {
    name : 'diff_mail_address2',
    description : 'different mail address2',
    locator : "xfm.rv.1.[1]/app:different-mail-address/app:street2"
});

myMap.addElement('bose', {
    name : 'diff_mail_city',
    description : 'different mail city',
    locator : "xfm.rv.1.[1]/app:different-mail-address/app:city"
});

myMap.addElement('bose', {
    name : 'diff_mail_state',
    description : 'different mail state',
    locator : "xfm.rv.6.[1]/self::node()"
});

myMap.addElement('bose', {
    name : 'diff_mail_zip',
    description : 'different mail zip',
    locator : "xfm.rv.1.[1]/app:different-mail-address/app:zip"
});



//created by jerryy//

myMap.addElement('bose', {
    name : 'payment-option_direct',
    description : 'direct pay',
    locator : "xfm.rv.1.[1]/app:payment-option/@answer"
});

myMap.addElement('bose', {
    name : 'payment-option_rrb',
    description : 'rrb pay',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:payment-option/@answer'][1]"
});

//created by jerryy//

myMap.addElement('bose', {
    name : 'other_data_zip',
    description : 'other data zip',
    locator : "xfm.av.//app:other-data/app:carrier-specialization/app:universal/app:script[1]/app:medicaid-ltc/app:institution/app:address/app:zip"
});

myMap.addElement('bose', {
    name : 'may-have-permission_yes',
    description : 'may-have-permission yes',
    locator : "xfm.rv.1.[1]/app:may-have-permission"
});

myMap.addElement('bose', {
    name : 'may-have-permission_no',
    description : 'may-have-permission no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:may-have-permission'][1]"
});


//created by jerryy//

myMap.addElement('bose', {
    name : 'madicare_claim_number',
    description : 'Medicare Claim Number',
    locator : "xfm.av.//app:core-data/app:member/app:medicare-claim-number"
});

myMap.addElement('bose', {
    name : 'part_a_effective_month',
    description : 'Part A effective month',
    locator : "xfm.rv.1.[1]/app:month"
});

myMap.addElement('bose', {
    name : 'part_a_effective_year',
    description : 'Part A effective year',
    locator : "xfm.rv.1.[1]/app:year"
});

myMap.addElement('bose', {
    name : 'part_b_effective_month',
    description : 'Part B effective month',
    locator : "xfm.rv.2.[1]/app:month"
});

myMap.addElement('bose', {
    name : 'part_b_effective_year',
    description : 'Part B effective year',
    locator : "xfm.rv.2.[1]/app:year"
});

myMap.addElement('bose', {
    name : 'state_gender_male',
    description : 'state gender male',
    locator : "xfm.av.//app:other-data/app:introduction/app:caller/app:gender"
});

myMap.addElement('bose', {
    name : 'state_gender_female',
    description : 'state gender female',
    locator : "document.forms[0].elements['xfm.av.//app:other-data/app:introduction/app:caller/app:gender'][1]"
});

myMap.addElement('bose', {
    name : 'ergency_contact_yes',
    description : 'ergency contact yes',
    locator : "xfm.rv.3.[1]/app:emergency-contact/@answer"
});

myMap.addElement('bose', {
    name : 'ergency_contact_no',
    description : 'ergency contact no',
    locator : "document.forms[0].elements['xfm.rv.3.[1]/app:emergency-contact/@answer'][1]"
});

myMap.addElement('bose', {
    name : 'ergency_contact_name',
    description : 'ergency contact name',
    locator : "xfm.rv.3.[1]/app:emergency-contact-info/app:name"
});

myMap.addElement('bose', {
    name : 'ergency_contact_relation',
    description : 'ergency contact relation',
    locator : "xfm.rv.3.[1]/app:emergency-contact-info/app:relationship"
});

myMap.addElement('bose', {
    name : 'ergency_contact_number',
    description : 'ergency contact number',
    locator : "xfm.rv.3.[1]/app:emergency-contact-info/app:phone/app:phone-number"
});



//created by jerryy//

myMap.addElement('bose', {
    name : 'election-period-enrolling-under_aep',
    description : 'election-period-enrolling-under aep',
    locator : "xfm.rv.1.[1]/app:election-period-enrolling-under"
});

myMap.addElement('bose', {
    name : 'election-period-enrolling-under_second_option',
    description : 'election-period-enrolling-under second option',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:election-period-enrolling-under'][1]"
});

myMap.addElement('bose', {
    name : 'search_reason_icep',
    description : 'search_reason icep',
    locator : "search_reason"
});

myMap.addElement('bose', {
    name : 'election-period-enrolling-under_third_option',
    description : 'election-period-enrolling-under third option',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:election-period-enrolling-under'][2]"
});

myMap.addElement('bose', {
    name : 'election-period-enrolling-under_fourth_option',
    description : 'election-period-enrolling-under fourth option',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:election-period-enrolling-under'][3]"
});

myMap.addElement('bose', {
    name : 'effective_date_month',
    description : 'effective date month',
    locator : "xfm.rv.2.[1]/app:month"
});

myMap.addElement('bose', {
    name : 'effective_date_year',
    description : 'effective date year',
    locator : "xfm.rv.2.[1]/app:year"
});

myMap.addElement('bose', {
    name : 'can-we-contact-you-during-aep_yes',
    description : 'can-we-contact-you-during-aep yes',
    locator : "xfm.rv.1.[1]/app:can-we-contact-you-during-aep"
});

myMap.addElement('bose', {
    name : 'can-we-contact-you-during-aep_no',
    description : 'can-we-contact-you-during-aep no',
    locator : "document.forms[0].elements['xfm.rv.1.[1]/app:can-we-contact-you-during-aep'][1]"
});
