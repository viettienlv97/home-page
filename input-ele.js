const InputSearching = function(){
    const inputEle = document.querySelector('#gg-search-input')
    const value = inputEle.value
    inputEle.onfocus = function(){
        inputEle.attributes[3].value = ''
        // console.log(inputEle.parentElement)
        inputEle.parentElement.classList.add('focused')
        document.querySelector('.gg-list').classList.add('hide')
    }
    inputEle.onblur = function(){
        inputEle.attributes[3].value = 'Search Google or type a URL'
        inputEle.parentElement.classList.remove('focused')
        document.querySelector('.gg-list').classList.remove('hide')
    }
    inputEle.onkeypress = function(key){
        const searchValue = inputEle.value
        if(key.key == 'Enter'){
            window.location.href =`https://www.google.com/search?q=${searchValue}`
        }
    }

}
const array = ['name','age','address'];
import SearchHistory from './LocalStorage.js';
InputSearching();





