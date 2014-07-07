// var myMap = new UIMap();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Global Header Elements -Luluk
// Global Header Elements
myMap.addPageset({
    name : 'NewHeader',
    description : 'Redesign Core site Global Header',
    pathRegexp : '.*'
}); 
myMap.addElement('NewHeader', {
    name : 'eHealthLogoLink',
    description : 'eHealth Logo Link',
    locator : "//img[@id='nav-logo']"
});
myMap.addElement('NewHeader', {
    name : 'AgentSupportLink',
    description : 'Agent Support Link',
    locator : "//a[contains(text(),'1-800-977-8860')]"
});
myMap.addElement('NewHeader', {
    name : 'SignInLink',
    description : 'Sign In Link',
    locator : "//a[contains(text(),'Sign in')]"
});
myMap.addElement('NewHeader', {
    name : 'SignOutLink',
    description : 'Sign Out Link',
    locator : "//a[contains(text(),'Sign Out')]"
});
myMap.addElement('NewHeader', {
    name : 'MyAccountLink',
    description : 'My Account Link',
    locator : "//a[contains(text(),'My Account')]"
});
myMap.addElement('NewHeader', {
    name : 'MyCartLink',
    description : 'My Cart Link',
    locator : "//a[contains(@href,'cart-summary')]/..//img[contains(@src,'cart_white.png')]"
});
myMap.addElement('NewHeader', {
    name : 'GoogleSearchButton',
    description : 'Google Search button',
    locator : "//input[@name='sa' and @type='submit']"
});
// Global Header Elements(SHOP FOR INSURANCE)
myMap.addElement('NewHeader', {
    name : 'IndividualHealthInsuranceLink',
    description : 'Individual Health Insurance Link',
    locator : "//a[contains(text(),'Individual Health Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'FamilyHealthInsuranceLink',
    description : 'Family Health Insurance Link',
    locator : "//a[contains(text(),'Family Health Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'ShortTermHealthInsuranceLink',
    description : 'Short Term Health Insurance Link',
    locator : "//a[contains(text(),'Short Term Health Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'GroupHealthInsuranceLink',
    description : 'Group Health Insurance Link',
    locator : "//a[contains(text(),'Group Health Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'StudentHealthInsuranceLink',
    description : 'Student Health Insurance Link',
    locator : "//a[contains(text(),'Student Health Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'InternationalHealthInsuranceLink',
    description : 'International Health Insurance Link',
    locator : "//a[contains(text(),'International Health Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'IndividualDentalInsuranceLink',
    description : 'Individual Dental Insurance Link',
    locator : "//a[contains(text(),'Individual Dental Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'GroupDentalInsuranceLink',
    description : 'Group Dental Insurance Link',
    locator : "//a[contains(text(),'Group Dental Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'IndividualVisionInsuranceLink',
    description : 'Individual Vision Insurance Link',
    locator : "//a[contains(text(),'Individual Vision Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'GroupVisionInsuranceLink',
    description : 'Group Vision Insurance Link',
    locator : "//a[contains(text(),'Group Vision Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'MedicareInusurancePlansLink',
    description : 'Medicare Inusurance Plans Link',
    locator : "//a[contains(text(),'Medicare Inusurance Plans')]"
});
myMap.addElement('NewHeader', {
    name : 'MedicareSupplementLink',
    description : 'Medicare Supplement Link',
    locator : "//a[contains(text(),'Medicare Supplement')]"
});
myMap.addElement('NewHeader', {
    name : 'MedicareAdvantageLink',
    description : 'Medicare Advantage Link',
    locator : "//a[contains(text(),'Medicare Advantage')]"
});
myMap.addElement('NewHeader', {
    name : 'MedicarePartDLink',
    description : 'Medicare Part D Link',
    locator : "//a[contains(text(),'Medicare Part D')]"
});
myMap.addElement('NewHeader', {
    name : 'AccidentInsuranceLink',
    description : 'Accident Insurance Link',
    locator : "//a[contains(text(),'Accident Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'CriticalIllnessInsuranceLink',
    description : 'Critical Illness Insurance Link',
    locator : "//a[contains(text(),'Critical Illness Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'DiscountCardsLink',
    description : 'Discount Cards Link',
    locator : "//a[contains(text(),'Discount Cards')]"
});
myMap.addElement('NewHeader', {
    name : 'HealthSavingsAccountsLink',
    description : 'Health Savings Accounts Link',
    locator : "//a[contains(text(),'Health Savings Accounts')]"
});
myMap.addElement('NewHeader', {
    name : 'LifeInsuranceLink',
    description : 'Life Insurance Link',
    locator : "//a[contains(text(),'Life Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'PetInsuranceLink',
    description : 'Pet Insurance Link',
    locator : "//a[contains(text(),'Pet Insurance')]"
});
myMap.addElement('NewHeader', {
    name : 'PrescriptionDiscountCardLink',
    description : 'Prescription Discount Card Link',
    locator : "//a[contains(text(),'Prescription Discount Card')]"
});
myMap.addElement('NewHeader', {
    name : 'SmallBusinessLink',
    description : 'Small Business Link',
    locator : "//a[contains(text(),'Small Business')]"
});
myMap.addElement('NewHeader', {
    name : 'TelemedicineLink',
    description : 'Telemedicine Link',
    locator : "//a[contains(text(),'Telemedicine')]"
});
myMap.addElement('NewHeader', {
    name : 'TravelHealthInsuranceLink',
    description : 'Travel Health Insurance Link',
    locator : "//a[contains(text(),'Travel Health Insurance')]"
});
// Global Header Elements(RESOURCES)
myMap.addElement('NewHeader', {
    name : 'ViewallFAQsLink',
    description : 'View all FAQs Link',
    locator : "//a[contains(text(),'View all FAQs')]"
});
myMap.addElement('NewHeader', {
    name : 'IndividualHealthInsuranceForDummiesLink',
    description : 'Individual Health Insurance For Dummies Link',
    locator : "//a[contains(text(),'Individual Health Insurance For Dummies')]"
});
myMap.addElement('NewHeader', {
    name : 'GlossaryLink',
    description : 'Glossary Link',
    locator : "//a[contains(text(),'Glossary')]"
});
myMap.addElement('NewHeader', {
    name : 'CoverageForPre-ExistingConditionsLink',
    description : 'Coverage For Pre-Existing Conditions Link',
    locator : "//a[contains(text(),'Coverage For Pre-Existing Conditions')]"
});
myMap.addElement('NewHeader', {
    name : 'HealthInsuranceBuyingGuidesLink',
    description : 'Health Insurance Buying Guides Link',
    locator : "//a[contains(text(),'Health Insurance Buying Guides')]"
});
myMap.addElement('NewHeader', {
    name : 'ContactUsLink',
    description : 'Contact Us Link',
    locator : "//a[contains(text(),'Contact Us')]"
});
/*myMap.addElement('NewHeader', {
    name : 'OtherHealthInsuranceResources',
    description : 'Other Health Insurance Resources Link',
    locator : "//a[contains(text(),'Other Health Insurance Resources')]"
});*/
// Global Header Elements(MY EHEALTH)
myMap.addElement('NewHeader', {
    name : 'CheckApplicationStatusLink',
    description : 'Check Application Status Link',
    locator : "//a[contains(text(),'Check Application Status')]"
});
myMap.addElement('NewHeader', {
    name : 'ChangePasswordLink',
    description : 'Change Password Link',
    locator : "//a[contains(text(),'Change Password')]"
});
myMap.addElement('NewHeader', {
    name : 'ManageAccountLink',
    description : 'Manage Account Link',
    locator : "//a[contains(text(),'Manage Account')]"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Global Footer Elements -Luluk
// Global Footer Elements(Products)
myMap.addPageset({
    name : 'NewFooter',
    description : 'Redesign Core site Global Footer',
    pathRegexp : '.*'
}); 
myMap.addElement('NewFooter', {
    name : 'HealthInsuranceLink',
    description : 'Health Insurance Link',
    locator : "//a[text()='Health Insurance']"
});
myMap.addElement('NewFooter', {
    name : 'MedicareLink',
    description : 'Medicare Link',
    locator : "//a[text()='Medicare']"
});
myMap.addElement('NewFooter', {
    name : 'MaternityCoverageLink',
    description : 'Maternity Coverage Link',
    locator : "//a[contains(text(),'Maternity Coverage')]"
});
myMap.addElement('NewFooter', {
    name : 'PPOPlansLink',
    description : 'PPO Plans Link',
    locator : "//a[contains(text(),'PPO Plans')]"
});
myMap.addElement('NewFooter', {
    name : 'HMOPlansLink',
    description : 'HMO Plans Link',
    locator : "//a[contains(text(),'HMO Plans')]"
});
// Global Footer Elements(Services)
myMap.addElement('NewFooter', {
    name : 'MedicalPlansByStateLink',
    description : 'Medical Plans By State Link',
    locator : "//a[contains(text(),'Medical Plans By State')]"
});
myMap.addElement('NewFooter', {
    name : 'HealthInsuranceCompaniesLink',
    description : 'Health Insurance Companies Link',
    locator : "//a[contains(text(),'Health Insurance Companies')]"
});
myMap.addElement('NewFooter', {
    name : 'FindaDoctorLink',
    description : 'Find a Doctor Link',
    locator : "//a[contains(text(),'Find a Doctor')]"
});
myMap.addElement('NewFooter', {
    name : 'Segurom¨¦dicoLink',
    description : 'Seguro m¨¦dico Link',
    locator : "//a[contains(text(),'Seguro')]"
});
myMap.addElement('NewFooter', {
    name : 'MobileLink',
    description : 'Mobile Link',
    locator : "//a[text()='Mobile']"
});
myMap.addElement('NewFooter', {
    name : 'CustomerServiceLink',
    description : 'Customer Service Link',
    locator : "//a[contains(text(),'Customer Service')]"
});
// Global Footer Elements(Company)
myMap.addElement('NewFooter', {
    name : 'AboutUsLink',
    description : 'About Us Link',
    locator : "//a[contains(text(),'About Us')]"
});
myMap.addElement('NewFooter', {
    name : 'CareersLink',
    description : 'Careers Link',
    locator : "//a[contains(text(),'Careers')]"
});
myMap.addElement('NewFooter', {
    name : 'LicensingandLegalLink',
    description : 'Licensing and Legal Link',
    locator : "//a[contains(text(),'Licensing and Legal')]"
});
myMap.addElement('NewFooter', {
    name : 'PrivacyPolicyLink',
    description : 'Privacy Policy Link',
    locator : "//a[contains(text(),'Privacy Policy')]"
});
myMap.addElement('NewFooter', {
    name : 'AffiliateProgramLink',
    description : 'Affiliate Program Link',
    locator : "//a[contains(text(),'Affiliate Program')]"
});
// Global Footer Elements(Connect)
myMap.addElement('NewFooter', {
    name : 'FacebookLink',
    description : 'Facebook Link',
    locator : "link=Facebook"
});
myMap.addElement('NewFooter', {
    name : 'TwitterLink',
    description : 'twitter Link',
    locator : "//a[contains(@href,'twitter')]"
});
myMap.addElement('NewFooter', {
    name : 'GooglePlusLink',
    description : 'Google Plus Link',
    locator : "//a[contains(@href,'plus.google')]"
});
myMap.addElement('NewFooter', {
    name : 'YoutubeLink',
    description : 'Youtube Link',
    locator : "//a[contains(@href,'youtube')]"
});
myMap.addElement('NewFooter', {
    name : 'LinkedinLink',
    description : 'Linkedin Link',
    locator : "//a[contains(@href,'linkedin')]"
});
// Global Footer Elements(footer-secure)
myMap.addElement('NewFooter', {
    name : 'NortonLink',
    description : 'Norton Link',
    locator : "//img[@alt='verisign']"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Home page elements - Dominic
myMap.addPageset({
    name : 'NewHomePage',
    description : 'Core site home page',
    pathRegexp : '.*'
}); 
myMap.addElement('NewHomePage', {
    name : 'edit',
    description : 'edit',
	locator : "//a[contains(text(),'(edit)')]"
});

myMap.addElement('NewHomePage', {
    name : 'FindPlansNow',
    description : 'Find Plans Now Button',
    locator : "//a[text()='Find Plans Now']"
});
myMap.addElement('NewHomePage', {
    name : 'ContinueShopping',
    description : 'Continue Shopping Button',
    locator : "//a[text()='Continue Shopping']"
});
myMap.addElement('NewHomePage', {
    name : 'FinishApplication',
    description : 'Finish Application Button',
    locator : "//a[contains(@href,'finish-application')]"
});
myMap.addElement('NewHomePage', {
    name : 'FindPlans',
    description : 'Find Plans Button',
    locator : "//a[text()='Find Plans']"
});
myMap.addElement('NewHomePage', {
    name : 'ReturnToCart',
    description : 'Return To Cart Button',
    locator : "//a[text()='Return to Cart']"
});


//Recently Viewed Plans in home page
myMap.addElement('NewHomePage', {
    name : 'ApplyRecently1',
    description : 'Apply Recently 1',
    locator : "xpath=(//section[@id='homepage-banner']//a[contains(text(),'Apply')])[1]"
});
myMap.addElement('NewHomePage', {
    name : 'ApplyRecently2',
    description : 'Apply Recently 2',
    locator : "xpath=(//section[@id='homepage-banner']//a[contains(text(),'Apply')])[2]"
});
myMap.addElement('NewHomePage', {
    name : 'ApplyRecently3',
    description : 'Apply Recently 3',
    locator : "xpath=(//section[@id='homepage-banner']//a[contains(text(),'Apply')])[3]"
});
myMap.addElement('NewHomePage', {
    name : 'ApplyRecently4',
    description : 'Apply Recently 4',
    locator : "xpath=(//section[@id='homepage-banner']//a[contains(text(),'Apply')])[4]"
});
myMap.addElement('NewHomePage', {
    name : 'ApplyRecently5',
    description : 'Apply Recently 5',
    locator : "xpath=(//section[@id='homepage-banner']//a[contains(text(),'Apply')])[5]"
});
//~~~~~~~~~~~~~~~~~~~~~~Insurance Category 
myMap.addElement('NewHomePage', {
    name : 'TurnToPrevious',
    description : 'Turn To Previous',
    locator : "//*[@id='prev2']"
});
myMap.addElement('NewHomePage', {
    name : 'TurnToNext',
    description : 'Turn To Next',
    locator : "//*[@id='next2']"
});
myMap.addElement('NewHomePage', {
    name : 'Medicareinsurance',
    description : 'Medicare Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/medicare-insurance')])"	
	//id('home-sponsor')
});
myMap.addElement('NewHomePage', {
    name : 'VisionInsurance',
    description : 'Vision Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/vision-insurance')])"	
});
myMap.addElement('NewHomePage', {
    name : 'DentalInsurance',
    description : 'Dental Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/dental-insurance')])"	
});
myMap.addElement('NewHomePage', {
    name : 'ShortTermInsurance',
    description : 'Short Term Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/short-term-health-insurance')])"
});
myMap.addElement('NewHomePage', {
    name : 'AccidentInsurance',
    description : 'Accident Insurance',
    locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/accident-insurance')])"
});
myMap.addElement('NewHomePage', {
    name : 'PrescriptionInsurance',
    description : 'Prescription Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/prescription-discount-card')])"
});
myMap.addElement('NewHomePage', {
    name : 'MobileInsurance',
    description : 'Mobile Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/mobile-health-insurance')])"	
});
myMap.addElement('NewHomePage', {
    name : 'CriticalInsurance',
    description : 'Critical Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/critical-illness-insurance')])"	
});
myMap.addElement('NewHomePage', {
    name : 'TravalInsurance',
    description : 'Traval Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/travel-insurance')])"	
});
myMap.addElement('NewHomePage', {
    name : 'SmallBusinessInsurance',
    description : 'Small Business Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/small-business-health-insurance')])"	
});
myMap.addElement('NewHomePage', {
    name : 'LifeInsurance',
    description : 'Life Insurance',
	locator : "xpath=(//section[@id='home-sponsor']//a[contains(@href, '/life-insurance')])"	
});

//~~~~~~~~~Get a free quote
myMap.addElement('NewHomePage', {
    name : 'GetAFreeQuote',
    description : 'Get a free quote-button',
	locator : "//input[@value='Get a free quote']"
});

myMap.addElement('NewHomePage', {
    name : 'GetAFreeQuoteLink',
    description : 'Get a free quote Link',
	locator : "//a[contains(text(),'Get a free quote')]"
});
myMap.addElement('NewHomePage', {
    name : 'LearnMore',
    description : 'LearnMore',
	locator : "//a[contains(text(),'Learn more')]"
});
myMap.addElement('NewHomePage', {
    name : 'StartWithAQuote',
    description : 'Start With A Quote',
	locator : "//a[contains(text(),'Start with a quote')]"
});
myMap.addElement('NewHomePage', {
    name : 'CreateYourAccount',
    description : 'Create Your Account',
	locator : "//a[contains(text(),'Create your account')]"
});
myMap.addElement('NewHomePage', {
    name : 'VisitOurSupportCenter',
    description : 'Visit our support center',
	locator : "//input[@value='Visit our support center']"
});
myMap.addElement('NewHomePage', {
    name : 'BackToTop',
    description : 'Back To Top',
	locator : "//a[@id='back-to-top']"
});
myMap.addElement('NewHomePage', {
    name : 'ShopForYourPlan',
    description : 'Shop for your plan',
    locator : "//input[@value='Shop for your plan']"
});
myMap.addElement('NewHomePage', {
    name : 'StartWithAQuoteButton',
    description : 'Start with a quote-button',
    locator : "//input[@value='Start with a quote']"
});
myMap.addElement('NewHomePage', {
    name : 'LogInToMyeHealth',
    description : 'Log in to My eHealth',
    locator : "//input[@value='Log in to My eHealth']"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Census Page Elements -Luluk
// 1. IFP Redesign Census Page Elements(IFP)
myMap.addPageset({
    name : 'RedesignCensusPage',
    description : 'redesign census page',
    pathRegexp : '.*'
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignZipCodeBox',
    description : 'Zip Code Text Box',
    locator : "//input[@id='census_zip']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignEffectiveDateBox',
    description : 'Input Effective Date',
    locator : "//input[@id='census_requestEffectiveDate']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignCalendar',
    description : 'Effective Date Calendar',
    locator : "//img[@class='ui-datepicker-trigger']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantGenderMRadio',
    description : 'Applicant Gender Male',
    locator : "//input[@id='census_primary_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantGenderFMRadio',
    description : 'Applicant Gender Female',
    locator : "//input[@id='census_primary_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantBirMonthBox',
    description : 'Applicant Birth Month Text Box',
    locator : "//input[@id='census_primary_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantBirDayBox',
    description : 'Applicant Birth Day Text Box',
    locator : "//input[@id='census_primary_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantBirYearBox',
    description : 'Applicant Birth Year Text Box',
    locator : "//input[@id='census_primary_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantTobaccoCheck',
    description : 'Applicant Tobacco Check Box',
    locator : "//input[@id='census_primary_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignApplicantStudentCheck',
    description : 'Applicant Student Check Box',
    locator : "//input[@id='census_primary_student']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignAddFamilyMembersLink',
    description : 'Add Family Members Link',
    locator : "//span[contains(text(),'Add family members')]"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseGenderMRadio',
    description : 'Spouse Gender Male',
    locator : "//input[@id='census_secondary_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseGenderFMRadio',
    description : 'Spouse Gender Female',
    locator : "//input[@id='census_secondary_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseBirMonthBox',
    description : 'Spouse Birth Month Text Box',
    locator : "//input[@id='census_secondary_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseBirDayBox',
    description : 'Spouse Birth Day Text Box',
    locator : "//input[@id='census_secondary_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseBirYearBox',
    description : 'Spouse Birth Year Text Box',
    locator : "//input[@id='census_secondary_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseTobaccoCheck',
    description : 'Spouse Tobacco Check Box',
    locator : "//input[@id='census_secondary_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseStudentCheck',
    description : 'Spouse Student Check Box',
    locator : "//input[@id='census_secondary_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignSpouseRemoveButton',
    description : 'Remove Spouse Button',
    locator : "//h4[text()='Spouse']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1GenderMRadio',
    description : 'Child1 Gender Male',
    locator : "//input[@id='census_children_0_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1GenderFMRadio',
    description : 'Child1 Gender Female',
    locator : "//input[@id='census_children_0_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1BirMonthBox',
    description : 'Child1 Birth Month Text Box',
    locator : "//input[@id='census_children_0_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1BirDayBox',
    description : 'Child1 Birth Day Text Box',
    locator : "//input[@id='census_children_0_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1BirYearBox',
    description : 'Child1 Birth Year Text Box',
    locator : "//input[@id='census_children_0_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1TobaccoCheck',
    description : 'Child1 Tobacco Check Box',
    locator : "//input[@id='census_children_0_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1StudentCheck',
    description : 'Child1 Student Check Box',
    locator : "//input[@id='census_children_0_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild1RemoveButton',
    description : 'Remove Child1 Button',
    locator : "//h4[text()='Child 1']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2GenderMRadio',
    description : 'Child2 Gender Male',
    locator : "//input[@id='census_children[1]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2GenderFMRadio',
    description : 'Child2 Gender Female',
    locator : "//input[@id='census_children[1]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2BirMonthBox',
    description : 'Child2 Birth Month Text Box',
    locator : "//input[@id='census_children[1]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2BirDayBox',
    description : 'Child2 Birth Day Text Box',
    locator : "//input[@id='census_children[1]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2BirYearBox',
    description : 'Child2 Birth Year Text Box',
    locator : "//input[@id='census_children[1]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2TobaccoCheck',
    description : 'Child2 Tobacco Check Box',
    locator : "//input[@id='census_children[1]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2StudentCheck',
    description : 'Child2 Student Check Box',
    locator : "//input[@id='census_children[1]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild2RemoveButton',
    description : 'Remove Child2 Button',
    locator : "//h4[text()='Child 2']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3GenderMRadio',
    description : 'Child3 Gender Male',
    locator : "//input[@id='census_children[2]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3GenderFMRadio',
    description : 'Child3 Gender Female',
    locator : "//input[@id='census_children[2]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3BirMonthBox',
    description : 'Child3 Birth Month Text Box',
    locator : "//input[@id='census_children[2]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3BirDayBox',
    description : 'Child3 Birth Day Text Box',
    locator : "//input[@id='census_children[2]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3BirYearBox',
    description : 'Child3 Birth Year Text Box',
    locator : "//input[@id='census_children[2]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3TobaccoCheck',
    description : 'Child3 Tobacco Check Box',
    locator : "//input[@id='census_children[2]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3StudentCheck',
    description : 'Child3 Student Check Box',
    locator : "//input[@id='census_children[2]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild3RemoveButton',
    description : 'Remove Child3 Button',
    locator : "//h4[text()='Child 3']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4GenderMRadio',
    description : 'Child4 Gender Male',
    locator : "//input[@id='census_children[3]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4GenderFMRadio',
    description : 'Child4 Gender Female',
    locator : "//input[@id='census_children[3]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4BirMonthBox',
    description : 'Child4 Birth Month Text Box',
    locator : "//input[@id='census_children[3]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4BirDayBox',
    description : 'Child4 Birth Day Text Box',
    locator : "//input[@id='census_children[3]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4BirYearBox',
    description : 'Child4 Birth Year Text Box',
    locator : "//input[@id='census_children[3]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4TobaccoCheck',
    description : 'Child4 Tobacco Check Box',
    locator : "//input[@id='census_children[3]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4StudentCheck',
    description : 'Child4 Student Check Box',
    locator : "//input[@id='census_children[3]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild4RemoveButton',
    description : 'Remove Child4 Button',
    locator : "//h4[text()='Child 4']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5GenderMRadio',
    description : 'Child5 Gender Male',
    locator : "//input[@id='census_children[4]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5GenderFMRadio',
    description : 'Child5 Gender Female',
    locator : "//input[@id='census_children[4]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5BirMonthBox',
    description : 'Child5 Birth Month Text Box',
    locator : "//input[@id='census_children[4]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5BirDayBox',
    description : 'Child5 Birth Day Text Box',
    locator : "//input[@id='census_children[4]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5BirYearBox',
    description : 'Child5 Birth Year Text Box',
    locator : "//input[@id='census_children[4]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5TobaccoCheck',
    description : 'Child5 Tobacco Check Box',
    locator : "//input[@id='census_children[4]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5StudentCheck',
    description : 'Child5 Student Check Box',
    locator : "//input[@id='census_children[4]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild5RemoveButton',
    description : 'Remove Child5 Button',
    locator : "//h4[text()='Child 5']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6GenderMRadio',
    description : 'Child6 Gender Male',
    locator : "//input[@id='census_children[5]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6GenderFMRadio',
    description : 'Child6 Gender Female',
    locator : "//input[@id='census_children[5]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6BirMonthBox',
    description : 'Child6 Birth Month Text Box',
    locator : "//input[@id='census_children[5]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6BirDayBox',
    description : 'Child6 Birth Day Text Box',
    locator : "//input[@id='census_children[5]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6BirYearBox',
    description : 'Child6 Birth Year Text Box',
    locator : "//input[@id='census_children[5]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6TobaccoCheck',
    description : 'Child6 Tobacco Check Box',
    locator : "//input[@id='census_children[5]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6StudentCheck',
    description : 'Child6 Student Check Box',
    locator : "//input[@id='census_children[5]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild6RemoveButton',
    description : 'Remove Child6 Button',
    locator : "//h4[text()='Child 6']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7GenderMRadio',
    description : 'Child7 Gender Male',
    locator : "//input[@id='census_children[6]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7GenderFMRadio',
    description : 'Child7 Gender Female',
    locator : "//input[@id='census_children[6]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7BirMonthBox',
    description : 'Child7 Birth Month Text Box',
    locator : "//input[@id='census_children[6]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7BirDayBox',
    description : 'Child7 Birth Day Text Box',
    locator : "//input[@id='census_children[6]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7BirYearBox',
    description : 'Child7 Birth Year Text Box',
    locator : "//input[@id='census_children[6]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7TobaccoCheck',
    description : 'Child7 Tobacco Check Box',
    locator : "//input[@id='census_children[6]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7StudentCheck',
    description : 'Child7 Student Check Box',
    locator : "//input[@id='census_children[6]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild7RemoveButton',
    description : 'Remove Child7 Button',
    locator : "//h4[text()='Child 7']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8GenderMRadio',
    description : 'Child8 Gender Male',
    locator : "//input[@id='census_children[7]_genderMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8GenderFMRadio',
    description : 'Child8 Gender Female',
    locator : "//input[@id='census_children[7]_genderFEMALE']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8BirMonthBox',
    description : 'Child8 Birth Month Text Box',
    locator : "//input[@id='census_children[7]_month']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8BirDayBox',
    description : 'Child8 Birth Day Text Box',
    locator : "//input[@id='census_children[7]_day']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8BirYearBox',
    description : 'Child8 Birth Year Text Box',
    locator : "//input[@id='census_children[7]_year']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8TobaccoCheck',
    description : 'Child8 Tobacco Check Box',
    locator : "//input[@id='census_children[7]_tobacco']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8StudentCheck',
    description : 'Child8 Student Check Box',
    locator : "//input[@id='census_children[7]_student']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignChild8RemoveButton',
    description : 'Remove Child8 Button',
    locator : "//h4[text()='Child 8']/..//img[@alt='remove']"
});

myMap.addElement('RedesignCensusPage', {
    name : 'RedesignContinueButton',
    description : 'Continue Button',
    locator : "//div[@id='continue-btn']"
});
myMap.addElement('RedesignCensusPage', {
    name : 'RedesignCloseEditButton',
    description : 'Close Edit Button',
    locator : "//div[@class='overlay-close']"
});
// 2. Old Census Page Elements
myMap.addPageset({
    name : 'OldCensusPage',
    description : 'old census page',
    pathRegexp : '.*'
});
myMap.addElement('OldCensusPage', {
    name : 'AddChildLink',
    description : 'Add More Child Link',
    locator : "//input[@id='_addMoreKids']"
});
myMap.addElement('OldCensusPage', {
    name : 'ZipCodeBox',
    description : 'Zip Code Text Box',
    locator : "//input[@id='census_zipCode']"
});
myMap.addElement('OldCensusPage', {
    name : 'EffectiveDateList',
    description : 'Effective Date Dropdown List',
    locator : "//select[@id='census_requestEffectiveDate']"
});
myMap.addElement('OldCensusPage', {
    name : 'ApplicantGenderList',
    description : 'Applicant Gender Dropdown List',
    locator : "//select[@id='census_primary_gender']"
});
/*myMap.addElement('OldCensusPage', {
    name : 'ApplicantBirMonthBox',
    description : 'Applicant Birth Month Text Box',
    locator : "//input[@id='census_primary_month']"
});
myMap.addElement('OldCensusPage', {
    name : 'ApplicantBirDayBox',
    description : 'Applicant Birth Day Text Box',
    locator : "//input[@id='census_primary_day']"
});
myMap.addElement('OldCensusPage', {
    name : 'ApplicantBirYearBox',
    description : 'Applicant Birth Year Text Box',
    locator : "//input[@id='census_primary_year']"
});*/
myMap.addElement('OldCensusPage', {
    name : 'ApplicantTobaccoYesRadio',
    description : 'Yes for Applicant Tobacco Radio',
    locator : "//input[@id='census_primary_tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'ApplicantTobaccoNoRadio',
    description : 'No for Applicant Tobacco Radio',
    locator : "//input[@id='census_primary_tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'ApplicantStudentYesRadio',
    description : 'Yes for Applicant Student Radio',
    locator : "//input[@id='census_primary_studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'ApplicantStudentNoRadio',
    description : 'No for Applicant Student Radio',
    locator : "//input[@id='census_primary_studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'SpouseGenderList',
    description : 'Spouse Gender Dropdown List',
    locator : "//select[@id='census_secondary_gender']"
});
/*myMap.addElement('OldCensusPage', {
    name : 'SpouseBirMonthBox',
    description : 'Spouse Birth Month Text Box',
    locator : "//input[@id='census_secondary_month']"
});
myMap.addElement('OldCensusPage', {
    name : 'SpouseBirDayBox',
    description : 'Spouse Birth Day Text Box',
    locator : "//input[@id='census_secondary_day']"
});
myMap.addElement('OldCensusPage', {
    name : 'SpouseBirYearBox',
    description : 'Spouse Birth Year Text Box',
    locator : "//input[@id='census_secondary_year']"
});*/
myMap.addElement('OldCensusPage', {
    name : 'SpouseTobaccoYesRadio',
    description : 'Yes for Spouse Tobacco Radio',
    locator : "//input[@id='census_secondary_tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'SpouseTobaccoNoRadio',
    description : 'No for Spouse Tobacco Radio',
    locator : "//input[@id='census_secondary_tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'SpouseStudentYesRadio',
    description : 'Yes for Spouse Student Radio',
    locator : "//input[@id='census_secondary_studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'SpouseStudentNoRadio',
    description : 'No for Spouse Student Radio',
    locator : "//input[@id='census_secondary_studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child1GenderList',
    description : 'Child1 Gender Dropdown List',
    locator : "//select[@id='census_children_0__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1BirMonthBox',
    description : 'Child1 Birth Month Text Box',
    locator : "//input[@id='census_children_0__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1BirDayBox',
    description : 'Child1 Birth Day Text Box',
    locator : "//input[@id='census_children_0__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1BirYearBox',
    description : 'Child1 Birth Year Text Box',
    locator : "//input[@id='census_children_0__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1TobaccoYesRadio',
    description : 'Yes for Child1 Tobacco Radio',
    locator : "//input[@id='census_children_0__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1TobaccoNoRadio',
    description : 'No for Child1 Tobacco Radio',
    locator : "//input[@id='census_children_0__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1StudentYesRadio',
    description : 'Yes for Child1 Student Radio',
    locator : "//input[@id='census_children_0__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child1StudentNoRadio',
    description : 'No for Child1 Student Radio',
    locator : "//input[@id='census_children_0__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child2GenderList',
    description : 'Child2 Gender Dropdown List',
    locator : "//select[@id='census_children_1__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2BirMonthBox',
    description : 'Child2 Birth Month Text Box',
    locator : "//input[@id='census_children_1__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2BirDayBox',
    description : 'Child2 Birth Day Text Box',
    locator : "//input[@id='census_children_1__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2BirYearBox',
    description : 'Child2 Birth Year Text Box',
    locator : "//input[@id='census_children_1__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2TobaccoYesRadio',
    description : 'Yes for Child2 Tobacco Radio',
    locator : "//input[@id='census_children_1__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2TobaccoNoRadio',
    description : 'No for Child2 Tobacco Radio',
    locator : "//input[@id='census_children_1__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2StudentYesRadio',
    description : 'Yes for Child2 Student Radio',
    locator : "//input[@id='census_children_1__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child2StudentNoRadio',
    description : 'No for Child2 Student Radio',
    locator : "//input[@id='census_children_1__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child3GenderList',
    description : 'Child3 Gender Dropdown List',
    locator : "//select[@id='census_children_2__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3BirMonthBox',
    description : 'Child3 Birth Month Text Box',
    locator : "//input[@id='census_children_2__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3BirDayBox',
    description : 'Child3 Birth Day Text Box',
    locator : "//input[@id='census_children_2__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3BirYearBox',
    description : 'Child3 Birth Year Text Box',
    locator : "//input[@id='census_children_2__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3TobaccoYesRadio',
    description : 'Yes for Child3 Tobacco Radio',
    locator : "//input[@id='census_children_2__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3TobaccoNoRadio',
    description : 'No for Child3 Tobacco Radio',
    locator : "//input[@id='census_children_2__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3StudentYesRadio',
    description : 'Yes for Child3 Student Radio',
    locator : "//input[@id='census_children_2__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child3StudentNoRadio',
    description : 'No for Child3 Student Radio',
    locator : "//input[@id='census_children_2__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child4GenderList',
    description : 'Child4 Gender Dropdown List',
    locator : "//select[@id='census_children_3__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4BirMonthBox',
    description : 'Child4 Birth Month Text Box',
    locator : "//input[@id='census_children_3__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4BirDayBox',
    description : 'Child4 Birth Day Text Box',
    locator : "//input[@id='census_children_3__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4BirYearBox',
    description : 'Child4 Birth Year Text Box',
    locator : "//input[@id='census_children_3__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4TobaccoYesRadio',
    description : 'Yes for Child4 Tobacco Radio',
    locator : "//input[@id='census_children_3__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4TobaccoNoRadio',
    description : 'No for Child4 Tobacco Radio',
    locator : "//input[@id='census_children_3__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4StudentYesRadio',
    description : 'Yes for Child4 Student Radio',
    locator : "//input[@id='census_children_3__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child4StudentNoRadio',
    description : 'No for Child4 Student Radio',
    locator : "//input[@id='census_children_3__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child5GenderList',
    description : 'Child5 Gender Dropdown List',
    locator : "//select[@id='census_children_4__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5BirMonthBox',
    description : 'Child5 Birth Month Text Box',
    locator : "//input[@id='census_children_4__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5BirDayBox',
    description : 'Child5 Birth Day Text Box',
    locator : "//input[@id='census_children_4__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5BirYearBox',
    description : 'Child5 Birth Year Text Box',
    locator : "//input[@id='census_children_4__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5TobaccoYesRadio',
    description : 'Yes for Child5 Tobacco Radio',
    locator : "//input[@id='census_children_4__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5TobaccoNoRadio',
    description : 'No for Child5 Tobacco Radio',
    locator : "//input[@id='census_children_4__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5StudentYesRadio',
    description : 'Yes for Child5 Student Radio',
    locator : "//input[@id='census_children_4__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child5StudentNoRadio',
    description : 'No for Child5 Student Radio',
    locator : "//input[@id='census_children_4__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child6GenderList',
    description : 'Child6 Gender Dropdown List',
    locator : "//select[@id='census_children_5__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6BirMonthBox',
    description : 'Child6 Birth Month Text Box',
    locator : "//input[@id='census_children_5__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6BirDayBox',
    description : 'Child6 Birth Day Text Box',
    locator : "//input[@id='census_children_5__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6BirYearBox',
    description : 'Child6 Birth Year Text Box',
    locator : "//input[@id='census_children_5__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6TobaccoYesRadio',
    description : 'Yes for Child6 Tobacco Radio',
    locator : "//input[@id='census_children_5__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6TobaccoNoRadio',
    description : 'No for Child6 Tobacco Radio',
    locator : "//input[@id='census_children_5__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6StudentYesRadio',
    description : 'Yes for Child6 Student Radio',
    locator : "//input[@id='census_children_5__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child6StudentNoRadio',
    description : 'No for Child6 Student Radio',
    locator : "//input[@id='census_children_5__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child7GenderList',
    description : 'Child7 Gender Dropdown List',
    locator : "//select[@id='census_children_6__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7BirMonthBox',
    description : 'Child7 Birth Month Text Box',
    locator : "//input[@id='census_children_6__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7BirDayBox',
    description : 'Child7 Birth Day Text Box',
    locator : "//input[@id='census_children_6__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7BirYearBox',
    description : 'Child7 Birth Year Text Box',
    locator : "//input[@id='census_children_6__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7TobaccoYesRadio',
    description : 'Yes for Child7 Tobacco Radio',
    locator : "//input[@id='census_children_6__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7TobaccoNoRadio',
    description : 'No for Child7 Tobacco Radio',
    locator : "//input[@id='census_children_6__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7StudentYesRadio',
    description : 'Yes for Child7 Student Radio',
    locator : "//input[@id='census_children_6__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child7StudentNoRadio',
    description : 'No for Child7 Student Radio',
    locator : "//input[@id='census_children_6__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'Child8GenderList',
    description : 'Child8 Gender Dropdown List',
    locator : "//select[@id='census_children_7__gender']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8BirMonthBox',
    description : 'Child8 Birth Month Text Box',
    locator : "//input[@id='census_children_7__month']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8BirDayBox',
    description : 'Child8 Birth Day Text Box',
    locator : "//input[@id='census_children_7__day']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8BirYearBox',
    description : 'Child8 Birth Year Text Box',
    locator : "//input[@id='census_children_7__year']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8TobaccoYesRadio',
    description : 'Yes for Child8 Tobacco Radio',
    locator : "//input[@id='census_children_7__tobaccotrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8TobaccoNoRadio',
    description : 'No for Child8 Tobacco Radio',
    locator : "//input[@id='census_children_7__tobaccofalse']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8StudentYesRadio',
    description : 'Yes for Child8 Student Radio',
    locator : "//input[@id='census_children_7__studenttrue']"
});
myMap.addElement('OldCensusPage', {
    name : 'Child8StudentNoRadio',
    description : 'No for Child8 Student Radio',
    locator : "//input[@id='census_children_7__studentfalse']"
});

myMap.addElement('OldCensusPage', {
    name : 'GoButton',
    description : 'Go to quote page button',
    locator : "//input[@name='method:submit' and contains(@src,'wide-census-go.gif')]"
});

myMap.addElement('OldCensusPage', {
    name : 'MonthlyPaymentsRadio',
    description : 'ST Monthly Payments Radio',
    locator : "//input[@name='method:monthlyPayment']"
});
myMap.addElement('OldCensusPage', {
    name : 'SinglePaymentsRadio',
    description : 'ST Single PaymentsRadio',
    locator : "//input[@name='method:singlePayment']"
});
myMap.addElement('OldCensusPage', {
    name : 'LastDayOfCoverageList',
    description : 'ST Last Day Of Coverage List',
    locator : "//select[@id='census_lastCoverageDate']"
});
myMap.addElement('OldCensusPage', {
    name : 'LowerCostsLink',
    description : 'ST Lower Costs Link',
    locator : "//a[text()='lower costs']"
});

myMap.addElement('OldCensusPage', {
    name : 'CitizenCheck',
    description : 'IHI Citizen Check',
    locator : "//input[@name='citizenCheck']"
});

myMap.addElement('OldCensusPage', {
    name : 'HSAAddChildLink',
    description : 'HSA Add Children Link',
    locator : "//input[@id='addMoreKids']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAGoButton',
    description : 'HSA Get Quotes Button',
    locator : "//input[@name='method:submit' and contains(@src,'button_submit.gif')]"
});

myMap.addElement('OldCensusPage', {
    name : 'HSAChild1TobaccoCheck',
    description : 'HSA Child1 Tobacco Check Box',
    locator : "//input[@id='census_children_0__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild1StudentCheck',
    description : 'HSA Child1 Student Check Box',
    locator : "//input[@id='census_children_0__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild2TobaccoCheck',
    description : 'HSA Child2 Tobacco Check Box',
    locator : "//input[@id='census_children_1__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild2StudentCheck',
    description : 'HSA Child2 Student Check Box',
    locator : "//input[@id='census_children_1__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild3TobaccoCheck',
    description : 'HSA Child3 Tobacco Check Box',
    locator : "//input[@id='census_children_2__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild3StudentCheck',
    description : 'HSA Child3 Student Check Box',
    locator : "//input[@id='census_children_2__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild4TobaccoCheck',
    description : 'HSA Child4 Tobacco Check Box',
    locator : "//input[@id='census_children_3__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild4StudentCheck',
    description : 'HSA Child4 Student Check Box',
    locator : "//input[@id='census_children_3__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild5TobaccoCheck',
    description : 'HSA Child5 Tobacco Check Box',
    locator : "//input[@id='census_children_4__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild5StudentCheck',
    description : 'HSA Child5 Student Check Box',
    locator : "//input[@id='census_children_4__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild6TobaccoCheck',
    description : 'HSA Child6 Tobacco Check Box',
    locator : "//input[@id='census_children_5__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild6StudentCheck',
    description : 'HSA Child6 Student Check Box',
    locator : "//input[@id='census_children_5__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild7TobaccoCheck',
    description : 'HSA Child7 Tobacco Check Box',
    locator : "//input[@id='census_children_6__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild7StudentCheck',
    description : 'HSA Child7 Student Check Box',
    locator : "//input[@id='census_children_6__student']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild8TobaccoCheck',
    description : 'HSA Child8 Tobacco Check Box',
    locator : "//input[@id='census_children_7__tobacco']"
});
myMap.addElement('OldCensusPage', {
    name : 'HSAChild8StudentCheck',
    description : 'HSA Child8 Student Check Box',
    locator : "//input[@id='census_children_7__student']"
});
// Some B Flow Census Page Elements(DT/ST/VSP/ACC)
myMap.addElement('OldCensusPage', {
    name : 'BFlowAddFamilyMembersLink',
    description : 'Add Family Members Link',
    locator : "//a[@id='add-family-members-lnk']"
});
myMap.addElement('OldCensusPage', {
    name : 'BFlowAddMoreChildrenLink',
    description : 'B Flow Add More Children Link',
    locator : "//a[@id='add-more-kids-lnk']"
});
myMap.addElement('OldCensusPage', {
    name : 'BFlowContinueButton',
    description : 'B Flow Continue Button',
    locator : "//input[@id='continue-btn']"
});

myMap.addElement('OldCensusPage', {
    name : 'BFlowMonthlyPaymentsRadio',
    description : 'ST B Flow Monthly Payments Radio',
    locator : "//input[@value='MONTHLY']"
});
myMap.addElement('OldCensusPage', {
    name : 'BFlowSinglePaymentsRadio',
    description : 'ST B Flow Single Payments Radio',
    locator : "//input[@value='SINGLE_UP_FRONT']"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Quote page elements - Dominic
myMap.addPageset({
    name : 'NewQuotePage',
    description : 'quote page',
    pathRegexp : '.*'
}); 
/*myMap.addElement('NewQuotePage', {
    name : 'Edit',
    description : 'Edit the census',
	locator : "//span[contains(text(),'edit')]"
});*/

//sort by
myMap.addElement('NewQuotePage', {
    name : 'SortOption',
    description : 'Sort Option',
    locator : "//select[@id='sortOption']"
});
myMap.addElement('NewQuotePage', {
    name : 'SortByBEST_SELLER',
    description : 'Sort By BEST_SELLER',
    locator : "//option[@value='BEST_SELLER']"
});
myMap.addElement('NewQuotePage', {
    name : 'SortByPrice',
    description : 'Sort By Price',
    locator : "//option[@value='PRICE']"
});
myMap.addElement('NewQuotePage', {
    name : 'SortByDeductible',
    description : 'Sort By Deductible',
    locator : "//option[@value='DEDUCTIBLE']"
});
myMap.addElement('NewQuotePage', {
    name : 'SortByRatings',
    description : 'Sort By Ratings',
    locator : "//option[@value='RATINGS']"
});
myMap.addElement('NewQuotePage', {
    name : 'SortByCompany',
    description : 'Sort By Company',
    locator : "//option[@value='COMPANY']"
});
//Show All Plans
myMap.addElement('NewQuotePage', {
    name : 'ShowAllBtn',
    description : 'Show All Button',
    locator : "//div[@id='quote-plan-count']//a[@class='show-all-plans']"
});
myMap.addElement('NewQuotePage', {
    name : 'ShowAllLink',
    description : 'Show All Link',
    locator : "//block[@id='quote-pagination']//ul//li//a[@class='show-all-plans']"
});
myMap.addElement('NewQuotePage', {
    name : 'ShowAllPlans',
    description : 'Show All Plans Link',
    locator : "//div[@id='quote-msg-wrap']//a[@class='show-all-plans']"
});

myMap.addElement('NewQuotePage', {
    name : 'TryItAgainLink',
    description : 'Try it again link',
    locator : "//a[@id='hmc-clean-result']"
});
myMap.addElement('NewQuotePage', {
    name : 'ChangeYourDoctorLink',
    description : 'Change your doctor link',
    locator : "//a[@id='change-doctor']"
});

myMap.addElement('NewQuotePage', {
    name : 'GetRecommendationsBtn',
    description : 'Get Recommendations Button',
    locator : "//div[@class='btn btn-secondary get-recommendation']"
});

//Filter Plans: Company
myMap.addElement('NewQuotePage', {
    name : 'CompanyOption',
    description : 'Company Option',
	locator : "//div[@id='carrier_filter']//h4"
});
//Filter Plans: Monthly Cost
myMap.addElement('NewQuotePage', {
    name : 'MonthlyCostOption',
    description : 'Monthly Cost Option',
	locator : "//div[@id='monthly_cost_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : 'Under200',
    description : 'Under 200 Checkbox',
	locator : "//input[@id='mUnder200']"
});
myMap.addElement('NewQuotePage', {
    name : '200-300',
    description : '$200-$300',
	locator : "//input[@id='m200to300']"
});
myMap.addElement('NewQuotePage', {
    name : '300-400',
    description : '$300-$400',
	locator : "//input[@id='m300to400']"
});
myMap.addElement('NewQuotePage', {
    name : '400-500',
    description : '$400-$500',
	locator : "//input[@id='m400to500']"
});
myMap.addElement('NewQuotePage', {
    name : '500-above',
    description : '$500-above',
	locator : "//input[@id='m500Above']"
});
//Filter Plans: Deductible
myMap.addElement('NewQuotePage', {
    name : 'DeductibleOption',
    description : 'Deductible Option',
	locator : "//div[@id='deductible_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : 'Under500',
    description : 'Deductible under $500',
	locator : "//input[@id='dUnder500']"
});
myMap.addElement('NewQuotePage', {
    name : 'D500-1000',
    description : 'Deductible $500-$1000',
	locator : "//input[@id='d500to1000']"
});
myMap.addElement('NewQuotePage', {
    name : 'D1000-2500',
    description : 'Deductible $1000-$2500',
	locator : "//input[@id='d1000to2500']"
});
myMap.addElement('NewQuotePage', {
    name : 'D2500-5000',
    description : 'Deductible $2500-$5000',
	locator : "//input[@id='d2500to5000']"
});
myMap.addElement('NewQuotePage', {
    name : 'D5000-10000',
    description : 'Deductible $5000-$10000',
	locator : "//input[@id='d5000to10000']"
});
//Filter Plans: office visit
myMap.addElement('NewQuotePage', {
    name : 'OfficeVisitOption',
    description : 'Office Visit Option',
	locator : "//div[@id='office_visit_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : 'CoveredafterDeductible',
    description : 'Covered After Deductible',
	locator : "//input[@id='CoveredafterDeductible']"
});
myMap.addElement('NewQuotePage', {
    name : 'CoveredBeforeDeductible',
    description : 'Covered Before Deductible',
	locator : "//input[@id='CoveredbeforeDeductible']"
});
myMap.addElement('NewQuotePage', {
    name : 'NotCovered',
    description : 'Not Covered',
	locator : "//input[@id='NotCovered']"
});
//Filter Plans: Coinsurance
myMap.addElement('NewQuotePage', {
    name : 'CoinsuranceOption',
    description : 'Coinsurance Option',
	locator : "//div[@id='office_visit_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : 'cUnder10',
    description : 'Coinsurance Under 10%',
	locator : "//input[@id='cUnder10']"
});
myMap.addElement('NewQuotePage', {
    name : 'c10to20',
    description : 'Coinsurance From 10% to 20%',
	locator : "//input[@id='c10to20']"
});
myMap.addElement('NewQuotePage', {
    name : 'c20to30',
    description : 'Coinsurance From 20% to 30%',
	locator : "//input[@id='c20to30']"
});
myMap.addElement('NewQuotePage', {
    name : 'c30to40',
    description : 'Coinsurance From 30% to 40%',
	locator : "//input[@id='c30to40']"
});
myMap.addElement('NewQuotePage', {
    name : 'c40to50',
    description : 'Coinsurance From 40% to 50%',
	locator : "//input[@id='c40to50']"
});
myMap.addElement('NewQuotePage', {
    name : 'c50Above',
    description : 'Coinsurance Above 50%',
	locator : "//input[@id='c50Above']"
});
//Filter Plans: plan type
myMap.addElement('NewQuotePage', {
    name : 'PlanTypeOption',
    description : 'Plan Type Option',
	locator : "//div[@id='plan_type_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : 'HMO',
    description : 'Plan Type: HMO',
	locator : "//input[@id='HMO']"
});
myMap.addElement('NewQuotePage', {
    name : 'PPO',
    description : 'Plan Type: PPO',
	locator : "//input[@id='PPO']"
});
//Filter Plans: additional features
myMap.addElement('NewQuotePage', {
    name : 'AdditionalFeaturesOption',
    description : 'Additional Features Option',
	locator : "//div[@id='additional_features_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : '24HrApproval',
    description : 'Additional Features: 24HrApproval',
	locator : "//input[@id='24HrApproval']"
});
myMap.addElement('NewQuotePage', {
    name : 'HSAEligible',
    description : 'Additional Features: HSA Eligible',
	locator : "//input[@id='HSAEligible']"
});
myMap.addElement('NewQuotePage', {
    name : 'NoAppFee',
    description : 'Additional Features: No App Fee',
	locator : "//input[@id='NoAppFee']"
});
//Filter Plans: Additional Coverages
myMap.addElement('NewQuotePage', {
    name : 'AdditionalCoveragesOption',
    description : 'Additional Coverages Option',
	locator : "//div[@id='additional_features_filter']//h4"
});
myMap.addElement('NewQuotePage', {
    name : 'MaternityIncluded',
    description : 'Additional Coverages: MaternityIncluded',
	locator : "//input[@id='MaternityIncluded']"
});
myMap.addElement('NewQuotePage', {
    name : 'RxIncluded',
    description : 'Additional Coverages: RxIncluded',
	locator : "//input[@id='RxIncluded']"
});
myMap.addElement('NewQuotePage', {
    name : 'VisionOptional',
    description : 'Additional Coverages: VisionOptional',
	locator : "//input[@id='VisionOptional']"
});
//~~~~~~~~~Plans Your Dr. Accepts 
myMap.addElement('NewQuotePage', {
    name : 'PlansYourDr.Accepts',
    description : 'Plans Your Dr. Accepts',
	locator : "//h4[@id='quote-filter-doc']"
});
myMap.addElement('NewQuotePage', {
    name : 'LastNameOfDoctor',
    description : 'Last Name Of Doctor',
	locator : "//input[@id='last-name']"
});
myMap.addElement('NewQuotePage', {
    name : 'FirstNameOfDoctor',
    description : 'First Name Of Doctor',
	locator : "//input[@id='first-name']"
});
myMap.addElement('NewQuotePage', {
    name : 'cityOfDoctor',
    description : 'city Of Doctor',
	locator : "//input[@id='city']"
});
myMap.addElement('NewQuotePage', {
    name : 'StateOfDoctor',
    description : 'State Of Doctor',
	locator : "//select[@id='state']"
});
myMap.addElement('NewQuotePage', {
    name : 'zipcodeOfDoctor',
    description : 'zipcode Of Doctor',
	locator : "//input[@id='zipcode']"
});
myMap.addElement('NewQuotePage', {
    name : 'distanceFromDoctor',
    description : 'distance From Doctor',
	locator : "//select[@id='distance']"
});
myMap.addElement('NewQuotePage', {
    name : 'FindYourDoctor',
    description : 'Find Your Doctor',
	locator : "//div[@id='find-your-doctor']"
});
myMap.addElement('NewQuotePage', {
    name : 'Cancel',
    description : 'Cancel',
	locator : "//div[@class='text-link overlay-close-link']"
});
//~~~~~~Recommend a Plan 
myMap.addElement('NewQuotePage', {
    name : 'RecommendAPlan',
    description : 'Recommend a Plan',
	locator : "//h4[@id='quote-filter-rec']"
});
myMap.addElement('NewQuotePage', {
    name : 'LongerTerm',
    description : 'Longer term',
	locator : "//div[text()='Longer Term']"
});
myMap.addElement('NewQuotePage', {
    name : 'ShortTerm',
    description : 'Short Term',
	locator : "//div[contains(text(),'Short Term')]"
});
myMap.addElement('NewQuotePage', {
    name : 'Yes',
    description : 'Yes',
	locator : "//div[contains(text(),'Yes')]"
});
myMap.addElement('NewQuotePage', {
    name : 'No',
    description : 'No',
	locator : "//div[contains(text(),'No')]"
});
myMap.addElement('NewQuotePage', {
    name : 'Skip Question',
    description : 'Skip Question',
	locator : "//span[contains(text(),'Skip Question')]"
});
myMap.addElement('NewQuotePage', {
    name : 'Previous',
    description : 'Previous',
	locator : "//span[contains(text(),'Previous')]"
});
myMap.addElement('NewQuotePage', {
    name : 'Often',
    description : 'Often',
	locator : "//div[contains(text(),'Often')]"
});
myMap.addElement('NewQuotePage', {
    name : 'Rarely',
    description : 'Rarely',
	locator : "//div[contains(text(),'Rarely')]"
});
myMap.addElement('NewQuotePage', {
    name : 'Show my recommendations',
    description : 'ShowMyRecommendations',
	locator : "//a[contains(text(),'Show my recommendations')]"
});

//Videos
myMap.addElement('NewQuotePage', {
    name : 'WhatIsCoinsurance?',
    description : 'What is coinsurance?',
    locator : "//img[@alt='What is coinsurance?']"
});
myMap.addElement('NewQuotePage', {
    name : 'WhatIsACopay?',
    description : 'What is a copay?',
    locator : "//img[@alt='What is a copay?']"
});
myMap.addElement('NewQuotePage', {
    name : 'WhatIsADeductible?',
    description : 'What is a deductible?',
    locator : "//img[@alt='What is a deductible?']"
});
myMap.addElement('NewQuotePage', {
    name : 'WhatIsHMO?',
    description : 'What is HMO?',
    locator : "//img[@alt='What is HMO?']"
});
myMap.addElement('NewQuotePage', {
    name : 'WhatIsOut-of-PocketLimit?',
    description : 'What is Out-of-Pocket Limit?',
    locator : "//img[@alt='What is Out-of-Pocket Limit?']"
});
myMap.addElement('NewQuotePage', {
    name : 'WhatIsPPO?',
    description : 'What is PPO?',
    locator : "//img[@alt='What is PPO?']"
});

//Apply Plan 
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan1',
    description : 'Click Apply Button 1(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[1]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan2',
    description : 'Click Apply Button 2(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[2]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan3',
    description : 'Click Apply Button 3(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[3]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan4',
    description : 'Click Apply Button 4(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[4]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan5',
    description : 'Click Apply Button 5(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[5]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan6',
    description : 'Click Apply Button 6(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[6]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan7',
    description : 'Click Apply Button 7(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[7]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan8',
    description : 'Click Apply Button 8(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[8]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan9',
    description : 'Click Apply Button 9(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[9]"
});
myMap.addElement('NewQuotePage', {
    name : 'ApplyPlan10',
    description : 'Click Apply Button 10(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Apply')])[10]"
});
//Go To My Cart(if applied before)
myMap.addElement('NewQuotePage', {
    name : 'Go To My Cart',
    description : 'Go To My Cart',
    locator : "//input[@value='Go To My Cart']"
});
//Details
myMap.addElement('NewQuotePage', {
    name : 'Details',
    description : 'Click Details Button 1(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Details')])[1]"
});
myMap.addElement('NewQuotePage', {
    name : 'Details2',
    description : 'Click Details Button 2(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Details')])[2]"
});
myMap.addElement('NewQuotePage', {
    name : 'Details3',
    description : 'Click Details Button 3(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Details')])[3]"
});
myMap.addElement('NewQuotePage', {
    name : 'Details4',
    description : 'Click Details Button 4(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Details')])[4]"
});
myMap.addElement('NewQuotePage', {
    name : 'Details5',
    description : 'Click Details Button 5(might be used in other pages)',
	locator : "xpath=(//a[contains(text(),'Details')])[5]"
});
//CompareCheckBox(up to 4 plans) 
myMap.addElement('NewQuotePage', {
    name : 'CompareCheckBox1',
    description : 'Compare Check Box 1:',
    locator : "xpath=(//input[@name='comparePlans'])[1]"
});
myMap.addElement('NewQuotePage', {
    name : 'CompareCheckBox2',
    description : 'Compare Check Box 2',
    locator : "xpath=(//input[@name='comparePlans'])[2]"
});
myMap.addElement('NewQuotePage', {
    name : 'CompareCheckBox3',
    description : 'Compare Check Box 3',
    locator : "xpath=(//input[@name='comparePlans'])[3]"
});
myMap.addElement('NewQuotePage', {
    name : 'CompareCheckBox4',
    description : 'Compare Check Box 4',
    locator : "xpath=(//input[@name='comparePlans'])[4]"
});
//Compare Button 
myMap.addElement('NewQuotePage', {
    name : 'CompareButton1',
    description : 'Compare Button 1',
	locator : "xpath=(//div[text()='Compare'])[1]"
});
myMap.addElement('NewQuotePage', {
    name : 'CompareButton2',
    description : 'Compare Button 2',
	locator : "xpath=(//div[text()='Compare'])[2]"
});
myMap.addElement('NewQuotePage', {
    name : 'CompareButton3',
    description : 'Compare Button 3',
	locator : "xpath=(//div[text()='Compare'])[3]"
});
myMap.addElement('NewQuotePage', {
    name : 'CompareButton4',
    description : 'Compare Button 4',
	locator : "xpath=(//div[text()='Compare'])[4]"
});

//Find Doctors 
myMap.addElement('NewQuotePage', {
    name : 'FindDoctors1',
    description : 'Find Doctors 1',
    locator : "xpath=(//span[contains(text(),'Find Doctors')])[1]"
});
myMap.addElement('NewQuotePage', {
    name : 'FindDoctors2',
    description : 'Find Doctors 2',
    locator : "xpath=(//span[contains(text(),'Find Doctors')])[2]"
});
myMap.addElement('NewQuotePage', {
    name : 'FindDoctors3',
    description : 'Find Doctors 3',
    locator : "xpath=(//span[contains(text(),'Find Doctors')])[3]"
});
myMap.addElement('NewQuotePage', {
    name : 'FindDoctors4',
    description : 'Find Doctors 4',
    locator : "xpath=(//span[contains(text(),'Find Doctors')])[4]"
});
myMap.addElement('NewQuotePage', {
    name : 'FindDoctors5',
    description : 'Find Doctors 5',
    locator : "xpath=(//span[contains(text(),'Find Doctors')])[5]"
});
//Specific provider: still changing
myMap.addElement('NewQuotePage', {
    name : 'SpecificProvider',
    description : 'Specific provider',
	locator : "xpath=(//div[contains(text(),'Specific provider')])"
});
myMap.addElement('NewQuotePage', {
    name : 'provider-type-doctor',
    description : 'provider-type-doctor',
	locator : "//input[@id='provider-type-doctor']"
});
myMap.addElement('NewQuotePage', {
    name : 'provider-type-hospital',
    description : 'provider-type-hospital',
	locator : "//input[@id='provider-type-hospital']"
});
myMap.addElement('NewQuotePage', {
    name : 'AdvanceSearch',
    description : 'Advance search',
	locator : "//span[contains(text(),'Advance search')]"
});
myMap.addElement('NewQuotePage', {
    name : 'search-provider',
    description : 'search-provider',
	locator : "//div[@id='search-provider']"
});
//All providers: still changing
myMap.addElement('NewQuotePage', {
    name : 'AllProviders',
    description : 'All providers',
	locator : "xpath=(//div[contains(text(),'All providers')])"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Landing Page Elements -Luluk
// Landing Page Elements
myMap.addPageset({
    name : 'NewLandingPage',
    description : 'landing page',
    pathRegexp : '.*'
}); 
myMap.addElement('NewLandingPage', {
    name : 'LandingPageZipCodeBox',
    description : 'Landing Page Zip Code Box',
    locator : "//input[@id='zipCode' and @name='census.zipCode']"
});
// DT Landing Page Elements
myMap.addElement('NewLandingPage', {
    name : 'DTGoButton',
    description : 'Click Dental GO Button',
    locator : "//input[@name='method:input' and @title='Get Dental Insurance Quotes']"
});
// ST Landing Page Elements
myMap.addElement('NewLandingPage', {
    name : 'STGoButton',
    description : 'Click Short Term GO Button',
    locator : "//input[@name='method:input' and @title='Get Short-term Health Insurance Quotes']"
});
// VSP Landing Page
myMap.addElement('NewLandingPage', {
    name : 'VSPGoButton',
    description : 'Click Vision GO Button',
    locator : "//input[@name='method:input' and @title='Get Vision Insurance Quotes']"
});
// ACC Landing Page
myMap.addElement('NewLandingPage', {
    name : 'ACCGoButton',
    description : 'Click Accident GO Button',
    locator : "//input[@name='method:input' and @title='Get Accident Insurance Quotes']"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Redesign PlanDetails page elements - Dominic
myMap.addPageset({
    name : 'NewPlanDetails',
    description : 'Plan Details',
    pathRegexp : '.*'
}); 

myMap.addElement('NewPlanDetails', {
    name : 'Home',
    description : 'Home',
	locator : "link=Home"
});
myMap.addElement('NewPlanDetails', {
    name : 'PlansFound',
    description : 'Plans Found',
	locator : "link=Plans Found"
});
myMap.addElement('NewPlanDetails', {
    name : 'CustomerReviews',
    description : 'Customer Reviews',
	locator : "link=Customer Reviews:"
});
myMap.addElement('NewPlanDetails', {
    name : 'EmailQuote',
    description : 'Email Quote',
	locator : "//a[contains(text(),'Email Quote')]"
});
//PlanDetailsApply
myMap.addElement('NewPlanDetails', {
    name : 'PlanDetailsApply',
    description : 'Plan Details Apply',
	locator : "//div[@id='order-summary']/..//a[contains(text(),'Apply')] "
});
//~~~~~~~~~~~~Plan Details
myMap.addElement('NewPlanDetails', {
    name : 'PlanType',
    description : 'Plan Type',
	locator : "//a[contains(text(),'Plan Type')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'OfficeVisitforPrimaryDoctor',
    description : 'Office Visit for Primary Doctor',
	locator : "//a[contains(text(),'Office Visit for Primary Doctor')]"
});
//Find Doctors
myMap.addElement('NewPlanDetails', {
    name : 'FindDoctors',
    description : 'Find Doctors',
	locator : "//span[contains(text(),'Find Doctors')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'OfficeVisitforSpecialist',
    description : 'Office Visit for Specialist',
	locator : "//a[contains(text(),'Office Visit for Specialist')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'Coinsurance',
    description : 'Coinsurance',
	locator : "//a[contains(text(),'Coinsurance')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'AnnualDeductible',
    description : 'Annual Deductible',
	locator : "//a[contains(text(),'Annual Deductible')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'SeparatePrescription',
    description : 'Separate Prescription Drugs Deductible',
	locator : "//a[contains(text(),'Separate Prescription Drugs Deductible')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'PrescriptionDrugs',
    description : 'Prescription Drugs',
	locator : "link=Prescription Drugs"
});
myMap.addElement('NewPlanDetails', {
    name : 'AnnualOut-of-PocketLimit',
    description : 'Annual Out-of-Pocket Limit',
	locator : "//a[contains(text(),'Annual Out-of-Pocket Limit')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'MaximumOut-of-pocketCosts',
    description : 'Maximum Out-of-pocket Costs',
	locator : "//a[contains(text(),'Maximum Out-of-pocket Costs')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'LifetimeMaximum',
    description : 'Lifetime Maximum',
	locator : "//a[contains(text(),'Lifetime Maximum')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'lifetimelimits',
    description : 'lifetime limits',
	locator : "//a[contains(text(),'lifetime limits')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'PPACA',
    description : 'PPACA',
	locator : "//a[contains(text(),'PPACA')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'HealthSavingsAccount',
    description : 'Health Savings Account (HSA) Eligible',
	locator : "link=Health Savings Account (HSA) Eligible"
});
myMap.addElement('NewPlanDetails', {
    name : 'HSA-compatible',
    description : 'HSA-compatible health insurance plan',
	locator : "link=HSA-compatible health insurance plan"
});
myMap.addElement('NewPlanDetails', {
    name : 'QualifiedMedical',
    description : 'qualified medical expenses',
	locator : "link=qualified medical expenses"
});
myMap.addElement('NewPlanDetails', {
    name : 'ToLearnMoreAboutHSAs',
    description : 'To learn more about HSAs click Here',
	locator : "xpath=(//a[contains(text(),'here')])[3]"
});
myMap.addElement('NewPlanDetails', {
    name : 'Out-of-NetworkCoverage',
    description : 'Out-of-Network Coverage',
	locator : "link=Out-of-Network Coverage"
});
myMap.addElement('NewPlanDetails', {
    name : 'OutofCountryCoverage',
    description : 'Out of Country Coverage',
	locator : "link=Out of Country Coverage"
});
myMap.addElement('NewPlanDetails', {
    name : 'RateGuarantee',
    description : 'RateGuarantee',
	locator : "link=Rate Guarantee"
});
myMap.addElement('NewPlanDetails', {
    name : 'ViewDetail',
    description : 'View Detail',
	locator : "//a[contains(text(),'View Detail')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'ShowMoreDetails',
    description : 'Show More Details',
	locator : "//div[contains(text(),'Show More Details')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'Show Less Details',
    description : 'Show Less Details',
	locator : "//div[contains(text(),'Show Less Details')]"
});

myMap.addElement('NewPlanDetails', {
    name : 'PrimaryCare',
    description : 'Primary Care Physician (PCP) Required',
	locator : "link=Primary Care Physician (PCP) Required"
});
myMap.addElement('NewPlanDetails', {
    name : 'SpecialistReferrals',
    description : 'Specialist Referrals Required',
	locator : "link=Specialist Referrals Required"
});
myMap.addElement('NewPlanDetails', {
    name : 'PeriodicHealthExam',
    description : 'Periodic Health Exam',
	locator : "link=Periodic Health Exam"
});
myMap.addElement('NewPlanDetails', {
    name : 'PeriodicOB-GYNExam',
    description : 'Periodic OB-GYN Exam',
	locator : "link=Periodic OB-GYN Exam"
});
myMap.addElement('NewPlanDetails', {
    name : 'WellBabyCare',
    description : 'Well Baby Care',
	locator : "link=Well Baby Care"
});
myMap.addElement('NewPlanDetails', {
    name : 'GenericPrescription',
    description : 'Generic Prescription Drugs',
	locator : "link=Generic Prescription Drugs"
});
myMap.addElement('NewPlanDetails', {
    name : 'BrandPrescription',
    description : 'Brand Prescription Drugs',
	locator : "link=Brand Prescription Drugs"
});
myMap.addElement('NewPlanDetails', {
    name : 'Non-FormularyPrescription',
    description : 'Non-Formulary Prescription Drugs Coverage',
	locator : "link=Non-Formulary Prescription Drugs Coverage"
});
myMap.addElement('NewPlanDetails', {
    name : 'MailOrder',
    description : 'Mail Order for Prescription Drugs',
	locator : "link=Mail Order for Prescription Drugs"
});
myMap.addElement('NewPlanDetails', {
    name : 'SeparatePrescription2',
    description : 'Separate Prescription Drugs Deductible-showMoreDetails',
	locator : "xpath=(//a[contains(text(),'Separate Prescription Drugs Deductible')])[2]"
});
myMap.addElement('NewPlanDetails', {
    name : 'EmergencyRoom',
    description : 'Emergency Room',
	locator : "link=Emergency Room"
});
myMap.addElement('NewPlanDetails', {
    name : 'OutpatientLab/X-Ray',
    description : 'Outpatient Lab/X-Ray',
	locator : "link=Outpatient Lab/X-Ray"
});
myMap.addElement('NewPlanDetails', {
    name : 'OutpatientSurgery',
    description : 'Outpatient Surgery',
	locator : "link=Outpatient Surgery"
});
myMap.addElement('NewPlanDetails', {
    name : 'Hospitalization',
    description : 'Hospitalization',
	locator : "link=Hospitalization"
});
myMap.addElement('NewPlanDetails', {
    name : 'Pre&PostnatalOfficeVisit',
    description : 'Pre & Postnatal Office Visit',
	locator : "link=Pre & Postnatal Office Visit"
});
myMap.addElement('NewPlanDetails', {
    name : 'Labor&DeliveryHospital',
    description : 'Labor & Delivery Hospital Stay',
	locator : "link=Labor & Delivery Hospital Stay"
});
myMap.addElement('NewPlanDetails', {
    name : 'ChiropracticCoverage',
    description : 'Chiropractic Coverage',
	locator : "link=Chiropractic Coverage"
});
myMap.addElement('NewPlanDetails', {
    name : 'MentalHealthCoverage',
    description : 'Mental Health Coverage',
	locator : "link=Mental Health Coverage"
});
myMap.addElement('NewPlanDetails', {
    name : 'SubstanceAbuseCoverage',
    description : 'Substance Abuse Coverage',
	locator : "link=Substance Abuse Coverage"
});
myMap.addElement('NewPlanDetails', {
    name : 'Out-of-NetworkAuthorization',
    description : 'Out-of-Network Authorization Required',
	locator : "link=Out-of-Network Authorization Required"
});
myMap.addElement('NewPlanDetails', {
    name : 'Out-of-NetworkDeductible',
    description : 'Out-of-Network Deductible',
	locator : "link=Out-of-Network Deductible"
});
myMap.addElement('NewPlanDetails', {
    name : 'Out-of-NetworkCoinsurance',
    description : 'Out-of-Network Coinsurance',
	locator : "link=Out-of-Network Coinsurance"
});
myMap.addElement('NewPlanDetails', {
    name : 'Out-of-NetworkOut-of-Pocket Limit',
    description : 'Out-of-Network Out-of-Pocket Limit',
	locator : "link=Out-of-Network Out-of-Pocket Limit"
});
myMap.addElement('NewPlanDetails', {
    name : 'A.M.BestRating',
    description : 'A.M. Best Rating',
	locator : "link=A.M. Best Rating"
});
myMap.addElement('NewPlanDetails', {
    name : 'ApplicationFee',
    description : 'Application Fee',
	locator : "link=Application Fee"
});
myMap.addElement('NewPlanDetails', {
    name : 'ElectronicSignature',
    description : 'Electronic Signature for Application Available',
	locator : "link=Electronic Signature for Application Available"
});
myMap.addElement('NewPlanDetails', {
    name : 'WillInsurance',
    description : 'Will insurance company obtain and pay for medical records?',
	locator : "link=Will insurance company obtain and pay for medical records?"
});
myMap.addElement('NewPlanDetails', {
    name : 'ViewPlanBrochure',
    description : 'View Plan Brochure',
	locator : "link=View Plan Brochure"
});
myMap.addElement('NewPlanDetails', {
    name : 'ExclusionsAndLimitations',
    description : 'Exclusions and Limitations',
	locator : "link=Exclusions and Limitations"
});
myMap.addElement('NewPlanDetails', {
    name : 'ClickHereToView',
    description : 'Click here to view the Uniform Glossary',
	locator : "link=here"
});
//RECOMMENDED
myMap.addElement('NewPlanDetails', {
    name : 'RECOMMENDED',
    description : 'RECOMMENDED',
	locator : "span[@strong='RECOMMENDED']"
});
//View Benefits: almost 50+ benefits, hopping a better way to deal with it
myMap.addElement('NewPlanDetails', {
    name : 'ViewBenefits',
    description : 'View Benefits 1',
	locator : "//span[contains(text(),'View Benefits')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'ViewBenefits2',
    description : 'View Benefits 2',
	locator : "//div[@id='coverage-option-list']/fieldset/div[2]/div/span"
});
myMap.addElement('NewPlanDetails', {
    name : 'ViewBenefits3',
    description : 'View Benefits 3',
	locator : "//div[@id='coverage-option-list']/fieldset/div[3]/div/span"
});
myMap.addElement('NewPlanDetails', {
    name : 'ViewBenefits4',
    description : 'View Benefits 4',
	locator : "//div[@id='coverage-option-list']/fieldset/div[4]/div/span"
});
myMap.addElement('NewPlanDetails', {
    name : 'ViewBenefits5',
    description : 'View Benefits 5',
	locator : "//div[@id='coverage-option-list']/fieldset/div[5]/div/span"
});

myMap.addElement('NewPlanDetails', {
    name : 'ViewBenefitsPDF',
    description : 'View Benefits PDF',
	locator : "link=View Benefits"
});
//Compare Plans
myMap.addElement('NewPlanDetails', {
    name : 'NewComparePlans',
    description : 'Compare Plans',
	locator : "//span[contains(text(),'Compare Plans')]"
});

//See All Plans
myMap.addElement('NewPlanDetails', {
    name : 'SeeAllPlans1',
    description : 'See All Plans 1',
    locator : "//section[@id='rider-group-section-0']/..//a[contains(text(),'See All Plans')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'SeeAllPlans2',
    description : 'See All Plans 2',
    locator : "//section[@id='rider-group-section-1']/..//a[contains(text(),'See All Plans')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'SeeAllPlans3',
    description : 'See All Plans 3',
    locator : "//section[@id='rider-group-section-2']/..//a[contains(text(),'See All Plans')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'SeeAllPlans4',
    description : 'See All Plans 4',
    locator : "//section[@id='rider-group-section-3']/..//a[contains(text(),'See All Plans')]"
});
myMap.addElement('NewPlanDetails', {
    name : 'SeeAllPlans5',
    description : 'See All Plans 5',
    locator : "//section[@id='rider-group-section-4']/..//a[contains(text(),'See All Plans')]"
});
//contact reviews editor
myMap.addElement('NewPlanDetails', {
    name : 'ContactReviewsEditor',
    description : 'Contact reviews editor',
	locator : "link=contact reviews editor"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Redesign Compare Plans page elements - Dominic
myMap.addPageset({
    name : 'NewComparePlans',
    description : 'Compare Plans',
    pathRegexp : '.*'
}); 

myMap.addElement('NewComparePlans', {
    name : 'Edit',
    description : 'Edit the census',
	locator : "//span[@class='overlay-trigger text-blue'][contains(text(),'edit')]"
});

//Email this Quote
myMap.addElement('NewComparePlans', {
    name : 'EmailThisQuote',
    description : 'Email this Quote',
	locator : "link=Email this Quote"
});
//Print
myMap.addElement('NewComparePlans', {
    name : 'Print',
    description : 'Print',
	locator : "link=Print"
});
//Back to Results
myMap.addElement('NewComparePlans', {
    name : 'BackToResults',
    description : 'Back to Results',
	locator : "link=Back to Results"
});
//Compare Plans Apply
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansApply1',
    description : 'Compare Plans Apply 1',
	locator : "//td[@class='compare-section'][1]//a[contains(text(),'Apply')]"
});
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansApply2',
    description : 'Compare Plans Apply 2',
	locator : "//td[@class='compare-section'][2]//a[contains(text(),'Apply')]"
});
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansApply3',
    description : 'Compare Plans Apply 3',
	locator : "//td[@class='compare-section'][3]//a[contains(text(),'Apply')]"
});
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansApply4',
    description : 'Compare Plans Apply 4',
	locator : "//td[@class='compare-section'][4]//a[contains(text(),'Apply')]"
});
//Compare Plans Detail
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansDetail1',
    description : 'Compare Plans Detail 1',
	locator : "//td[@class='compare-section'][1]//a[contains(text(),'Detail')]"
});
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansDetail2',
    description : 'Compare Plans Detail 2',
	locator : "//td[@class='compare-section'][2]//a[contains(text(),'Detail')]"
});
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansDetail3',
    description : 'Compare Plans Detail 3',
	locator : "//td[@class='compare-section'][3]//a[contains(text(),'Detail')]"
});
myMap.addElement('NewComparePlans', {
    name : 'ComparePlansDetail4',
    description : 'Compare Plans Detail 4',
	locator : "//td[@class='compare-section'][4]//a[contains(text(),'Detail')]"
});
//Exclusions & Limitations
myMap.addElement('NewComparePlans', {
    name : 'Exclusions&Limitations 1',
    description : 'Exclusions & Limitations',
	locator : "link=Exclusions & Limitations"
});
myMap.addElement('NewComparePlans', {
    name : 'Exclusions&Limitations 2',
    description : 'Exclusions & Limitations 2',
	locator : "xpath=(//a[contains(text(),'Exclusions & Limitations')])[2]"
});
myMap.addElement('NewComparePlans', {
    name : 'Exclusions&Limitations 3',
    description : 'Exclusions & Limitations 3',
	locator : "xpath=(//a[contains(text(),'Exclusions & Limitations')])[3]"
});
myMap.addElement('NewComparePlans', {
    name : 'Exclusions&Limitations 3',
    description : 'Exclusions & Limitations 3',
	locator : "xpath=(//a[contains(text(),'Exclusions & Limitations')])[3]"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Car Summary Page Elements - Luluk
// Car Summary page elements
myMap.addPageset({
    name : 'NewCarSummary',
    description : 'Car Summary',
    pathRegexp : '.*'
}); 
myMap.addElement('NewCarSummary', {
    name : 'AFlowBeginApplicationButton',
    description : 'Click Begin Application Button',
    locator : "//input[@id='begin-app']"
});
myMap.addElement('NewCarSummary', {
    name : 'ContinueButton',
    description : 'Click Begin Application or Continue Button',
    locator : "//input[@type='image' and @name='begin']"
});
myMap.addElement('NewCarSummary', {
    name : 'PrivacyPolicyLink',
    description : 'Privacy Policy Link',
    locator : "//a[text()='privacy policy']"
});
myMap.addElement('NewCarSummary', {
    name : 'ImportantNoticeLink',
    description : 'Important Notice about how we are compensated Link',
    locator : "//a[text()='important notice about how we are compensated']"
});
myMap.addElement('NewCarSummary', {
    name : 'ClickHereLink',
    description : 'Click Here Link',
    locator : "//a[contains(text(),'Click Here')]"
});

myMap.addElement('NewCarSummary', {
    name : 'FastAndSecureApplicationLink',
    description : 'Fast and secure application Link',
    locator : "//a[text()='Need Help?']"
});

myMap.addElement('NewCarSummary', {
    name : 'StatusAvailableWithin1HourLink',
    description : 'Status available within 1 hour Link',
    locator : "//a[text()='Status available within 1 hour']"
});
myMap.addElement('NewCarSummary', {
    name : 'Over3MillionCustomersLink',
    description : 'Over 3 million customers Link',
    locator : "//a[text()='Over 3 million customers']"
});
myMap.addElement('NewCarSummary', {
    name : 'ClosePopupButton',
    description : 'Close Popup Button',
    locator : "//span[text()='close']"
});
myMap.addElement('NewCarSummary', {
    name : 'NeedHelpLink',
    description : 'Need Help Link',
    locator : "//a[text()='Fast and secure application']"
});
myMap.addElement('NewCarSummary', {
    name : 'ClicktoTalkLink',
    description : 'Click to Talk Link',
    locator : "//a[contains(@target,'talk')]"
});
myMap.addElement('NewCarSummary', {
    name : 'StartaChatLink',
    description : 'Start a Chat Link',
    locator : "//a[contains(@target,'chat')]"
});
myMap.addElement('NewCarSummary', {
    name : 'CartSummaryEdit',
    description : 'Cart Summary Edit',
    locator : "//a[text()='edit']"
});
myMap.addElement('NewCarSummary', {
    name : 'PrevRecentlyViewed',
    description : 'prev-recently-viewed',
    locator : "//a[@id='prev-recently-viewed']"
});
myMap.addElement('NewCarSummary', {
    name : 'NextRecentlyViewed',
    description : 'next-recently-viewed',
    locator : "//a[@id='next-recently-viewed']"
});

/*myMap.addElement('NewCarSummary', {
    name : 'AddOtherPlans1Button',
    description : 'Add Other Plans1 Button',
    locator : "xpath=(//a[contains(text(),'ADD')])[1]"
});
myMap.addElement('NewCarSummary', {
    name : 'AddOtherPlans2Button',
    description : 'Add Other Plans2 Button',
    locator : "xpath=(//a[contains(text(),'ADD')])[2]"
});
myMap.addElement('NewCarSummary', {
    name : 'AddOtherPlans3Button',
    description : 'Add Other Plans3 Button',
    locator : "xpath=(//a[contains(text(),'ADD')])[3]"
});
myMap.addElement('NewCarSummary', {
    name : 'AddOtherPlans4Button',
    description : 'Add Other Plans4 Button',
    locator : "xpath=(//a[contains(text(),'ADD')])[4]"
});*/

myMap.addElement('NewCarSummary', {
    name : 'ShopforHealthInsuranceButton',
    description : 'Shop for Health Insurance Button',
    locator : "//img[@alt='Shop for Health Insurance']"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans1Link',
    description : 'Remove Plans1 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[1]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans2Link',
    description : 'Remove Plans2 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[2]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans3Link',
    description : 'Remove Plans3 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[3]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans4Link',
    description : 'Remove Plans4 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[4]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans5Link',
    description : 'Remove Plans5 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[5]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans6Link',
    description : 'Remove Plans6 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[6]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans7Link',
    description : 'Remove Plans7 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[7]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans8Link',
    description : 'Remove Plans8 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[8]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans9Link',
    description : 'Remove Plans9 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[9]"
});
myMap.addElement('NewCarSummary', {
    name : 'RemovePlans10Link',
    description : 'Remove Plans10 Link',
    locator : "xpath=(//a[contains(text(),'Remove')])[10]"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Begin Your Application Page Elements - Luluk
// A Flow Begin Your Application Page Elements
myMap.addPageset({
    name : 'NewBeginYourApplication',
    description : 'Begin Your Application',
    pathRegexp : '.*'
}); 
myMap.addElement('NewBeginYourApplication', {
    name : 'LearnMoreLink',
    description : 'Learn More Link',
    locator : "//a[contains(text(),'(Learn More)')]"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Sign In Page Elements - Luluk
// Sign In Page Elements
myMap.addPageset({
    name : 'RedesignSignIn',
    description : 'Redesign Sign In Page',
    pathRegexp : '.*'
}); 
myMap.addElement('RedesignSignIn', {
    name : 'CreateAnAccountLink',
    description : 'Create an account Link',
    locator : "//a[text()='Create an account']"
});
myMap.addElement('RedesignSignIn', {
    name : 'EmailAddressBox',
    description : 'Email Address Box',
    locator : "//input[@id='email' and @name='email']"
});
myMap.addElement('RedesignSignIn', {
    name : 'PasswordBox',
    description : 'Password Box',
    locator : "//input[@id='password' and @name='password']"
});
myMap.addElement('RedesignSignIn', {
    name : 'RememberMeOnThisComputerCheck',
    description : 'Remember me on this computer Check Box',
    locator : "//input[@id='checkbox-id-1' and @name='rememberMe']"
});
myMap.addElement('RedesignSignIn', {
    name : 'ForgotEmailOrPasswordLink',
    description : 'Forgot email or password Link',
    locator : "//span[text()='Forgot email or password?']"
});
// SignInButton¾­³£Â¼²»½øÈ¥
myMap.addElement('RedesignSignIn', {
    name : 'SignInButton',
    description : 'Sign In Button',
    locator : "//div[@id='btn-sign-in']"
});

myMap.addElement('RedesignSignIn', {
    name : 'ForgotEmailInputBox',
    description : 'Forgot email Input Box',
    locator : "//input[@id='forget-email-input']"
});
myMap.addElement('RedesignSignIn', {
    name : 'CancelLink',
    description : 'Cancel Input Link',
    locator : "//div[text()='Cancel']"
});
// RetrievePasswordButtonÂ¼²»½øÈ¥
myMap.addElement('RedesignSignIn', {
    name : 'RetrievePasswordButton',
    description : 'Retrieve password Button',
    locator : "//div[text()='Retrieve password']"
});
myMap.addElement('RedesignSignIn', {
    name : 'CloseButton',
    description : 'Close Button',
    locator : "//div[text()='Close']"
});

myMap.addElement('RedesignSignIn', {
    name : 'EMailIsRequiredLink',
    description : 'EMail is required Link',
    locator : "//a[contains(text(),'Email Address:')]"
});
myMap.addElement('RedesignSignIn', {
    name : 'PasswordIsRequiredLink',
    description : 'Password is required Link',
    locator : "//a[contains(text(),'Password:')]"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Sign Out Page Elements - Luluk
// Sign Out Page Elements
myMap.addPageset({
    name : 'RedesignSignOut',
    description : 'Redesign Sign Out Page',
    pathRegexp : '.*'
}); 
myMap.addElement('RedesignSignOut', {
    name : 'ReturnToMyEhealthLink',
    description : 'Return to My Ehealth Link',
    locator : "//a[contains(text(),'Return to My Ehealth')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'ReturnToHomePageLink',
    description : 'Return to Home Page Link',
    locator : "//a[contains(text(),'Return to Home Page')]"
});
// Common Questions
myMap.addElement('RedesignSignOut', {
    name : 'HowCanIInsureJustMyChildLink',
    description : 'How can I insure just my child? Link',
    locator : "//a[contains(text(),'How can I insure just my child?')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'WhenCanMyCoverageStartLink',
    description : 'When can my coverage start? Link',
    locator : "//a[contains(text(),'When can my coverage start?')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'MoreCommonQuestionsLink',
    description : 'More Common Questions Link',
    locator : "//a[contains(text(),'More>>')]"
});
// Why eHealthInsurance
myMap.addElement('RedesignSignOut', {
    name : 'WhyBuyFromUsLink',
    description : 'Why buy from us? Link',
    locator : "//a[contains(text(),'Why buy from us?')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'WeOfferTheBestPricesLink',
    description : 'We offer the best prices Link',
    locator : "//a[contains(text(),'We offer the best prices')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'NoAdditionalCostForOurServicesLink',
    description : 'No additional cost for our services Link',
    locator : "//a[contains(text(),'No additional cost for our services')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'ApplyWithNoObligation!Link',
    description : 'Apply with no obligation! Link',
    locator : "//a[contains(text(),'Apply with no obligation!')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'WeProtectYourPrivacyLink',
    description : 'We protect your privacy Link',
    locator : "//a[contains(text(),'We protect your privacy')]"
});
myMap.addElement('RedesignSignOut', {
    name : 'GetHelpResolvingClaimIssuesLink',
    description : 'Get help resolving claim issues Link',
    locator : "//a[contains(text(),'Get help resolving claim issues')]"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign Register Page Elements - Luluk
myMap.addPageset({
    name : 'RedesignRegister',
    description : 'Redesign Register Page',
    pathRegexp : '.*'
}); 
myMap.addElement('RedesignRegister', {
    name : 'RegisterSignInLink',
    description : 'Register Sign In Link',
    locator : "//a[contains(text(),'Sign In')]"
});
myMap.addElement('RedesignRegister', {
    name : 'ConfirmEmailBox',
    description : 'confirmEmail Box',
    locator : "//input[@id='confirmEmail']"
});
myMap.addElement('RedesignRegister', {
    name : 'CheckBoxId1Box',
    description : 'Check Box',
    locator : "//input[@id='checkbox-id-1' and @name='emailOpt']"
});
myMap.addElement('RedesignRegister', {
    name : 'CreateAccountButton',
    description : 'Create Account Button',
    locator : "//input[@id='create-account-btn']"
});

myMap.addElement('RedesignRegister', {
    name : 'E-MailRequiredLink',
    description : 'E-Mail is required Link',
    locator : "//a[contains(text(),'E-mail Address')]"
});
myMap.addElement('RedesignRegister', {
    name : 'PasswordRequiredLink',
    description : 'Password is required Link',
    locator : "//a[contains(text(),'Password')]"
});
myMap.addElement('RedesignRegister', {
    name : 'E-MailConfirmationIsRequiredLink',
    description : 'E-Mail confirmation is required Link',
    locator : "//a[contains(text(),'Retype E-mail Address')]"
});


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Redesign App Folw Elements - Luluk
myMap.addPageset({
    name : 'RedesignApp',
    description : 'Redesign App Flow',
    pathRegexp : '.*'
}); 
myMap.addElement('RedesignApp', {
    name : 'AppSaveAppButton',
    description : 'App Save Application Button',
    locator : "//span[@id='btn-save-app']"
});
myMap.addElement('RedesignApp', {
    name : 'AppContinueButton',
    description : 'App Continue Button',
    locator : "//input[@name='xfm.event.NextPage.']"
});
myMap.addElement('RedesignApp', {
    name : 'AppBackButton',
    description : 'App Back Button',
    locator : "//input[@name='xfm.event.PreviousPage.']"
});
myMap.addElement('RedesignApp', {
    name : 'AppAnonymousContinueButton',
    description : 'App Anonymous Continue Button',
    locator : "//input[@name='xfm.event.anonymousContinue.']"
});
myMap.addElement('RedesignApp', {
    name : 'AppSubmitButton',
    description : 'App Submit Button',
    locator : "//input[@name='xfm.event.Submit.']"
});
myMap.addElement('RedesignApp', {
    name : 'AppAgreeButton',
    description : 'App Agree Button',
    locator : "//input[@name='xfm.event.Agree.']"
});
myMap.addElement('RedesignApp', {
    name : 'AppDisagreeButton',
    description : 'App Disagree Button',
    locator : "//input[@name='xfm.event.Disagree.']"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Sidebar - Dominic
// Click to Talk, we'll call you
/*myMap.addPageset({
    name : 'NewSidebar',
    description : 'NewSidebar',
    pathRegexp : '.*'
}); 
myMap.addElement('NewSidebar', {
    name : 'NeedHelpLink',
    description : 'Need Help? Link',
    locator : "//a[contains(text(),'Need Help?')]"
});
myMap.addElement('NewSidebar', {
    name : 'ClickToTalkLink',
    description : 'Click to Talk, we will call you Link',
    locator : "//a[contains(text(),'Click to Talk, we'll call you')]"
	//locator : "link=Click to Talk, we'll call you"
});*/




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Videos - Dominic
myMap.addPageset({
    name : 'NewVideos',
    description : 'NewVideos',
    pathRegexp : '.*'
}); 
myMap.addElement('NewVideos', {
    name : 'CloseVidoeButton',
    description : 'Close Vidoe Button',
    locator : "//div[@class='fancybox-item fancybox-close']"
});
myMap.addElement('NewVideos', {
    name : 'PrevVideos',
    description : 'Turn To Previous videos',
    locator : "//a[@id='prev-videos']"
});
myMap.addElement('NewVideos', {
    name : 'NextVideos',
    description : 'Turn To Next videos',
    locator : "//a[@id='next-videos']"
});
myMap.addElement('NewVideos', {
    name : 'HowDoesnAnHSAWork??',
    description : 'How doesn an HSA work?',
    locator : "//img[@alt='How doesn an HSA work?']"
});
myMap.addElement('NewVideos', {
    name : 'WhatIsHMO?',
    description : 'What is HMO?',
    locator : "//img[@alt='What is HMO?']"
});
myMap.addElement('NewVideos', {
    name : 'HowDoesCoinsuranceWork?',
    description : 'How does coinsurance work?',
    locator : "//img[@alt='How does coinsurance work?']"
});
myMap.addElement('NewVideos', {
    name : 'WhatIsPPO?',
    description : 'What is PPO?',
    locator : "//img[@alt='What is PPO?']"
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Recently Viewed Plans - Dominic
myMap.addPageset({
    name : 'NewRecentlyViewed',
    description : 'Recently Viewed Plans',
    pathRegexp : '.*'
}); 
myMap.addElement('NewRecentlyViewed', {
    name : 'NextRecentlyViewed',
    description : 'next-recently-viewed',
	locator : "//a[@id='next-recently-viewed']"
});
myMap.addElement('NewRecentlyViewed', {
    name : 'PrevRecentlyViewed',
    description : 'prev-recently-viewed',
	locator : "//a[@id='prev-recently-viewed']"
});
//recently Viewed Plans Apply
myMap.addElement('NewRecentlyViewed', {
    name : 'RecentlyViewedPlans1',
    description : 'Recently Viewed Plans 1',
	locator : "xpath=(//div[@id='recentlyViewedPlans']//a[text()='Apply'])[1]"
});
myMap.addElement('NewRecentlyViewed', {
    name : 'RecentlyViewedPlans2',
    description : 'Recently Viewed Plans 2',
	locator : "xpath=(//div[@id='recentlyViewedPlans']//a[text()='Apply'])[2]"
});
myMap.addElement('NewRecentlyViewed', {
    name : 'RecentlyViewedPlans3',
    description : 'Recently Viewed Plans 3',
	locator : "xpath=(//div[@id='recentlyViewedPlans']//a[text()='Apply'])[3]"
});
myMap.addElement('NewRecentlyViewed', {
    name : 'RecentlyViewedPlans4',
    description : 'Recently Viewed Plans 4',
	locator : "xpath=(//div[@id='recentlyViewedPlans']//a[text()='Apply'])[4]"
});
myMap.addElement('NewRecentlyViewed', {
    name : 'RecentlyViewedPlans5',
    description : 'Recently Viewed Plans 5',
	locator : "xpath=(//div[@id='recentlyViewedPlans']//a[text()='Apply'])[5]"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Complete Your Coverage With Other Valuable Plans: - Dominic
myMap.addPageset({
    name : 'NewCompleteCoverage',
    description : 'Complete Coverage & Additional Benefits',
    pathRegexp : '.*'
}); 
//id=next-cross-sell: seems do not work
myMap.addElement('NewCompleteCoverage', {
    name : 'NextCrossSell',
    description : 'next-cross-sell',
	locator : "a[@id='next-cross-sell']"
});
//id=prev-cross-sell: seems do not work
myMap.addElement('NewCompleteCoverage', {
    name : 'PrevCrossSell',
    description : 'prev-cross-sell',
	locator : "a[@id='prev-cross-sell']"
});
//Add plan
myMap.addElement('NewCompleteCoverage', {
    name : 'AddPlan1',
    description : 'Add Plan 1',
	locator : "xpath=(//a[contains(text(),'Add')])[1]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'AddPlan2',
    description : 'Add Plan 2',
	locator : "xpath=(//a[contains(text(),'Add')])[2]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'AddPlan3',
    description : 'Add Plan 3',
	locator : "xpath=(//a[contains(text(),'ADD')])[3]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'AddPlan4',
    description : 'Add Plan 4',
	locator : "xpath=(//a[contains(text(),'ADD')])[4]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'AddPlan5',
    description : 'Add Plan 5',
	locator : "xpath=(//a[contains(text(),'ADD')])[5]"
});
//See All Dental,Vision,Accident,Illness Plans
myMap.addElement('NewCompleteCoverage', {
    name : 'SeeAllDentalPlans',
    description : 'See All Dental Plans',
	locator : "//a[contains(text(),'See All Dental Plans')]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'SeeAllVisionPlans',
    description : 'See All Vision Plans',
	locator : "//a[contains(text(),'See All Vision Plans')]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'SeeAllAccidentPlans',
    description : 'See All Accident Plans',
	locator : "//a[contains(text(),'See All Accident Plans')]"
});
myMap.addElement('NewCompleteCoverage', {
    name : 'SeeAllCriticalIllnessPlans',
    description : 'See All Critical Illness Plans',
	locator : "//a[contains(text(),'See All Critical Illness Plans')]"
});



























