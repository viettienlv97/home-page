import SearchHistory from './LocalStorage.js';


const inputEle = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const searchList = document.querySelector('.searched-history')

console.log(SearchHistory)
function search(){
    
    
    const isSearchs = JSON.parse(localStorage.getItem('searching-history')) ?? {};
    // function listSearch (element,index){
    //     searchList.innerHTML =`
    //     <span>${SearchHistory.get(element)}</span>
    //     <button class="delete-search-${index}">Xoá</button>
    //     `
    //     const deleteBtn = document.querySelector(`.delete-search-${index}`)
    // }
    
    searchBtn.onclick = function(){
        const time = new Date().getTime()
        SearchHistory.set(time,inputEle.value)
        // console.log(SearchHistory.get(isSearchs[0]))
        // isSearchs.forEach(listSearch);
        console.log(isSearchs)
        
    }
}
    


search()