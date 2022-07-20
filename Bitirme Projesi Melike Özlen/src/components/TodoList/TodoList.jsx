import React, { useState } from 'react'
import './Todo.scss'
const TodoList = () => {
    const [newTodo, setNewTodo] = useState()
    const [todo, setTodo] = useState(["HTML", "CSS", "JAVASCRIPT"])

    const addtodo = () => {
        setTodo([...todo, newTodo])
        setNewTodo()
    }
    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onClick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
function ulClick (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onClick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
    return (
        <div className=' p-4 row my-todo'>
            <div id="myDIV" className="header">
                <p  style={{margin:"5px", fontSize:"1.3rem"}} >Öğrenilecekler Listesi</p>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onClick={()=>newElement()} className="addBtn">Add</span>
            </div>

            <ul id="myUL" onClick={()=>ulClick()}>
                <li className='text-dark checked'>HTML</li>
                <li className="checked">CSS</li>
                <li className='text-dark checked'>JavaScript</li>
                <li className='text-dark checked'>ReactJS</li>
                <li className='text-dark'>NodeJS</li>
                <li className='text-dark'>ExpressJS</li>
            </ul>
        </div>
    )
}

export default TodoList