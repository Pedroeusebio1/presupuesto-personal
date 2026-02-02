export default function dateGenerator(headerContainer){
    /*Dia exacto*/
    const strong = document.createElement('strong')
    strong.classList.add('header-date')
    const date = new Date();
    strong.innerText = strong.innerText = date.toLocaleDateString('en-US');
    headerContainer.append(strong)
}