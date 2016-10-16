/**
 * Demo application.
 */


"use strict";

// use "IIFE" so none of our variables "leak" into the global namespace
( function () {
    var module

    module = angular.module( 'demo', [ ] )
    module.controller( 'demoCtrl', function ( $scope ) {

        // initialize some data in our model
        $scope.mod = {

            /** metadata for page header/footer */
            meta: {

                /** copyright year */
                cr_yr: 2016,

                /** how is the company branded *this* year? */
                corp_alias: 'AcmeCorp',
            },

            /** message list */
            msgs: [],

            /** raffle winner */
            winner: {},  // see below

            /** form entry buffer */
            entry: {},  // see below

            /** (temp) list of participants / contestants (to be loaded from server) */
            entrants: [
                { fname: 'Joe', lname: 'Blow', tickets: 3 },
                { fname: 'Susan', lname: 'Queue', tickets: 2 },
                { fname: 'Lucky', lname: 'Strikes', tickets: 7 }
            ],

        }

        $scope.mod.msgs.push( 'If something happened, I would tell you here' )
        $scope.mod.entry = $scope.mod.entrants[ 0 ]  // alias
        $scope.mod.winner = $scope.mod.entrants[ 0 ]  // alias
    } )
} )()


// EOF
