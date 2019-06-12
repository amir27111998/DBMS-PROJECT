const getFilterDoctors=(filters,doctors)=>{
    if(filters.address=="" && filters.name=="" && (parseInt(filters.district)==0) 
    && (parseInt(filters.experiance)==0|| filters.experiance=="")
    && (parseInt(filters.specialization)==0))
    {
        return doctors;
    }
    else{
        return doctors.filter((doctor)=>{
            var findName=  doctor.name.toLowerCase().includes(filters.name)  || doctor.name.includes(filters.name);
            var findAddress=doctor.address.toLowerCase().includes(filters.address) || doctor.address.includes(filters.address);
            if (parseInt(filters.district)==0){
                var findDistrict= true;
            
            }
            else{
                var findDistrict= parseInt(doctor.districT_ID) == parseInt(filters.district) ;
            
            }

            if (parseInt(filters.specialization)==0){
                var findSpecialization=true;
            }else{
            var findSpecialization=parseInt(doctor.specializatioN_ID) == parseInt(filters.specialization)?true:false;
            }

            if (parseInt(filters.experiance)==0){
                var findExperiance=true;
            }else{
                var findExperiance= parseInt(doctor.experience)>=parseInt(filters.experiance)?true:false;
            }

             return  findName && findAddress && findDistrict && findSpecialization && findExperiance ;
        })
    }
}

export default getFilterDoctors;