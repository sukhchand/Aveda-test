four51.app.factory('leftNavService', ['$q', '$rootScope', '$resource', '$451', function($q, $rootScope, $resource, $451) {

// var data = {
// 	sdp : [
// 		{ 
// 			title:"News",
// 			iconClass:'news_icon'

// 		},
// 		{ 
// 			title:"promotions",
// 			iconClass:'promotions_icon'

// 		},
// 		{ 
// 			title:"MY profile",
// 			iconClass:'profile_icon'
// 		},
// 		{ 
// 			title:"My Orders",
// 			iconClass:'orders_icon',
// 			submenu:['Order History','Pending Orders','User Orders']
// 		},
// 		{
// 			title:"Submit Claim",
// 			iconClass:"submitclaim_icon"
// 		},
// 		{
// 			title:"client dislike",
// 			iconClass:"clientDislike_icon"
// 		}
// 	],
		 
// 	csr : [],
// 	salonadmin : {
// 		example: "Data"
// 	},
// 	salonuser : [{ 
// 			title:"News",
// 			iconClass:'news_icon'

// 		},
// 		{ 
// 			title:"promotions",
// 			iconClass:'promotions_icon'

// 		},
// 		{ 
// 			title:"MY profile",
// 			iconClass:'profile_icon'
// 		},
// 		{ 
// 			title:"My Orders",
// 			iconClass:'orders_icon',
// 			submenu:['Order History','Pending Orders','User Orders']
// 		}]
// };


	var permissions = {
		csr	: ['news', 'promotions', 'profile', 'claims', 'clients'],
		sdp	: ['news', 'promotions', 'profile', 'claims', 'clients', 'salons', 'pendingOrder' ],
		salonadmin	: ['news', 'promotions', 'profile', 'claims', 'clients', 'orders', 'salons', 'users'],
		salonuser	: ['news', 'promotions', 'profile', 'orders']
	};

	var _getUserPermissions = function(userGrpName){
		if(userGrpName == '' || !userGrpName)
			return [];
		return permissions[userGrpName];
	};
	return {
		getUserPermissions : _getUserPermissions
	}

}]);