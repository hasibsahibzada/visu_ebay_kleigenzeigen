// check if user is logged in or not
	var user_status = window.localStorage.getItem("key");

	if (user_status !=null){

		//var PWDiv = document.getElementById("title");
		//PWDiv.innerHTML +="Login as " + user_status + "<br>";

		// change footbar menu
		var user_menu = "<ul> <li><a href='newfeed.html'>Post Product</a></li> <li><a href='#'' onclick= 'logout();''>Logout</a></li> </ul>";
		var footbar_menu = document.getElementById("FootbarMenu");

		footbar_menu.innerHTML = user_menu;


	}
	else {

		// change footbar menu
		var non_user_menu = "<ul> <li><a href='login.html'>Login</a></li> </ul>";


		var footbar_menu = document.getElementById("FootbarMenu");


		footbar_menu.innerHTML = non_user_menu;


	}