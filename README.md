# ang-prog-enh
Demonstration of using progressive enhancement with Angular (1.x)
to turn an HTML page mockup into an app, with minimal tools.

The demonstration resolves around being done in several phases.
Each phase is simulated by having a branch in the repository,
with the files as they would appear within that branch.

**NOTE** - these branches have not been created yet.

## Branches

* *view*: shows just the HTML file,
with static sample text shown where program values would go later.
The buttons don't work - it's *just* a mockup of a view.

* *model*: starts to show how to bind Javascript model variables
to values on the screen using Angular.
There are still no event handlers - it's little more than a busy-box.

* *controller*: define the (Angular) JS event handlers for the page,
so that the controller actually does something.

* *rest*: pull in the Angular $http service
to at least *read* some data from the server.
It's a pretty minimal use of $http,
but it's a starting point for other discusions in a presentation.

## Getting Started

* Select the branch corresponding to the project phase you wish to see.

* Check out that branch.

* start server.sh in the project directory.

* load localhost:9000 in your browser.

## Why Angular 1?

Why not use Angular 2?  Or React?  Or...

Angular 1 is easy to get started with.  It requires NO toolchain *at all*
to begin using within a rich client app,
and has little impact on whatever technology stack you are using
on the back end of your project.

For "Enterprise" entry form type applications,
it performs remarkably well.
Not everybody is making an "endless scroll of spam"
social media application.

It has some limitations, as well,
but these can be discussed in a companion presentation.

