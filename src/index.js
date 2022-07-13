import genHTML from './gen_html';
import addNew from './add_new';
import './style.css';

let listArr = [];

const list = document.getElementById('list');

const reload = () => {
  if (localStorage.getItem('todayList')) {
    const oldStorage = localStorage.getItem('todayList');
    const newStorage = JSON.parse(oldStorage);
    list.innerHTML = '';
    listArr = newStorage;
    genHTML(list, listArr);
  } else {
    const defaultItem = [
      {
        description: 'Add your first task',
        completed: false,
        index: 1,
      },
    ];
    const newStorage = JSON.stringify(defaultItem);
    listArr = defaultItem;
    localStorage.setItem('todayList', newStorage);
    list.innerHTML = '';
    genHTML(list, JSON.parse(newStorage));
  }
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      reload();
    });
  }
};

window.onload = reload();

const task = document.getElementById('add-item');
const addNewBtn = document.getElementById('add-new-btn');
addNewBtn.addEventListener('click', () => {
  if (task.value.length > 0) {
    listArr.push(addNew(task.value, listArr.length + 1));
    const newStorage = JSON.stringify(listArr);
    localStorage.setItem('todayList', newStorage);
    task.value = '';
    reload();
  } else {
    alert('Tasks must contain text.\nTry typing something into the "Add to your list..." input.');
  }
});

const clrBtn = document.getElementById('clear-all');
clrBtn.addEventListener('click', () => {
  for (let i = 0; i < listArr.length; i += 1) {
    if (listArr[i].completed) {
      listArr.splice(i, 1);
      listArr.forEach((task) => {
        if (task.index > i) {
          task.index -= 1;
        }
      });
      i -= 1;
    }
  }
  localStorage.setItem('todayList', JSON.stringify(listArr));
  reload();
});