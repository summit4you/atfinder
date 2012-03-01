Ext.define('Af.stranger.panel', {
	extend: 'Ext.Panel',
	xtype: 'af-stranger-panel',
	config: {
		cls: 'af-stranger-panel',
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'strangerpanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items: [
			{
				xtype:'panel',
				docked:'top',
				cls:'stranger-toppanel',
				html:'<img src="resources/themes/images/default/logo_icon.png" height="38px"/><span class="cright">账号：13610000000</span>',
				initialize: function(){
					var self=this;
					Ext.create("Ext.Button", {
						baseCls: 'x-button-af',
						html:'<img src="resources/themes/images/default/off.png" height="30px" width="30px"/>',
						handler:function(){
							alert("i like it");
						},
						renderTo: self.element
					});
				}
			},
			{
				xtype: 'titlebar',
				title: '<b>返&nbsp;&nbsp;回</b>',
				ui: 'af',
				height: 30,
			},
			{
				xtype: 'panel',
				cls: 'stranger-panel',
				layout: 'vbox',
				items:[
					{
						xtype:'panel',
						cls: 'header-panel',
						html: '<img src="resources/themes/images/default/article_usr_img.png" width="42px" style="float:left"/><div class="header-info"><div class="username">林月美</div><div class="time">2011-11-21 13:36发布</div></div><span class="hot">153℃</span>'
					},
					{
						xtype: 'panel',
						cls: 'stranger-content-panel',
						html: '<div><div class="up-angle"></div><div class="up-angle2"></div></div><div class="content"><div class="content-title"><div class="title">雪花牛排</div><div class="distance">距离：0.9km</div></div><span class="price">￥108</span><div><img src="resources/themes/images/default/article_img.png" height="190px" width="100%"/></div><div class="nav"><a href="#">上一页</a><a href="#" style="float:right">下一页</a></div><div class="content-text">牛排，可谓吃西餐的代名词。有人说，如果学会吃牛扒，就可以顺利地迈入西式生活。</div></div></div>'
					},
					{
						xtype:'panel',
						cls: 'stranger-buton-panel',
						layout:{
							align:'center',
							type:'hbox',
						},
						items:[
							{
										xtype: 'button',
										cls: 'stranger-button',
										baseCls: 'x-button-af',
										pressedCls: 'stranger-button-clicked',
										html:'<img src="resources/themes/images/default/star_button.png" height="17px"  style="vertical-align:text-bottom"/>&nbsp;&nbsp;&nbsp;&nbsp;75分',
										flex:1
							},
							{
								xtype: 'spacer',
								width: 28,
								//flex: 61/640,
								//flex: 0.078
							},
							{
								xtype: 'button',
								cls: 'stranger-button',
								pressedCls: 'stranger-button-clicked',
								baseCls: 'x-button-af',
								html:'<img src="resources/themes/images/default/like_button.png" height="15px"/>&nbsp;&nbsp;喜欢(4)',
								flex:1
							},
							{
								xtype: 'spacer',
								width: 28,
								//flex: 61/640,
								//flex: 0.078
							},
							{
								xtype: 'button',
								cls: 'stranger-button',
								pressedCls: 'stranger-button-clicked',
								baseCls: 'x-button-af',
								html:'<img src="resources/themes/images/default/reship_button.png" height="15px"  style="vertical-align:text-bottom"/>&nbsp;&nbsp;转载(2)',
								flex:1
							},
						]
					},
					{
						xtype:'panel',
						cls:'stranger-review-panel',
						layout:'vbox',
						items:[
							{xtype:'panel', cls:'panel-title', html:'评论（1）'},
							{xtype:'panel', cls:'panel-body', html:'<div class="username">陶圆圆：</div><div class="review">这个很好吃的啊~~</div>'},
						]
					},
					{
						xtype:'panel',
						cls:'stranger-review-panel',
						layout:'vbox',
						items:[
							{xtype:'panel', cls:'panel-title', html:'写评价', style:'border-bottom: none;'},
							{
								xtype:'formpanel', cls:'stranger-review-formpanel', 
								items:[{
										xtype: 'textareafield',
										id: 'review',
										name: 'review',
										placeHolder: '请写出你的评价...',
										clearIcon: true,
										flex:1
									},
									{
										xtype:'button',
										style:'float:right;margin-top:10px;',
										baseCls: 'x-button-af',
										cls: 'stranger-button',
										pressedCls: 'stranger-button-clicked',
										html:'确&nbsp;&nbsp;定',
										handler:function(){
											alert("i like it");
									},
								
							}
						], height:150, 
				},
						]
						
					}
				]
			},
			
			{
				xtype:'panel',
				docked:'bottom',
				cls:'stranger-bottompanel',
				html:'<span>京ICP备000000000</span><span style="float:right">广东移动无线城市商家联盟版权所有</span>',
			},
			{
				xtype:'panel',
				docked:'bottom',
				cls:'stranger-returnpanel',
				html:'<span style="float:right">回到顶部</span>',
				initialize: function(){
					var self=this;
					Ext.create("Ext.Button", {
						baseCls: 'x-button-af',
						html:'<img src="resources/themes/images/default/return_top.png" height="22px" />',
						style:'margin-top: -8px;',
						handler:function(){
							
							if (Ext.getCmp('strangerpanel').getScrollable().getScroller()) {
								Ext.getCmp('strangerpanel').getScrollable().getScroller().scrollTo(0,0);
							}
						},
						renderTo: self.element
					});
				}
			},
		]
	},
	initialize: function(){
		this.callParent();
	}
});
