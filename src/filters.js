export let getArticleTab = (tab, good, top) => {
	let str = '';
	if(top){
			str = '置顶';
	}else if(good){
			str = '精华';
	}else{
		switch(tab){
			case 'share':
					str = '分享';
					break;
			case 'ask':
					str = '问答';
					break;
			case 'job':
					str = '招聘';
					break;
			default:
					str = "无";
					break;
		}
	}
	return str;
}

export let getLastTime = (creatTime) => {
	let oldtime = new Date(creatTime);
	let newtime = (new Date() - oldtime)/1000;
	let month = Math.floor(newtime/3600/24/30);
	let day = Math.floor(newtime/3600/24);
	let hours = Math.floor(newtime/3600);
	let mins = Math.floor(newtime/60);
	let str = '';
	if(hours === 0){
		str = mins + '分钟前';
	}else if(day === 0){
		str = hours + '小时前';
	}else if(month === 0){
		str = day + '天前';
	}else if(mins === 0) {
		str = newtime + '秒前'
	}else {
		str = month + '月前';
	}
	return str;
}