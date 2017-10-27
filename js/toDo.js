
var listDir = [];
var objArr = [];
var listRow = document.getElementById('list-row');
var colClass, containCol, col;
//create list container and header
function createListContainer() {
    var name = prompt('Please enter a list name');
    if (name !== null) {
        //check to see if list has value or exists
        if (name === '') {
            createListContainer();
        } else if (listDir.indexOf(name+'List') >= 0) {
            alert('Oh pickles! This list already exists!');
        } else {
            //create column to hold list
            col = document.createElement('div');
            col.className = name + 'List';
            colClass = name + 'List';
            col.classList.add('col-12', 'text-center');
            var listName = {name: name.toUpperCase()};
            containCol = document.createElement('div');
            containCol.className = 'container-fluid';
            containCol.id = name+'List';
            col.appendChild(containCol);
            //list header
            var head = document.createElement('div');
            head.className = 'list-header';
            var listh6 = document.createElement('h6');


            var listTitle = document.createTextNode(listName.name);

            listh6.appendChild(listTitle);
            head.appendChild(listh6);

            //header menu
            var menuLink = document.createElement('a');
            menuLink.className = 'menu-link';
            menuLink.setAttribute('href', '#');
            menuLink.style.textDecoration = 'none';

            var menuIcon = document.createElement('i');
            menuIcon.className = 'fa fa-trash float-right header-icon';
            menuIcon.setAttribute('aria-hidden', 'true');
            menuLink.appendChild(menuIcon);
            menuLink.setAttribute('onClick','removeColumn(this)');
            head.appendChild(menuLink);
            containCol.appendChild(head);

            //create new list item button
            var listItemBtn = document.createElement('button');
            listItemBtn.classList.add('btn', 'new-item-btn');
            listItemBtn.id = name+'List';
            listItemBtn.setAttribute('onClick','createItem(this)');
            //button icon
            var btnIcon = document.createElement('img');
            btnIcon.setAttribute('src', 'assets/images/plusDark.png');
            btnIcon.setAttribute('type', 'button');
            btnIcon.classList.add('plus-dark', 'img-fluid');
            listItemBtn.appendChild(btnIcon);
            var btnText = document.createElement('p');
            btnText.innerText = 'NEW ITEM';
            listItemBtn.appendChild(btnText);
            containCol.appendChild(listItemBtn);
            listRow.appendChild(col);
        }
    }return listDir.push(name+'List');
}


function createItem(containCol) {
    var item = containCol;
    var parent = containCol.parentNode;
    for (var i=0; i<listDir.length;i++) {
        if (item.id === listDir[i]) {
            //item row
            var itemRow = document.createElement('div');
            itemRow.className = 'row';
            parent.appendChild(itemRow);

            //input column
            var listItem = document.createElement('div');
            listItem.className = 'list-item col-11';
            itemRow.appendChild(listItem);

            var inputGroup = document.createElement('div');
            inputGroup.className = 'input-group';
            listItem.appendChild(inputGroup);

            var span = document.createElement('span');
            span.className = 'input-group-addon';
            inputGroup.appendChild(span);

            var check = document.createElement('input');
            check.className = 'check';
            check.setAttribute('type', 'checkbox');
            check.setAttribute('aria-label', 'Checkbox for following text input');
            span.appendChild(check);

            //input field
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Add task here');
            var placeholder = inputGroup.getAttribute('placeholder');
            input.setAttribute('aria-label', 'Text input with checkbox');
            input.className = 'form-control input-area';
            input.setAttribute('onkeydown', getValue(placeholder, inputGroup));
            inputGroup.appendChild(input);

            //remove button column
            var removeCol = document.createElement('div');
            removeCol.className = 'col-1 remove-item';
            removeCol.setAttribute('onclick', 'removeItem(this)');
            itemRow.appendChild(removeCol);

            var remove = document.createElement('i');
            remove.className = 'fa fa-trash remove';

            removeCol.appendChild(remove);
        }
    }
}


//******complete function
function getValue(placeholder, input){

    var x = input.keyCode;
    if (x === 13){
        alert(x);
        placeholder = placeholder.value;
    }
}

document.getElementById('new-list-btn').addEventListener('click',
    function(){
    createListContainer();
    console.log(listDir);
});

function removeColumn(menuLink)
{
    var item = menuLink.parentNode.parentNode;
    var parent = item.parentNode;
    var verify = confirm('Are you sure you wish to delete this list? We can never come back from this!');
    if (verify === true) {

        for (var i=0; i<listDir.length; i++){
            if(item.id === listDir[i]) {
                console.log(listDir[i]);
                parent.removeChild(item);
                listDir.splice(i, 1);
            }
        }
        console.log(listDir);
    }
}

function removeItem(listItem){
    var item = listItem.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

var delay;
function loadFunction() {
    delay = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('load-div').style.display = "block";
}