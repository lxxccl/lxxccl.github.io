// 获取需要的类
var index = 0;// li初始索引
var li = $(".banner ul li");// 获取所有li元素，即是点击歌曲头像
var img = $(".music .m_img img");// 获取播放器img元素，即下面的小头像
var text = $(".music .m_text");// 获取播放器m_text元素，歌名作责
var prev = $(".music .m_btn .m_prev");// 获取播放器上一首a元素按钮，上一首
var play = $(".music .m_btn .m_play");// 获取播放器暂停播放a元素按钮，播放按钮
var next = $(".music .m_btn .m_next");// 获取播放器下一首a元素按钮，下一首
var mp3 = $(".music .m_mp3");// media媒体播放器
var flag = false;// 歌曲是否播放的标记 true播放 false暂停
var close = true;// 播放器是否显示 true显示 false隐藏

//这部分是一起调用的，因为改变的东西太多，所以直接在这里封装了
function show() {
	// 更换背景图片 +1是因为索引从0开始 图片名称是从1开始的
	change_bg(index+1);
	// 更换播放器图片、文本
	change_img_text(index+1)
	// 更换播放按钮及title为暂停
	change_btn_title();
	// 图片旋转
	img_rotate();
	// 播放歌曲
	play_mp3();
}

//获取点击的li索引
li.click(function() {
	// 获取当前点击的li索引
	index = $(this).index();
	// 播放歌曲，并改变要改的东西
	show();
});


//更换大背景
function change_bg(idx) {
	$("body").css({
		"background": "url(images/" + idx + "_bg.jpg) no-repeat",
		"background-size": "cover"
	});
}


// 更换播放器图片、文本
function change_img_text(idx) {
	img.attr("src", "images/" + idx + ".jpg");// 获取src这个属性，并设置地址，实现更换播放器图片
	text.html(li.eq(index).attr("title"));// 根据当前点击的索引去获取对应li的title属性然后替换文本
}

//更换播放按钮及title为暂停
function change_btn_title() {
	play.removeClass("m_play");// 移除原有的播放样式
	play.addClass("m_pause");// 添加新的暂停样式
	play.attr("title", "暂停");// 更换title
}


// 点击图片旋转功能
function img_rotate() {
	// 移除所有img的图片旋转样式，防止图片同时转动
	li.children().removeClass("img_rotate");
	// 给当前点击的li添加图片旋转样式
	li.eq(index).children().addClass("img_rotate"); //li的孩子加上旋转动画，也就是img
}

//歌曲播放
function play_mp3() {
	// 获取选中的li的datasrc属性
	mp3.attr("src", li.eq(index).attr("datasrc"));
	// 播放歌曲
	mp3.get(0).play();
	// 修改歌曲是否播放的标记 true播放 false暂停
	flag = true;
}

//暂停或播放歌曲
/*
 * 暂停或者播放歌曲
 */
play.click(function() {
	// 如果歌曲播放，暂停歌曲，图片旋转停止，暂停按钮更换为播放，title更换为播放
	if (flag) {
		mp3.get(0).pause();// 暂停歌曲
		li.eq(index).children().removeClass("img_rotate");// 移除图片旋转
		// 暂停按钮更换为播放按钮，title更换为播放
		play.removeClass("m_pause").addClass("m_play").attr("title", "播放");
		flag = false;// 修改歌曲是否播放的标记 true播放 false暂停
	} else {
		//如果歌曲暂停播放歌曲，图片旋转，播放按钮更换为暂停，title更换为暂停
		mp3.get(0).play();// 播放歌曲
		li.eq(index).children().addClass("img_rotate");// 图片旋转
		// 播放按钮更换为暂停按钮，title更换为暂停
		play.removeClass("m_play").addClass("m_pause").attr("title", "暂停");
		flag = true;// 修改歌曲是否播放的标记 true播放 false暂停
		change_bg(index+1);// 第一次进入页面直接点击播放按钮时的背景处理
	}
});

//上一首
prev.click(function() {
	index--;
	if (index<0) {
		//让歌曲到最后一首
		index = li.length - 1;
	}
	// 播放歌曲
	show();
});

//下一首
next.click(function() {
	index++;
	if (index >li.length-1 ) {
		//让歌曲播放第一首
		index = 0;
	}
	// 播放歌曲
	show();
});

//播放器显示于隐藏
$(".m_close").click(function() {
	// 如果显示则隐藏 添加样式
	if (close) {
		//改为绿色
		$(this).addClass("m_open");
		// 添加向左移动样式2秒完成
		$(".music").animate({"left": "-520px"}, 1500);  //动画执行方式
		close = false;// 播放器是否显示 true显示 false隐藏
	} else {
		// 如果隐藏则显示 移除样式
		$(this).removeClass("m_open");
		// 恢复初始值
		$(".music").animate({"left": "0px"}, 1500);
		close = true;// 播放器是否显示 true显示 false隐藏
	}
});

