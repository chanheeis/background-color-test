$(document).ready(function(){
    var currentScrollPosition=0;
    var uiTopList=getUlTopList();

    foldButtonToggle();
    setBackgroundColor();

    //포트폴리오 추가 버튼 클릭 시 동작 정의
    $('#add-btn').click(function(){
        $('#portfolio-box-wrapper').append([
            '<ul class="portfolio-box">',
                '<li class="portfolio">',
                '</li>',
                '<li class="portfolio">',
                '</li>',
            '</ul>'
        ].join(''));
        foldButtonToggle();
        setBackgroundColor();
        uiTopList=getUlTopList();
    });
    //포트폴리오 접기 버튼 클릭 시 동작 정의
    $('#fold-btn').click(function(){
        currentScrollPosition=0;

        initializeUlList();
        setBackgroundColor();
        foldButtonToggle();
        uiTopList=getUlTopList();
    });
    //마우스 스크롤 움직임에 따른 동작 정의
    $('html,body').on('mousewheel DOMMouseScroll',function(e){
        console.log(e.originalEvent);
        if(e.originalEvent.deltaY<0){
            if(currentScrollPosition>0){
                currentScrollPosition--;
                $('html,body').stop().animate({'scrollTop':uiTopList[currentScrollPosition]},1400);
            }
        }else{
            if(currentScrollPosition<uiTopList.length-1){
                currentScrollPosition++;
                $('html,body').stop().animate({'scrollTop':uiTopList[currentScrollPosition]},1400);
            }
        }
    })
})

function initializeUlList(){
    var ulList=$('.portfolio-box');
    if(ulList.length>2){
        for(let i=2;i<ulList.length;i++){
            $(ulList[i]).remove();
        }
    }
}

function foldButtonToggle(){
    var liList=$('.portfolio');
    if(liList.length<=4){
        $('#fold-btn').hide();
    }else{
        $('#fold-btn').show();
    }
    return;
}

function setBackgroundColor(){
    var liList=$('.portfolio');
    var initialRgbValue=[242,191,191];
    for(var i=0;i<liList.length;i++){
        var rgbValue=initialRgbValue.join(',');
        var rgbString='rgb('+rgbValue+')';  
        $(liList[i]).css('background-color',rgbString);
        initialRgbValue=initialRgbValue.map(function(value){
            return value-8;
        })
    };
    return;
}

function getUlTopList(){
    var ulTopList=[];
    var ulList=$('.portfolio-box');
    for(let i=0;i<ulList.length;i++){
        const top=$(ulList[i]).offset().top;
        ulTopList.push(top);
    }
    return ulTopList;
}