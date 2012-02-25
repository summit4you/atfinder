

Ext.define('Af.detailarticle.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-detailarticle-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'detailarticlepanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>详&nbsp;&nbsp;情</b>',
				ui: 'af',
				height: 30,
				items: [
					{ // I think this a bug....but it's important for layout T-T
						xtype:'button',
						cls: 'af-toolbar-button',
						baseCls: 'x-button-af',
						align: 'left',
					},
					{
						xtype:'button',
						cls: 'af-toolbar-button',
						baseCls: 'x-button-af',
						align: 'left',
						width: 45,
						html: '<div style="text-align:left"><img src="resources/themes/images/default/return_icon.png" height="25px"></img></div>',	
					},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 1,
						
                	},
					{
						xtype: 'spacer',
						cls: 'login-toolbar-spacer',
						width: 1,
						align : 'right',
					},
					{
						xtype:'button',
						cls: 'af-toolbar-button',
						baseCls: 'x-button-af',
						align: 'right',
						width: 45,
						html: '<div style="text-align:right"><img src="resources/themes/images/default/enter_icon.png" width="29px"></img></div>'
					},
				]
			},
			{
				xtype: 'panel',
				cls: 'article-profile-panel',
				html:'<img src="resources/themes/images/default/article_usr_img.png" width="42px"/><div class="article-userinfo"><div class="username">林明美</div><div class="datetime">2011-11-21 13:36发布</div></div>'
			},
			{
				xtype: 'panel',
				cls: 'article-hot-panel',
				html:'<div class="article-hot-triangel"></div><div style="height:8px"></div><div class="hot-panel"><span class="hot">32℃</span></div>'
			},
			{
				xtype: 'panel',
				cls: 'article-detail-panel',
				html:'<div class="article-header"><div class="article-title"><b>雪花牛排</b></div><div style="height:22px;"><span class="article-distance">距离：0.9km</span><span class="article-price"><b>￥108</b></span></div></div>',
				
			},
			{
				xtype: 'panel',
				cls: 'article-header-bar',
				layout: 'hbox',
				items:[
					{
						xtype:'panel',
						cls: 'red-bar',
						flex:0.15625,
					},
					{
						xtype:'panel',
						cls: 'blue-bar',
						flex:0.84375,
					}
				]
			},
			{
				xtype:'panel',
				cls: 'article-img',
				html:'<img src="resources/themes/images/default/article_img.png" height="190px" width="100%"/>'
			},
			{
				xtype: 'panel',
				cls: 'article-intro',
				html: '<div class="article-intro-content">牛排，可谓吃西餐的代名词。有人说，如果学会吃牛扒，就可以顺利地迈入西式生活。</div>'
			},
			{
				xtype: 'panel',
				cls: 'article-button-panel',
				items:[
					{
						xtype: 'panel',
						cls: 'article-button-row-bottom',
						layout: 'hbox',
						items:[
							{
								xtype: 'button',
								cls: 'article-button',
								baseCls: 'x-button-af',
								pressedCls: 'article-button-clicked',
								html:'<img src="resources/themes/images/default/star_button.png" height="17px"  style="vertical-align:text-bottom"/>&nbsp;&nbsp;&nbsp;&nbsp;75分'
							},
							{
								xtype: 'panel',
								cls: 'article-button-row-content',
								html:'<img src="resources/themes/images/default/article_star.png" height="24px"  style="vertical-align:text-bottom"/><img src="resources/themes/images/default/article_star.png" height="24px"  style="vertical-align:text-bottom"/><img src="resources/themes/images/default/article_star.png" height="24px"  style="vertical-align:text-bottom"/><img src="resources/themes/images/default/article_star2.png" height="24px"  style="vertical-align:text-bottom"/><img src="resources/themes/images/default/article_star2.png" height="24px"  style="vertical-align:text-bottom"/>'
							}
						]
					},
				]
			},
			{
				xtype: 'panel',
				cls: 'article-button-panel',
				items:[
					{
						xtype: 'panel',
						cls: 'article-button-row',
						layout: 'hbox',
						items:[
							{
								xtype: 'button',
								cls: 'article-button',
								pressedCls: 'article-button-clicked',
								baseCls: 'x-button-af',
								html:'<img src="resources/themes/images/default/like_button.png" height="15px"/>&nbsp;&nbsp;喜欢(4)'
							},
							{
								xtype: 'panel',
								cls: 'article-button-row-content',
								html:'<img src="resources/themes/images/default/article_usr_img0.png" height="25px"/><img src="resources/themes/images/default/article_usr_img1.png" height="25px"/><img src="resources/themes/images/default/article_usr_img2.png" height="25px"/><img src="resources/themes/images/default/article_usr_img3.png" height="25px"/><img src="resources/themes/images/default/article_usr_img_null.png" height="26px"/>'
							}
						]
					},
					{
						xtype: 'panel',
						cls: 'article-button-row-bottom',
						layout: 'hbox',
						items:[
							{
								xtype: 'button',
								cls: 'article-button',
								pressedCls: 'article-button-clicked',
								baseCls: 'x-button-af',
								html:'<img src="resources/themes/images/default/reship_button.png" height="15px"  style="vertical-align:text-bottom"/>&nbsp;&nbsp;转载(2)'
							},
							{
								xtype: 'panel',
								cls: 'article-button-row-content',
								html:'<img src="resources/themes/images/default/article_usr_img1.png" height="25px"/><img src="resources/themes/images/default/article_usr_img3.png" height="25px"/><img src="resources/themes/images/default/article_usr_img_null.png" height="26px"/><img src="resources/themes/images/default/article_usr_img_null.png" height="26px"/><img src="resources/themes/images/default/article_usr_img_null.png" height="26px"/>'
							}
						]
					},
				]
			},
			{
				xtype: 'panel',
				cls: 'article-review-panel',
				html: '评价(1)'
			},
			{
				xtype: 'panel',
				cls:'article-review-content-panel',
				html: '<img src="resources/themes/images/default/article_review_usr_img.png" width="42px"/><div class="review-info"><div class="username">陶圆圆</div><div class="review">这个很好吃的啊~~</div></div>'
			},
			{
				//73 60 48 60 49 60 48 60 50 60 72
				xtype : 'toolbar',
            	docked: 'bottom', 	
				height: 40,
				ui: 'af2',
				layout: {
					type:'hbox',
					align:'center'
				},
				items:[
					{
						xtype: 'spacer',
						//width: 25,
						//flex: 50/640,
						flex: 0.37
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/collect_icon2.png" width="30px"></img>'
					},
					{
						xtype: 'spacer',
						width: 25,
						//flex: 61/640,
						//flex: 0.078
                	},
					{
						xtype: 'button',
						cls: 'af-toolbar-cbutton',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/edit_icon2.png" width="30px"></img><img src="resources/themes/images/default/edit_icon.png" width="30px" style="display:none;"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.364
                	},
					
				]
			},
			{
				xtype: 'panel',
				cls: 'article-review-edit-panel',
				layout: 'hbox',
				docked:'bottom',
				items:[
					{
						xtype:'textfield',
						cls: 'article-review-textareafield',
						name: 'myreview',
						placeHolder: '输入你的评价',
						clearIcon: false,
						width: '86%'
					},
					{
						xtype: 'button',
						cls: 'article-review-submit',
						baseCls: 'x-button-af',
						html: '<img src="resources/themes/images/default/edit_icon2.png" width="30px"/>',
						flex:1,
					}
				]
			},
			
		]
	},
	initialize: function(){
		this.callParent();
	}
});