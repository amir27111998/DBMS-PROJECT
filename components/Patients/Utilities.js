
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
    var Days=days.split(',');
    var daysArray=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    var dateT=new Date(date);
    var selectedDay=daysArray[dateT.getDay()].trim();
    return(Days.findIndex((day)=>{
        return day.toLowerCase().trim()==selectedDay;
    }))
}

export {dashboardFormatter,onlyDate,onlyTime,checkDay,checkDate,onlyTimeForTimings};