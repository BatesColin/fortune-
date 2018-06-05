$(document).ready(function(){
  $("form#fortune-survey").submit(function(event){
    event.preventDefault();
    inputtedName = $("input#enter-name").val();

    var luckyScore = 0;
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyScore += parseInt($(this).val());
    });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      luckyScore -= parseInt($(this).val());
    });
    console.log(luckyScore);
    $(".name").text(inputtedName);
    if (luckyScore > 20) {
      console.log("lucky");
      $("#lucky").show();
      $("#neutral").hide();
      $("#unlucky").hide();
    } else if (luckyScore > -10) {
      console.log("neutral");
      $("#lucky").hide();
      $("#neutral").show();
      $("#unlucky").hide();
    } else {
      console.log("unlucky");
      $("#lucky").hide();
      $("#neutral").hide();
      $("#unlucky").show();
    }
    document.getElementById("fortune-survey").reset();
  });
});
