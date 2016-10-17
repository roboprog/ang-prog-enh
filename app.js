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

            /** number of tickets option list */
            ticket_opts: R.range( 0, 11 ),

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
     * @param $window - Angular wrapper service around JS window global
     */
    var controller_init = function ( mod, $window ) {

        /** run the raffle, randomly select a winner */
        var run_raffle = function () {
            var basket

            /**
             * Expand an entrant's entry N times, based upon number of tickets.
             * @param entrant - the raffle entrant record
             */
            var expander = function ( entrant ) {
                return R.map( ( ignore ) =>
                    entrant
                )(
                    R.range( 0, entrant.tickets )
                )
            }

            /**
             * Return a random integer between 0 to N-1
             * @param limit - the N which the result must be less than
             */
            var bounded_rand_whole = function ( limit ) {
                return Math.floor(
                    Math.random() * limit
                )
            }

            // TODO: generate some drama!

            // basket of entries - N tickets per entrant
            basket = R.flatten( R.map( expander, mod.entrants ) )
            mod.winner = basket[
                bounded_rand_whole( basket.length )
            ]
        }

        /**
         * select the indicated row
         * @param $index {Number} - 0 based row index
         */
        var sel_row = function ( $index ) {
            mod.entry = mod.entrants[ $index ]  // alias
        }

        /**
         * Return the style-object for ng-style depending on row selection.
         * @param $index {Number} - 0 based row index
         */
        var get_row_style = function ( $index ) {
            return ( mod.entry === mod.entrants[ $index ] ) ?
                {
                    'font-size': '1.25em',
                    'font-weight': 'bold',
                } : {}
        }

        /** delete the currently selected participant row */
        var del = function () {
            mod.entrants = R.filter( ( entrant ) =>
                ( mod.entry !== entrant )  // skip the one that was in the form
            )( mod.entrants )
            mod.entry = {}
        }

        /** add a new entry in the participant table and edit it */
        var add = function () {
            mod.entrants.push( {} )
            mod.entry = mod.entrants[
                mod.entrants.length - 1
            ]
            $window.document.getElementById(
                'fname'
            ).focus()
        }

        // export controller methods (functions)
        return {
            run_raffle,
            sel_row,
            get_row_style,
            del,
            add,
        }
    }

    /**
     * Initialize application specific resources (model, controller)
     *  on the container object provided by Angular.
     * @param $scope - an object, provided by the Angular library,
     *      on which to hang our data and code.
     */
    var scope_init = function ( $scope, $window ) {

        // initialize some data in our model
        $scope.mod = model_init()

        // initial controller event handlers and such
        $scope.ctl = controller_init( $scope.mod, $window )

        // other one-time setup here...
        $scope.mod.msgs.push( 'If something happened, I would tell you here' )
    }

    // now that we have some code defined (out-of-line), let's start up Angular with it.
    module = angular.module( 'demo', [ ] )
    module.controller( 'demoCtrl', scope_init )
} )()


// EOF
