

//---------------------Robo Bolinha Laranja 1
function A_RoboLaranja1_create(id){
  $(id).jsMovie({
      sequence: 'Robo_Fala_1_000##.png',
      from: 0,
      to: 39,
      fps: 10,
      width:'75%',
      height: '65%',
      folder : "img/animation/robo/Robo_Fala_1/",
      playOnLoad:false         
    });
   $(id).jsMovie("addClip","roboLaranja1",5,40);
}

function A_RoboLaranja1_play(id){
  $(id).jsMovie('play',5,40,false,false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboLaranja1_again(id){
  $(id).jsMovie("playClip","roboLaranja1",false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboLaranja1_loop(id){
  $(id).jsMovie('play',27,40,true,false);
}

//-------------------Robo Bolinha Laranja 2

function A_RoboLaranja2_create(id){
  $(id).jsMovie({
      sequence: 'Fala_Robo_2_000##.png',
      from: 0,
      to: 39,
      fps: 10,
      width:'78%',
      height: '65%',
      folder : "img/animation/robo/Fala_Robo_2/",
      playOnLoad:false         
    });
   $(id).jsMovie("addClip","roboLaranja2",5,40);
}

function A_RoboLaranja2_play(id){
  $(id).jsMovie('play',5,40,false,false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboLaranja2_again(id){
  $(id).jsMovie("playClip","roboLaranja2",false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboLaranja2_loop(id){
  $(id).jsMovie('play',27,40,true,false);
}

//------------------------------------ Robo Inteiro

function A_RoboInteiro_create(id){
    $(id).jsMovie({
        sequence: 'Robo_Fala_Completo_000##.png',
        from: 0,
        to: 79,
        fps: 10,
        width:'71%',
        height: '61%',
        folder : "img/animation/robo/Robo_Fala_Completo/",
        playOnLoad:false      
      });
    $(id).jsMovie("addClip","roboInteiro",5,40);
}

function A_RoboInteiro_play(id){
   $(id).jsMovie('play',5,80,false,false);
    $(id).jsMovie('play',65,80,true,false);
}

function A_RoboInteiro_again(id){
  $(id).jsMovie("playClip","roboInteiro",false);
  $(id).jsMovie('play',65,80,true,false);
}

function A_RoboInteiro_loop(id){
  $(id).jsMovie('play',65,80,true,false);
}



//-------------------Robo Quiz

function A_RoboQuiz_create(id){
  $(id).jsMovie({
      sequence: 'Fala_Robo_2_000##.png',
      from: 0,
      to: 39,
      fps: 10,
      width:'52%',
      height: '58%',
      folder : "img/animation/robo/Fala_Robo_2/",
      playOnLoad:false         
    });
   $(id).jsMovie("addClip","roboQuiz",5,40);
}

function A_RoboQuiz_play(id){
  $(id).jsMovie('play',5,40,false,false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboQuiz_again(id){
  $(id).jsMovie("playClip","roboQuiz",false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboQuiz_loop(id){
  $(id).jsMovie('play',27,40,true,false);
}


//-------------------Robo Feedback

function A_RoboFeedback_create(id){
  $(id).jsMovie({
      sequence: 'Fala_Robo_2_000##.png',
      from: 0,
      to: 39,
      fps: 10,
      width:'78%',
      height: '69%',
      folder : "img/animation/robo/Fala_Robo_2/",
      playOnLoad:false         
    });
   $(id).jsMovie("addClip","Feedback",5,40);
}

function A_RoboFeedback_play(id){
  $(id).jsMovie('play',5,40,false,false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboFeedback_again(id){
  $(id).jsMovie("playClip","Feedback",false);
  $(id).jsMovie('play',27,40,true,false);
}

function A_RoboFeedback_loop(id){
  $(id).jsMovie('play',27,40,true,false);
}




















function destroyAnimation(id){
    $(id).jsMovie("destroy");
}