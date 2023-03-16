$(".for-schools").click(function(){
    $(".isp").show(); 
    $(".asp").show();
    $(".for-schools").hide();
    $(".for-students").hide();
});


$(".for-students").click(function(){
     $(".isp").hide(); 
    $(".asp").show();
    $(".afg").show();
    $(".for-schools").hide();
    $(".for-students").hide();
    
    
});

$(".isp").click(function(){
    $(".intro-programs").show();
$(".tlps").show();
    $(".fellowship").hide();
$(".clubs").hide();
});

$(".asp").click(function(){
    $(".fellowship").show();
$(".clubs").show();
    $(".affinity-groups").hide();
     $(".intro-programs").hide();
$(".tlps").hide();
});

$(".afg").click(function(){
    $(".affinity-groups").show();
    $(".fellowship").hide();
$(".clubs").hide();
});

 
