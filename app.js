/*Dia exacto*/
const headerContainer = document.querySelector('.header-container-date')
const strong = document.createElement('strong')
strong.classList.add('header-date')
const date = new Date();
strong.innerText = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()}`;
headerContainer.append(strong)
