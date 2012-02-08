Ext.define('Af.panel', {
	
	extend: 'Ext.Panel',
	requires: ['Af.login.panel', 'Af.profile.panel', 'Af.inviting.panel', 'Af.account.panel','Af.detailusers.panel','Af.detailarticle.panel', 'Af.feed.panel', 'Af.friends.panel', 'Af.tag.panel', 'Af.guid.panel'],

	config:{
		id: 'main-panel',
		fullscreen: true,
		layout: 'card',
		activeItem: 3,
		cardSwitchAnimation: 'slide',
		items:[
			{ 
				xtype: 'af-login-panel',
				id: 'loginpanel'
			},
			{
				xtype: 'af-profile-panel',
				id: 'profilepanel'
			},
			{
				xtype: 'af-inviting-panel',
				id: 'invitingpanel'
			},
			{
				xtype: 'af-account-panel',
				id: 'accountpanel'
			},
			{
				xtype: 'af-detailusers-panel',
				id: 'detailuserspanel'
			},
			{
				xtype: 'af-detailarticle-panel',
				id: 'detailarticlepanel'
			},
			{
				xtype: 'af-friends-panel',
				id: 'friendspanel',
			},
			{
				xtype: 'af-feed-panel',
				id: 'feedpanel'

			},
			{
				xtype: 'af-tag-panel',
				id: 'tagpanel'

			},
			{
				xtype: 'af-guid-panel',
				id: 'guidpanel'

			}
		]
	},
	initComponent: function(){
		
		Af.panel.superclass.initComponent.call(this);
		// this.mon(Ext.getCmp('loginpanel'), 'login', this.showHomePanel, this);
	}
		
});