var linkImage;
var elements = document.querySelector('._aamu');
var elementsArray = Array.from(elements);
elementsArray.forEach(function(element){
    element.addEventListener('click', function(){     

    AddButton();
    function AddButton(){
        setTimeout(() => {
            var menuDownload = document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0];
            if(menuDownload != undefined){
                menuDownload.appendChild(buttonDownload);
                 linkImage = document.querySelectorAll('._aamm')[0].querySelectorAll('img')[0].src;
                }else{
                   AddButton(); 
                }
            }, 5000);
    }
    });
});


buttonDownload.addEventListener('click', ()=>{
    downloadImage(linkImage, 'InstagramPic.png');
});