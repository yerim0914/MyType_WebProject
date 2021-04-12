function scrollup(){
    const vheight = $('.test').height(); /* test 높이 가져오기 */
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) - 1) * vheight)
    }, 600);
}

function scrolldown(){
    const vheight = $('.test').height(); /* test 높이 가져오기 */
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) + 1) * vheight)
    }, 600);
}

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children()
        let inputs = divs.find('input:checked');
        if(inputs.length < 1 ){
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrolldown();
    });
    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollup();
    });
    $('#form').submit(function(e){
        let radios = $('input[type=radio]:checked');
        if(redios.length < 3 ){
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        return true;
    });
    $('html, body').animate({
        scrollTop : 0
    }, 500);
});