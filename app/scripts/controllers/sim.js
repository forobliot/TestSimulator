'use strict';

/**
 * @ngdoc function
 * @name testSimulatorApp.controller:SimCtrl
 * @description
 * # SimCtrl
 * Controller of the testSimulatorApp
 */
angular.module('testSimulatorApp')
  .controller('SimCtrl', function ($scope) {
	
	$scope.config = {
		title: 'Frequenza domande (in %)',
		tooltips: false,
		labels: false,
		mouseover: function() {},
		mouseout: function() {},
		click: function() {},
		legend: {
			display: false,
			//could be 'left, right'
			position: 'right'
		}
	};

	$scope.config2 = {
		title: 'Numero test con domande in comune',
		tooltips: true,
		labels: false,
		mouseover: function() {},
		mouseout: function() {},
		click: function() {},
		legend: {
			display: false,
			//could be 'left, right'
			position: 'right'
		}
	};

	$scope.config3 = {
		title: 'Indice test con domande in comune',
		tooltips: true,
		labels: false,
		mouseover: function() {},
		mouseout: function() {},
		click: function() {},
		legend: {
			display: false,
			//could be 'left, right'
			position: 'right'
		}
	};

	$scope.data = {
		series: ['Frequenza'],
		data: [{x: 0, y: [0]}]
	};

	$scope.data2 = {
		series: ['Indice'],
		data: [{x: 0, y: [0]}]
	};

	$scope.data3 = {
		series: ['Indice'],
		data: [{x: 0, y: [0]}]
	};

  	$scope.questionfortest = 10;
  	$scope.subsetsize = 100;
  	$scope.usercount = 1000;

  	$scope.run = function() {
  		var questionfortest = Number($scope.questionfortest);
  		var subsetsize = Number($scope.subsetsize);
  		var usercount = Number($scope.usercount);



  		if (questionfortest <= subsetsize) {
	  		var userTests = [];
	  		var qFrequency = [];
	  		var totquestions = 0;
	  		var i, j, k;

	  		// crea i test
	  		for (i = 0; i < usercount; i++) {
	  			var test = [];
	  			

	  			while (test.length < questionfortest) {
	  				var val = Math.floor(Math.random() * subsetsize);
	  				if (test.indexOf(val)) {
	  					totquestions++;
	  					qFrequency[val] = (qFrequency[val] || 0) + 1;
		  				test.push(val);
	  				}
	  			}

	  			userTests.push(test.sort(function(a, b) { return a - b; }));
	  		}

			var data2 = []; 
			var data3 = []; 
	  		
	  		var compare = [];
	  		var compare2 = [];
	  		var samecount;
	  		var maxcount;
	  		var totcompare = 0;

	  		for (i = 0; i < usercount; i++) {
	  			maxcount = 0;
	  			for (j = 0; j < usercount; j++) {
	  				if (i === j) {
	  					continue;
	  				}
	  				totcompare++;
	  				samecount = 0;
	  				for (k = 0; k < questionfortest; k++) {
	  					if (userTests[j].indexOf(userTests[i][k]) >= 0) {
	  						samecount++;
	  					}
	  				}
	  				compare2[samecount] = (compare2[samecount] || 0) + 1;
	  				maxcount = samecount > maxcount ? samecount : maxcount;
	  			}
	  			compare[maxcount] = (compare[maxcount] || 0) + 1;
	  		}


	  		for (i = 0; i < compare.length; i++) {
	  			data2.push({ x: i, y: [(compare[i] || 0)] });
	  			data3.push({ x: i, y: [(compare2[i] || 0) / usercount] });
	  		}

			$scope.data2.data = data2;
			$scope.data3.data = data3;

	  		var data = []; 
	  		var result = '';
	  		var totFreqPerc = 0;

	  		result += 'Statistiche estrazione\n';
  			result += '----------------------\n';
  			result += 'Totale test generati (U): ' + usercount + '\n';
  			result += 'Totale domande estratte (U * Q): ' + totquestions + '\n';

	  		var resultQ = '';

	  		for (i = 0; i < qFrequency.length; i++) {
	  			totFreqPerc += (qFrequency[i] || 0) * 100 / usercount;
	  			data.push({ x: i, y: [(qFrequency[i] || 0) * 100 / usercount] });
	  			resultQ += 'Domanda ' + i + ': ' + (qFrequency[i] || 0) + ' (usata nel ' + ((qFrequency[i] || 0) * 100 / usercount) + '% dei test generati - ' + ((qFrequency[i] || 0) * 100 / totquestions) + '% sul totale domande)\n';
	  		}

  			result += 'Media frequenze: ogni domanda copare nel ' + (totFreqPerc / subsetsize) + '% dei test\n';
  			result += 'Valore calcolato (Q * 100 / S): ' + (questionfortest * 100 / subsetsize) + '%\n';
  			result += '\n';

	  		result += 'Frequenza domande\n';
  			result += '-----------------\n';

  			result += resultQ;

			$scope.result = result; 

			$scope.data.data = data;
  		}
  	};


  });
