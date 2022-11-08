window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterItem = event.target.closest('.products__item-about');
        counter = counterItem.querySelector('[data-counter]');

    }
    
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;        
    }

    if (event.target.dataset.action === 'minus') {           
        if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.products__item-about')) {
        calcCartPrice();
    }  

});


// document.querySelectorAll('input').forEach(el => {
//     el.addEventListener('blur', () => {
//         if (el.value.length === 0) {
//             showErr(el, 'Ошибка ввода');
//         }
//     });
// });

// function showErr(field, errText) {
//     field.classList.add('field-err');
//     if (field.nextElementSibling && field.nextElementSibling.textContent === errText) {
//         return;
//     }

//     const err = document.createElement('span');
//     field.after(err);
//     err.classList.add('err-message');
//     err.textContent = errText;

//     hideErr(field, err);
// }

// function hideErr(field, err) {
//     field.addEventListener('input', () => {
//         field.classList.remove('field-err');
//         err.remove();
//     });
// }

// const addressId = document.querySelector('#address');
// let address = `Комсомольская 27/1`;

// ymaps.ready(init);

// function init() {
//   const suggestView = new ymaps.SuggestView('address');

//   const myMap = new ymaps.Map('map', {
//     center: [59.939812, 30.299842], // Нчальная точка
//     zoom: 10
//   }, {
//     searchControlProvider: 'yandex#search'
//   });

//   const searchControl = new ymaps.control.SearchControl({
//     options: {
//       float: 'right',
//       floatIndex: 100,
//     }
//   });

//   myMap.controls.add(searchControl);

//   function search () { // Непосредственно поиск в панели
//     searchControl.search(addressId.value);
//   }

//   suggestView.events.add('select', () => { // поиск по выбору саджеста
//     search()
//   })

//   addressId.addEventListener('keypress', (evt) => { // поиск по Enter
//     if(evt.code === 'Enter'){
//       search()
//     }
//   });

// }