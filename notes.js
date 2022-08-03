buttonId=0
cardId=0
editButtonId=0
function addNew(text,notes,buttonId,cardId,editButtonId)
{
var card=document.createElement("table")
card.id=cardId
var card1=document.createElement("h3")
var card2=document.createElement("p")
card1.innerHTML=text
card2.innerHTML=notes
button1=document.createElement('button')
button2=document.createElement('button')
button1.innerHTML="Delete"
button2.innerHTML="Edit"
button1.id=buttonId
button2.id=editButtonId
var element=document.getElementById('cards')
element.appendChild(document.createElement('td'))
card.appendChild(card1)
card.appendChild(card2)
card.appendChild(button1)
card.appendChild(button2)
let string_date=document.createElement('p')
let time=new Date()
let date=time.getDate()+'/'+time.getMonth()+'/'+time.getFullYear()
string_date.innerHTML=date
card.appendChild(string_date)
element.appendChild(card)
document.getElementById(cardId).style.border='solid black'
document.getElementById(cardId).style.height="200px"
document.getElementById(cardId).style.width="190px"
document.getElementById(cardId).style.borderRadius="5px"
document.getElementById(cardId).style.backgroundColor='rgb(204, 203, 203)';
document.getElementById(buttonId).addEventListener('click',delItem);
document.getElementById(buttonId).addEventListener('click',function(){document.getElementById(cardId).remove()});
document.getElementById(editButtonId).addEventListener('click',function(){
    document.getElementById('notes').value=notes
    document.getElementById('textbox').value=text
});
}
function submitClear(){
        notes=document.getElementById('notes').value
        text=document.getElementById('textbox').value
        if (text!=''){
            localStorage.setItem(text,notes);
            console.log('added',text,notes)
            addNew(text,notes,buttonId,cardId,editButtonId)
            buttonId++
            editButtonId++
            cardId++
        }
        else{
            alert('please enter the title')
        }
    }
    
function delItem(){
    localStorage.removeItem(text);
   console.log('deleted');
   }
