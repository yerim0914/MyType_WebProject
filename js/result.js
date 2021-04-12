$(function(){
    let url = window.location.href
    let img = $('.result_img img').attr('src');
    $("meta[property='og\\:url']").attr('content', url)
    $("meta[property='og\\:image']").attr('content', img)
});

const copyBtn = document.querySelector('.copy_btn');

function copyUrl(){
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL 이 복사되었습니다.");
}

function sharefacebook(){
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook+url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', sharefacebook)

//////// 카카오 공유 코드 /////////

kakaoShare.addEventListener('click', sendLink)
const kakaoShare = document.querySelector('.kakao_share');
Kakao.init('JavaScript 키를 입력하세요');



//////// 카카오 코드 끝 /////////


