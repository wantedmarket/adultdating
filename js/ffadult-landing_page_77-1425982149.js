$(function(){var $number1=$('.number1'),$number2=$('.number2'),$number3=$('.number3'),$final=$('.final'),$final_congrat=$final.find('h3'),num_arr=[225,181,177];rand_num=Math.round((Math.random()*2)),result='';function run_loading_run_1(time_delay){timeoutID1=window.setTimeout(run_loading_1,time_delay);}
function run_loading_1(){$number1.fadeIn();}
function run_loading_run_2(time_delay){timeoutID2=window.setTimeout(run_loading_2,time_delay);}
function run_loading_2(){$number1.hide();$number2.fadeIn();}
function run_loading_run_3(time_delay){timeoutID3=window.setTimeout(run_loading_3,time_delay);}
function run_loading_3(){$number2.hide();$number3.fadeIn();}
function run_loading_run_4(time_delay){timeoutID4=window.setTimeout(run_loading_4,time_delay);}
function run_loading_4(){$number3.hide();$final.fadeIn();}
result=$final_congrat.html().replace('{{count}}',num_arr[rand_num]);$final_congrat.html(result);$(".btn").on("click",function(event){event.preventDefault();var goTo=$(this).attr('rel'),currentSection=parseInt(goTo)-1;$(".step"+currentSection).fadeOut('fast',function(){$(".step"+goTo).fadeIn('normal');});$('ul.bullet-points li a').removeClass('active');$('ul.bullet-points li.bullet'+goTo+' a').addClass('active');if(currentSection==3){$('.banner_head').fadeOut();run_loading_run_1('1000');run_loading_run_2('2000');run_loading_run_3('3000');run_loading_run_4('4000');}});});