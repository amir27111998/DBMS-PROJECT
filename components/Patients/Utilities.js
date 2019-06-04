
var initialization=[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];

//Utility Functions
const dashboardFormatter=(data)=>{
    //current Year
    var year =new Date();
    year=year.getFullYear();
    for (let i = 0; i < data.length; i++) {
        var Da=new Date(data[i].apP_DATETIME);
        if (Da.getFullYear() == year){
        initialization[Da.getMonth()]=i;
        }
    }
    return initialization;
};

const onlyDate=(dateTime)=>{
    var date=new Date(dateTime);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()]+'  '+date.getDay()+' ,'+date.getFullYear();
}

const onlyTime=(dateTime)=>{
    var date=new Date(dateTime);
    return date.toLocaleString([],{hour:'2-digit',minute:'2-digit'});
}


export {dashboardFormatter,onlyDate,onlyTime};