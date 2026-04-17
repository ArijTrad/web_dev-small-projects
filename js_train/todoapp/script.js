document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn= document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImg = document.querySelector('.empty-image');

    const toggleEmptyState=()=>{
        emptyImg.style.display = taskList.children.length === 0 ? 'block' : 'none';
    }

    //console.log('placeholder text is:',(!taskInput.value)?'empty':taskInput.value);

    const addTask =(event) =>{
        event.preventDefault();

            // If you wanted to know HOW task was added:
  /*  if(event.type === 'click') {
        console.log("Added by ++++");
    } else if(event.type === 'keypress') {
        console.log(`Added by pressing ${event.key} key`);
    }*/

        const taskText = taskInput.value;
        if(!taskText){return;}

        const li = document.createElement('li');
        li.innerHTML=`
        <input type='checkbox' class='checkbox'>
        <span>${taskText}</span>
        `;

        //console.log("before",li.textContent);
        li.textContent = taskText;
        //console.log("after",li.textContent);
        //console.log('placeholder text is:',(!taskInput.value)?'empty':taskInput.value);

        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            addTask(e);
        }
       }
      );


});

/*



*/
