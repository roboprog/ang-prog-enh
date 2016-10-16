/**
 * Demo application.
 */


"use strict";

// use "IIFE" so none of our variables "leak" into the global namespace
( function () {
    var module

    module = angular.module( 'demo', [ ] )
    module.controller( 'demoCtrl', function ($scope ) {

        // initialize some data in our model
        $scope.mod = {

            /** metadata for page header/footer */
            meta: {

                /** copyright year */
                cr_yr: 2016,

                /** how is the company branded *this* year? */
                corp_alias: 'AcmeCorp',
            },

        }

    } )
} )()


// EOF
