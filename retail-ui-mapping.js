var myMap = new UIMap();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Home page elements
myMap.addPageset({
    name : 'HomePage',
    description : 'Core site home page',
    pathRegexp : '.*'
}); 
myMap.addElement('HomePage', {
    name : 'ZipCode',
    description : 'zip code Text Box',
    locator : "zipCode"
});
myMap.addElement('HomePage', {
    name : 'GoButton',
    description : 'Go button',
    locator : "//input[@alt='Get Health Insurance Quotes']"
});
myMap.addElement('HomePage', {
    name : 'InsuranceType',
    description : 'Insurance Type Dropdown',
    locator : "//select[@name='insuranceType']"
});
myMap.addElement('HomePage', {
    name : 'EmailAddress',
    description : 'Login Email',
    locator : "email"
});
myMap.addElement('HomePage', {
    name : 'Password',
    description : 'Login Password',
    locator : "password"
});
myMap.addElement('HomePage', {
    name : 'LoginButton',
    description : 'Login button',
    locator : "//input[@alt='Login']"
});
myMap.addElement('HomePage', {
    name : 'ForgotPass',
    description : 'Forgot email or password link',
    locator : "//a[text()='Forgot your email or password?']"
});
myMap.addElement('HomePage', {
    name : 'SignIn',
    description : 'SignIn Link',
    locator : "//a[contains(text(),'Sign in')]"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Census page elements
// 1. IFP Census page elements
myMap.addPageset({
    name : 'CensusPage',
    description : 'census page',
    pathRegexp : '.*'
}); 
myMap.addElement('CensusPage', {
    name : 'AddChild',
    description : 'Add More Child link',
    locator : "//input[@id='_addMoreKids']"
});

myMap.addElement('CensusPage', {
    name : 'ZipCode',
    description : 'Zip Code Text Box',
    locator : "//input[@id='census_zipCode']"
});
myMap.addElement('CensusPage', {
    name : 'EffectiveDate',
    description : 'Effective Date Dropdown list',
    locator : "//select[@id='census_requestEffectiveDate']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantGender',
    description : 'Applicant Gender Dropdown list',
    locator : "//select[@id='census_primary_gender']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantBirMonth',
    description : 'Applicant Birth Month Text Box',
    locator : "//input[@id='census_primary_month']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantBirDay',
    description : 'Applicant Birth Day Text Box',
    locator : "//input[@id='census_primary_day']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantBirYear',
    description : 'Applicant Birth Year Text Box',
    locator : "//input[@id='census_primary_year']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantTobaccoYes',
    description : 'Yes for Applicant Tobacco Radio',
    locator : "//input[@id='census_primary_tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantTobaccoNo',
    description : 'No for Applicant Tobacco Radio',
    locator : "//input[@id='census_primary_tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantStudentYes',
    description : 'Yes for Applicant Student Radio',
    locator : "//input[@id='census_primary_studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'ApplicantStudentNo',
    description : 'No for Applicant Student Radio',
    locator : "//input[@id='census_primary_studentfalse' and @type='radio']"
});

myMap.addElement('CensusPage', {
    name : 'SpouseGender',
    description : 'Spouse Gender Dropdown list',
    locator : "//select[@id='census_secondary_gender']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseBirMonth',
    description : 'Spouse Birth Month Text Box',
    locator : "//input[@id='census_secondary_month']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseBirDay',
    description : 'Spouse Birth Day Text Box',
    locator : "//input[@id='census_secondary_day']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseBirYear',
    description : 'Spouse Birth Year Text Box',
    locator : "//input[@id='census_secondary_year']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseTobaccoYes',
    description : 'Yes for Spouse Tobacco Radio',
    locator : "//input[@id='census_secondary_tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseTobaccoNo',
    description : 'No for Spouse Tobacco Radio',
    locator : "//input[@id='census_secondary_tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseStudentYes',
    description : 'Yes for Spouse Student Radio',
    locator : "//input[@id='census_secondary_studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'SpouseStudentNo',
    description : 'No for Spouse Student Radio',
    locator : "//input[@id='census_secondary_studentfalse' and @type='radio']"
});

myMap.addElement('CensusPage', {
    name : 'Child1Gender',
    description : 'Child1 Gender Dropdown list',
    locator : "//select[@id='census_children_0__gender']"
});
myMap.addElement('CensusPage', {
    name : 'Child1BirMonth',
    description : 'Child1 Birth Month Text Box',
    locator : "//input[@id='census_children_0__month']"
});
myMap.addElement('CensusPage', {
    name : 'Child1BirDay',
    description : 'Child1 Birth Day Text Box',
    locator : "//input[@id='census_children_0__day']"
});
myMap.addElement('CensusPage', {
    name : 'Child1BirYear',
    description : 'Child1 Birth Year Text Box',
    locator : "//input[@id='census_children_0__year']"
});
myMap.addElement('CensusPage', {
    name : 'Child1TobaccoYes',
    description : 'Yes for Child1 Tobacco Radio',
    locator : "//input[@id='census_children_0__tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child1TobaccoNo',
    description : 'No for Child1 Tobacco Radio',
    locator : "//input[@id='census_children_0__tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child1StudentYes',
    description : 'Yes for Child1 Student Radio',
    locator : "//input[@id='census_children_0__studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child1StudentNo',
    description : 'No for Child1 Student Radio',
    locator : "//input[@id='census_children_0__studentfalse' and @type='radio']"
});

myMap.addElement('CensusPage', {
    name : 'Child2Gender',
    description : 'Child2 Gender Dropdown list',
    locator : "//select[@id='census_children_1__gender']"
});
myMap.addElement('CensusPage', {
    name : 'Child2BirMonth',
    description : 'Child2 Birth Month Text Box',
    locator : "//input[@id='census_children_1__month']"
});
myMap.addElement('CensusPage', {
    name : 'Child2BirDay',
    description : 'Child2 Birth Day Text Box',
    locator : "//input[@id='census_children_1__day']"
});
myMap.addElement('CensusPage', {
    name : 'Child2BirYear',
    description : 'Child2 Birth Year Text Box',
    locator : "//input[@id='census_children_1__year']"
});
myMap.addElement('CensusPage', {
    name : 'Child2TobaccoYes',
    description : 'Yes for Child2 Tobacco Radio',
    locator : "//input[@id='census_children_1__tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child2TobaccoNo',
    description : 'No for Child2 Tobacco Radio',
    locator : "//input[@id='census_children_1__tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child2StudentYes',
    description : 'Yes for Child2 Student Radio',
    locator : "//input[@id='census_children_1__studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child2StudentNo',
    description : 'No for Child2 Student Radio',
    locator : "//input[@id='census_children_1__studentfalse' and @type='radio']"
});

myMap.addElement('CensusPage', {
    name : 'Child3Gender',
    description : 'Child3 Gender Dropdown list',
    locator : "//select[@id='census_children_2__gender']"
});
myMap.addElement('CensusPage', {
    name : 'Child3BirMonth',
    description : 'Child3 Birth Month Text Box',
    locator : "//input[@id='census_children_2__month']"
});
myMap.addElement('CensusPage', {
    name : 'Child3BirDay',
    description : 'Child3 Birth Day Text Box',
    locator : "//input[@id='census_children_2__day']"
});
myMap.addElement('CensusPage', {
    name : 'Child3BirYear',
    description : 'Child3 Birth Year Text Box',
    locator : "//input[@id='census_children_2__year']"
});
myMap.addElement('CensusPage', {
    name : 'Child3TobaccoYes',
    description : 'Yes for Child3 Tobacco Radio',
    locator : "//input[@id='census_children_2__tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child3TobaccoNo',
    description : 'No for Child3 Tobacco Radio',
    locator : "//input[@id='census_children_2__tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child3StudentYes',
    description : 'Yes for Child3 Student Radio',
    locator : "//input[@id='census_children_2__studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child3StudentNo',
    description : 'No for Child3 Student Radio',
    locator : "//input[@id='census_children_2__studentfalse' and @type='radio']"
});

myMap.addElement('CensusPage', {
    name : 'Child4Gender',
    description : 'Child4 Gender Dropdown list',
    locator : "//select[@id='census_children_3__gender']"
});
myMap.addElement('CensusPage', {
    name : 'Child4BirMonth',
    description : 'Child4 Birth Month Text Box',
    locator : "//input[@id='census_children_3__month']"
});
myMap.addElement('CensusPage', {
    name : 'Child4BirDay',
    description : 'Child4 Birth Day Text Box',
    locator : "//input[@id='census_children_3__day']"
});
myMap.addElement('CensusPage', {
    name : 'Child4BirYear',
    description : 'Child4 Birth Year Text Box',
    locator : "//input[@id='census_children_3__year']"
});
myMap.addElement('CensusPage', {
    name : 'Child4TobaccoYes',
    description : 'Yes for Child4 Tobacco Radio',
    locator : "//input[@id='census_children_3__tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child4TobaccoNo',
    description : 'No for Child4 Tobacco Radio',
    locator : "//input[@id='census_children_3__tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child4StudentYes',
    description : 'Yes for Child4 Student Radio',
    locator : "//input[@id='census_children_3__studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child4StudentNo',
    description : 'No for Child4 Student Radio',
    locator : "//input[@id='census_children_3__studentfalse' and @type='radio']"
});

myMap.addElement('CensusPage', {
    name : 'Child5Gender',
    description : 'Child5 Gender Dropdown list',
    locator : "//select[@id='census_children_4__gender']"
});
myMap.addElement('CensusPage', {
    name : 'Child5BirMonth',
    description : 'Child5 Birth Month Text Box',
    locator : "//input[@id='census_children_4__month']"
});
myMap.addElement('CensusPage', {
    name : 'Child5BirDay',
    description : 'Child5 Birth Day Text Box',
    locator : "//input[@id='census_children_4__day']"
});
myMap.addElement('CensusPage', {
    name : 'Child5BirYear',
    description : 'Child5 Birth Year Text Box',
    locator : "//input[@id='census_children_4__year']"
});
myMap.addElement('CensusPage', {
    name : 'Child5TobaccoYes',
    description : 'Yes for Child5 Tobacco Radio',
    locator : "//input[@id='census_children_4__tobaccotrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child5TobaccoNo',
    description : 'No for Child5 Tobacco Radio',
    locator : "//input[@id='census_children_4__tobaccofalse' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child5StudentYes',
    description : 'Yes for Child5 Student Radio',
    locator : "//input[@id='census_children_4__studenttrue' and @type='radio']"
});
myMap.addElement('CensusPage', {
    name : 'Child5StudentNo',
    description : 'No for Child5 Student Radio',
    locator : "//input[@id='census_children_4__studentfalse' and @type='radio']"
});


myMap.addElement('CensusPage', {
    name : 'GoButton',
    description : 'Go to quote page button',
    locator : "//input[@name='method:submit' and contains(@src,'wide-census-go.gif')]"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Footer elements -Monicaq
// 1. Footer elements

myMap.addPageset({
    name : 'Footer',
    description : 'Core site Footer',
    pathRegexp : '.*'
}); 
myMap.addElement('Footer', {
    name : 'HealthInsurance',
    description : 'HealthInsurance Link',
    locator : "//div[@class='footer-band']//a[text()='Health Insurance']"
});
myMap.addElement('Footer', {
    name : 'Medicare',
    description : 'Medicare Link',
    locator : "//div[@class='footer-band']//a[text()='Medicare']"
});
myMap.addElement('Footer', {
    name : 'MaternityCoverage ',
    description : 'MaternityCoverage Link',
    locator : "//a[contains(text(),'Maternity Coverage')]"
});
myMap.addElement('Footer', {
    name : 'PPO',
    description : 'PPO Plans Link',
    locator : "//a[contains(text(),'PPO Plans')]"
});
myMap.addElement('Footer', {
    name : 'HMO',
    description : 'HMO Plans Link',
    locator : "//a[contains(text(),'HMO Plans')]"
});
myMap.addElement('Footer', {
    name : 'eCommerce',
    description : 'eCommerce Link',
    locator : "//a[contains(text(),'eCommerce Solutions')]"
});
myMap.addElement('Footer', {
    name : 'MedicalPlans',
    description : 'MedicalPlansByState Link',
    locator : "//a[contains(text(),'Medical Plans By State')]"
});
myMap.addElement('Footer', {
    name : 'HealthCompanies',
    description : 'Health Insurance Companies Link',
    locator : "//a[contains(text(),'Health Insurance Companies')]"
});
myMap.addElement('Footer', {
    name : 'FindaDoctor',
    description : 'Find a Doctor Link',
    locator : "//a[contains(text(),'Find a Doctor')]"
});
myMap.addElement('Footer', {
    name : 'Segurom¨¦dico',
    description : 'Footer Seguro m¨¦dico Link',
    locator : "//a[contains(text(),'Seguro m¨¦dico')]"
});
myMap.addElement('Footer', {
    name : 'Mobile',
    description : 'Mobile Link',
    locator : "//div[@class='footer-content']//a[text()='Mobile']"
});
myMap.addElement('Footer', {
    name : 'CustomerService',
    description : 'Customer Service Link',
    locator : "//a[contains(text(),'Customer Service')]"
});
myMap.addElement('Footer', {
    name : 'AboutUs',
    description : 'About Us Link',
    locator : "//a[contains(text(),'About Us')]"
});
myMap.addElement('Footer', {
    name : 'Careers',
    description : 'Careers Link',
    locator : "//a[contains(text(),'Careers')]"
});
myMap.addElement('Footer', {
    name : 'LicensingandLegal',
    description : 'Licensing and Legal Link',
    locator : "//a[contains(text(),'Licensing and Legal')]"
});
myMap.addElement('Footer', {
    name : 'PrivacyPolicy',
    description : 'Privacy Policy Link',
    locator : "//a[contains(text(),'Privacy Policy')]"
});
myMap.addElement('Footer', {
    name : 'AffiliateProgram',
    description : 'Affiliate Program Link',
    locator : "//a[contains(text(),'Affiliate Program')]"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Quote page elements -Monicaq
// 1. IFP Quote page elements
myMap.addPageset({
    name : 'QuotePage',
    description : 'quote page',
    pathRegexp : '.*'
}); 
myMap.addElement('QuotePage', {
    name : 'Apply Plan',
    description : 'Click Apply Button',
    locator : "//a[contains(@href,'shopping-car')]"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Plan Detail page elements - Monicaq
// 1. IFP Plan Detail page elements
myMap.addPageset({
    name : 'PlanDetailPage',
    description : 'Plan Detail page',
    pathRegexp : '.*'
}); 
myMap.addElement('PlanDetailPage', {
    name : 'Apply Plan',
    description : 'Click Apply Button',
    locator : "//input[@name='method:addToCart']"
});
myMap.addElement('PlanDetailPage', {
    name : 'Show All Plan Details',
    description : 'Click Show All Plan Details Button',
    locator : "//img[@alt='Show All Plan Details']"
});




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Car Summary page elements - Monicaq
// 1. IFP Car Summary page elements
myMap.addPageset({
    name : 'CarSummary',
    description : 'Car Summary',
    pathRegexp : '.*'
}); 
myMap.addElement('CarSummary', {
    name : 'Begin Application',
    description : 'Click Begin Application Button',
    locator : "//input[@type='image' and @title='Begin']"
});



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Begin Your Application page elements - Monicaq
// 1. IFP Begin Your Application page elements
myMap.addPageset({
    name : 'BeginYourApplication',
    description : 'Begin Your Application',
    pathRegexp : '.*'
}); 
myMap.addElement('BeginYourApplication', {
    name : 'Continue',
    description : 'Click Continue Button',
    locator : "//input[@name='begin' and @title='Continue']"
});




