window.onload = function(){
    
 const selectText = document.querySelector('#container-texto')
 const selectFile = document.querySelector('#container-arquivos')
 const selectImg = document.querySelector('#image')   
 const selectMain = document.querySelector('#main')
 let selectContainerImg = document.querySelector('#container-img')
 
 
 
 function textoImage(){

    selectText.addEventListener('keyup', function(){        
    const selectP = document.querySelector('#texto')
    selectP.innerHTML = selectText.value 
       
    })
 }
 textoImage();

 function selectMeme(){
    
    selectFile.addEventListener('change', function(){
        const memeImg = document.querySelector('#container-img')

        let url = URL.createObjectURL(selectFile.files[0])
        memeImg.src = url
       
        memeImg.className = 'ajusteImg'
    })
 }
selectMeme();

function ajusteImg(){

    const memesFeitos = document.querySelector('.memesOk')
    const memes = document.querySelector('#container-img')

    memesFeitos.addEventListener('click',function(event){
        const srcFoto = event.target.src;        
        memes.src = srcFoto;
        memes.className= 'ajusteImg'
    })
}
ajusteImg();

function selectYellow(){
    const btnYellow = document.querySelector('#yellow')
    btnYellow.addEventListener('click', function(){
    const yellowMargin = document.querySelector('#image')
    yellowMargin.style.border = '6px groove yellow'
    })   
}
selectYellow();

function selectPink(){
    const btnPink = document.querySelector('#pink')
    btnPink.addEventListener('click', function(){
    const pinkMargin = document.querySelector('#image')
    pinkMargin.style.border = '5px double pink'
    })   
}
selectPink();

function selectRed(){

    const btnRed = document.querySelector('#red')
        btnRed.addEventListener('click', function(){
        const redMargin = document.querySelector('#image')
        redMargin.style.border = '3px dashed red'
        })   
}
selectRed();
}

