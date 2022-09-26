import SearchHistory from './LocalStorage.js';


const inputEle = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const deleteBtn = document.querySelector('.delete-btn')
const searchArray =[];
searchArray.forEach(function(ele,index){
    document.querySelector('.child').innerHTML = 
    `${ele}`
})
function search(){
    searchBtn.onclick = function(){
        const value = inputEle.value
        searchArray.unshift(value)
        
    }
    
}


search();