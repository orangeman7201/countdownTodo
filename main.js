'use strict';

var vm = new Vue({
  el: '#app',
  data: {
    newItem: '',
    newTime: '',
    todos: [],
  },
  methods: {
    addItem: function() {
      let inputTodo = {};
      inputTodo.task = this.newItem;
      inputTodo.time = this.newTime;
      inputTodo.status = 'working';
      inputTodo.func = null;
      this.todos.push(inputTodo);
      this.newItem = '';
      this.newTime = '';
      inputTodo = {};
    },

    timerStart: function(index) {
      let self = this;
      const todosData = this.todos[index];
      if(todosData.status === 'working') {
        todosData.func = setInterval(function() {
          todosData.time -= 1000;
        }.bind(self),1000);
        todosData.status = 'stop';
      } else {
        clearInterval(todosData.func);
        todosData.status = 'working';
      }
    },
    
    deleteTodo: function(index) {
      if(confirm('Todoを削除しますか？')) {
      this.todos.splice(index,1)
      }
    }
 }
})





// const table = document.querySelector('table');
// let statusButton,deleteButton,tr;



// function createTd(todo, index) {
//   const tr = document.createElement('tr');
//   const td1 = document.createElement('td');
//   td1.innerHTML = index;
//   tr.appendChild(td1);
  
//   const td2 = document.createElement('td');
//   td2.innerHTML = Object.keys(todo)[0];
//   tr.appendChild(td2);
  
//   createDeleteButton();
//   addDeleteFeature(index);
//   tr.appendChild(deleteButton);
  
//   createStatusButton(Object.values(todo)[0]);
//   addStatusFeature(Object.keys(todo)[0], index);
//   tr.appendChild(statusButton);

//   const td3 = document.createElement('td');
//   td3.innerHTML = ((Object.values(todo)[1]/1000/60) + '分');
//   tr.appendChild(td3);
//   table.appendChild(tr);
// }

// function showFinish() {
//   updateStatus();
//   todos.forEach((todo, index) => {
//     if (`${todos[index][Object.keys(todo)[0]]}`.includes('finish')) {
//       setTimer(todo, index);
//       createTd(todo, index);
//     }
//   });
// }

// function showWorking() {
//   updateStatus();
//   todos.forEach((todo, index) => {
//     if (todos[index][Object.keys(todo)[0]] === 'working') {
//       setTimer(todo, index);
//       createTd(todo, index);
//     }
//   });
// }

// function showTodos() {
//   updateStatus();
//   todos.forEach((todo, index) => {
//     setTimer(todo, index);
//     createTd(todo, index);
//   });
// }

// function createStatusButton(status) {
//   statusButton = document.createElement('button');
//   if(status[0] === 'working finish') {
//     statusButton.textContent = '完了';
//   } else {
//     statusButton.textContent = '作業中';
//   }
// }

// function addStatusFeature(todo, index) {
//   statusButton.addEventListener('click', () => {
//     if(`${todos[index][todo]}`.includes('finish')) {
//       todos[index][todo] = 'working';
//     } else {
//       todos[index][todo] = 'working finish';
//     }
//     radioFunction();
//   });
// }

// function createDeleteButton() {
//   deleteButton = document.createElement('button');
// 	deleteButton.textContent = '削除';
// 	deleteButton.className = 'deleteClassName';
// }

// function addDeleteFeature(number) {
//   deleteButton.addEventListener('click', () => {
//     todos.splice(number, 1);
//     updateStatus ();
//     radioFunction();
//   });
// }

// function updateStatus() {
//   while (table.firstChild) {
//     table.removeChild(table.firstChild);
//   };
//   const tr = document.createElement('tr');
//   tr.innerHTML = '<th>ID</th><th>コメント</th><th align="left">状態</th>';
//   table.appendChild(tr);
// }

// function getRadioValue(){
//   const radios = document.getElementsByName('status');
//   let result;
//   for(let i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       result = radios[i].value;
//       break;
//     }
//   }
//   return result;
// }

// function radioFunction() {
//   if (getRadioValue() === 'all') {
//     showTodos();
//   } else if (getRadioValue() === 'working'){
//     showWorking();
//   } else if (getRadioValue() === 'working finish') {
//     showFinish();
//   }
// }


// /////////////timer系

// function removeTime(todo, index) {
//   const differ = Object.values(todo)[1] - 1000;
//   todos[index].time = differ
//   console.log(differ)
//   updateStatus();
//   radioFunction();
// }

// function setTimer(todo, index) {
//   setInterval(removeTime, 1000, todo, index);
// }
