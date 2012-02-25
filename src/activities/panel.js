Ext.define("Activities", 
	{
		extend: "Ext.data.Model", 
		fields: ['id', 'title', 'img', 'username', 'time', 'address', 'follownum', 'favournum']
	}
);

activitiesstore = Ext.create('Ext.data.Store',{
   model: 'Activities',
   //sorters: 'username',
   id:'activitiesstore',

    grouper: {groupFn: function(record) {
       return record.get('username')[0];
   }},

   data: [
       {id:'1',title: 'Nena von Schlebrugge in 1961 Avon Perfume',   img: 'resources/themes/images/default/activities/1.png', username:'雅芳香水', time:'2011-12-27', address:'万达广场', follownum:'293', favournum:'1231'},
     {id:'2',title: '龙门飞甲首映礼抽奖IMAX3D电影票',   img: 'resources/themes/images/default/activities/2.png', username:'万达电影城', time:'2011-12-27', address:'万达广场', follownum:'293', favournum:'1231'},
     {id:'3',title: '庐山自由行赏雪松美景温泉票7折',   img: 'resources/themes/images/default/activities/3.png', username:'庐山风景', time:'2012-01-27', address:'以太广场到庐山', follownum:'293', favournum:'1231'}
   ],
   autoLoad: true,
   listeners: {
		 refresh: function(){
			var items = [];
            
            Ext.each(this, function(r) {
				var info = new Ext.create("Af.activities.infopanel", {
					layout:'fit',
					height: '960',
					width: '640',
				});
				info.setHtml(r);
                items.push(info);
            });
            var carousel = Ext.getCmp('activities-carousel');
			if(carousel){
				carousel.setItems(items);
				carousel.setActiveItem(0);
			}
		 }
	},
});



Ext.define('Af.activities.panel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-activities-panel',
	requires: ['Af.activities.infopanel'],
	config: {
		cls: 'af-activities-panel',
		height: '960',
		width: '640',
		layout: 'vbox',
		id: 'activitiespanel',
		items: [
		// top bar
		{
			xtype: 'titlebar',
			title: '<b>活&nbsp;&nbsp;动</b>',
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
						html: '<img src="resources/themes/images/default/feed_r1_c32.png" width="25px"></img>',
						width: 45,
					},
			
			]
		},
		{
			xtype: 'carousel',
			cls: 'activities-carousel',
			id: 'activities-carousel',
			indicator:false,
			listeners:{
				activeitemchange: function(o, v, ov){
					if(ov){
						ov.removeCls('active');
					}
					v.addCls('active');
				}
			},
			updateStore : function (store) {
				
		        var items = [];
				store.data.each(function(r, index) {
					var info =  Ext.create("Af.activities.infopanel", {
					});
					info.setData(r.getData());
					items.push(info);
					
				});
				
			   this.setItems(items);
			   this.setActiveItem(0);
			    
		    },
			flex:1,
		},
		
		]
	},
	
	initialize: function() {
		var controlpanel = Ext.create("Ext.Panel", {
			layout: 'vbox',
			right:62,
			top:136,
			items:[
				{
					xtype:'button', 
					baseCls: 'x-button-af',
					html:'<div style="text-align:right"><img src="resources/themes/images/default/activities_like.png" width="30px"></img></div>',
					handler:function(){
						alert("i like it");
					}
				},
				{
					xtype:'spacer',
					height:20
				},
				{
					xtype:'button', 
					baseCls: 'x-button-af',
					html:'<div style="text-align:right"><img src="resources/themes/images/default/activities_add.png" width="30px"></img></div>',
					handler:function(){
						alert("i like it");
					}
				},
				{
					xtype:'spacer',
					height:20
				},
				{
					xtype:'button', 
					baseCls: 'x-button-af',
					html:'<div style="text-align:right"><img src="resources/themes/images/default/activities_good.png" width="30px"></img></div>',
					handler:function(){
						alert("i like it");
					}
				}
			],
			renderTo: Ext.getCmp('activities-carousel').el
		});
		this.callParent();
		
	},
});
