Ext.define('Af.panel', {
	
	extend: 'Ext.Panel',
	requires: ['Af.login.panel', 'Af.profile.panel', 'Af.inviting.panel', 'Af.account.panel','Af.detailusers.panel','Af.detailarticle.panel', 'Af.feed.panel', 'Af.friends.panel','Af.tag.panel',  'Af.guid.panel', 'Af.discover.panel', 'Af.shopping.panel',  'Af.issuepic.panel', 'Af.activities.panel','Af.activities.infopanel', 'Af.vote.panel','Af.tipoff.panel','Af.feel.panel', 'Af.detailgoods.panel', 'Af.message.panel', 'Af.msgeval.panel', 'Af.msgprivate.panel', 'Af.goods.panel', 'Af.share.panel',  'Af.issueact.panel','Af.issuegoods.panel','Af.issuecoupon.panel',],

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
				xtype: 'af-feed-panel',
				id: 'feedpanel'

			},
			{
				xtype: 'af-friends-panel',
				id: 'friendspanel',
			},
			{
				xtype: 'af-tag-panel',
				id: 'tagpanel'

			},
			{
				xtype: 'af-guid-panel',
				id: 'guidpanel'

			},
			{
				xtype: 'af-discover-panel',
				id: 'discoverpanel'
			},
			{
				xtype: 'af-shopping-panel',
				id: 'shoppingpanel'
			},
			{
				xtype: 'af-issuepic-panel',
				id: 'issuepicpanel'
			},
			{
				xtype: 'af-activities-panel',
				id: 'activitiespanel'
			},
			{
				xtype: 'af-vote-panel',
				id: 'votepanel'
			},
			{
				xtype: 'af-tipoff-panel',
				id: 'tipoffpanel'
			},
			{
				xtype: 'af-feel-panel',
				id: 'feelpanel'
			},
			{
				xtype: 'af-detailgoods-panel',
				id: 'detailgoodspanel'
			},
			{
				xtype: 'af-message-panel',
				id: 'messagepanel'
			},
			{
				xtype: 'af-msgeval-panel',
				id: 'msgevalpanel'
			},
			{
				xtype: 'af-msgprivate-panel',
				id: 'msgprivatepanel'
			},
			{
				xtype: 'af-goods-panel',
				id: 'goodspanel'
			},
			{
				xtype: 'af-share-panel',
				id: 'sharepanel'
			},
			{
				xtype: 'af-issueact-panel',
				id:'issueactpanel'
			},
			{
				xtype: 'af-issuegoods-panel',
				id:'issuegoodspanel'
			},
			{
				xtype: 'af-issuecoupon-panel',
				id:'issuecouponpanel'
			}
		]
	},
	initialize: function(){
		this.callParent();
	}
		
});