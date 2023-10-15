function downloadImage(url, filename){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imgUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imgUrl;
        tag.download = filename;
        tag.click();
    }
    xhr.send();
}