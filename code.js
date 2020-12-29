    document.addEventListener('DOMContentLoaded', function(){
    var search = document.querySelector('.search');
    const srch = document.querySelector('.srch');
    srch.addEventListener('click', function(){
        srch.classList.add('backgr');
    });
    document.addEventListener('click', function(event){
        if((event.target != srch) /*&& (search.classList.contains('backgr'))*/){
            console.log(event);
            srch.classList.remove('backgr');
        }
    });
    let coordOfquestTop = document.querySelector('#quest').getBoundingClientRect().top-145;
    console.log(coordOfquestTop);
    let coordOfquestLeft = document.querySelector('#quest').getBoundingClientRect().left-44;
    console.log(coordOfquestLeft);
    document.querySelector('.hint').style.left = `${coordOfquestLeft}px`;
    document.querySelector('.hint').style.top = `${coordOfquestTop}px`;
    document.querySelector('#quest').addEventListener('mouseover', function(){
        document.querySelector('.hint').classList.add('opacity1');
    });
    document.querySelector('#quest').addEventListener('mouseout', function(){
        document.querySelector('.hint').classList.remove('opacity1');
    });
});
