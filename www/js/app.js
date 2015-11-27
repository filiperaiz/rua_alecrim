// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',  'slick', 'ion-affix', 'ionic.ion.headerShrink'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //   cordova.plugins.Keyboard.disableScroll(true);

    // }
    if(window.StatusBar) {
      StatusBar.styleLightContent();
      ionic.Platform.fullScreen();
    }


  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl',
    onEnter: function(){

    },
    onExit: function(){

    }
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.timeline', {
    url: '/timeline',
    views: {
      'tab-timeline': {
        templateUrl: 'templates/tab-timeline.html',
        controller: 'TimelineCtrl'
      }
    },
    onEnter: function(){
      document.querySelector('body').classList.remove('bar-bottom');
      document.querySelector('body').classList.remove('no-header');
    }
  })
   .state('tab.category', {
      url: '/category',
      views: {
        'tab-timeline': {
          templateUrl: 'templates/category.html',
          controller: 'CategoryCtrl'
        }
      },
      onEnter: function(){
        document.querySelector('body').classList.remove('bar-bottom');
        document.querySelector('body').classList.remove('no-header');
      },
      onExit: function(){

      }
    })

  .state('tab.explore', {
    url: '/explore',
    views: {
      'tab-explore': {
        templateUrl: 'templates/tab-explore.html',
        controller: 'ExploreCtrl'
      }
    }
  })

 .state('tab.we-suggest', {
    url: '/we-suggest',
    views: {
      'tab-explore': {
        templateUrl: 'templates/we-suggest.html',
        controller: 'WeSuggestCtrl'
      }
    }
  })

 .state('tab.product', {
    url: '/product',
     views: {
      'tab-explore': {
        templateUrl: 'templates/product-explore.html',
        controller: 'ProductExploreCtrl'
      }
    }
  })


  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl',
    onEnter: function(){
      document.querySelector('body').classList.add('no-space-bottom');
    },
    onExit: function(){
      document.querySelector('body').classList.remove('no-space-bottom');
    }
  })

  .state('comment', {
    url: 'product/comment',
    templateUrl: 'templates/product-comment.html',
    controller: 'ProductCommentCtrl'

  })






  .state('tab.activity', {
    url: '/activity',
    views: {
      'tab-activity': {
        templateUrl: 'templates/tab-activity.html',
        controller: 'ActivityCtrl'
      }
    }
  })



  .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
         onEnter: function(){
            document.querySelector('body').classList.add('no-header');
            document.querySelector('body').classList.remove('bar-bottom');
          },
          onExit: function(){
            document.querySelector('body').classList.remove('no-header');
          }
    })

    // .state('tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/chat-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })


  // .state('tab.add-product', {
  //   url: '/add-product',
  //   views: {
  //     'tab-add-product': {
  //       templateUrl: 'templates/tab-add-product.html',
  //       controller: 'AddProductCrtl'
  //     }
  //   }
  // })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    },
    onEnter: function(){
      document.querySelector('body').classList.add('no-space-bottom');
    },
    onExit: function(){
      document.querySelector('body').classList.remove('no-space-bottom');
    }
  })

  .state('tab.notify', {
    url: '/notify',
    views: {
      'tab-account': {
        templateUrl: 'templates/notify.html',
        controller: 'NotifyCtrl'
      }
    }
  })

  .state('tab.product-account', {
    url: '/product',
    views: {
      'tab-account': {
        templateUrl: 'templates/product-account.html',
        controller: 'ProductAccountCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise('/');

});
