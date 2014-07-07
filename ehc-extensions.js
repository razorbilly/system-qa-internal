globalStoredVars = new Object();

/*
 * Globally store the value of a form input in a variable
 */
Selenium.prototype.doStoreValueGlobal = function(target, varName) {
    if (!varName) {
        // Backward compatibility mode: read the ENTIRE text of the page
        // and stores it in a variable with the name of the target
        value = this.page().bodyText();
        globalStoredVars[target] = value;
        return;
    }
    var element = this.page().findElement(target);
    globalStoredVars[varName] = getInputValue(element);
};

/*
 * Globally store the text of an element in a variable
 */
Selenium.prototype.doStoreTextGlobal = function(target, varName) {
    var element = this.page().findElement(target);
    globalStoredVars[varName] = getText(element);
};

/*
 * Globally store the value of an element attribute in a variable
 */
Selenium.prototype.doStoreAttributeGlobal = function(target, varName) {
    globalStoredVars[varName] = this.page().findAttribute(target);
};

/*
 * Globally store the result of a literal value
 */
Selenium.prototype.doStoreGlobal = function(value, varName) {
    globalStoredVars[varName] = value;
};

/*
 * Search through str and replace all variable references ${varName} with their
 * value in storedVars (or globalStoredVars).
 */
Selenium.prototype.replaceVariables = function(str) {
    var stringResult = str;

    // Find all of the matching variable references
    var match = stringResult.match(/\$\{\w+\}/g);
    if (!match) {
        return stringResult;
    }

    // For each match, lookup the variable value, and replace if found
    for (var i = 0; match && i < match.length; i++) {
        var variable = match[i]; // The replacement variable, with ${}
        var name = variable.substring(2, variable.length - 1); // The replacement variable without ${}
        var replacement = storedVars[name];
        if (replacement != undefined) {
            stringResult = stringResult.replace(variable, replacement);
        }
        var replacement = globalStoredVars[name];
        if (replacement != undefined) {
            stringResult = stringResult.replace(variable, replacement);
        }
    }
    return stringResult;
};

Selenium.prototype.doRedBorder = function(locator, text) {
  var element = this.page().findElement(locator);
  element.style.borderWidth = 1;
  element.style.borderStyle = "solid";
  element.style.borderColor = "red";
};

Selenium.prototype.doSearchApp = function(locator, text) {
  var elem = this.page().findElement(locator);
  elem = elem.parentNode;
  elem = elem.getElementsByTagName("TD")[13];
  elem = elem.getElementsByTagName("A")[0];
  this.browserbot.clickElement(elem);
};

Selenium.prototype.getAppID = function() {
  var url = this.browserbot.getCurrentWindow().location.href;
  var i1 = url.indexOf("appID=");
  if(i1==-1){
	i1 = url.indexOf("appId=");
  }
  var i2 = url.indexOf("&",i1);
  return url.substring(i1+6,i2)
};
Selenium.prototype.getURL = function() {
  var url = this.browserbot.getCurrentWindow().location.href;
  var i1 = url.indexOf("appID=");
  if(i1==-1){
	i1 = url.indexOf("appId=");
  }
  var i2 = url.indexOf("&",i1);
  return url
};
function getSysDate(){
	
	

	return dateAfterDays(new Date(), -0.66667, 1); //substribe 16 hours
    //return dateAfterDays(new Date(), -0.625, 1); //substribe 15 hours    
}

function getDaylightSavingStartDate(){
	var sysDate = new Date();
	var year = sysDate.getFullYear();
	var march1 = new Date(year,3,1);
	
	var day = march1.getDay();
	if(day==0){
		return march1;
	}else{
		var n=6-day+8;
		return new Date(year,3,n,3);
	}

}

function getDaylightSavingEndDate(){
	var sysDate = new Date();
	var year = sysDate.getFullYear();
	var oct1 = new Date(year,11,1);
	
	var day = oct1.getDay();
	if(day==0){
		return oct1;
	}else{
		var n=6-day+8;
		return new Date(year,3,n,3);
	}
	
}

Selenium.prototype.getOddKeyInfoRowIdx = function(locator)
{
	var table = this.page().findElement(locator);
	var getted;
	
	for(r=3;r<table.rows.length;r++)
	{
		var a = this.page().findElement(locator+"//tr["+ (r+1) +"]//nobr/a[1]");
		
		if(a != null)
		{
			getted = true;

			var href = a.href;
			var pos1 = href.indexOf("leadID");
			var str1 = href.substr(pos1+7);
			var pos2 = str1.indexOf("&");
			var str2 = str1.substring(0,pos2);
			var leadID = parseInt(str2);
			
			if(leadID%2 == 0)
			{
				getted = false;
				continue;
			}
			else if(getText(table.rows[r].cells[7])!="Lead - New")
			{
				getted = false;
				continue;
			}
		}
		else
		{
			getted = false;
		}

		if(getted) 
			return r;
			
	}
	
	if(!getted) throw new SeleniumError("can't find the row");
}


/* return the date N days(N*24 hours) before/after some day.
 * args   :   num - positive/negative integer/float number,default is "1";  
 *            type - 0 (second) or 1 (day), default is second.  
 * return :   Date 
 */  
function dateAfterDays(date, num, type){
	date = (date == null?new Date():date);
	num = (num == null?1:num);
	
	if(typeof(num)!="number")
		throw new SeleniumError("dateAfterDays(date, num, type),\"num\" argument must be Number type.");

	if(typeof(date)!="object")
		throw new SeleniumError("dateAfterDays(date, num, type),\"date\" argument must be Date type.");

	var iType = (type == null?0:type);
	var arr = [1000,86400000];
	var dd = date.valueOf();
	dd += num * arr[iType];
	var d=new Date(dd);
	return d;
}

// return the database(which in US) date, it's 16 hours later than CN.
Selenium.prototype.getSysDate = function(args)
{
	// format of args: month,day,year
	if(args.trim().length < 3)
		throw new SeleniumError("arguments must contain \"Month\",\"Date\",\"Year\" variables!");
	
	var sysDate = getSysDate();
	
	var arrArgs = args.split(",");
	storedVars[arrArgs[0]] = sysDate.getMonth()+1;
	storedVars[arrArgs[1]] = sysDate.getDate();
	storedVars[arrArgs[2]] = sysDate.getFullYear();
}

Selenium.prototype.doStoreDate = function(days,args)
{
	// format of args: month,day,year
	if(args.trim().length < 3)
		throw new SeleniumError("arguments must contain \"Month\",\"Date\",\"Year\" variables!");

	var sysDate = getSysDate();
	var arrArgs = args.split(",");
	var date = dateAfterDays(sysDate,parseFloat(days),1);
	storedVars[arrArgs[0]] = date.getMonth()+1;
	storedVars[arrArgs[1]] = date.getDate();
	storedVars[arrArgs[2]] = date.getFullYear();

}

Selenium.prototype.getSpecRowIndex = function(locator) {
  var idx = locator.lastIndexOf("|");
  var locator1 = locator.substring(0,idx);
  var locator2 = locator.substring(idx+1);
  
  var ar_spec = locator2.split(" and ");

  var table = this.page().findElement(locator1);
  var cellidx;
  var expectedValue;
  var actualValue;
  var getted;

  for(r=0;r<table.rows.length;r++)
  {
	getted = true;
	for(i=0;i<ar_spec.length;i++)
	{
	  idx = ar_spec[i].indexOf("=");
	  cellidx = ar_spec[i].substring(0,idx).trim();
	  expectedValue = ar_spec[i].substring(idx+1).trim();
	  actualValue = getText(table.rows[r].cells[cellidx]);
	  
	  if(!PatternMatcher.matches(expectedValue, actualValue)){
		  getted = false;
		  break;
	  }
	}
	if(getted) return r;
  }
  if(!getted) throw new SeleniumError("can't find the row");
};

//=========  Add on 2007-12-07==============

Selenium.prototype.getSysDateStr = function()
{
	var sysDate = getSysDate();

	var month = sysDate.getMonth()+1;
	var date = sysDate.getDate();
	var year = sysDate.getFullYear();

	month = (month+"").length>1?month:"0"+month;
	date = (date+"").length>1?date:"0"+date;

	return month+"-"+date+"-"+year;
}

Selenium.prototype.getEmailSuffix = function()
{
	var d = new Date();
	var year=(d.getFullYear()+'').substr(2);
	var month=(d.getMonth()+1)+'';
	month=(month.length==2?month:("0"+month));
	var day=d.getDate()+'';
	day=(day.length==2?day:"0"+day);
	var hour=d.getHours()+'';
	hour=(hour.length==2?hour:"0"+hour);
	var min=d.getMinutes()+'';
	min=(min.length==2?min:"0"+min);
	var second = d.getSeconds()+'';
	second = (second.length==2?second:"0"+second);
	
	return year+month+day+hour+min+second;
}

Selenium.prototype.getMonthFullName = function(month)
{
	var monthArr = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

	if(month == null)
	{
		throw new SeleniumError("you didn't specify a Month");
	}

	try
	{
		month = parseInt(month);
	}
	catch (e)
	{
		throw new SeleniumError("\"Month\" is not a Integer!");
	}

	return monthArr[month-1];
}

Selenium.prototype.getBOContextPath = function(url)
{
	//var BO_Home = storedVars['BO_Home'];
	var pos = url.indexOf("/ehi/");
	return url.substr(0,pos+5);
}

Selenium.prototype.getFullUrl = function(path)
{
	var url = path.split("|");
    var boContext = this.getBOContextPath(url[0]);
	var contextPos = url[1].indexOf("/ehi/");
	if(contextPos<0)
	{
		return boContext+url[1];
	}
	else if(contextPos == 0)
	{
		var subpath = url[1].substring(5);
		return boContext+subpath;
	}
}

Selenium.prototype.getIncludeStrs = function (arg)
{
    var args = arg.split(",");
    
    var includeStrs="";
    if(args[0]=="on"
        &&args[1]!=null
        &&args[1].length>0
        &&args[1]!="All")
    {
        includeStrs=args[1].replace(",",";");
    }
    
    return includeStrs;
}

// to verify alternative elements which are seperated by "||" indicates "OR"
Selenium.prototype.isAltElementPresent = function(locator)
{
    var locators = locator.split("||");
    
    for(i=0; i<locators.length; i++)
    {
        if(this.isElementPresent(locators[i]))
        {
            return true;
        }
    }
    
    return false;
}

Selenium.prototype.doTypeWhenExist = function(locator,txt) {
  try{
    var elem = this.page().findElement(locator);
	
	if(elem != null)
	{
        this.doType(locator,txt);
    }
  }catch(e){}
}

//================ 2008-01-04 ==================
Selenium.prototype.getSpecOption = function(locator)
{
    try{
        var locators = locator.split("|");
        var path = locators[0];
        var expect = locators[1];
                
        var elem = this.page().findElement(path);
	
        if(elem != null)
        {
            for(i=0; i<elem.options.length; i++)
            {
                if(PatternMatcher.matches(expect, elem.options[i].text))
                {
                    return elem.options[i].text;
                }
            }
            
            //throw new SeleniumError("Could not find the specified option!");
        }
        else
        {
            throw new SeleniumError("Could not find the specified Locator!");
        }
    }catch(e){
        throw new SeleniumError(e.message);
    }
}

Selenium.prototype.isSpecOptionPresent = function(locator, expect)
{
    try{
        var elem = this.page().findElement(locator);
	
        if(elem != null)
        {
            for(i=0; i<elem.options.length; i++)
            {
                if(PatternMatcher.matches(expect, getText(elem.options[i])))
                {
                    return true;
                }
            }
            
            return false;
            
            //throw new SeleniumError("Could not find the specified option!");
        }
        else
        {
            throw new SeleniumError("Could not find the specified Locator!");
        }
    }catch(e){
        throw new SeleniumError(e.message);
    }
}

//============ 2008-01-07 ======================
Selenium.prototype.doSelectWhenExist = function(locator,optionLocator) {
  try{
    var elem = this.page().findElement(locator);
	
	if(elem != null)
	{
        this.doSelect(locator,optionLocator);
    }
  }catch(e){}
}

Selenium.prototype.getMonthShortName = function(month)
{
	var monthArr = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

	if(month == null)
	{
		throw new SeleniumError("you didn't specify a Month");
	}

	try
	{
		month = parseInt(month);
	}
	catch (e)
	{
		throw new SeleniumError("\"Month\" is not a Integer!");
	}

	return monthArr[month-1];
}

Selenium.prototype.doStoreSysDateByFormat = function(format,args)
{
	// format of args: month,day,year
	if(args.trim().length < 3)
		throw new SeleniumError("arguments must contain \"Month\",\"Date\",\"Year\" variables!");
	
	var sysDate = getSysDate();
	
	var arrArgs = args.split(",");

    var month = sysDate.getMonth()+1;
    var date = sysDate.getDate();
    var year = sysDate.getFullYear();
    
    var formats = format.split(",");

    // get Month string
    switch(formats[0].toUpperCase())
    {
        case "MM":
            month = (month+"").length==1?"0"+month:month;
            break;
        case "MMM":
            month = this.getMonthShortName(month);
            break;
        case "MMMM":
            month = this.getMonthFullName(month);
            break;
        case "M":
        default:
            // return 1 digit when month is lower than 10.
            // do nothing
    }

    //get Date string
    switch(formats[1].toUpperCase())
    {
        case "DD":
            date = (date+"").length==1?"0"+date:date;
            break;
        case "D":
        default:
            // return 1 digit when Date is lower than 10.
            // do nothing
    }

    //get Year string
    switch(formats[2].toUpperCase())
    {
        case "YY":
            year = (year+"").substr(2);
            break;
        case "YYYY":
        default:
            //do nothing.
    }
    
    storedVars[arrArgs[0]] = month;
	storedVars[arrArgs[1]] = date;
	storedVars[arrArgs[2]] = year;
}

// get a random TR index from a table. starts at "1".
Selenium.prototype.getRandomTRIdx = function(locator)
{
    // format of the "locator":
    // table[3]|3|2
    // "3" : indicates that the table has 3 rows which do not contain useful data.
    // "2" : indicates that there have 2 rows before the data area.
    var locators = locator.split("|");
    var table = locators[0];
    var usefullessRows = locators[1];
    var rowsBeforeDataArea = locators[2];
    
    var elem = this.page().findElement(table);
	
	if(elem != null)
	{
        var rowCount = elem.rows.length;
        var dataRowCount = rowCount - usefullessRows;
        var randomRow = Math.floor(Math.random() * dataRowCount) + 1;
        
        return randomRow + parseInt(rowsBeforeDataArea);
    }
    else
    {
        throw new SeleniumError("Could not find element \"" + table + "\"");
    }
}

Selenium.prototype.getRandomOptionIdx = function(locator)
{
    var locators = locator.split("|");
    
    var select = locators[0];
    var offSet = parseInt(locators[1]);
    if(offSet == NaN)
    {
        offSet = 0;
    }
    
    var elem = this.page().findElement(select);
	
	if(elem != null)
	{
        var optionCount = elem.options.length - offSet;
        var randomOption = Math.floor(Math.random() * optionCount);
        
        return randomOption + offSet;
    }
    else
    {
        throw new SeleniumError("Could not find element \"" + select + "\"");
    }
}

//=========================== 2008-1-11 ==================

/**
 * If you use "!=", you must verify that column also not equal to the title.
 */
Selenium.prototype.getSpecLastRowIndex = function(locator) {
	//var locator = "//table[3]|0='who and me will go?' and 1!=abc*cba and 2=who and 3=me you who";
    var idx = locator.indexOf("|");
    var locator1 = locator.substring(0,idx);
    var locator2 = locator.substring(idx+1);
    var filter = locator2.replace(/ and(?=([^\']*\'[^\']*\')*(?![^\']*\'))/g,"\b");
    var arr_spec = filter.split("\b");
    var arr_spec2 = new Array(arr_spec.length);
    for(i=0; i<arr_spec.length; i++)
    {
        var tmpArr
        var isMatch;
 		if(arr_spec[i].indexOf(">=")>=0)
        {
            tmpArr = arr_spec[i].split(">=");
            isMatch = ">=";
        }
        else if(arr_spec[i].indexOf("<=")>=0)
        {
            tmpArr = arr_spec[i].split("<=");
            isMatch = "<=";
        }
        else if(arr_spec[i].indexOf("!=")>=0)
        {
            tmpArr = arr_spec[i].split("!=");
            isMatch = false;
        }
        else if(arr_spec[i].indexOf("=")>=0)
        {
            tmpArr = arr_spec[i].split("=");
            isMatch = true;
        }
        else if(arr_spec[i].indexOf(">")>=0)
        {
            tmpArr = arr_spec[i].split(">");
            isMatch = ">";
        }
        else if(arr_spec[i].indexOf("<")>=0)
        {
            tmpArr = arr_spec[i].split("<");
            isMatch = "<";
        }
        
        var str = tmpArr[1];
        if(str.indexOf("\'")==0 && str.lastIndexOf("\'")==str.length-1)
        {
            str = str.substr(0,str.length-1).substr(1);
        }
        arr_spec2[i] = new Array(tmpArr[0],str,isMatch);
    }
  
	var table = this.page().findElement(locator1);
	var cellidx;
	var expectedValue;
	var actualValue;
	var getted;
	var expression = "";

	for(r=table.rows.length-1;r>=0;r--)
	{
		getted = true;
		for(i=0;i<arr_spec2.length;i++)
		{
			cellidx = parseInt(arr_spec2[i][0]);
			expectedValue = arr_spec2[i][1];
			
			if(table.rows[r].cells.length > cellidx)
			{
				actualValue = getText(table.rows[r].cells[cellidx]);
				
                if(typeof(arr_spec2[i][2])=="boolean")
                {
                    //if this row is not match expect value, then check next row.
                    if(PatternMatcher.matches(expectedValue, actualValue) != arr_spec2[i][2])
				    {
					   getted = false;
					   break;
				    }
				}
				else
				{
                    expression = "'"+actualValue+"'" + arr_spec2[i][2] + expectedValue;
                    //alert(expression);
                    var result = eval(expression);
                    if(typeof(result)!="boolean")
                    {
                        result = false;
                    }
                    
                    if(!result)
                    {
                        getted = false;
                        break;
                    }
                    
                }
				//alert(actualValue); for test
			}
			else
			{
				getted = false;
				break;
			}
		}
		if(getted) return r;
	}
	
	if(!getted) return -1;
};

//============== 2008-01-14 ===================

Selenium.prototype.getQuoteGridTable = function(locator)
{
    var elem = this.page().findElement(locator);
    var quoteTable = new Array();
    
    if(elem != null)
    {
        for(i=1; i<elem.rows.length; i++)
        {
            var rowArr = new Array();
            
            for(j=0; j<elem.rows[i].cells.length; j++)
            {
                if(j==0)
                {
                    var imgSrc = this.getAttribute(locator+"//tr["+(i+1)+"]/td[1]/img/@src");
                    rowArr[j] = imgSrc.substr(imgSrc.lastIndexOf('/')+1);
                }
                else
                {
                    rowArr[j] = this.getText(locator+"//tr["+(i+1)+"]/td["+(j+1)+"]");
                }
            }
            
            quoteTable[i-1] = rowArr;
        }
        
        return quoteTable;
    }
    else
    {
        throw new SeleniumError("Could not find element \"" + locator + "\"");
    }
}

Selenium.prototype.getMatchQuoteGridTable = function(locator)
{
    var elem = this.page().findElement(locator);
    var quoteTable = new Array();
    
    if(elem != null)
    {
        for(i=2,j=0; i<elem.rows.length-2; i=i+2)
        {
            var rowArr = new Array();
            var imgSrc = this.getAttribute(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[1]/table//tr[1]/td[1]//img/@src");
            rowArr[0] = imgSrc.substr(imgSrc.lastIndexOf('/')+1);
            //rowArr[0] = (storedVars['BO_Home']=='undefined'?globalStoredVars['BO_Home']:storedVars['BO_Home'])+"|"+imgSrc;

            var planName = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[1]/td[1]/table//tr/td[1]//a");
            planName = planName.substring(0,planName.indexOf("<")-1);
            var pos = planName.indexOf("(")>0?planName.indexOf("(")-1:planName.length;
            rowArr[1] = planName.substring(0,pos);
            rowArr[2] = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[1]/table//tr[2]/td[1]");
            rowArr[3] = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[1]/table//tr[2]/td[2]");
            rowArr[4] = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[2]/div");
            
            
            if(quoteTable.length == 0 || rowArr[0] != quoteTable[j-1][0])
            {
                quoteTable[j] = rowArr;
                j++;
                
            }

            if(j>=5)
            {
                break;
            }
        }
        
        return quoteTable;
    }
    else
    {
        throw new SeleniumError("Could not find element \"" + locator + "\"");
    }
}

Selenium.prototype.getMatchQuoteGridTable2 = function(locator)
{
    var elem = this.page().findElement(locator);
    var quoteTable = new Array();
    
    if(elem != null)
    {
        for(i=2,j=0; i<elem.rows.length-2; i=i+2)
        {
            var rowArr = new Array();
            var imgSrc = this.getAttribute(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[1]/table//tr[1]/td[1]//img/@src");
            rowArr[0] = imgSrc.substr(imgSrc.lastIndexOf('/')+1);
            //rowArr[0] = (storedVars['BO_Home']=='undefined'?globalStoredVars['BO_Home']:storedVars['BO_Home'])+"|"+imgSrc;

            var planName = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[1]/td[1]/table//tr/td[1]//a");
            planName = planName.substring(0,planName.indexOf("<")-1);
            var pos = planName.indexOf("(")>0?planName.indexOf("(")-1:planName.length;
            rowArr[1] = planName.substring(0,pos);
            rowArr[2] = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[1]/table//tr[2]/td[1]");
            rowArr[3] = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[1]/table//tr[2]/td[2]");
            rowArr[4] = this.getText(locator+"//tr["+(i+1)+"]/td/table//td[2]/table//tr[2]/td[2]/div");
            
            
            if(quoteTable.length == 0 || rowArr[4] != quoteTable[j-1][4])
            {
                quoteTable[j] = rowArr;
                j++;
                
            }

            if(j>=5)
            {
                break;
            }
        }
        
        return quoteTable;
    }
    else
    {
        throw new SeleniumError("Could not find element \"" + locator + "\"");
    }
}

//========== 2008-01-17 ==========================
Selenium.prototype.getDateStr = function(days)
{
	var sysDate = getSysDate();
    var date = dateAfterDays(sysDate,parseFloat(days),1);
    
	var month = sysDate.getMonth()+1;
	var date = sysDate.getDate();
	var year = sysDate.getFullYear();

	month = (month+"").length>1?month:"0"+month;
	date = (date+"").length>1?date:"0"+date;

	return month+"-"+date+"-"+year;
}

//============ 2008-01-22 =====================================

Selenium.prototype.doLoginAgentPortal = function(userName,passWord)
{
    this.doType("ehi.eodAP.AGENT.USERNAME",userName);
    this.doType("ehi.eodAP.AGENT.PASSWORD",passWord);
    this.doClickWhenExist("//input[@alt='Submit']");
    this.doClickWhenExist("//input[@alt='Login']");
}

Selenium.prototype.doLoginEX = function(userName,passWord)
{
    this.doType("mcei.bo.username",userName);
    this.doType("mcei.bo.password",passWord);
    this.doClick("//input[@name='Click here to login']");
}

Selenium.prototype.doLoginBO_IFP = function(userName,passWord)
{
    this.doType("mcei.bo.username",userName);
    this.doType("mcei.bo.password",passWord);
    this.doSelect("ehi.ProductLine","label=Individual & Family");
    this.doClick("//input[@name='Click here to login']");
}

Selenium.prototype.doLoginBO_SBG = function(userName,passWord)
{
    this.doType("mcei.bo.username",userName);
    this.doType("mcei.bo.password",passWord);
    this.doSelect("ehi.ProductLine","label=Small Group");
    this.doClick("//input[@name='Click here to login']");
}

Selenium.prototype.getSpecTRIdx = function(condition)
{
    var idx = this.getSpecRowIndex_2(condition);
    return idx+1;
}

Selenium.prototype.getMailIdx = function(condition)
{
    var idx = this.getSpecTRIdx("//form/table|"+condition);
    return idx;
}

Selenium.prototype.doViewMail = function(rowIdx)
{
    this.doClick("//form/table//tr["+rowIdx+"]/td[4]/a");
}


Selenium.prototype.getRandomNumber = function()
{
    var milli = new Date().getTime()/12000;
    return parseInt(milli);
}

var chrArr = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","BB","BC","BA","BD","BE","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD");
Selenium.prototype.getRandomName = function()
{
	var time = new Date().getTime()/1000;
	var result = time/26;
	var modvalue = parseInt(time%26);
	var ranStr=String.fromCharCode(65+modvalue).toLowerCase();
	while( result>=26){
		result = result/26;
		modvalue = parseInt(result%26);
		ranStr += String.fromCharCode(65+modvalue).toLowerCase();
	}

	return ranStr;
}

Selenium.prototype.isColumnOrdered = function(locator,order)
{
    var locators = locator.split("|");
    var tableLocator = locators[0];
    var headNum = parseInt(locators[1]);
    var bottomNum = parseInt(locators[2]);
    var identifier = locators[3];
    var colNum = null;
    var elem = null;
    
    if(identifier.indexOf(":") >= 0)
    {
        colNum = parseInt(identifier.substring(0,identifier.indexOf(":")));
        elem = identifier.substr(identifier.indexOf(":")+1);
    }
    else
    {
        colNum = parseInt(identifier);
    }
    
    var table = this.page().findElement(tableLocator);
    
    if(table != null)
    {
        for(i=headNum; i<table.rows.length-bottomNum; i++)
        {
            if((i+1)<table.rows.length-bottomNum)
            {
                var fir = "";
                var sec = "";
                
                if(elem != null)
                {
                    var path1 = tableLocator+"//tr["+ (i+1) +"]/td["+ (colNum+1) +"]//"+elem;
                    var path2 = tableLocator+"//tr["+ (i+2) +"]/td["+ (colNum+1) +"]//"+elem;
                    fir = this.getText(path1);
                    sec = this.getText(path2);
                    //alert(fir+"\n"+sec);
                }
                else
                {
                    fir = getText(table.rows[i].cells[colNum]).trim();
                    sec = getText(table.rows[i+1].cells[colNum]).trim();
                }
                
                if(order.toUpperCase() == "A")
                {
                    if(fir > sec)
                    {
                        //alert(fir+"\n"+sec);
                        return false;
                    }
                    
                }
                else if(order.toUpperCase() == "D")
                {
                    if( fir < sec)
                    {
                        //alert(fir+"\n"+sec);
                        return false;
                    }
                }
            }
        }
        
        return true;
    }
    else
    {
        throw new SeleniumError("can't find the element\""+tableLocator+"\"");
    }
}

Selenium.prototype.doStoreDateByFormat = function(format,args)
{
	// format of args: month,day,year
	if(args.trim().length < 3)
		throw new SeleniumError("arguments must contain \"Month\",\"Date\",\"Year\" variables!");
    
    var formats = format.split(",");
    var days = parseInt(formats[3]);
    
    var sysDate = getSysDate(); //get the sysdate
    var specDate = dateAfterDays(sysDate,parseFloat(days),1); //get specified date
	var arrArgs = args.split(",");

    var month = specDate.getMonth()+1;
    var date = specDate.getDate();
    var year = specDate.getFullYear();
    
    

    // get Month string
    switch(formats[0].toUpperCase())
    {
        case "MM":
            month = (month+"").length==1?"0"+month:month;
            break;
        case "MMM":
            month = this.getMonthShortName(month);
            break;
        case "MMMM":
            month = this.getMonthFullName(month);
            break;
        case "M":
        default:
            // return 1 digit when month is lower than 10.
            // do nothing
    }

    //get Date string
    switch(formats[1].toUpperCase())
    {
        case "DD":
            date = (date+"").length==1?"0"+date:date;
            break;
        case "D":
        default:
            // return 1 digit when Date is lower than 10.
            // do nothing
    }

    //get Year string
    switch(formats[2].toUpperCase())
    {
        case "YY":
            year = (year+"").substr(2);
            break;
        case "YYYY":
        default:
            //do nothing.
    }
    
    storedVars[arrArgs[0]] = month;
	storedVars[arrArgs[1]] = date;
	storedVars[arrArgs[2]] = year;

}

Selenium.prototype.isAttributePresent = function(attributeLocator)
{
    var result = this.browserbot.findAttribute(attributeLocator);
    
    if(result != null)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//============== 1/25/2008 ==========================

Selenium.prototype.doMouseOverNameOfBOSearchResult = function(rowIdx)
{
    this.doMouseOver('//table[3]//tr['+ rowIdx +']/td[2]/font');
}

Selenium.prototype.doMouseOutNameOfBOSearchResult = function(rowIdx)
{
    this.doMouseOut('//table[3]//tr['+ rowIdx +']/td[2]/font');
}

Selenium.prototype.doMouseOverContactsOfBOSearchResult = function(rowIdx)
{
    this.doMouseOver('//table[3]//tr['+ rowIdx +']/td[10]/font');
}

Selenium.prototype.doMouseOutContactsOfBOSearchResult = function(rowIdx)
{
    this.doMouseOut('//table[3]//tr['+ rowIdx +']/td[10]/font');
}

Selenium.prototype.getContactsFomBOSearchResult = function()
{
    var content = this.getSuspendContentInBOSearchResult();
    var pos = content.indexOf('\x0a');
    return (pos==-1?content:content.substring(0,pos));
}

Selenium.prototype.getLastContactFomBOSearchResult = function()
{
    var content = this.getSuspendContentInBOSearchResult();
    var pos = content.indexOf('\x0a');
    return content.substr(pos+1);
}

Selenium.prototype.getSuspendContentInBOSearchResult = function()
{
    var content = this.page().findElement('EmailTable').innerHTML.replace(/&nbsp;/g,'');
    return content.replace("<br>","\x0a");
}

Selenium.prototype.getNameFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 2;
    var locator = rowIdx + "," + cellIdx;
    var fullName = this.getTextFromBoSearchResult(locator);
    var pos = fullName.indexOf(",");
    var lastName = fullName.substring(0,pos);
    var firstName = fullName.substring(pos+2,fullName.length);
    storedVars['tmpFirstName'] = firstName;
    storedVars['tmpLastName'] = lastName;
    return fullName;
}

Selenium.prototype.getCarrierFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 3;
    var locator = rowIdx + "," + cellIdx;
    return this.getTextFromBoSearchResult(locator);
}

Selenium.prototype.getSSNFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 1;
    var locator = rowIdx + "," + cellIdx;
    var content = this.getTextFromBoSearchResult(locator);
    
    if(content != null && content.length>0)
    {
        var pos = content.indexOf(' /');
        return (pos==-1?content:content.substring(0,pos));
    }
    else
    {
        return null;
    }
}

Selenium.prototype.getRanSSNFromBOSearchResult = function(){
    var table = this.getSearchResultTable();
    var ssnArr = new Array();
    for(i=2; i<table.rows.length-1; i++){
        var row=i+1;
        var ssn = this.getSSNFromBOSearchResult(row);
        if(ssn != null && ssn.length>0){
            ssnArr[ssnArr.length] = ssn;
        }
    }
    
    var ranSSNIdx = Math.floor(Math.random()*ssnArr.length);
    return ssnArr[ranSSNIdx];
}

Selenium.prototype.getStateFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 4;
    var locator = rowIdx + "," + cellIdx;
    return this.getTextFromBoSearchResult(locator);
}

Selenium.prototype.getSalesRepFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 8;
    var locator = rowIdx + "," + cellIdx;
    return this.getTextFromBoSearchResult(locator);
}

Selenium.prototype.getStatusFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 9;
    var locator = rowIdx + "," + cellIdx;
    return this.getTextFromBoSearchResult(locator);
}

Selenium.prototype.getProductLineFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 7;
    var locator = rowIdx + "," + cellIdx;
    return this.getTextFromBoSearchResult(locator);
}

Selenium.prototype.getSearchResultTable = function(){
    return this.page().findElement('//table[3]');
}

Selenium.prototype.getTextFromBoSearchResult = function(locator)
{
    var table = this.getSearchResultTable();
    var coordinate = locator.split(',');
    var rowIdx = parseInt(coordinate[0])-1;
    var cellIdx = parseInt(coordinate[1])-1;
    
    if(table != null)
    {
        if(rowIdx >= 2 && rowIdx < table.rows.length && table.rows[rowIdx].cells.length == table.rows[rowIdx-1].cells.length)
        {
            if( cellIdx >=0 && cellIdx < table.rows[rowIdx].cells.length)
            {
                return getText(table.rows[rowIdx].cells[cellIdx]);
            }
            else
            {
                throw new SeleniumError("Column number \""+coordinate[1]+"\" is out of range, total data column number of row \""+coordinate[0]+"\" is \"1-"+table.rows[rowIdx].cells.length+"\"");
            }
        }
        else
        {
            throw new SeleniumError("Row number \""+coordinate[0]+"\" is out of range, total data row number is \"1-"+(table.rows.length-3)+"\"");
        }
    }
    else
    {
        throw new SeleniumError("can't find the element\""+tableLocator+"\"");
    }
}

Selenium.prototype.getRandomRowOfSearchResult = function()
{
    var rowIdx = this.getRandomTRIdx('//table[3]|3|2');
    return rowIdx;
}

//=========== 2008-01-31 ======================
Selenium.prototype.doLoginMailServer = function(userName,passWord)
{
    userName = userName==null?(storedVars['BO_Test_Mail']==null?globalStoredVars['BO_Test_Mail']:storedVars['BO_Test_Mail']):userName
    passWord = passWord==null?(storedVars['BO_Test_Mail_PWD']==null?globalStoredVars['BO_Test_Mail_PWD']:storedVars['BO_Test_Mail_PWD']):passWord;
    
    this.doType("userName",userName);
    this.doType("passWord",passWord);
    this.doClick("Login");
}

Selenium.prototype.doViewSpecifiedMail = function(condition)
{
    var idx = this.getMailIdx(condition);
    this.doViewMail(idx);
}

Selenium.prototype.getRandomApplicationIdx = function(locator)
{
    /*
    if(locator == null || locator.length == 0)
    {
        locator = "//td[2]/table/tbody/tr[4]/td/table";
    }
    */
    if(locator == null || locator.length == 0)
    {
        locator = "IFP";
    }
    
    var table = this.getQuoteTableElement(locator);
    
    if(table != null)
    {
        var rows = (table.rows.length - 3)/2;
        var ranRow = (Math.floor(Math.random()*rows) + 1) * 2 +1;
        return ranRow;
    }
    else
    {
        throw new SeleniumError("can't find the element\""+locator+"\"");
    }
}

Selenium.prototype.doClickIFPApplyButtonRandomly = function()
{
    this.doClickApplyButtonRandomly("IFP");
}

Selenium.prototype.doClickApplyButtonRandomly = function(productLine){
    productLine = productLine.toUpperCase();
    var ranApp = this.getRandomApplicationIdx(productLine);
    var tableStr = this.getQuoteTableLocator(productLine);
    this.doClick(tableStr+"//tr["+ ranApp +"]//input[@alt='Select Plan' and @type='image']");
}

Selenium.prototype.doChooseRandomIFPAPPInQuotePage = function()
{
    this.doClickIFPApplyButtonRandomly();
}

Selenium.prototype.getRandomSSN = function()
{
    var d=new Date();
    var seconds = parseInt(d.getTime()/1000)+"";
    var ssnStr = seconds.substr(seconds.length-9);
    var part1 = ssnStr.substring(0,3);
    var part2 = ssnStr.substring(3,5);
    var part3 = ssnStr.substring(5,9);
    
    return part1 + "-" + part2 + "-" + part3;
}

//================ 2008-02-11 =======================
Selenium.prototype.isSpecRowPresent = function(condition)
{
    var rowIdx = this.getSpecRowIndex_2(condition);
    LOG.info("The spec row idx is: "+rowIdx);
    if(rowIdx >= 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//================= 2008-02-12 ==============================
Selenium.prototype.getTableDataRowCount = function(locator)
{
    var locators = locator.split("|");
    
    var table = this.page().findElement(locators[0]);
    
    if(table != null)
    {
        return table.rows.length - locators[1];
    }
    else
    {
        throw new SeleniumError("can't find the element\""+locators[0]+"\"");
    }
}

//================== 2008-02-13 ==================================
Selenium.prototype.isColumn = function(locator,keyword)
{
    var locators = locator.split("|");
    var tableLocator = locators[0];
    var headNum = parseInt(locators[1]);
    var bottomNum = parseInt(locators[2]);
    var colNum = parseInt(locators[3]);
    
    var keywords = keyword.split("||");
    
    var table = this.page().findElement(tableLocator);
    
    if(table != null)
    {
        for(i=headNum; i<table.rows.length-bottomNum; i++)
        {
            for(j=0; j<keywords.length; j++)
            {
                if(!PatternMatcher.matches(keywords[j].toUpperCase(), getText(table.rows[i].cells[colNum]).toUpperCase()))
                {
                    if(j == keywords.length-1)
                    {
                        return false;
                    }
                }
                else
                {
                    break;
                }
            }
        }
        
        return true;
    }
    else
    {
        throw new SeleniumError("can't find the element\""+tableLocator+"\"");
    }
}

/**
 * If you use "!=", you must verify that column also not equal to the title.
 */
Selenium.prototype.getSpecRowIndex_2 = function(locator) {
	//var locator = "//table[3]|0='who and me will go?' and 1!=abc*cba and 2=who and 3=me you who";
    var idx = locator.indexOf("|");
    var locator1 = locator.substring(0,idx);
    LOG.info("Locator:"+locator1);
    var locator2 = locator.substring(idx+1);
    LOG.info("Condition"+locator2);
    var filter = locator2.replace(/ and(?=([^\']*\'[^\']*\')*(?![^\']*\'))/g,"\b");
    var arr_spec = filter.split("\b");
    var arr_spec2 = new Array(arr_spec.length);
    //alert(arr_spec.length);
    for(i=0; i<arr_spec.length; i++)
    {
        var tmpArr
        var isMatch;
 		if(arr_spec[i].indexOf(">=")>=0)
        {
            tmpArr = arr_spec[i].split(">=");
            isMatch = ">=";
        }
        else if(arr_spec[i].indexOf("<=")>=0)
        {
            tmpArr = arr_spec[i].split("<=");
            isMatch = "<=";
        }
        else if(arr_spec[i].indexOf("!=")>=0)
        {
            tmpArr = arr_spec[i].split("!=");
            isMatch = false;
        }
        else if(arr_spec[i].indexOf("=")>=0)
        {
            tmpArr = arr_spec[i].split("=");
            isMatch = true;
            //alert("true");
        }
        else if(arr_spec[i].indexOf(">")>=0)
        {
            tmpArr = arr_spec[i].split(">");
            isMatch = ">";
        }
        else if(arr_spec[i].indexOf("<")>=0)
        {
            tmpArr = arr_spec[i].split("<");
            isMatch = "<";
        }
        
        var str = tmpArr[1];
        if(str.indexOf("\'")==0 && str.lastIndexOf("\'")==str.length-1)
        {
            str = str.substr(0,str.length-1).substr(1);
        }
        arr_spec2[i] = new Array(tmpArr[0],str,isMatch);
    }
  
	var table = this.page().findElement(locator1);
	var cellidx;
	var expectedValue;
	var actualValue;
	var getted;
	var expression = "";

	for(r=0;r<table.rows.length;r++)
	{
		getted = true;
		for(i=0;i<arr_spec2.length;i++)
		{
			cellidx = parseInt(arr_spec2[i][0]);
			expectedValue = arr_spec2[i][1];
			
			if(table.rows[r].cells.length > cellidx)
			{
				var loccc = "";
				
				//alert(expectedValue);
				//alert(expectedValue);
				
                if(expectedValue.indexOf("link:")==0)
				{
                    expectedValue = expectedValue.replace("link:","");
                    
                    
                    if(expectedValue.indexOf("href(")==0)
                    {
                        var hrefValue = expectedValue.replace("href(","").replace(")","");
                        loccc = locator1+"//tr["+ (r+1) +"]/td["+ (cellidx+1) +"]//a/@href";
                        
                        if(this.isElementPresent(loccc))
                        {
                            var actualHrefValue = this.getAttribute(loccc);
                        
                            if(!PatternMatcher.matches(hrefValue, actualHrefValue))
				            {
					           LOG.info("Expect:"+hrefValue+"|Actual:"+actualHrefValue);
                               getted = false;
					           break;
				            }
				        }
				        else
				        {
                            LOG.info(loccc+" does not exist");
                            getted = false;
                            break;
                        }
                    }
                    else
                    {
                        if(expectedValue.indexOf("text(")==0)
                        {
                            expectedValue = expectedValue.replace("text(","").replace(")","");
                        }
                        
                        loccc = locator1+"//tr["+ (r+1) +"]/td["+ (cellidx+1) +"]//a";
                        
                        if(this.isElementPresent(loccc))
                        {
                            var actualValue = this.getText(loccc);
                        
                            if(!PatternMatcher.matches(expectedValue, actualValue))
    			            {
    				           LOG.info("Expect:"+expectedValue+"|Actual:"+actualValue);
                               getted = false;
    				           break;
    			            }
    			        }
    			        else
    			        {
                            LOG.info(loccc+" does not exist");
                            getted = false;
                            break;
                        }
                    }
                }
                else if(expectedValue.match(/^input\[\d{1,}\]:\w*\(.*\)$/)!=null || expectedValue.match(/^input:\w*\(.*\)$/)!=null)
                {
                    //alert("input");
                    //expectedValue = expectedValue.replace("input:","");
                    var pos1 = expectedValue.indexOf(":");
                    var pos2 = expectedValue.indexOf("(");
                    var pos3 = expectedValue.indexOf(")");
                    var obj = expectedValue.substring(0,pos1);
                    var identifier = expectedValue.substring(pos1+1,pos2);
                    var expectValue = expectedValue.substring(pos2+1,pos3);
                    
                    loccc = locator1+"//tr["+ (r+1) +"]/td["+ (cellidx+1) +"]//"+obj;
                    
                    var elem = this.page().findElement(loccc);
                    if(elem != null)
                    {
                        if(identifier=="text")
                        {
                            identifier = "value";
                        }
                        
                        loccc = loccc+"/@"+identifier;
                        var actualValue = this.getAttribute(loccc);
                        
                        if(!PatternMatcher.matches(expectValue, actualValue))
			            {
                           LOG.info("Expect:"+expectedValue+"|Actual:"+actualValue);
                           getted = false;
				           break;
			            }
                    }
                    else
                    {
                        LOG.info(loccc+" does not exist");
                        getted = false;
			            break;
                    }
                }
                else
				{
                    actualValue = getText(table.rows[r].cells[cellidx]);
				
                    if(typeof(arr_spec2[i][2])=="boolean")
                    {
                        //if this row is not match expect value, then check next row.
                        if(PatternMatcher.matches(expectedValue, actualValue) != arr_spec2[i][2])
				        {
					       LOG.info("Expect:"+expectedValue+"|Actual:"+actualValue);
                           getted = false;
					       break;
				        }
				    }
    				else
                    {
                        expression = "'"+actualValue+"'" + arr_spec2[i][2] + expectedValue;
                        //alert(expression);
                        var result = eval(expression);
                        if(typeof(result)!="boolean")
                        {
                            result = false; 
                        }
                    
                        if(!result)
                        {
                            LOG.info("Expect:"+expectedValue+"|Actual:"+actualValue);
                            getted = false;
                            break;
                        }
                    }
                }
				//alert(actualValue); for test
			}
			else
			{
				LOG.info("Cell index "+cellidx+" exceed actual cell number.");
                getted = false;
				break;
			}
		}
		if(getted){ 
            LOG.info(r);
            return r;
        }
	}
	
	if(!getted) return -1;
};

//=============== 2008.2.14 ===============================
Selenium.prototype.doClickKeyInfo = function(rowIdx)
{
    this.doClickIFPSpecActionByTrIdx(rowIdx, "Key Information");
}

Selenium.prototype.doClickIFPKeyInfo = function(rowIdx)
{
    this.doClickIFPSpecActionByTrIdx(rowIdx, "Key Information");
}

Selenium.prototype.doClickViewOnlineApp = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "View Online App");
}

Selenium.prototype.doClickPrintPDF = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "Printing");
}

Selenium.prototype.doClickOnlineQuote = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "Front Office Quote");
}

Selenium.prototype.doClickViewXML = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "View XML");
}

Selenium.prototype.doClickViewPDF = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "View FDF");
}

Selenium.prototype.doClickRegeneratePDF = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "Regenerate PDF");
}

Selenium.prototype.doClickViewDoc = function(rowIdx)
{
    this.doClickSpecAction(rowIdx, "Documents");
}


Selenium.prototype.doClickSpecAction = function(rowIdx, action)
{
    rowIdx = parseInt(rowIdx);
    this.doClick("//table[3]//tr["+ rowIdx +"]/td[11]//img[@alt='"+ action +"']");
}

Selenium.prototype.doClickIFPSpecActionByTrIdx = function(trIdx, action)
{
    trIdx = parseInt(trIdx);
    this.doClick("//table[3]//tr["+ trIdx +"]/td[11]//img[@alt='"+ action +"']");
}

Selenium.prototype.doClickWhenExist = function(locator) {
try{
    this.doClick(locator);
}catch(e){this.browserbot.newPageLoaded = true;}
};

Selenium.prototype.doWaitForPageToLoadWhenNeeded = function(timeout)
{
    if(!this.browserbot.newPageLoaded)
    {
        if (window["proxyInjectionMode"] == null || !window["proxyInjectionMode"]) 
        {
            return this.makePageLoadCondition(timeout);
        }
    }
}

Selenium.prototype.getFamilySizeFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 5;
    var locator = rowIdx + "," + cellIdx;
    return this.getTextFromBoSearchResult(locator);
}

Selenium.prototype.getSubmitDateFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 6;
    var locator = rowIdx + "," + cellIdx;
    var txt = this.getTextFromBoSearchResult(locator);
    var pos = txt.indexOf('\x0a');
    if(pos > 0)
    {
        txt = txt.substring(0,pos);
    }
    return txt;
}

Selenium.prototype.getBatchFromBOSearchResult = function(rowIdx)
{
    var cellIdx = 6;
    var locator = rowIdx + "," + cellIdx;
    var txt = this.getTextFromBoSearchResult(locator);
    var pos = txt.indexOf('\x0a');
    if(pos > 0)
    {
        txt = txt.substring(0,pos);
    }
    else
    {
        txt = '';
    }
    
    return txt;
}

//=============== 2008-02-18 ================================
Selenium.prototype.getPlanTableLocator = function()
{
    //return "//td[2]/table/tbody/tr[4]/td/table";
    return "//table[@class='containerLine']";
}

Selenium.prototype.getPlanTableElement = function()
{
    return this.page().findElement(this.getQuoteTableLocator("IFP"));
}

Selenium.prototype.getQuoteTableLocator = function(productLine)
{
    LOG.info(productLine);
//    productLine = productLine.toUpperCase();
    var location = null;
    if(productLine == "IFP")
        location =  "//td[2]/table/tbody/tr[4]/td/table";
    else if(productLine == "DT")
        location =  "//td[2]/table/tbody/tr[2]/td/table";
    else if(productLine == "HSA")
        location =  "//td[2]/table/tbody/tr[3]/td/table";
    else if(productLine == "ST"){
        location =  "//table[@class='containerLine']";
    }
    LOG.info("Quote Table Locator: "+location);
    return location;
}

Selenium.prototype.getQuoteTableElement = function(produceLine)
{
    return this.page().findElement(this.getQuoteTableLocator(produceLine));
}

Selenium.prototype.getPlanPriceFromQuotePage = function(productLine,rowidx)
{
    var planTableLoc = this.getQuoteTableLocator(productLine);
    var priceLoc = planTableLoc + "//tr["+ rowidx +"]//div[@class='pricetxt']";
    return this.getText(priceLoc).replace(/[$,]/ig,"");
}

Selenium.prototype.getDeductibleFromQuotePage = function(produceLine,rowidx)
{
    var planTableLoc = this.getQuoteTableLocator(produceLine);
    var deductibleLoc = planTableLoc + "//tr["+ rowidx +"]/td/table//tr/td[2]/table//tr[2]/td[1]/table//tr[2]/td[2]";
    return this.getText(deductibleLoc).replace(/[$,]/ig,"");
}

Selenium.prototype.isDeductibleRangeInQuotePage = function(range)
{
    var ranges = range.split(",");
    var elem = this.getPlanTableElement();
    if(elem.rows.length > 3){
        for(i=3; i<=elem.rows.length; i=i+2){
            var deductible = parseFloat(this.getDeductibleFromQuotePage(i));
            if(isNaN(parseInt(ranges[0])) || isNaN(parseInt(ranges[1]))){
                return false;
            }else if(deductible < parseInt(ranges[0]) || deductible > parseInt(ranges[1])){
                return false;
            }
        }
        
        return true;
    }else
    {
        return false;
    }
}

Selenium.prototype.getCoinsuranceFromQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[1]/table/tbody/tr[2]/td[3]";
    
    return this.getText(locator).replace("%","");
}

Selenium.prototype.isCoinsuranceRangeInQuotePage = function(range)
{
    var ranges = range.split(",");
    var elem = this.getPlanTableElement();
    if(elem.rows.length > 3){
        for(i=3; i<=elem.rows.length; i=i+2){
            var coinsurance = parseFloat(this.getCoinsuranceFromQuotePage(i));
            if(isNaN(parseInt(ranges[0])) || isNaN(parseInt(ranges[1]))){
                return false;
            }else if(coinsurance < parseInt(ranges[0]) || coinsurance > parseInt(ranges[1])){
                return false;
            }
        }
        
        return true;
    }else
    {
        return false;
    }
}

Selenium.prototype.getRatingFromQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var starLoc = planTableLoc + "//tr["+ rowidx +"]//a[contains(@href,'CustomerReviewsDetail')][2]";
    
    try
    {
        var elem = this.page().findElement(starLoc);
        return elem.getElementsByTagName("img").length;
    }
    catch(e)
    {
        return 0;
    }
}

Selenium.prototype.getCompanyFromQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var logoLoc = planTableLoc + "//tr["+ rowidx +"]/td/table//tr/td[2]/table//tr[2]/td[1]/table//tr[1]/td[1]/a[1]/img/@alt";
    
    return this.getAttribute(logoLoc).toUpperCase();
}


Selenium.prototype.getLogoSrcFromQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    //var logoLoc = planTableLoc + "//tr["+ rowidx +"]/td/table//tr/td[2]/table//tr[2]/td[1]/table//tr[1]/td[1]/a[1]/img/@src";
    var logoLoc = "//tr["+ rowidx +"]/td/table//tr/td[2]/table//tr[2]/td[1]/table//tr[1]/td[1]/a[1]/img/@src";

    return this.getAttribute(logoLoc);
}

Selenium.prototype.getQuoteUnitStartIndex = function(productLine){
    if(productLine=="IFP"){
        return 4;
    }else{
        return 3;
    }
}

Selenium.prototype.isFOPriceOrder = function(productLine,order)
{
    var elem = this.getQuoteTableElement(productLine);
	if(elem.rows.length<=3){
		throw new SeleniumError("Plan Table Element not!");
	}
    for(i=this.getQuoteUnitStartIndex(productLine); i<elem.rows.length && i+2<elem.rows.length; i=i+2)
    {
        var price1 = parseFloat(this.getPlanPriceFromQuotePage(productLine,i));
        var price2 = parseFloat(this.getPlanPriceFromQuotePage(productLine,i+2));

        if(price1 < price2 && order == "D")
        {
            throw new SeleniumError("Stop at $"+price1+" and $"+price2);
            return false;
        }
        else if(price1 > price2 && order == "A")
        {
            throw new SeleniumError("Stop at $"+price1+" and $"+price2);
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.isFODeductibleOrder = function(produceLine,order)
{
//    var elem = this.getPlanTableElement();
    var elem = this.getQuoteTableElement(produceLine);
    if(elem){
        LOG.info("Plan Table Found!");
    }else{
        LOG.error("Plan Table Not Found!");
    }
    for(i=4; i<elem.rows.length && i+2<elem.rows.length; i=i+2)
    {
        var deductible1 = parseFloat(this.getDeductibleFromQuotePage(produceLine,i));
        var deductible2 = parseFloat(this.getDeductibleFromQuotePage(produceLine,i+2));
        
        if(deductible1 < deductible2 && order == "D")
        {
            return false;
        }
        else if(deductible1 > deductible2 && order == "A")
        {
            return false;
        }
        else if(deductible1 == deductible2)
        {
            var price1 = parseFloat(this.getPlanPriceFromQuotePage(produceLine,i));
            var price2 = parseFloat(this.getPlanPriceFromQuotePage(produceLine,i+2));
            
            if(price1 > price2 && order == "A")
            {
                return false;
            }
            else if(price1 < price2 && order == "D")
            {
                return false;
            }
        }
    }
    
    return true;
}

Selenium.prototype.isFORatingOrder = function(order)
{
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2)
    {
        var rating1 = parseFloat(this.getRatingFromQuotePage(i));
        var rating2 = parseFloat(this.getRatingFromQuotePage(i+2));
        //alert(price1+"-"+price2);
        if(rating1 < rating2 && order == "D")
        {
            return false;
        }
        else if(rating1 > rating2 && order == "A")
        {
            return false;
        }
        else if(rating1 == rating2)
        {
            var price1 = parseFloat(this.getPlanPriceFromQuotePage(i));
            var price2 = parseFloat(this.getPlanPriceFromQuotePage(i+2));
            
            if(price1 < price2 && order == "A")
            {
                return false;
            }
            else if(price1 > price2 && order == "D")
            {
                //alert(rating1+"-"+rating2);
                //alert(price1+"-"+price2);
                return false;
            }
        }
    }
    
    return true;
}

Selenium.prototype.isFOCompanyOrder = function(order)
{
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2)
    {
        var company1 = this.getCompanyFromQuotePage(i);
        var company2 = this.getCompanyFromQuotePage(i+2);

        if(company1 < company2 && order == "D")
        {
            return false;
        }
        else if(company1 > company2 && order == "A")
        {
            return false;
        }
        else if(company1 == company2)
        {
            var price1 = parseFloat(this.getPlanPriceFromQuotePage(i));
            var price2 = parseFloat(this.getPlanPriceFromQuotePage(i+2));
            
            if(price1 > price2 && order == "A")
            {
                return false;
            }
            else if(price1 < price2 && order == "D")
            {
                return false;
            }
        }
    }
    
    return true;
}

Selenium.prototype.isAltCompanyInQuotePage = function(company){
    var companys = company.split("||");
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        var company = this.getCompanyFromQuotePage(i);
        j=0;
        for( ; j<companys.length; j++){
            if(PatternMatcher.matches(companys[j].toUpperCase(),company) || company.indexOf(companys[j].toUpperCase()) >= 0){
                break;
            }
        }
        
        if(j == companys.length){
            alert(company);
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.isLogosInQuotePage = function(src, type)
{
    if(type == null || type.trim().length == 0)
        type = "IFP";
    
    var elem = this.getQuoteTableElement(type);
    
    if(elem == null || elem.rows.length < 3){
        return false;
    }
    
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2)
    {
        var logoSrc = this.getLogoSrcFromQuotePage(i);
        
        if(logoSrc.toUpperCase() != src.toUpperCase())
        {
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.isRXOnInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]";
    
    locator += "//img[@alt='Prescription Drug Covered' and contains(@src,'rx.gif')]"
    
    return this.isElementPresent(locator);
}

Selenium.prototype.isRXOffInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]";
    
    locator += "//img[@alt='No Prescription Drug Coverage' and contains(@src,'rxoff.gif')]"
    
    return this.isElementPresent(locator);
}

Selenium.prototype.isRXStatusInQuotePage = function(rxStatus){
    var elem = this.getPlanTableElement();
    
    if(rxStatus==null||rxStatus==""){
        rxStatus = "ON";
    }
    
    rxStatus = rxStatus.toUpperCase();
    
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        if(rxStatus == "ON" && this.isRXOnInQuotePage(i)){
            continue;
        }
        else if(rxStatus == "OFF" && this.isRXOffInQuotePage(i)){
            continue;
        }
        else{
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.isMaternityOnInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]";
    
    locator += "//img[@alt='Maternity Coverage Available' and contains(@src,'maternity.gif')]"
    
    return this.isElementPresent(locator);
}

Selenium.prototype.isMaternityOffInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]";
    
    locator += "//img[@alt='No Maternity Coverage' and contains(@src,'maternityoff.gif')]"
    
    return this.isElementPresent(locator);
}

Selenium.prototype.isMaternityStatusInQuotePage = function(status){
    var elem = this.getPlanTableElement();
    
    if(status==null||status==""){
        status = "ON";
    }
    
    status = status.toUpperCase();
    
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        if(status == "ON" && this.isMaternityOnInQuotePage(i)){
            continue;
        }
        else if(status == "OFF" && this.isMaternityOffInQuotePage(i)){
            continue;
        }
        else{
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.isHSAOnInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]";
    
    locator += "//img[@alt='HSA Eligible' and contains(@src,'hsa.gif')]"
    
    return this.isElementPresent(locator);
}

Selenium.prototype.isHSAOffInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]";
    
    locator += "//img[@alt='Not Eligible for Health Savings Account (HSA)' and contains(@src,'hsaoff.gif')]"
    
    return this.isElementPresent(locator);
}

Selenium.prototype.isHSAStatusInQuotePage = function(status){
    var elem = this.getPlanTableElement();
    
    if(status==null||status==""){
        status = "ON";
    }
    
    status = status.toUpperCase();
    
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        if(status == "ON" && this.isHSAOnInQuotePage(i)){
            continue;
        }
        else if(status == "OFF" && this.isHSAOffInQuotePage(i)){
            continue;
        }
        else{
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.getPlanTypeInQuotePage = function(rowidx){
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[1]/table/tbody/tr[2]/td[1]";
    
    return this.getText(locator);
}

Selenium.prototype.isAltPlanTypeInQuotePage = function(planTypes){
    if(planTypes == null || planTypes == ""){
        throw new SeleniumError("VerifyAltPlanTypeInQuotePage : Could not parse empty plans!");
    }
    
    var arrPlanTypes = planTypes.split("||");
    
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        j=0;
        for(; j<arrPlanTypes.length; j++){
            if(arrPlanTypes[j] == this.getPlanTypeInQuotePage(i)){
                break;
            }
        }
        
        // if not found
        if(j == arrPlanTypes.length){
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.getOfficeVisitInQuotePage = function(rowidx)
{
    var planTableLoc = this.getPlanTableLocator();
    var locator = planTableLoc + "//tr["+ rowidx +"]/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[1]/table/tbody/tr[2]/td[4]";
    
    return this.getText(locator);
}

Selenium.prototype.isOfficeVisitNotCoveredInQuotePage = function(rowidx)
{
    if(this.getOfficeVisitInQuotePage(rowidx).toLowerCase() == "not covered"){
        return true;
    }else{
        return false;
    }
}

Selenium.prototype.isOfficeVisitDeductibleCoveredInQuotePage = function(rowidx)
{
    var officeVisit = this.getOfficeVisitInQuotePage(rowidx).toLowerCase();
    
    if(officeVisit.indexOf("deductible") >= 0 || officeVisit.indexOf("out of pocket")){
        return true;
    }else{
        alert(this.getOfficeVisitInQuotePage(rowidx));
        return false;
    }
}

Selenium.prototype.isOfficeVisitCoveredInQuotePage = function(rowidx)
{
    if(this.getOfficeVisitInQuotePage(rowidx).indexOf("\$") >= 0){
        return true;
    }else{
        return false;
    }
}

Selenium.prototype.isAltOfficeVisitInQuotePage = function(condition)
{
    if(condition==null || condition==""){
        condition = "Covered||Not Covered||Deductible";
    }

    var conditions = condition.split("||");
    
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        j=0;
        for( ; j<conditions.length; j++){
            if(conditions[j]=="Covered" && this.isOfficeVisitCoveredInQuotePage(i)){
                break;
            }else if(conditions[j]=="Not Covered" && this.isOfficeVisitNotCoveredInQuotePage(i)){
                break;
            }else if(conditions[j]=="Deductible" && this.isOfficeVisitDeductibleCoveredInQuotePage(i)){
                break;
            }
        }
        
        if(j == conditions.length){
            return false;
        }
    }
    
    return true;
}

Selenium.prototype.getLowestPriceInQuotePage = function()
{
    var lowestPrice = 0.00;
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        var price = parseFloat(this.getPlanPriceFromQuotePage(i));
        if(price < lowestPrice){
            lowestPrice = price;
        }
    }
    
    return lowestPrice;
}

Selenium.prototype.getHighestPriceInQuotePage = function()
{
    var lowestPrice = 0.00;
    var elem = this.getPlanTableElement();
    for(i=3; i<elem.rows.length && i+2<elem.rows.length; i=i+2){
        var price = parseFloat(this.getPlanPriceFromQuotePage(i));
        if(price > lowestPrice){
            lowestPrice = price;
        }
    }
    
    return lowestPrice;
}

Selenium.prototype.isPlanPriceRangeInQuotePage = function(range)
{
    var ranges = range.split(",");
    var elem = this.getPlanTableElement();
    if(elem.rows.length > 3){
        for(i=3; i<=elem.rows.length; i=i+2){
            var price = parseFloat(this.getPlanPriceFromQuotePage(i));
            if(isNaN(parseInt(ranges[0])) || isNaN(parseInt(ranges[1]))){
                return false;
            }
            
            if(price < parseInt(ranges[0]) || price > parseInt(ranges[1])){
                return false;
            }
        }

        return true;
    }else{
        throw new SeleniumError("verifyPlanPriceRangeInQuotePage : The search result is 0!");
    }
}

//================ 2008-2-25 =============================
// this function is for "SHQ Autoscoring" using only!
// get a random number "ranQuantity" to identify how many "Yes"/"Don't Know" to check.
Selenium.prototype.doCheckExceptionRandomlyInSHQ = function(identifier)
{
    
    var idx = 0;
    if(identifier == null || identifier == "" || identifier == "Y"){
        idx = 1;
    }else if(identifier == "D"){
        idx = 3;
    }
    
    var ranQuantity = Math.floor(Math.random()*6)+1;
    var arr1 = new Array('1','2','3','4','5','6');
    var arr2 = new Array();
    
    for(i=0; i<ranQuantity; i++){
        var arrIdx = Math.floor(Math.random() * arr1.length);
        arr2[i] = arr1[arrIdx];
        arr1.splice(arrIdx,1);
    }
    
    for(j=1; j<=6; j++){
        if(arr2.indexOf(j) >= 0){
            this.doCheck("//input[@name=\"xfm.av.//wship:member[@number=1]/@exempt"+ j +"\"]["+ idx +"]");
        }else{
            this.doCheck("//input[@name=\"xfm.av.//wship:member[@number=1]/@exempt"+ j +"\"][2]");
        }
    }
   
}

//============= 2008.03.04 ================
Selenium.prototype.isDisabledElementPresent = function(name, type)
{
    currentWin = this.browserbot.getCurrentWindow();
    doc = currentWin.document;
    
    elems = doc.getElementsByTagName('input');
    
    for(i=0; i< elems.length; i++){
        if(elems[i].name.indexOf(name) >= 0 && elems[i].type==type && elems[i].disabled)
        {
            return true;
        }
    }
    
    return false;
}

//=============== 2008.03.11 ======================
Selenium.prototype.doGenerateSSNGroup = function(num){
    if(num==null) var num = 1;
    var ssn1 = this.getRandomSSN();
    var re = new RegExp("(\\d{3})-(\\d{2})-(\\d{4})","ig");
    var arr = re.exec(ssn1);
    var tmpNum = parseInt(arr[3]);
    var lastStr;
    for(i=0; i<num; i++){
        lastStr = tmpNum + i;
        storedVars['ssn'+(i+1)] = arr[1] + "-" + arr[2] + "-" + lastStr;
    }
}

PageBot.prototype.locateElementByPlan = function(text, inDocument) {
	var conditions = text.split(";");
	var innertext;
	var elem;
	var allLinks = inDocument.getElementsByTagName("A");
	var items;
	var planname = conditions[0].trim();
	var query;
	var matched = false;
	var table;
    
	for(i=0;i<allLinks.length;i++){
	    elem = allLinks[i];
		innertext = getText(elem);
		xidx = innertext.indexOf("<!--");
		if(xidx>0) innertext = innertext.substr(0,xidx).trim();
		if(innertext == planname){
			matched = true;
			j=0;
			while(elem.tagName!="TABLE" || j++<1){
				elem = elem.parentNode;
			}
			table = elem.rows[1].cells[0].getElementsByTagName("TABLE")[0];
			for(j=1;matched && j<conditions.length;j++){
				query = conditions[j].trim();
				if(query=="") continue;
				var regexp = new RegExp("([a-zA-Z]*):(\\w*)","ig");
                var arr = regexp.exec(query);
                var identifier = RegExp.$1;
                var idValue = RegExp.$2;
                
                if(identifier == "carrier"){
					items = table.rows[0].cells[0].getElementsByTagName("IMG");
					matched = (items[0].alt.indexOf(idValue)>=0);
				}
				else if(identifier == "type"){
					innertext = getText(table.rows[1].cells[0]);
					innertext = innertext.trim();
					matched = (idValue==innertext);
				}
				else if(identifier == "deductible"){
					if(idValue.charAt(0)!='$') idValue = '$'+idValue;
					len = idValue.length;
					if(len>4 && idValue.indexOf(',')==-1) idValue = idValue.substr(0,len-3) +','+ idValue.substr(len-3);
					innertext = getText(table.rows[1].cells[1]);
					innertext = innertext.trim();
					matched = (idValue==innertext);
				}
				else if(identifier == "coinsurance"){
					if(idValue.charAt(idValue.length-1)!='%') idValue = idValue +'%';
					innertext = getText(table.rows[1].cells[2]);
					innertext = innertext.trim();
					matched = (idValue==innertext);
				}
				else if(identifier == "officevisit"){
					innertext = getText(table.rows[1].cells[3]);
					innertext = innertext.trim();
					matched = (innertext.indexOf(idValue)>=0);
				}
				else if(identifier == "rate"){
                    
                }
				else matched = false;
				
			} // END for
			if(matched){
				items = elem.getElementsByTagName("A");
				for(j=0;j<items.length;j++){
					if( PatternMatcher.matches("mcei.html.screen++.*.cid:*.rate:*.pid:*",items[j].href)) return items[j];
				}
			} // END if(matched){
		} // end if(innertext.indexOf(query)>=0)
	} // end for (i = 0; i < allLinks.length; i++) 
	return null;
	
};

Selenium.prototype.doStoreRandomPhoneNumber = function(areaVar,numVar){
    var time = new Date().getTime()/1000;
    var numStr = parseInt(time)+"";

    var arr=numStr.match(/(\d{3})(\d{7})$/);
    LOG.info("AreaCode: "+arr[1]);
    LOG.info("Number: "+arr[2]);
    storedVars[areaVar] = RegExp.$1;
    storedVars[numVar] = RegExp.$2;
}

Selenium.prototype.doClearCensus = function(numbers){
    //var censusForm = this.page().findElement("//form[@name='main']");
    
    if(numbers == null || numbers == "") numbers = 4;
    
    for(i=1; i<=numbers; i++){
        this.doSelect("ehi.MEMBER."+ i +".RELATIONSHIP","index=0");
        this.doType("ehi.MEMBER."+ i +".BIRTH_DATE_MONTH","");
        this.doType("ehi.MEMBER."+ i +".BIRTH_DATE_DAY","");
        this.doType("ehi.MEMBER."+ i +".BIRTH_DATE_YEAR","");
        this.doUncheck("ehi.MEMBER."+ i +".SMOKER");
        this.doUncheck("ehi.MEMBER."+ i +".STUDENT");
    }
}

//=========== 2008.04.01 ================================

// get the row index in Quote table by given plan name
Selenium.prototype.getQuoteRowIdxByPlanName = function(productLine,planName){
    var table = this.getQuoteTableElement(productLine);
    
    for(i=2; i<table.rows.length; i=i+2){
        var planNameLinks = table.rows[i].getElementsByTagName("a");
        for(j=0; j<planNameLinks.length; j++){
            var txt = getText(planNameLinks[j]);
            if(planNameLinks[j].getAttribute("class") == "planname"){
                if(txt.length >= planName.length){
                    var matchArr = txt.match("^"+planName+" <!--");
                    if(matchArr != null){
                        return (i+1);
                    }
                }
            }
        }
    }
    
    return -1;
}

Selenium.prototype.doClickQuotePlanNameByRowId = function(productLine, rowidx){
    var tableStr = this.getQuoteTableLocator(productLine);
    this.doClick(tableStr+"//tr["+ rowidx +"]//td[2]/table/tbody/tr[1]/td[1]/table/tbody/tr//a");
}

Selenium.prototype.doClickQuotePlanDetailsByRowId = function(productLine, rowidx){
    var tableStr = this.getQuoteTableLocator(productLine);
    
    try{
        this.doClick(tableStr+"//tr["+ rowidx +"]//td[2]/table/tbody/tr[3]//td[8]//input[contains(@name,'mcei.html.screen++.IFPOverview.row')]");
    }catch(e){
        this.doClick(tableStr+"//tr["+ rowidx +"]//td[2]/table/tbody/tr[3]//td[8]//input[contains(@name,'mcei.html.screen++.IFPQuoteDetail.row')]");
    }
}

// randomly click on a plan name in Quote page.
Selenium.prototype.doClickIFPPlanNameRandomly = function(){
    var ranRow = this.getRandomApplicationIdx("IFP");
    this.doClickIFPPlanNameByRowId(ranRow);
}

// click on a plan name by given row id which starts from 1 and increases by 2
Selenium.prototype.doClickIFPPlanNameByRowId = function(rowidx){
    this.doClickQuotePlanNameByRowId("IFP",rowidx);
}

// click on a given plan name.
Selenium.prototype.doClickIFPPlanNameByName = function(planName){
    var rowIdx = this.getQuoteRowIdxByPlanName("IFP",planName);
    if(rowIdx >= 0){
        this.doClickIFPPlanNameByRowId(rowIdx);
        return;
    }
    
    throw new SeleniumError("can't find the Plan Name:"+ planName );
}

// randomly click on button "Plan Details"
Selenium.prototype.doClickIFPPlanDetailsRandomly = function(){
    var ranRow = this.getRandomApplicationIdx("IFP");
    this.doClickIFPPlanDetailsByRowId(ranRow);
}

// click on a "Plan Details" button by given row index which is starts from 1
Selenium.prototype.doClickIFPPlanDetailsByRowId = function(rowIdx){
    this.doClickQuotePlanDetailsByRowId("IFP", rowIdx);
}

// click on a "Plan Details" buttion by given plan name
Selenium.prototype.doClickIFPPlanDetailsByPlanName = function(planName){
    var rowIdx = this.getQuoteRowIdxByPlanName("IFP",planName);
    if(rowIdx >= 0){
		this.doClickIFPPlanDetailsByRowId(rowIdx);
        return;
    }

    throw new SeleniumError("can't find the Plan Name:"+ planName );
}

// randomly click on a plan name in Quote page.
Selenium.prototype.doClickHSAPlanNameRandomly = function(){
    var ranRow = this.getRandomApplicationIdx("HSA");
    this.doClickHSAPlanNameByRowId(ranRow);
}

Selenium.prototype.doClickHSAPlanNameByRowId = function(rowIdx){
    this.doClickQuotePlanNameByRowId("HSA", rowIdx);
}

Selenium.prototype.doClickHSAPlanNameByName = function(planName){
    var rowIdx = this.getQuoteRowIdxByPlanName("HSA",planName);
    if(rowIdx >= 0){
        this.doClickHSAPlanNameByRowId(rowIdx);
        return;
    }
    
    throw new SeleniumError("can't find the Plan Name:"+ planName );
}

// click on a "Plan Details" button by given row index which is starts from 1
Selenium.prototype.doClickHSAPlanDetailsByRowId = function(rowIdx){
    this.doClickQuotePlanDetailsByRowId("HSA", rowIdx);
}

// click on a "Plan Details" buttion by given plan name
Selenium.prototype.doClickHSAPlanDetailsByPlanName = function(planName){
    var rowIdx = this.getQuoteRowIdxByPlanName("HSA",planName);
    if(rowIdx >= 0){
		this.doClickHSAPlanDetailsByRowId(rowIdx);
        return;
    }

    throw new SeleniumError("can't find the Plan Name:"+ planName );
}

// randomly click on button "Plan Details"
Selenium.prototype.doClickHSAPlanDetailsRandomly = function(){
    var ranRow = this.getRandomApplicationIdx("HSA");
    this.doClickHSAPlanDetailsByRowId(ranRow);
}

Selenium.prototype.getTableRowsCount = function(tableLocator){
    var tableElem = this.page().findElement(tableLocator);
    if(tableElem != null){
        return tableElem.rows.length;
    }
}

Selenium.prototype.getTableLastDataTRIdx = function(locator){
    var locators = locator.split("|");
    var uselessRowsAfter = (locators.length==1?0:locators[1]);
    var tableRowsCount = this.getTableRowsCount(locators[0]);
    return tableRowsCount-parseInt(uselessRowsAfter);
}

Selenium.prototype.doTrim = function(str){
    var tmp1 = str.replace(/^\s*(?=\S*)/ig,'');
	var tmp2 = tmp1.replace(/(?=\S*)\s*$/ig,'');
	return tmp2;
}

Selenium.prototype.compareString = function(str1, str2){
    str1 = this.doTrim(str1).toUpperCase();
    str2 = this.doTrim(str2).toUpperCase();
    
    if(str1 == null || str1.length == 0){
        if(str2 == null || str2.length == 0){
            return 0;
        }else{
            return -1;
        }
    }else{
        if(str2 == null || str2.length == 0){
            return 1;
        }else{
            if(str1 > str2){
                return 1;
            }else if(str1 == str2){
                return 0;
            }else{
                return -1;
            }
        }
    }
}

Selenium.prototype.isSelectOptionOrdered = function(locator, order){
    if(locator == null || locator.length <= 0) 
        throw new SeleniumError("Locator could not be empty!");
    if(order == null || order.length <= 0) 
        order="A";
    order = order.toUpperCase();    
    var uselessOptionsBefore = 0;
    var uselessOptionsAfter = 0;    
    
    var locators = locator.split("|");
    if(locators.length == 2)
        uselessOptionsBefore = parseInt(locators[1]);
    else if(locators.length == 3){
        uselessOptionsBefore = parseInt(locators[1]);
        uselessOptionsAfter = parseInt(locators[2]);
    }
    
    var elem = this.page().findElement(locators[0]);
    if(elem != null){
        if(elem.options.length <= 1) return true;
        var text1="";
        var text2="";
        var beginIdx = uselessOptionsBefore+1;
        var lastIdx = elem.options.length-uselessOptionsAfter;
        var textArr1 = null;
        var textArr2 = null;
        for(i=beginIdx; i<lastIdx; i++){
            text1 = getText(elem.options[i-1]).toUpperCase();
            text2 = getText(elem.options[i]).toUpperCase();
            
            if(order == "A"){
                if(this.compareString(text1,text2) == 1 ){
                    LOG.info("Text1: "+text1+"|Text2: "+text2 );
                    return false;
                }
            }else if(order == "D"){
                if(this.compareString(text1,text2) == -1){
                    LOG.info("Text1: "+text1+"|Text2: "+text2 );
                    return false;
                }
            }
        }
        
        return true;
    }else{
        throw new SeleniumError("Could not find Element:"+locator);
    }    
}

Selenium.prototype.isSelectOptionOrdered_Number = function(locator, order){
    if(locator == null || locator.length <= 0) 
        throw new SeleniumError("Locator could not be empty!");
    if(order == null || order.length <= 0) 
        order="A";
    order = order.toUpperCase();    
    var uselessOptionsBefore = 0;
    var uselessOptionsAfter = 0;    
    
    var locators = locator.split("|");
    if(locators.length == 2)
        uselessOptionsBefore = parseInt(locators[1]);
    else if(locators.length == 3){
        uselessOptionsBefore = parseInt(locators[1]);
        uselessOptionsAfter = parseInt(locators[2]);
    }
    
    var elem = this.page().findElement(locators[0]);
    if(elem != null){
        if(elem.options.length <= 1) return true;
        var num1=0;
        var num2=0;
        var beginIdx = uselessOptionsBefore+1;
        var lastIdx = elem.options.length-uselessOptionsAfter;
        var textArr1 = null;
        var textArr2 = null;
        for(i=beginIdx; i<lastIdx; i++){
            num1 = parseInt(getText(elem.options[i-1]));
            num2 = parseInt(getText(elem.options[i]));
            
            if(order == "A"){
                if(num1 > num2 ){
                    LOG.info("Num1: "+num1+"|Num2: "+num2 );
                    return false;
                }
            }else if(order == "D"){
                if(num1 < num2){
                    LOG.info("Num1: "+num1+"|Num2: "+num2 );
                    return false;
                }
            }
        }
        
        return true;
    }else{
        throw new SeleniumError("Could not find Element:"+locator);
    }    
}

Selenium.prototype.doSelectRandomOption = function(locator){
    var elem = this.page().findElement(locator);
    var options = elem.options;
    var selectedValue = getText(options[options.selectedIndex]);
    var optionTxt = "";
    var length = elem.options.length;
    var ranOption = -1;
    do{
        ranOption = Math.floor((Math.random()*length));
        optionTxt = getText(elem.options[ranOption]);
    }while((optionTxt==null || optionTxt.length==0) && optionTxt == selectedValue)
    
    this.doSelect(locator,"index="+ranOption);
}

//====== 2008-08-28 =================================
Selenium.prototype.getSpecLink = function(locator){
    var linkElement = this.page().findElement(locator);
    return linkElement;
}

Selenium.prototype.doClickRandomPageInIFPBOSearchResult = function(){
    var elem=this.page().findElement('//form/center[1]/table//tr//td');
    var count=elem.getElementsByTagName('nobr').length;
    var ran = Math.floor(Math.random()*count)+1;
    this.doClick('//form/center[1]/table//tr//td/nobr['+ran+']/a');
}

//======== 2008-09-01 ===================================
/*
    Modified doSelectRandomOption
*/
Selenium.prototype.doClickKeyInfoSG = function(rowIdx)
{
    this.doClickSGSpecActionByTrIdx(rowIdx, "Key Information");
}

Selenium.prototype.doClickSGSpecActionByTrIdx = function(trIdx,action){
    trIdx = parseInt(trIdx);
    this.doClick("//table[3]//tr["+ trIdx +"]/td[11]//img[@alt='"+ action +"']");
}

Selenium.prototype.doClickKeyInfoIFP = function(rowIdx)
{
    this.doClickIFPSpecActionByTrIdx(rowIdx, "Key Information");
}

Selenium.prototype.getEmailFromIFPKeyInfoPage = function(){
    var tdTxt = this.getText("//table[@id='innerAppInfoTable']//tr[4]/td[7]");
    var pos = tdTxt.indexOf("\x0a");
    if(pos != -1){
        return tdTxt.substr(pos+1);
    }
    return null;
}

Selenium.prototype.getRanNameFromIFPBOSearchResult = function(){
    var ranName = null;
    var elem = this.getSearchResultTable();
    for(i=2; i<elem.rows.length-1; i++){
        ranName = this.getNameFromBOSearchResult(i+1);
        if(ranName != null && ranName.length >=4){
            return ranName;
        }
    }
    
    return null;
}

//============== 2008-09-02 ===========================
Selenium.prototype.getLeadSearchResultTable = function(){
    return this.page().findElement("//form/table[2]");
}

Selenium.prototype.getHomePhoneFromLeadSearchResult = function(trIdx){
    var phoneTd = "//form/table[2]//tr["+ trIdx +"]/td[4]";
    var phone = this.getText(phoneTd);
    var m = phone.match(/H: (\d{3})-(\d{3}-\d{4})/);
    if(m!=null && m.length>0){
        storedVars['tmpHomeArea'] = m[1];
        storedVars['tmpHomeNumber'] = m[2];
        return m[0];
    }else{
        throw new SeleniumError("Can not find HomePhone in "+phoneTd);
    }
}

Selenium.prototype.getRanHomePhoneFromLeadSearchResult = function(){
    var result = this.getLeadSearchResultTable();
    var phone = null;
    for(i=3;i<result.rows.length;i++){
        phone = this.getHomePhoneFromLeadSearchResult(i+1);
        if(phone==null || phone.length<15){
            continue;
        }else{
            break;
        }
    }
    return phone;
}

Selenium.prototype.getNameFromLeadSearchResult = function(trIdx){
    var locator = "//form/table[2]//tr["+trIdx+"]/td[1]";
    var fullName = this.getText(locator);
    var names = fullName.split(", ");
    storedVars['tmpLastName'] = names[0];
    storedVars['tmpFirstName'] = names[1];
    return fullName;
}

Selenium.prototype.doClickLeadKeyInfo = function(trIdx){
    var locator = "//form/table[2]//tr["+trIdx+"]/td[10]//a[1]";
    this.doClick(locator);
}

Selenium.prototype.isAltText = function(locator,txt){
    var texts = txt.split("||");
    var actText = this.getText(locator);
    for(i=0; i<texts.length; i++){
        if(PatternMatcher.matches(texts[i], actText)){
            return true;
        }
    }
    
    return false;
}

Selenium.prototype.getParseDate = function(dateStrs){
    var strs = dateStrs.split("|");
    var dateStr = strs[0];
    var format = strs[1];
    var apm = dateStr.match(/[amMpP]{2}$/);
    if(apm!=null && apm.length>0){
        apm = apm[0].toUpperCase();
    }
    //alert(apm);
    var formats = format.replace(/[^\w]/ig,"\b").split("\b");
    var dates = dateStr.replace(/[^\d]/ig,"\b").split("\b");
    //alert(formats);
    
    var year,month,date,hour,minute=0,second=0,milliSecond=0;
    
    for(i=0;i<formats.length;i++){
        //alert(dates[i]);
        var value = dates[i].replace(/^0*/ig,"");
        switch(formats[i]){
            case "m":
                month = value;
                break;
            case "d":
                date = value;
                break;
            case "y":
                year = value;
                break;
            case "h":
                hour = value;
                //alert(hour);
                break;
            case "mi":
                minute = parseInt(value)+"";
                break;
            case "s":
                second = parseInt(value)+"";
                break;
            case "ms":
                milliSecond = parseInt(value)+"";
                break;
        }
    }
    
    if(apm!=null){
        if(apm=="PM" && hour!="12"){
            hour = (parseInt(hour) + 12)+"";
        }else if(apm=="AM" && hour=="12"){
            hour = "00";
        }
    }
    
    if(year.length==2){ year = "20"+year; }
    if(month.length==1){ month = "0"+month; }
    if(date.length==1){ date = "0"+date; }
    if(hour.length==1){ hour = "0"+hour; }
    if(second.length==1){ second = "0"+second; }
    if(minute.length==1){ minute = "0"+minute; }
    if(milliSecond.length==1){ milliSecond = "0"+milliSecond; }
    
    var date = month+"/"+date+"/"+year+" "+hour+":"+minute+":"+second+"."+milliSecond;
    LOG.info("Parsed Date:"+date);
    return date;
}

//=================== 2008-09-16 ==========================
Selenium.prototype.getTruncEmail = function(email){
    var arr = email.match(/(.+@.+\.\D+)\d+/);
    if(arr==null || arr.length==0){
        return email;
    }else{
        return arr[1];
    }
}

//================== 2008-11-03 ===============================
Selenium.prototype.isColumnData = function(locator,keyword)
{
    var locators = locator.split("|");
    var tableLocator = locators[0];
    var headNum = parseInt(locators[1]);
    var bottomNum = parseInt(locators[2]);
    var colNum = parseInt(locators[3]);
    
    var keywords = keyword.split("\\b");
    
    var table = this.page().findElement(tableLocator);
    
    if(table != null)
    {
        for(i=headNum; i<table.rows.length-bottomNum; i++)
        {
            LOG.debug(keywords[i-headNum].toUpperCase()+"|"+getText(table.rows[i].cells[colNum]).toUpperCase());
            if(!PatternMatcher.matches(keywords[i-headNum].toUpperCase(), getText(table.rows[i].cells[colNum]).toUpperCase()))
            {
                return false;
            }
        }
        
        return true;
    }
    else
    {
        throw new SeleniumError("can't find the element\""+tableLocator+"\"");
    }
}

//==================== 2008-12-19 ==========================================
Selenium.prototype.getStartDate = function()
{
    var month = this.page.findElement('bo.search.startMonth').value;
    var date = this.page.findElement('bo.search.startDay').value;
    var year = this.page.findElement('bo.search.startYear').value;
    
    return month+"/"+date+"/"+year;
}

Selenium.prototype.getEndDate = function()
{
    var month = this.page.findElement('bo.search.endMonth').value;
    var date = this.page.findElement('bo.search.endtDay').value;
    var year = this.page.findElement('bo.search.endYear').value;
    
    return month+"/"+date+"/"+year;
}

//=================== 2009-03-05 ==================
Selenium.prototype.getPlanIdByRowId = function(productLine, rowidx){
    var tableStr = this.getQuoteTableLocator(productLine);
    
    this.doClick(tableStr+"//tr["+ rowidx +"]//td[2]/table/tbody/tr[1]/td[1]/table/tbody/tr//a");
}

//================== 2009-04-03 ==================
Selenium.prototype.getAgeInBirthDay = function(){
	var sysdate = getSysDate();
	storedVars['ageInMonth'] = sysdate.getMonth()+1;
	storedVars['ageInDate'] = sysdate.getDate();
	storedVars['ageInYear'] = sysdate.getFullYear()- 65;
}
 
//==================== 2009.06.04 =====================
Selenium.prototype.getRandomEmail = function(prefix){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();
	var second = d.getSeconds();
	prefix = prefix.length==0?"":prefix+".";
	return prefix+year+"."+month+"."+date+"."+hour+"."+min+"."+second+"@ehealthqa.com";
}
//==================== 2009.09.01 =====================
Selenium.prototype.getRandomPolicyNumber = function()
{
    var d=new Date();
    var seconds = parseInt(d.getTime()/1000)+"";
    var ssnStr = seconds.substr(seconds.length-9);
    var part1 = ssnStr.substring(0,3);
    var part2 = ssnStr.substring(3,5);
    var part3 = ssnStr.substring(5,9);
    
    return part1 + part2 + part3;
}
//==================== 2012.04.23 =====================
Selenium.prototype.getStoredVal  = function(varName){
	return this.replaceVariables(varName);
	//return "123";
}

//==================== 2013.01.24 Update by Jimmy =====================
Selenium.prototype.isXMLPresent= function(pattern) {
    var allText = this.browserbot.getDocument().xml;
    if (allText == null) {
        // Firefox
        allText = new XMLSerializer().serializeToString(this.browserbot.getDocument());
    }
    var patternMatcher = new PatternMatcher(pattern);
    if (patternMatcher.strategy == PatternMatcher.strategies.glob) {
            if (pattern.indexOf("glob:")==0) {
                    pattern = pattern.substring("glob:".length); // strip off "glob:"
                }
        patternMatcher.matcher = new PatternMatcher.strategies.globContains(pattern);
    }
    else if (patternMatcher.strategy == PatternMatcher.strategies.exact) {
                pattern = pattern.substring("exact:".length); // strip off "exact:"
        return allText.indexOf(pattern) != -1;
    }
    return patternMatcher.matches(allText);
};

Selenium.prototype.getDateAfterToday  = function(n){
	var uom = new Date(new Date()-0+n*86400000);  
  uom = uom.getFullYear() + "-" + (uom.getMonth()+1) + "-" + uom.getDate();  
  return uom;
};

//============================= 2013.06.19 updated by Kenny ============================
Selenium.prototype.doSendKeys = function(locator, value) {
    /**
    * @param locator an <a href="#locators">element locator</a>
    * @param value the value to type
    */
   if (this.browserbot.controlKeyDown || this.browserbot.altKeyDown || this.browserbot.metaKeyDown) {
        throw new SeleniumError("type not supported immediately after call to controlKeyDown() or altKeyDown() or metaKeyDown()");
    }
	
    var element = this.browserbot.findElement(locator);

	bot.action.type(element, value);
};

/*--------------------rolandy custom--------------------------*/
// retrun a random zip code from a series of zip code
Selenium.prototype.doStoreRandomZipCode = function(zipVar){
    var zipArr = new Array("89001","90001","35294","36623","99524","99711","72120","85077","85721","90037","19810","33351","59823","40404"); /*NV,CA,AL,AL, AK,AK,AR,AR,AZ,AZ,CA,DE,FL,MT,KY*/
	var i = Math.floor(Math.random()*13);
    storedVars[zipVar] = zipArr[i];
}
// retrun a random affiliate id
Selenium.prototype.doStoreRandomAffiliate = function(afltVar){
    
    var afltArr = new Array("Insurance Shopper Agency, LLC","Willis New Business","Zurich American Insurance Co.","1 Financial Marketplace","regexp:\\s"); /*NV,CA,FL,MT,KY*/
	var i = Math.floor(Math.random()*4);
    storedVars[afltVar] = afltArr[i];
}
// return a random phone No. which of formant 3-3-4
Selenium.prototype.getRandomNumber3Field = function()
{
    var milli = new Date().getTime();
    var re = new RegExp("(\\d{3})-(\\d{3})-(\\d{4})");
    var arr = re.exec(milli);
    var tmpNum = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]);

    return tmpNum;
}
// return a system date string of format month.date.year
Selenium.prototype.getSysDateStrEx = function()
{
    var sysDate = new Date(new Date()-15*3600000);

    var month = sysDate.getMonth()+1;
    var date = sysDate.getDate();
    var year = sysDate.getFullYear()-2000;

    month = (month+"").length>1?month:"0"+month;
    date = (date+"").length>1?date:"0"+date;

    return month+"."+date+"."+year;
}
// split first name from nameVar
Selenium.prototype.getSplitFirstNames = function(nameVar)
{
	var first = "";
	var name = nameVar+"";
	for(var i = 0 ; i < name.length; i++)
		if(name[i] != " ")
		first += name[i];
		else break;
	
	return first;
}

// split last name from nameVar
Selenium.prototype.getSplitLastNames = function(nameVar)
{
	var last = "";
	var name = nameVar+"";
	var bool = 0;
	for(var i = 0 ; i < name.length; i++){
		if(name[i] == " ") bool = 1;
		if(bool == 1)
		last += name[i];
	}
	return last;
}
//split SSN from nameVar
Selenium.prototype.getSplitSSN = function(nameVar)
{
	var last = "";
	var name = nameVar+"";
	
	for(var i = 0 ; i < name.length && i < 12; i++){
		last += name[i];
	}
	return last;
}
//split email from nameVar
Selenium.prototype.getSplitEmail = function(nameVar)
{
	var mail = "";
	var name = nameVar+"";
	for(var i = 13 ; i < name.length; i++){
		mail += name[i];
	}
	return mail;
}
//store ssn
Selenium.prototype.doStoreTextSSNGlobal = function(target, varName) {
    var element = this.page().findElement(target);
	var arr = getText(element);
	var text;
	
	for (var i = 0; i < 11; i++){
		text = text+arr[i];
	}
    globalStoredVars[varName] = text;
}
// return a random system date used for apply medicare plan
Selenium.prototype.getRandomMedicareDate = function(number)
{
    var now=new Date(); 
	var month =  now.getSeconds()%12 + 1;
	var date = now.getSeconds()%28 + 1;
	var year = "193"+now.getSeconds()%10;
    
    return month + "/" + date + "/" + year;
}
// return a lead id from location url
Selenium.prototype.getLeadID = function() {
    var url = this.browserbot.getCurrentWindow().location.href;
	
    var i1 = url.indexOf("leadID=");
    var i2 = url.indexOf("&",i1);
    return url.substring(i1+7,i2)
}
// return a phone number which stored in global vars.
Selenium.prototype.doStoreRandomPhoneNumberEx = function(){
    var time = new Date().getTime()/1000;
    var numStr = parseInt(time)+"";

    var arr=numStr.match(/(\d{3})(\d{3})(\d{4})$/);
    LOG.info("AreaCode: "+arr[1]);
    LOG.info("1st Number: "+arr[2]);
    LOG.info("2nd Number: "+arr[3]);
    storedVars['randomArea'] = RegExp.$1;
    storedVars['randomThree'] = RegExp.$2;
    storedVars['randomFour'] = RegExp.$3;
    //LOG.info("AreaCode: "+storedVars[areaVar]);
};
