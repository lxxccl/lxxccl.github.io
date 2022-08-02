$(document).ready(
	function()
	{
		get_time();
		$('#timeline_content a').lightBox({},1000);
		$('#time_now').click(
			function()
			{
				time_now_slide();
				$('#nav').ScrollTo(1300);
			}
		);	
		$('#time_2021').click(
			function()
			{
				time_2021_slide();
				$('#2021').ScrollTo(1300);
			}
		);
		$('#time_2020').click(
			function()
			{
				time_2020_slide();
				$('#2020').ScrollTo(1300);
			}
		);
		$('#time_2019').click(
			function()
			{
				time_2019_slide();
				$('#2019').ScrollTo(1300);
			}
		);
	}
);

function time_now_slide()
{
	$('#time a').css('color','#CCC');
	$('#time_now').css('color','#6EB8D3');
	$('#time_side_cover').animate({top:'-100px'},1500);	
}
// 给点击的年份添加样式和动画
function time_2021_slide()
{
	$('#time a').css('color','#CCC');
	$('#time_2021').css('color','#6EB8D3');
	//修改黑色柱条的样式，实现移动
	$('#time_side_cover').animate({top:'-20px'},1500);	
}
function time_2020_slide()
{
	$('#time a').css('color','#CCC');
	$('#time_2020').css('color','#6EB8D3');
	$('#time_side_cover').animate({top:'50px'},1500);	
}
function time_2019_slide()
{
	$('#time a').css('color','#CCC');
	$('#time_2019').css('color','#6EB8D3');
	$('#time_side_cover').animate({top:'102px'},1500);	
}
//获取到的分钟和秒钟是单位数，在他的前面加上0
function check_time(time)
{
	if(time<10)
	{
		time = '0'+time;	
	}
	return time;
}

//时间转化为年月日时分秒
function get_time()
{
	var week = ['一','二','三','四','五','六','七'];
	var now = new Date();
	var hours = now.getHours();
	var minutes	= now.getMinutes();
	var seconds = now.getSeconds();
	
	var month = now.getMonth();
	// 获取到的时间是0-11，在这基础上加1
	month ++;
	var date = now.getDate();
	var day = now.getDay();
	minutes = check_time(minutes);
	seconds = check_time(seconds);
	$('#clock').html('<s style="border-right-color:#fff;"></s><h3>2021年'+month+'月'+date+'日 星期'+week[day]+'</h3><p>TIME&nbsp;'+hours+':'+minutes+':'+seconds+'</p>');
	//指定在毫秒数后调用函数，实现计时效果
	setTimeout('get_time()',500);
}
function time_float()
{
	var top = $('#time').offset().top;
	$(window).scroll(
		function()
		{
				var offsetTop = top + $(window).scrollTop() + 'px';
				$('#time').css({top:offsetTop});		
		}
	);	
}

//计算以前时间距离当前时间的天数
function day_number(year,month,date)
{
	// 月份是0-11，计算的时候要减回来
	month--;
	var day_ms = 1000*60*60*24;
	var day_now = new Date();
	var day_past = new Date(year,month,date);
	// 转换成只剩日
	var day_num = ((day_now.getTime())-(day_past.getTime()))/day_ms;//计算出天数
	day_num = parseInt(day_num);
	document.write(day_num);
}
