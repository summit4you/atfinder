Ext.define("Buyer", 
	{
		extend: "Ext.data.Model", 
		
		fields:  ['usrImg', 'username', 'score', 'class', 'address', 'review', 'fans', 'distance', 'hot', 'isset']
		
	}
);



var store = Ext.create('Ext.data.Store',{
   model: 'Buyer',
   //sorters: 'username',

    /*grouper: {groupFn: function(record) {
       return record.get('username')[0];
   }},*/

   data: [
       {usrImg: 'resources/themes/images/default/friends/1.png',   username: '王品台塑牛排', score:'90', class:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/2.png',   username: '日本鱼子饭', score:'120', class:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'159', isset:'1'},
       {usrImg: 'resources/themes/images/default/friends/3.png',   username: 'AngleSimple', score:'217', class:'艺术蛋糕', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.5', hot:'346', isset:'0'},
       {usrImg: 'resources/themes/images/default/friends/4.png',   username: '日本小丸子', score:'321', class:'日式餐馆', address:'天河粤垦路188号', review:'2', fans:'32', distance:'0.9', hot:'215', isset:'0'},
       {usrImg: 'resources/themes/images/default/friends/5.png',   username: '王品台塑牛排', score:'90', class:'西式餐馆', address:'天河粤垦路188号', review:'0', fans:'0', distance:'0.8', hot:'270', isset:'1'}
   ]
});

Ext.define('Af.friends.panel', {
	
	extend: 'Ext.Panel',
	xtype   : 'af-friends-panel',
	config: {
		// cls: 'af-login-panel',
		height: '960',
		width: '640',
		layout:'vbox',
		id:'friendspanel',
		scrollable: {
        	direction: 'vertical'
   		},
		items:[
			{
				xtype: 'titlebar',
				docked: 'top', 
				title: '<b>商家推荐</b>',
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
					}
				]
			},	
			{
				xtype: 'list',
				cls: 'friends-list',
				selectedCls:  'friends-list-selected',
				itemTpl: '<img src={usrImg} width="75px" style="float:left;"/><div style="float:left;"><div class="row" style="height:16px;line-height:16px;"><span class="username">{username}</span><img src="resources/themes/images/default/friends_score.png" width="13px" style="margin-left:5px;"/><span class="score">{score}</span></div><div class="row" style="height:16px;line-height:16px;"><span class="class">{class}</span></div><div class="row"  style="height:16px;line-height:16px;"><span class="address">地址:{address}</span></div><div class="row" style="height:12px;line-height:12px;"><span class="review">评价<tpl if="review &gt; 0"><a href="#">({review})</a></tpl>   粉丝<tpl if="fans &gt; 0"><a href="#">({fans})</a></tpl>   距离：{distance}km</span></div></div><div class="hot-panel <tpl if="hot &lt; 270">hot-bkcolor-blue</tpl> <tpl else">hot-bkcolor-red</tpl>">{hot}℃<img src="resources/themes/images/default/add.png" width="13px" style="top: 18px;right: 20px;position: relative;float:right; <tpl if="isset==0">display:none;</tpl>"/></div>',
				store: store,
				flex:1,
				onItemDisclosure : {
					handler: function(record, btn, index) {
						record.set('isset', 1-record.get('isset'));
					}
         		},
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
						html: '<img src="resources/themes/images/default/return_icon2.png" width="30px"></img>'
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
						html: '<img src="resources/themes/images/default/ok_icon.png" width="30px"></img>'
					},
					{
						xtype: 'spacer',
						//width: 40,
						//flex: 80/640,
						flex: 0.364
                	},
					
				]
			}
		]
	},
	initialize: function(){
		this.callParent();
	}
});