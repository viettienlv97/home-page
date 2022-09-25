InputSearching = function(){
    const inputEle = document.querySelector('#gg-search-input')
    const value = inputEle.value
    inputEle.onfocus = function(){
        inputEle.attributes[3].value = ''

    }
    inputEle.onblur = function(){
        inputEle.attributes[3].value = 'Search Google or type a URL'
    }
    inputEle.onkeypress = function(key){
        const searchValue = inputEle.value
        if(key.key == 'Enter'){
            window.location.href =`https://www.google.com/search?q=${searchValue}`
        }
    }
}