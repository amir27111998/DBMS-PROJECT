export const applyFilters=({name=null,specialization=null,amount=0})=>({
    type:'FILTER',
    name:name,
    specialization:specialization,
    amount:amount
    });
    