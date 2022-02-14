function add(a,b,poonam){
    console.log(a+b);
    poonam();
}
function display(){
    console.log(`its an Callback function`)
}
add(5,10,display);