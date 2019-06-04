import uuid from 'uuid';

export const addDoctors=({id=uuid(),name='',specialization='',amount=0}={})=>({
    type:'ADD_DOCTOR',
    doctor:{
        id,
        name,
        specialization,
        amount
    }});