Ext.define('Af.activities.infopanel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-activities-infopanel',
	config: {
		cls: 'af-activities-infopanel',
		tpl:new Ext.XTemplate('<div class="activities-infopanel"><div class="title">{title}</div>',
		'<div class="activities-image"><img src="{img}" width="200px" height="250px"/></div>',
		'<div class="activities-info"><ul><li>发起：{username}</li><li>时间：{time}</li><li>地点：{address}</li><li>报名({follownum}) 喜欢({favournum})</li></ul></div></div>'),
		
	},
			
	initialize: function() {
		this.callParent();
		
	},
});