

Ext.define('Af.detailgoods.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-detailgoods-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'detailgoodspanel',
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
				html:'<img src="resources/themes/images/default/article_usr_img4.png" width="42px"/><img  style="width: 15px;margin-left: -15px;margin-top: 28px;" src="resources/themes/images/default/v.png"/><div class="article-userinfo"><div class="username">雅芳香水</div><div class="datetime">2011-11-21 13:36发布</div></div>'
			},
			{
				xtype: 'panel',
				cls: 'article-hot-panel',
				html:'<div class="article-hot-triangel"></div><div style="height:8px"></div><div class="hot-panel"><span class="hot">72℃</span></div>'
			},
			{
				xtype: 'panel',
				cls: 'article-detail-panel',
				html:'<div class="article-header"><div class="article-title"><b>Nena von Schlebrugge in 1961 Avon Perfume</b></div><div style="height:22px;"><span class="article-distance">距离：万达广场&nbsp;&nbsp; &nbsp;活动时间：2011-12-27</span></div><div><span  class="article-distance">报名：293  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp; &nbsp;      喜欢：1231</span></div></div>',
				
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
				html:'<img src="resources/themes/images/default/activities/1.png"  width="100%"/>'
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
						html: '<img src="resources/themes/images/default/activities_good.png" width="30px"></img>'
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
						html: '<img src="resources/themes/images/default/add_icon2.png" width="30px"></img>'
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
			
			
		]
	},
	initialize: function(){
		this.callParent();
	}
});