const wrapper = document.querySelector(".wrapper");
const textinput = wrapper.querySelector("input"),
submitbtn = wrapper.querySelector("button"),
outimg=wrapper.querySelector(".img-qr");

textinput.addEventListener("input",function(){
    if(!textinput.value){
        submitbtn.classList.remove("outline");
        wrapper.classList.remove("active");
        }
    else{
    submitbtn.classList.add("outline");}
    console.log(submitbtn.classList);
})
submitbtn.addEventListener("click",() => {
    let text=textinput.value;
    if(!text) return;
    submitbtn.innerText="Generate QR Code..."
    outimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    outimg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        submitbtn.innerText="Generate QR Code"

    })
});
 