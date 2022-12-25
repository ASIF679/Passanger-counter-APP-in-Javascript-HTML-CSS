
let count=0
let countel=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment()
{
    count= count + 1
    countel.innerText=count
}
function save()
{
    let countStr=count +" -"
    saveEl.innerText += countStr
    console.log(count)
    countel.innerText=0
    count=0
}