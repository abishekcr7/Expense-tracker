var forms=document.getElementById("addForm")


forms.addEventListener('submit',storevalues)
//expenses.addEventListener("click",removeitems)

function storevalues(e){
    e.preventDefault()
    var amountspent=document.getElementById('amount').value 
    var description=document.getElementById('description').value 
    var category=document.getElementById('category').value

    var expdetails={
        'amount':amountspent,
        'description':description,
        'category':category
    }
    localStorage.setItem(expdetails.description,JSON.stringify(expdetails))
    showNewUserOnScreen(expdetails)
    
    // var expenseinfo=JSON.parse(localStorage.getItem(description))


    // var li = document.createElement('li')
    // li.className='expenseinfo'
    // li.appendChild(document.createTextNode(expenseinfo.amount+" "+expenseinfo.description+" "+expenseinfo.category))

    // var editBtn = document.createElement('button')
    // editBtn.appendChild(document.createTextNode('EDIT'))
    // li.appendChild(editBtn)

    // var deleteBtn = document.createElement('button')
    // deleteBtn.appendChild(document.createTextNode('Delete'))
    // deleteBtn.className='delete'
    // li.appendChild(deleteBtn)

    // expenses.appendChild(li)
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})
function showNewUserOnScreen(exp){
    const expenses=document.getElementById("expenses");
    const childHTML = `<li id=${exp.description}> ${exp.amount} - ${exp.description} - ${exp.category}
                            <button onclick=deleteexpense('${exp.description}')> delete expense </button>
                            <button onclick=editexpense('${exp.amount}','${exp.description}')> edit expense </button>
                         </li>`

    expenses.innerHTML = expenses.innerHTML + childHTML;
}
function editexpense(amount, description){

    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    //document.getElementById('category').value =category;

    deleteexpense(description)
 }
function deleteexpense(description){
    console.log(description)
    localStorage.removeItem(description);
    removeUserFromScreen(description);

}

function removeUserFromScreen(description){
    const parentNode = document.getElementById('expenses');
    const childNodeToBeDeleted = document.getElementById(description);

    parentNode.removeChild(childNodeToBeDeleted)
}

// function removeitems(e){
//     e.preventDefault()
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are You Sure?')){
//           var li = e.target.parentElement;
//           expenses.removeChild(li);
//         }
//       }
//     }

    