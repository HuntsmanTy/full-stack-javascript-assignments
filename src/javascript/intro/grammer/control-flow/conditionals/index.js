export const greeting = (age = 0) => {
if(age < 18){
    return 'Yo!';
}
else {
    return 'Hello!';
}
};

export const isTacoTuesday = (day = '') => {
if(day === 'Tuesday'){
    return true;
}
else{
    return false;
}
};

