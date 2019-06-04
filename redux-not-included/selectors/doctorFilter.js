export const getVisibleDoctors=(doctors=[],{name="",specialization="",amount=0}) => {
    return doctors.filter((doctor)=>{
        var nameCon= name==doctor.name || !name;
        var specializationCon= specialization==doctor.specialization || !specialization;
        return nameCon && specializationCon;
    }).sort((doctor)=>{
        return amount > doctor.amount ? -1 : 1;
    });
};