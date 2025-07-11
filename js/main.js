$(function () {
  $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Main', 'Profile', 'Workroom', '2D graphic', 'Web-design', 'team1', 'team2', 'sub-work', 'ending'],
        showActiveTooltip: true,
        responsiveWidth: 1024,

    // ...기존 옵션...
    afterLoad: function(anchorLink, index){
      // 모든 비디오 일시정지
      $('.section video').each(function(){
        this.pause();
      });
      // 현재 섹션의 비디오 이어서 재생
      var $currentSection = $('.section').eq(index - 1);
      $currentSection.find('video').each(function(){
        this.muted = true; // 브라우저 자동재생 정책 우회
        const playPromise = this.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            this.muted = true;
            this.play();
          });
        }
      });
    }
  });
  $(document).on('click', '.work_menu a', function(e){
    var idx = $(this).data('index');
    if(idx){ // data-index가 있을 때만 섹션 이동
      e.preventDefault();
      $.fn.fullpage.moveTo(idx);
    }
    // data-index가 없으면(블로그 링크 등) 기본 동작(새창 이동) 유지
  });

  $(document).on('click', '.tap_menu a', function(e){
  e.preventDefault();
  var idx = $(this).data('index');
  if(idx){
    $.fn.fullpage.moveTo(idx);
  }
  });

  $(document).on('click', '.tap_menu button', function(e){
  e.preventDefault();
  var idx = $(this).data('index');
  if(idx){
    $.fn.fullpage.moveTo(idx);
  }
  });

  $(document).on('click', '.close', function(e){
  e.preventDefault();
  // workroom 섹션이 3번째라면 3, 순서에 맞게 숫자 조정
  $.fn.fullpage.moveTo(3);
  });

  $(document).on('click', '.graphics2d .back', function(e){
  e.preventDefault();
  // workroom 섹션이 3번째라면 3, 순서에 맞게 숫자 조정
  $.fn.fullpage.moveTo(3);
  });

  $(document).on('click', '.webdesign .back', function(e){
  e.preventDefault();
  // workroom 섹션이 3번째라면 3, 순서에 맞게 숫자 조정
  $.fn.fullpage.moveTo(4);
  });

  $(document).on('click', '.team1 .back', function(e){
  e.preventDefault();
  // workroom 섹션이 3번째라면 3, 순서에 맞게 숫자 조정
  $.fn.fullpage.moveTo(5);
  });

  $(document).on('click', '.team2 .back', function(e){
  e.preventDefault();
  // workroom 섹션이 3번째라면 3, 순서에 맞게 숫자 조정
  $.fn.fullpage.moveTo(6);
  });

  $(document).on('click', '.subwork .back', function(e){
  e.preventDefault();
  // workroom 섹션이 3번째라면 3, 순서에 맞게 숫자 조정
  $.fn.fullpage.moveTo(7);
  });

  $(document).on('click', '#footer .footer_txt ul a', function(e) {
  e.preventDefault();
  var idx = $(this).data('index');
  if (idx) {
    $.fn.fullpage.moveTo(idx);
  }
});
  
});