Ext.define('Af.activities.infopanel', {
	
	extend: 'Ext.Panel',
	xtype: 'af-activities-infopanel',
	config: {
		cls: 'af-activities-infopanel',
		tpl:new Ext.XTemplate('<div>{title}</div>',
		'<div><img src="{img}"/></div>',
		'<div><ul><li>发起：{username}</li><li>时间：{time}</li><li>地点：{address}</li><li>报名({follownum}) 喜欢({favournum})</li></ul></div>'),
		
	},
			
	initComponent: function() {
		Af.activities.infopanel.superclass.initComponent.apply(this);
	},
});