window.config={
	forbidai:['zuoci'],
	forbidall:['xiahouyuan','huangzhong','weiyan','dianwei','zhangjiao',
	'caocao','simayi','guanyu','zhangfei','zhaoyun','ganning','lvmeng','lvbu'],
	forbidversus:['swd_kangnalishi'],
	forbidstone:['zhugedan','pal_xuanxiao','hs_malfurion','lusu','chenlin','hs_siwangzhiyi',
	'gjqt_bailitusu','yuanshao','swd_anka','swd_nicole','daqiao','re_daqiao','hs_xuanzhuanjijia',
	'zhuran','huatuo','swd_tuwei','hs_guldan','wangyi','caoang','swd_guyue','swd_rongshuang',
	'swd_jiangziya','guojia','re_guojia','shen_caocao','swd_qiner','caopi','hs_yngvar','guansuo',
	'gjqt_aruan','swd_hanluo','hs_anduin','swd_huanglei','yxs_yujix','yxs_luzhishen','swd_muyun',
	'ow_tianshi'],
	replacecharacter:{
		zhangjiao:'sp_zhangjiao',
		caocao:'re_caocao',
		simayi:'re_simayi',
		guanyu:'re_guanyu',
		zhangfei:'re_zhangfei',
		zhaoyun:'re_zhaoyun',
		ganning:'re_ganning',
		lvmeng:'re_lvmeng',
		lvbu:'re_lvbu',
		liubei:'re_liubei',
		yuanshao:'re_yuanshao',
	},
	forbidchess:['hetaihou','swd_kangnalishi'],
	forbidboss:['caiwenji','gjqt_aruan','pal_xuanxiao','swd_hupo'],
	forbiddouble:['zhugedan','swd_kangnalishi','dongzhuo','wutugu','hs_siwangzhiyi','hs_ronghejuren','hs_shanlingjuren'],
	all:{
		sgscharacters:['standard','shenhua','refresh','yijiang','sp','extra','guozhan','old'],
		sgscards:['standard','extra','sp','guozhan'],
		sgsmodes:['identity','guozhan','versus','brawl','connect'],
		stockmode:['identity','guozhan','versus','boss','chess','stone','connect','brawl','tafang','hearthstone'],
		stockextension:['boss','cardpile','character','coin','soldier','weather','wuxing','hs_mod'],
		layout:['default','newlayout'],
		theme:['woodden','music','simple'],
		card_font:['xiaozhuan','huangcao','caoshu','xingshu'],
		double_hp:['hejiansan','pingjun','zuidazhi','zuixiaozhi','zonghe'],

		image_character:['default'],
		image_background:['default','huangyueying_bg','zhulian_bg',
		'september_bg','xueji_bg','yinxiang_bg','chunhui_bg',
		'grass_bg','huangtian_bg'],
		image_background_filter:['default','blur','gray','sepia','invert','saturate','contrast','hue','brightness'],
		background_music:['music_default','music_diaochan','music_shezhan','music_danji','music_random','music_off']
	},

	game:'sgs',
	duration:500,
	hoveration:1000,
	cheat:false,
	volumn_background:8,
	volumn_audio:8,

	connect_avatar:'caocao',
	connect_nickname:'无名玩家',
	config_menu:true,
	auto_popped_config:true,
	auto_popped_history:false,
	auto_skill:true,
	auto_confirm:true,
	enable_drag:true,
	hover_handcard:true,
	hover_all:true,
	right_info:true,
	long_info:true,
	background_music:'music_default',
	background_audio:true,
	background_speak:true,
	glow_phase:'yellow',
	die_flip:true,

	skin:{},
	gameRecord:{},
	extensionInfo:{},
	hiddenModePack:[],
	hiddenCharacterPack:[],
	hiddenCardPack:[],
	hiddenPlayPack:[],
	favouriteCharacter:[],
	recentCharacter:[],
	recentIP:[],

	theme:'woodden',
	layout:'mobile',
	card_style:'default',
	cardback_style:'default',
	hp_style:'default',

	image_character:'default',
	image_background:'default',

	asset_image:true,
	asset_font:true,

	card_font:'xiaozhuan',
	show_name:true,
	show_replay:false,
	show_pause:true,
	show_auto:true,
	show_volumn:true,
	show_cardpile:true,
	only_fullskin:true,
	show_connect:true,
	show_wuxie:false,
	show_wuxie_self:true,
	show_stat:true,
	show_playerids:true,
	show_scrollbar:false,
	mousewheel:true,
	fold_card:true,
	threed_card:false,
	vertical_scroll:false,
	handcard_scroll:0,
	animation:true,
	skill_animation:true,
	paused:false,
	title:false,
	button_press:true,
	damage_shake:true,
	log_highlight:true,
	player_border:'normal',
	radius_size:'default',

	modeconfig:false,
	gameconfig:false,
	appearence:false,
	video:'20',
	coin:0,

	intro:'i',
	right_click:'pause',
	sort:'type_sort',

	cards:['standard','ex','extra','sp','classic','basic'],
	characters:['standard','shenhua','refresh','sp','yijiang'],
	connect_characters:[],
	connect_cards:[],
	plays:[],
	extensions:[],
	banned:[],
	bannedcards:[],
	bannedpile:{},
	customcardpile:{},
	addedpile:{},

	mode:'identity',
	mode_config:{
		global:{
			player_number:8,
			auto_identity:'off',
			double_character:false,
			save_progress:true,
			free_choose:true,
			swap:true,
			change_identity:true,
			battle_number:3,
			double_hp:'pingjun',
		},
		identity:{
			identity:[
				['zhu','fan'],
				['zhu','nei','fan'],
				['zhu','zhong','nei','fan'],
				['zhu','zhong','nei','fan','fan'],
				['zhu','zhong','nei','fan','fan','fan'],
				['zhu','zhong','zhong','nei','fan','fan','fan'],
				['zhu','zhong','zhong','nei','fan','fan','fan','fan'],
			],
			choice:{
				zhu:3,
				zhong:4,
				nei:5,
				fan:3,
			},
			show_identity:true,
			difficulty:'normal',
			dierestart:true
		},
		guozhan:{
			difficulty:'normal',
			initshow_draw:2,
			dierestart:true
		},
	},
	current_mode:{},
	customforbid:[],
	forbid:[
		['huashen'],
		['lianying','rende'],
		['lianying','anxian'],
		['lianying','yinguo'],
		['lianying','qingjian'],
		['boss_juejing','rende'],
		['boss_juejing','anxian'],
		['boss_juejing','yinguo'],
		['boss_juejing','qingjian'],
		['shangshi','rende'],
		['shangshi','anxian'],
		['shangshi','yinguo'],
		['shangshi','qingjian'],
		['rende','relianying'],
		['anxian','relianying'],
		['yinguo','relianying'],
		['shenxing','relianying'],
		['qingjian','relianying'],
		['rende','yuling'],
		['anxian','yuling'],
		['yinguo','yuling'],
		['qingjian','yuling'],
		['qingnang','yiji'],
		['qingnang','reyiji'],
		['qingjian','tuntian'],
		['yiji','tuntian'],
		['reyiji','tuntian'],
		['tuntian','guidao'],
		['tuntian','tiandao'],
		['tuntian','huanshi'],
		// ['tuntian','guicai'],
		// ['jiang','chongzhen'],
		// ['fenji','yuling'],
		['jiushi','guixin'],
		['xiuhua','qiaoxie'],
		['xiuhua','xuanfeng'],
		['xiuhua','duanxing'],
		['xiuhua','xiaoji'],
		['xiuhua','xiaoji'],
		// ['jiushi','jushou'],
		// ['jiushi','kuiwei'],
	]
};
window.mode={};
window.card={};
window.character={};
window.play={};
window.background={};
window.music={};
window.font={};
window.theme={};
