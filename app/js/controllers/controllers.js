'use strict';

/* Controllers */

plumApp.controller('MyCtrl1', function MyCtrl1() {});
// MyCtrl1.$inject = [];

plumApp.controller('MyCtrl2', function MyCtrl2() {});
// MyCtrl2.$inject = [];

plumApp.controller('whereAmI', function (geolocation) {
	geolocation.getCurrentPosition(function (position) {
    alert('Latitude: '              + position.coords.latitude          + '\n' +
          'Longitude: '             + position.coords.longitude         + '\n' +
          'Altitude: '              + position.coords.altitude          + '\n' +
          'Accuracy: '              + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '               + position.coords.heading           + '\n' +
          'Speed: '                 + position.coords.speed             + '\n' +
          'Timestamp: '             + position.timestamp                + '\n');
  });
});
