angular.module('starter.services', [])

.factory('Notify', function() {
  var notifys = [{
    id: 0,
    image: 'img/avatar1.png',
    name: 'Ben Sparrow',
    notify: 'Está te seguindo agora',
    dateNow: '3m'
  }, {
    id: 1,
    image: 'img/avatar1.png',
    name: 'Max Lynx',
    notify: 'Gostou do seu anuncio',
    dateNow: '3m'
  }, {
    id: 2,
    image: 'img/avatar1.png',
    name: 'Adam Bradleyson',
    notify: 'Te enviou uma mensagem privada',
    dateNow: '3m'
  }, {
    id: 3,
    image: 'img/avatar1.png',
    name: 'Perry Governor',
    notify: 'Mandou uma proposta',
    dateNow: '3m'
  }, {
    id: 4,
    image: 'img/avatar1.png',
    name: 'Mike Harrington',
    notify: 'Está te seguindo',
    dateNow: '3m'
  }];

  return {
    all: function() {
      return notifys;
    },
    remove: function(notify) {
      notifys.splice(notifys.indexOf(notify), 1);
    },
    get: function(notifyId) {
      for (var i = 0; i < notifys.length; i++) {
        if (notifys[i].id === parseInt(nofityId)) {
          return notifys[i];
        }
      }
      return null;
    }
  };
})

// .factory('Activity', function() {
//   var activitys = [{
//     id: 0,
//     image: 'img/avatar1.png',
//     name: 'Ben Sparrow',
//     notify: 'Está te seguindo agora',
//     dateNow: '3m'
//   }, {
//     id: 1,
//     image: 'img/avatar1.png',
//     name: 'Max Lynx',
//     notify: 'Gostou do seu anuncio',
//     dateNow: '3m'
//   }, {
//     id: 2,
//     image: 'img/avatar1.png',
//     name: 'Adam Bradleyson',
//     notify: 'Te enviou uma mensagem privada',
//     dateNow: '3m'
//   }, {
//     id: 3,
//     image: 'img/avatar1.png',
//     name: 'Perry Governor',
//     notify: 'Mandou uma proposta',
//     dateNow: '3m'
//   }, {
//     id: 4,
//     image: 'img/avatar1.png',
//     name: 'Mike Harrington',
//     notify: 'Está te seguindo',
//     dateNow: '3m'
//   }];

//   return {
//     all: function() {
//       return activitys;
//     },
//     remove: function(activity) {
//       activitys.splice(activitys.indexOf(activity), 1);
//     },
//     get: function(activityId) {
//       for (var i = 0; i < activitys.length; i++) {
//         if (activitys[i].id === parseInt(activityId)) {
//           return activitys[i];
//         }
//       }
//       return null;
//     }
//   };
// });
