import '../scss/main.scss';

import $, { event } from 'jquery';

/**
 * Задача:
 *
 *
 * 1. Добавить запрос списка дел по нажатию кнопки Refresh
 *  1.1 Запрос отправляем на энпоинт https://jsonplaceholder.typicode.com/todos?_limit=10
 *  1.2 Пока идет загрузка кнопке необходимо добавить класс "refresh-button--loading"
 *
 * 2. Добавить возможность удаления карточки при нажатии на кнопку Trash (Мусорка)
 *
 * 3. Добавить возможность добавить тудушку
 *      Запрос отправляется на эндпоинт https://jsonplaceholder.typicode.com/todos, при успешном коде ответа 201, добавляем в список
 *
 *
 * 4. Добавить возможность отфильтровать тудушки по названию
 *   При вводе в строку поиска нужно оставить видимыми только тудушки, в которых содержится введенная подстрока
 */
const getToDoTemplate = (params) => {
    return `<li
                    class="list-group-item d-flex justify-content-between align-items-center"  data-list-todo-id="${params.id}"
                >
                    <span>${params.title}</span>
                    <i class="far fa-trash-alt delete" data-todo-id="${params.id}"></i>
                </li>`
}

const createToDo = (params) => {
    const lastToDo = document.querySelector('.list-group-item:last-of-type');
    const listToDo = document.getElementById('list-group-todos');

    if (lastToDo != null)
    {
        lastToDo.insertAdjacentHTML('afterend', getToDoTemplate(params))
    }
    else
    {
        listToDo.insertAdjacentHTML('afterbegin', getToDoTemplate(params));
    }

}


const getToDoFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const toDoRowData = await response.json();


    return toDoRowData.map((rawBackendElement) => ({
        title: rawBackendElement.title,
        id: rawBackendElement.id,
        completed: rawBackendElement.completed,
    }))
}

const addNewToDo = async (params) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',
                {
                    method: 'POST',
                    body: JSON.stringify({title: params.title})
                });
    if (response.ok)
    {
       createToDo({ title: params.title });
    }
    /*const result = await response.json();
    console.log(result.message);
    alert(result.message);*/
}

const deleteToDo = (element) => {
    if (element.matches('[data-todo-id]')) {
        if (element.closest('[data-list-todo-id]')) {
            element.closest('[data-list-todo-id]').remove();
        }
    }
}

const filterToDolist = (item) => {
    const allToDo = document.querySelectorAll('[data-list-todo-id]');
    allToDo?.forEach((element) => {
        for (const child of element.children)
        {
            if (child.matches('span'))
            {
                if (String(child.innerHTML).indexOf(item.value) >= 0)
                {
                  //console.log(element);
                  element.classList.remove('filtred');
                }
                else
                {          
                    console.log(element);
                    //element.remove();
                   //element.style
                   //console.log(child.innerHTML);
                  element.classList.add('filtred');
                };
            }
        }
        
     })
    ///console.log(element.value);
    /*
    }*/
}

const loadMoreToDo = () => {
    getToDoFetch()
        .then((ToDo) => ToDo?.forEach(element => {
            createToDo(element);
        } ) )
        .catch((error) => console.log(error))
        .finally()

}

const initPageEvents = () => {
    const refreshButton = document.getElementById('btn-refresh');
    const inputBlock = document.getElementById('form-input-js');
    const listToDo = document.getElementById('list-group-todos');
    const inputFilter = document.getElementById('form-search-js');

    if (inputFilter)
    {
        inputFilter.addEventListener('submit', (event) => {
            event.preventDefault();
            filterToDolist(event.currentTarget.elements.search);
        });
    }

    if (listToDo) {
        listToDo.addEventListener('click', (event) => deleteToDo(event.target));
    };

    if (inputBlock) {
        inputBlock.addEventListener('submit', (event) => {
            event.preventDefault();
            const InputText = event.currentTarget.elements.add
            addNewToDo({ title: InputText.value });
            InputText.value = '';
        });
    };

    if (refreshButton)
    {
        refreshButton.addEventListener('click', (event) => {
            event.target.classList.add('refresh-button--loading');
            loadMoreToDo(event.target);
            event.target.classList.remove('refresh-button--loading');
        } );
    };

}

const initPageLogic = () => {
    initPageEvents()
};

document.addEventListener('DOMContentLoaded', initPageLogic);
