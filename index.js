const userInput = document.getElementById('userInput');
const buttonAdd = document.querySelector('.add-button');
const notCompletedList = document.querySelector('.not-completed-list');

const completedList = document.querySelector('.completed-list');

const clearInput = () => (userInput.value = '');

const setButton = (el) => {
  el.style.marginLeft = '20px';
  el.style.borderRadius = '5px';
  el.style.outline = 'none';
  el.style.cursor = 'pointer';
  el.style.border = 'none';
  el.style.padding = '2px 8px';
  el.style.fontSize = '15px';
};

const changeStatusHandler = (el) => {
  el.parentNode.remove();
  completedList.appendChild(el.parentNode);
  el.remove();
};

deleteHandler = (el) => {
  el.parentNode.remove();
};

const getInputHandler = () => {
  const input = userInput.value;
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.style.marginRight = '20px';

  const buttonDelete = document.createElement('button');
  buttonDelete.innerHTML = 'Delete';
  setButton(buttonDelete);

  if (input.trim() !== '') {
    listItem.innerHTML = input;
    notCompletedList.appendChild(listItem);
    listItem.appendChild(buttonDelete);
    listItem.insertAdjacentElement('afterbegin', checkbox);
  }

  clearInput();

  checkbox.addEventListener('change', changeStatusHandler.bind(this, checkbox));

  buttonDelete.addEventListener(
    'click',
    deleteHandler.bind(this, buttonDelete)
  );
};

buttonAdd.addEventListener('click', getInputHandler);

userInput.addEventListener('keydown', (e) => {
  e.code === 'Enter' ? getInputHandler(e) : null;
});
