/**
 * Demo application.
 */


"use strict";

// use "IIFE" so none of our variables "leak" into the global namespace
( function () {
    var module

    /**
     * Define the overal structure, and some initial content for our model(s).
     */
    var model_init = function () {

        // initialize some data in our model
        return {

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
    }

    /**
     * Return the controller's event handlers and other supporting functions/objects.
     * @param mod - value object containing model(s) for the view.
     */
    var controller_init = function ( mod ) {

        // exported below
        var run_raffle = function () {
            alert( 'TODO' )
        }

        // export controller methods (functions)
        return {

            /** run the raffle, randomly select a winner */
            run_raffle,

        }
    }

    /**
     * Initialize application specific resources (model, controller)
     *  on the container object provided by Angular.
     * @param $scope - an object, provided by the Angular library,
     *      on which to hang our data and code.
     */
    var scope_init = function ( $scope ) {

        // initialize some data in our model
        $scope.mod = model_init()

        // initial controller event handlers and such
        $scope.ctl = controller_init( $scope.mod )

        // other one-time setup here...
        $scope.mod.msgs.push( 'If something happened, I would tell you here' )
        $scope.mod.entry = $scope.mod.entrants[ 0 ]  // alias
        $scope.mod.winner = $scope.mod.entrants[ 0 ]  // alias
    }

    // now that we have some code defined (out-of-line), let's start up Angular with it.
    module = angular.module( 'demo', [ ] )
    module.controller( 'demoCtrl', scope_init )
} )()


// EOF
