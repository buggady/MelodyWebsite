var app = angular.module('MelodyOfHope', ['ngRoute', 'ui.bootstrap'])

app.config(function ($routeProvider){
	
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/mission', {
			templateUrl: 'views/mission.html',
			controller: 'MissionController'
		})
		.when('/events', {
			templateUrl: 'views/events.html',
			controller: 'EventsController'
		})
		.when('/blog', {
			templateUrl: 'views/blog.html',
			controller: 'BlogController'
		})
		.when('/team', {
			templateUrl: 'views/team.html',
			controller: 'TeamController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.when('/donate', {
			templateUrl: 'views/donate.html',
			controller: 'DonateController'
		})
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			redirectTo: '/home'
		});
})