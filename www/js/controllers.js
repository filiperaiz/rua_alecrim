angular.module('starter.controllers', ['ionic','slick'])

// =================================== APP Controller
//======================================================================= /
.controller('AppCtrl', function($scope, $stateParams, $timeout, $ionicLoading, $ionicHistory, $ionicActionSheet, $ionicModal) {

  $scope.openSearch = function(){
    document.querySelector('body').classList.toggle('show-search');
  }

  $ionicLoading.show({
    content: 'Carregando',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $timeout(function () {
    $ionicLoading.hide();
  }, 2000);


  $ionicModal.fromTemplateUrl('templates/add-product.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalProduct = modal;
    });

  $scope.addProductModal = function(index) {
      $scope.modalProduct.show();
  };

  $scope.closeAddProductModal = function(index) {
      $scope.modalProduct.hide();
  };
})

// =================================== Introduction
//======================================================================= /
.controller('IntroCtrl', function($scope, $state) {

  document.querySelector('body').classList.add('no-header');

  $scope.$on('$destroy', function() {
      document.querySelector('body').classList.remove('no-header');
  });

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('tab.timeline');
  };

  $scope.loginGo = function() {
    $state.go('login');
  };

})

// =================================== Navigation
//======================================================================= /
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal, $state) {

  $ionicModal.fromTemplateUrl('templates/message-private.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalNavigation = modal;
    });

  $scope.openMessage = function(index) {
      $scope.modalNavigation.show();
  };

  $scope.closeMessage = function(index) {
      $scope.modalNavigation.hide();
  };


})

// =================================== Login Controller
//======================================================================= /
.controller('LoginCtrl', ['$scope', '$state', '$stateParams', '$ionicModal', '$rootScope', function($scope, $state, $stateParams, $ionicModal, $rootScope) {


  $ionicModal.fromTemplateUrl('templates/screen-sell.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalScreenSell = modal;
  });

  $scope.openScreenSell = function() {
      $scope.modalScreenSell.show();
  };

  $scope.closeScreenSell = function() {
      $scope.modalScreenSell.hide();
  };

  $ionicModal.fromTemplateUrl('templates/create-account.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalCreateAccount = modal;
    });

  $scope.openCreateAccount = function() {
      $scope.modalCreateAccount.show();
  };

  $scope.closeCreateAccount = function() {
      $scope.modalCreateAccount.hide();
  };

  $ionicModal.fromTemplateUrl('templates/enter-email.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalEnterEmail = modal;
    });

  $scope.openEnterEmail = function() {
      $scope.modalEnterEmail.show();
  };

  $scope.closeEnterEmail = function() {
      $scope.modalEnterEmail.hide();
  };


  $scope.startLoginApp = function(){
    $scope.modalEnterEmail.hide();
    $state.go('tab.timeline');
  }

  $scope.startApp = function() {
    $state.go('tab.timeline');
  };

}])


// =================================== Timeline Controller
//======================================================================= /
.controller('TimelineCtrl', function($scope, $ionicActionSheet, $ionicModal, $timeout, $ionicPopup) {

  $scope.myTitle = '<img class="title-image" src="img/logo.svg" width="88" />';

  $scope.openOffer = function() {

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<div class="offer-price"><span class="offer-label">preço atual</span><input value="R$ 10" type="number" name="offer-field"></div><div class="offer-price"><span class="offer-label">sua oferta</span><input value="R$ 35" type="number" name="offer-field"></div>',
      title: 'fazer oferta',
      subTitle: 'negocie o preço com o vendedor, seja justo e faça sua melhor oferta.',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>OK</b>',
          type: 'button-positive',
          onTap: function() {
            console.log('tap :D');
          }
        }
      ]
    });
   };

  $scope.showActionMore = function() {

     // Show the action sheet
     var hideSheet = $ionicActionSheet.show({
       buttons: [
         { text: 'Compartilhe' },
         { text: 'Mensagem Privada' }
       ],
       titleText: 'INTERAJA',
       cancelText: 'Cancelar',
       cancel: function() {
          // add cancel code..
        },
       buttonClicked: function(index) {
         return true;
       }
     });

     // For example's sake, hide the sheet after two seconds
     $timeout(function() {
       hideSheet();
     }, 2000);

  };

  $ionicModal.fromTemplateUrl('templates/product-comment.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalComment = modal;
  });

  $scope.openComments = function() {
      $scope.modalComment.show();
  };

  $scope.closeComments = function() {
      $scope.modalComment.hide();
  };

  $ionicModal.fromTemplateUrl('templates/message-private.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalMessagePrivate = modal;
  });

  $scope.openMessagePrivate = function() {
      $scope.modalMessagePrivate.show();
  };

  $scope.closeMessagePrivate = function() {
      $scope.modalMessagePrivate.hide();
  };

  $ionicModal.fromTemplateUrl('templates/screen-buy.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalScreenBuy = modal;
  });

  $scope.openScreenBuy = function() {
      $scope.modalScreenBuy.show();
  };

  $scope.closeScreenBuy = function() {
      $scope.modalScreenBuy.hide();
  };

  $ionicModal.fromTemplateUrl('templates/product-like.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLikes = modal;
  });

  $scope.openLikes = function() {
      $scope.modalLikes.show();
  };

  $scope.closeLikes = function() {
      $scope.modalLikes.hide();
  };


})

// =================================== Timeline: Category Controller
//======================================================================= /
.controller('CategoryCtrl', function($scope, $ionicActionSheet, $ionicModal, $timeout, $state) {

  $scope.myTitle = '<img class="title-image" src="img/logo.svg" width="88" />';

  $scope.$goTimeline = function(){
    $state.go('tab.timeline');
  }

  $scope.openOffer = function() {

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<div class="offer-price"><span class="offer-label">preço atual</span><input value="R$ 10" type="number" name="offer-field"></div><div class="offer-price"><span class="offer-label">sua oferta</span><input value="R$ 35" type="number" name="offer-field"></div>',
      title: 'fazer oferta',
      subTitle: 'negocie o preço com o vendedor, seja justo e faça sua melhor oferta.',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>OK</b>',
          type: 'button-positive',
          onTap: function() {
            console.log('tap :D');
          }
        }
      ]
    });
   };

  $scope.showActionMore = function() {

     // Show the action sheet
     var hideSheet = $ionicActionSheet.show({
       buttons: [
         { text: 'Compartilhe' },
         { text: 'Mensagem Privada' }
       ],
       titleText: 'INTERAJA',
       cancelText: 'Cancelar',
       cancel: function() {
          // add cancel code..
        },
       buttonClicked: function(index) {
         return true;
       }
     });

     // For example's sake, hide the sheet after two seconds
     $timeout(function() {
       hideSheet();
     }, 2000);

  };

  $ionicModal.fromTemplateUrl('templates/product-comment.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalComment = modal;
  });

  $scope.openComments = function() {
      $scope.modalComment.show();
  };

  $scope.closeComments = function() {
      $scope.modalComment.hide();
  };

  $ionicModal.fromTemplateUrl('templates/message-private.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalMessagePrivate = modal;
  });

  $scope.openMessagePrivate = function() {
      $scope.modalMessagePrivate.show();
  };

  $scope.closeMessagePrivate = function() {
      $scope.modalMessagePrivate.hide();
  };

  $ionicModal.fromTemplateUrl('templates/screen-buy.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalScreenBuy = modal;
  });

  $scope.openScreenBuy = function() {
      $scope.modalScreenBuy.show();
  };

  $scope.closeScreenBuy = function() {
      $scope.modalScreenBuy.hide();
  };

  $ionicModal.fromTemplateUrl('templates/product-like.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLikes = modal;
  });

  $scope.openLikes = function() {
      $scope.modalLikes.show();
  };

  $scope.closeLikes = function() {
      $scope.modalLikes.hide();
  };

})

// =================================== Product: Comment Controller
//======================================================================= /
.controller('ProductCommentCtrl', function($scope) {
})


// =================================== Activity Controller
//======================================================================= /
.controller('ActivityCtrl', function($scope, $ionicSideMenuDelegate) {
})


// =================================== Add Product Controller
//======================================================================= /
.controller('AddProductCrtl', function($scope, $stateParams, $timeout, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;

     $ionicScrollDelegate.scrollTop();
      $timeout( function() {
        $ionicScrollDelegate.resize();
      }, 50);

  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
})

// =================================== Profile Controller
//======================================================================= /
.controller('ProfileCtrl', function($scope, $stateParams, $timeout, $ionicActionSheet, $ionicModal) {


})

// =================================== Explore Controller
//======================================================================= /
.controller('ExploreCtrl', function($scope, $stateParams) {
})

// =================================== Explore: We Suggest Controller
//======================================================================= /
.controller('WeSuggestCtrl', function($scope) {
})

// =================================== Explore: Product Controller
//======================================================================= /
.controller('ProductExploreCtrl', function($scope, $ionicActionSheet, $ionicModal, $timeout) {

})


// =================================== Account Controller
//======================================================================= /
.controller('AccountCtrl', function($scope, $timeout, $ionicActionSheet){

  $scope.showActionsheet = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<i class="ion-social-whatsapp"></i> Whatsapp' },
       { text: '<i class="ion-social-facebook"></i> Facebook' },
       { text: '<i class="ion-social-twitter"></i> Twitter' },
       { text: '<i class="ion-social-instagram"></i> Instagram' }
     ],
     titleText: 'Compartilhe nas redes',
     cancelText: 'Cancelar',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };

})


// =================================== Account: Product Controller
//======================================================================= /
.controller('ProductAccountCtrl', function($scope, $stateParams, $ionicActionSheet) {

   // Nav Controller
   $scope.showActionsheetSocial = function() {

     // Show the action sheet
     var hideSheet = $ionicActionSheet.show({
       buttons: [
         { text: '<i class="ion-social-whatsapp"></i> Whatsapp' },
         { text: '<i class="ion-social-facebook"></i> Facebook' },
         { text: '<i class="ion-social-twitter"></i> Twitter' },
         { text: '<i class="ion-social-instagram"></i> Instagram' }
       ],
       titleText: 'Compartilhe nas redes',
       cancelText: 'Desistir',
       cancel: function() {
            // add cancel code..
          },
       buttonClicked: function(index) {
         return true;
       }
     });

     // For example's sake, hide the sheet after two seconds
     $timeout(function() {
       hideSheet();
     }, 2000);

     $ionicModal.fromTemplateUrl('/templates/product-comment.html', {
        id: '1', // We need to use and ID to identify the modal that is firing the event!
        scope: $scope,
        backdropClickToClose: false,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.oModal1 = modal;
      });

      // Modal 2
      $ionicModal.fromTemplateUrl('/templates/product-like.html', {
        id: '2', // We need to use and ID to identify the modal that is firing the event!
        scope: $scope,
        backdropClickToClose: false,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.oModal2 = modal;
      });

      $scope.openModal = function(index) {
        if (index == 1) $scope.oModal1.show();
        else $scope.oModal2.show();
      };

      $scope.closeModal = function(index) {
        if (index == 1) $scope.oModal1.hide();
        else $scope.oModal2.hide();
      };

      /* Listen for broadcasted messages */

      $scope.$on('modal.show', function(event, modal) {
        console.log('Modal ' + modal.id + ' is show!');
      });

      $scope.$on('modal.hidden', function(event, modal) {
        console.log('Modal ' + modal.id + ' is hidden!');
      });

      // Cleanup the modals when we're done with them (i.e: state change)
      // Angular will broadcast a $destroy event just before tearing down a scope
      // and removing the scope from its parent.
      $scope.$on('$destroy', function() {
        console.log('Destroying modals...');
        $scope.oModal1.remove();
        $scope.oModal2.remove();
      });

   };

   // Ação Mensagem
   $scope.showActionsheetMessage = function() {

     // Show the action sheet
     var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Deixar um comentário' },
       { text: 'Mensagem Privada' }
     ],
     titleText: 'Interações com o post',
     cancelText: 'Desistir',
     cancel: function() {
        // add cancel code..
      },
       buttonClicked: function(index) {
         return true;
       }
     });

     // For example's sake, hide the sheet after two seconds
     $timeout(function() {
       hideSheet();
     }, 2000);

   };
})

// =================================== Account: Notify
//======================================================================= /
.controller('NotifyCtrl', function($scope, $ionicSideMenuDelegate, Notify) {

  $scope.notifys = Notify.all();
  $scope.remove = function(notify) {
    Notify.remove(notify);
  };

  $scope.closeSideMenu = function() {
    $ionicSideMenuDelegate.toggleRight($scope.$$childHead);
  };
})