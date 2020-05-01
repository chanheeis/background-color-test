$(document).ready(function(){
    var currentScrollPosition=0;

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
        getUlTopList();
    });
    //포트폴리오 접기 버튼 클릭 시 동작 정의
    $('#fold-btn').click(function(){
        initializeUlList();
        setBackgroundColor();
        foldButtonToggle();
        getUlTopList();
    });
    //마우스 스크롤 움직임에 따른 동작 정의
    $('html,body').on('mousewheel DOMMouseScroll',function(e){
        console.log('==================');
        console.log('clientY = '+e.originalEvent.clientY);
        console.log('deltaY = '+e.originalEvent.deltaY);
        console.log('layerY = '+e.originalEvent.layerY);
        console.log('movementY = '+e.originalEvent.movementY);
        console.log('wheelDeltaY = '+e.originalEvent.wheelDeltaY);
        console.log('==================');
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