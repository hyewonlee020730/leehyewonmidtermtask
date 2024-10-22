$(document).ready(function () {
  // 버튼의 초기 텍스트 설정
  $(".button").text("Click to undergo procedure"); // 초기 상태의 텍스트

  // 파란 상자 클릭 시 애니메이션 실행
  $(".Title").click(function () {
    $(this).css("animation", "moveUp 0.5s forwards"); // 파란 상자 애니메이션 추가
    $(".Clickthetitle").css("animation", "moveDown 0.5s forwards"); // Clickthetitle 애니메이션 추가

    // 애니메이션 완료 후 directer 클래스 요소, description-container 및 polaroid1 표시
    setTimeout(function () {
      $(".directer").css("opacity", 1).show(); // directer 요소 표시
      $(".description-container").css("opacity", 1).show(); // description-container 표시

      // 타이핑 효과 시작
      startTypingEffect(".directer", function () {
        startTypingEffect(".description"); // description 애니메이션 시작
      });

      // polaroid 애니메이션 시작
      $(".polaroid1")
        .css("opacity", 1)
        .show()
        .css("animation", "moveUpPolaroid1 2s forwards");
      $(".polaroid2")
        .css("opacity", 1)
        .show()
        .css("animation", "moveUpPolaroid2 2s forwards");

      // 애니메이션 완료 후 polaroid1Pic 및 polaroid2Pic 표시
      setTimeout(function () {
        $(".polaroid1Pic")
          .css("opacity", 1)
          .css("animation", "fadeIn 5s forwards")
          .show();
        $(".polaroid2Pic")
          .css("opacity", 1)
          .css("animation", "fadeIn 5s forwards")
          .show();

        // film1 애니메이션 추가
        setTimeout(function () {
          $(".film1")
            .css("opacity", 1)
            .css("animation", "slideInFilm1 3s forwards")
            .show();

          // film2 애니메이션 추가
          setTimeout(function () {
            $(".film2")
              .css("opacity", 1)
              .css("animation", "slideInFilm2 3s forwards")
              .show();

            setTimeout(function () {
              $(".button-container")
                .css("opacity", 1) // 보이도록 설정
                .show();
            }, 3000); // slideInFilm1과 slideInFilm2 애니메이션이 끝난 후 3초 후에 실행
          }, 1000); // film1 애니메이션이 끝난 후 1초 후에 실행
        }, 5000); // polaroid2Pic의 fadeIn이 끝난 후 5초 후에 실행
      }, 2500); // moveUpPolaroid1과 moveUpPolaroid2가 끝난 후 0.5초 후에 나타나도록 설정
    }, 500); // 모든 요소가 0.5초 후에 나타나도록 설정
  });

  // 애니메이션이 실행되었는지 여부를 확인하는 변수
  var animationExecuted = false;

  $(".button-container").click(function () {
    if (!animationExecuted) {
      // 애니메이션이 실행되지 않았다면
      animationExecuted = true; // 애니메이션 실행 상태로 변경
      $(this).css("animation", "none"); // 애니메이션 중지
      // 버튼의 텍스트를 "Erasing all memories"로 변경
      $(".button").text("Erasing all memories"); // 버튼 텍스트 변경
      $(".Efilm1").css("display", "block").css("opacity", 0); // Efilm1 초기 설정
      $(".Efilm2").css("display", "block").css("opacity", 0); // Efilm2 초기 설정

      // 서서히 나타나도록 opacity 변경
      setTimeout(function () {
        $(".Efilm1").css("opacity", 1); // Efilm1의 opacity를 1로 설정
        $(".Efilm2").css("opacity", 1); // Efilm2의 opacity를 1로 설정

        // "Erasing all memories" 텍스트가 표시된 후 2초 후에 버튼 텍스트를 변경
        setTimeout(function () {
          $(".button").text("All memories have been erased"); // 버튼 텍스트 변경
        }, 2000); // 2초 대기 후 텍스트 변경
      }, 10); // 작은 지연을 두어 opacity 변경
    }
  });

  // 타이핑 효과 함수
  function startTypingEffect(selector, callback) {
    const element = $(selector);
    const text = element.data("text"); // data-text 속성에서 텍스트 가져오기
    let index = 0;
    const speed = 50; // 타이핑 속도

    function typeWriter() {
      if (index < text.length) {
        element.text(element.text() + text.charAt(index));
        index++;
        setTimeout(typeWriter, speed);
      } else if (callback) {
        callback(); // 콜백 호출
      }
    }

    typeWriter();
  }

  console.log("Ready");
});
