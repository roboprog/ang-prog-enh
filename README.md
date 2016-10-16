# ang-prog-enh
Demonstration of using progressive enhancement with Angular (1.x)
to turn an HTML page mockup into an app, with minimal tools

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


