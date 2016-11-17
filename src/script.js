var messages = {
  jp: [
    'あの子と出会えて、良かった。',
    'あの子のプロデュースができて、良かった。',
    '',
    'いつも輝いてる、あの姿に、いつも思ってしまう。',
    'この自分が、果たしてあの子に吊り合えるほどの人なのか。',
    '',
    'もっと頑張って、あの子にふさわしいプロデューサーになりたいと思った。',
    'もっと頑張って、恥じない姿で隣りで立って歩んでいきたいと思った。',
    '',
    '"担当"という言葉に、負けないぐらいになって、',
    'ずっと、永遠に、あの子のプロデューサーでいたいと、思う。',
    '',
    'あの子の、たった一人だけの、プロデューサーに。',
    '',
    '佐久間まゆ、お誕生日おめでとう。'
  ],
  kr: [
    '그 아이와 만났다는 것이, 정말로 큰 행운이었다.',
    '그 아이를 프로듀스 할 수 있어서, 정말 좋았다.',
    '',
    '항상 빛나는 그 모습에, 항상 생각할 수 밖에 없었다.',
    '내가, 과연 그 아이에 어울리는 사람인가? 하는 고민을.',
    '',
    '더욱더 노력해서, 그 아이에게 조금이라도 더 어울리는 사람이 되고 싶었다.',
    '더욱더 노력해서, 당당한 모습으로 곁에 서서 함께 걸어나가고 싶었다.',
    '',
    '"담당"이라는 말에, 어울리는 사람이 되자고.',
    '변함 없이, 언제라도, 그 아이의 프로듀서로 바로 서있고 싶다고, 생각했다.',
    '',
    '그 아이의, 단 한명의, 프로듀서로써.',
    '',
    '사쿠마 마유, 생일 축하해.'
  ]
}


$(function() {
  $('#loading').show();
  
  sounds.load(['media/bgm.mp3']);
  sounds.whenLoaded = init;
})
function init() {
  $('#loading').hide();
  $('#music').show();
}

var start = function(lang, sound) {
  window.scrollTo(0, 0);
  if(!messages[lang]) lang = 'jp';
  for(var i=0; i<messages[lang].length; ++i) {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(messages[lang][i]));
    document.getElementById('txtframe').appendChild(p);
  }
  
  if(sound) {
    var bgm = sounds['media/bgm.mp3'];
    bgm.loop = true;
    bgm.play();
  }
  $('#music').hide();
  
  goImage();
  setTimeout(function() {
    goText();
  }, 1000);
};

var txtindex = -1;
var goText = function() {
  $('#txtframe').show();
  $('#txtframe p').hide();
  
  txtindex++;
  if(txtindex >= $('#txtframe p').length) return endText();
  
  var txt = $($('#txtframe p')[txtindex]);
  txt.css('opacity', 0).show();
  txt.css('top', (Math.random() * 40 + 10) + '%');
  
  txt.animate({left: '5%'}, {duration: 5000, queue: false});
  
  txt.animate({opacity: 1}, {duration: 1000, queue: false, complete: function() {
    setTimeout(function() {
      txt.animate({opacity: 0}, {duration: 1000, queue: false, complete: function() {
        goText();
      }});
    }, 3000);
  }});
  
};

var endText = function() {
  $('#txtframe2').css('opacity', 0).show();
  setTimeout(function() {
    $('#txtframe2').animate({opacity: 1}, {duration: 2000, queue: false});
  }, 1000);
};





var imgindex = -1;
var goImage = function() {
  $('#imgframe').show();
  $('#imgframe p').hide();
  
  imgindex++;
  if(imgindex >= $('#imgframe p').length) return endImage();
  
  var top = Math.random() * 15 + 5;
  
  var img = $($('#imgframe p')[imgindex]);
  img.css('opacity', 0).show();
  img.css('top', top + '%');
  
  img.animate({top: (top-10)+'%'}, {duration: 15000, queue: false});
  
  img.animate({opacity: 1}, {duration: 2000, queue: false, complete: function() {
    setTimeout(function() {
      img.animate({opacity: 0}, {duration: 2000, queue: false, complete: function() {
        setTimeout(function() {
          goImage();
        }, 1000);
      }});
    }, 10000);
  }});
  
};

var endImage = function() {
  $('#imgframe2').css('opacity', 0).show();
  setTimeout(function() {
    $('#imgframe2').animate({opacity: 1}, {duration: 2000, queue: false});
  }, 2000);
  
};