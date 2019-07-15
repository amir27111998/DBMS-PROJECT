
//Utility Functions
const dashboardFormatter=(data)=>{
    //current Year
    var initialization=[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];
    var year =new Date();
    year=year.getFullYear();
    var counter=1;
    for (let i = 0; i < data.length; i++) {
        var Da=new Date(data[i].apP_DATETIME);
        if (Da.getFullYear() == year ){
        initialization[Da.getMonth()]=initialization[Da.getMonth()]+counter;
        }
    }
    return initialization;
};


const MonthFormatter=(data)=>{
    var date=new Date();
    var sevenDaysBack=(date.getTime()-(7*24*60*60*1000));
    var d=[0,0,0,0,0,0,0];
    for(var i=0;i<data.length;i++){
        var Da=new Date(data[i].apP_DATETIME);
        
        if(Da.getTime()>=sevenDaysBack && Da.getTime()<=date.getTime()){
            d[Da.getDay()]+=1;
        }
    }
    
    return d;
};


const PieFormatter=(data)=>{
    var date=new Date();
    var d=[0,0,0,0];
    for(var i=0;i<data.length;i++){
        var Da=new Date(data[i].apP_DATETIME);
        if(date.getMonth()==Da.getMonth() && data[i].tags=="Completed"){
            d[0]+=1;
        }
        else if(date.getMonth()==Da.getMonth() && data[i].tags=="Declined"){
            d[1]+=1;
        }
        else if(date.getMonth()==Da.getMonth() && data[i].tags=="Pending"){
            d[2]+=1;
        }
        else if(date.getMonth()==Da.getMonth() && data[i].tags=="Accepted"){
            d[3]+=1;
        }
    }
    return d;
};


const onlyDate=(dateTime)=>{
    var date=new Date(dateTime);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()]+'  '+date.getDate()+' ,'+date.getFullYear();
};







const onlyTime=(dateTime)=>{
    var date=new Date(dateTime);
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    return hours+':'+date.getMinutes()+' '+am_pm;
};


const onlyTimeForTimings=(dateTime)=>{
    var date=new Date(dateTime);
    var hours = date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours();
    var am_pm = date.getUTCHours() >= 12 ? "PM" : "AM";
    return hours+':'+date.getMinutes()+' '+am_pm;
};


const checkDate=(dat)=>{
    var date=new Date(dat);
    var now=new Date();
    if(date.getDate() < new Date().getDate()){
        return true;
    }
    return false;
};


//checking for day is in appointment days
const checkDay=(days,date)=>{
    var Days=days.split('|');
    var daysArray=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    var dateT=new Date(date);
    var selectedDay=daysArray[dateT.getDay()].trim();
    return(Days.findIndex((day)=>{
        return day.toLowerCase().trim()==selectedDay;
    }))
}

export {dashboardFormatter,MonthFormatter,onlyDate,onlyTime,PieFormatter,checkDay,checkDate,onlyTimeForTimings};