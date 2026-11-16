DECISION LAB MARKETPLACE CONFIGURATIONS

This folder contains seven bundled evidence-review, learning-value and
commitment-planning apps, including twenty immutable releases and their
canonical YAML sources. It is not a snapshot of your
browser store and contains no saved cases, local edits or calculation history.

INCLUDED COLLECTIONS AND APPS

The entries below list collection / use case / pattern. The portable catalog
and module metadata retain the field name "domain" for a collection.

Canonical examples / Locate a heavy marble / Evidence review
  App: Review marble evidence
  Latest directory: apps/sample-evidence-marbles/2/
  Module version: 1.3.0

Canonical examples / Choose a marble investigation / Assess the value of learning
  App: Assess marble learning value
  Latest directory: apps/sample-learning-marbles/4/
  Module version: 1.3.0

Canonical examples / Deliver the heavy-marble bag / Complete a commitment
  App: Plan marble delivery
  Latest directory: apps/plan-marble-delivery/2/
  Module version: 1.0.0

Food supply chains / Identify firms for a tracing inquiry / Evidence review
  App: Review food-traceability evidence
  Latest directory: apps/sample-evidence-food/4/
  Module version: 1.6.0

Network operations / Locate network faults / Evidence review
  App: Localize network faults
  Latest directory: apps/sample-evidence-network/4/
  Module version: 1.6.0

Product launches / Choose a launch-readiness review / Assess the value of learning
  App: Assess launch review value
  Latest directory: apps/sample-learning-launch/4/
  Module version: 1.3.0

Order fulfillment / Complete the first shipment / Complete a commitment
  App: Plan the first shipment
  Latest directory: apps/complete-first-shipment/2/
  Module version: 1.0.0

These seven apps form five collections and use three installed reasoning patterns.
Evidence review assesses stable factual answers. Learning value compares complete
study-and-response policies under explicit economic and probability assumptions.
Learning examples consume reviewed finite state alternatives and supplied actions;
their source records do not automatically derive facts, priors or operating plans.
Commitment planning compares complete static plans against every mandatory
obligation in every admitted scenario, then ranks the plans that pass. The two
commitment apps embed the same complete-a-commitment template. Their release 2
adds only module version and collection/use-case metadata to the qualified
release-1 examples; operating declarations and starting case values are unchanged.
The original release-1 artifacts remain in examples/commitment-planning/artifacts
in the development repository and are not rewritten or listed here.

Each directory contains app.app.json and model.yaml. Food and network release 2
add authored connection tables/diagrams using one selected possible explanation,
while retaining their original release-1 packages. Their case inputs and existing
findings are unchanged. Food and network release 3 and marble evidence release 2
add business-purpose explanation groups, separating comparison of all remaining
possibilities from inspection of one explanation. Food separates incident and
inquiry, product tracing, reporting reach and conditional recall comparisons.
Network separates possible faults, test results and routes. Marble separates the
heavy-marble possibility from weighing results. Tables and connection views share
the same authored groups, with disjoint inquiry/reporting count columns and fewer
duplicated supporting tables. These successors preserve all earlier package and
source files, case inputs, inference rules, answers and calculated report rows.
Learning release 2 adds six purpose-based basis
subtabs; release 3 adds authored table, value-bar and timing representations.
Neither successor changes the valuation inputs or calculations. Both learning
apps retain their original release-1 and release-2 packages and sources unchanged. Existing
cases remain pinned to their original release; installing a successor does not
rewrite their frozen module.

Food and network release 4 (module 1.6.0) opens each relationship view as a
diagram. Learning release 4 (module 1.3.0) opens payoff comparisons as bars with
the evaluated acting-now benchmark. Timing views still start as tables. Table
representations remain available everywhere, and a saved representation choice
takes precedence over these initial defaults. These releases change no case
inputs, inference rules, probabilities, payoffs or calculated findings. Earlier
learning releases without authored view metadata receive a display-only bar
default; authored defaults in older releases remain part of their frozen module.

The catalog lists all twenty distributed releases. Marketplace selects the latest release of
each identity, displaying seven apps in five collections; RSS lists the separate
release entries. Publication release numbers and the module's semantic version
are separate: a /1/ directory does not imply module version 1.0.0.

COPY AND CREATE THE RSS FEED

1. Copy this folder's entire contents into the repository directory you intend
   to publish, preserving catalog.json, generate-feed.mjs and the apps tree.
   catalog.json uses relative package and source paths.

2. From that directory, run the generator with Node.js 24 and the actual public
   URL of the directory. Replace OWNER and REPO; do not publish placeholder URLs.
   For a GitHub Pages repository root, for example:

   node generate-feed.mjs --base-url https://OWNER.github.io/REPO/

   If these files are hosted in a subdirectory, include that subdirectory in the
   URL. The generator writes feed.xml. This command creates local files; it does
   not upload or publish the repository.

3. Commit the copied files and generated feed.xml, then publish that directory
   through your static hosting. The RSS address is its public URL plus feed.xml.
   Regenerate the feed when you add releases or change catalog entries.

The feed declares the Decision Lab marketplace namespace and points to
catalog.json. Relative paths keep the same directory layout usable locally or
on a remote host. Feed generation checks all listed package and YAML hashes.

CONNECT DECISION LAB

The app's default runtime marketplace-config.json selects source "local" and
localBaseUrl "./app-configs/". Development serves this source folder directly;
the production build copies it to dist/app-configs/ before hashing and caching
the entire tree for offline use. No public URL or generated feed is needed for
the local marketplace.

For a remote host, edit marketplace-config.json beside Decision Lab's deployed
index.html. Set enabled to true, source to "rss", and remoteFeedUrl to your
actual public feed.xml URL. Keep the catalog, packages and source tree together.
If that host is on another origin, its feed, catalog and package responses must
allow browser cross-origin requests (CORS). Remote files are not included in
Decision Lab's build precache. Already installed apps and cases remain local.

The runtime config is fetched independently of the build cache. Reload after
changing it. Offline sessions retain the last valid settings, or use local
defaults if no settings were saved. Setting enabled to false makes marketplace
browsing unavailable without removing installed apps or saved cases.

IMPORT OR AUTHOR AN APP

Open Marketplace and install a collection to add releases to Published
apps. Choose Use app there to create an independent case.

In Decision Lab, open Published apps, choose Import app or case, and select an
app.app.json file. Choose Use app to create an independent case. A feed reader
can expose the hosted package links; importing a downloaded package installs
that frozen app release.

model.yaml is the complete canonical authoring source, including the module and
starting case. Open it in an authoring workspace to change the app and publish
a new package. A published app exposes case inputs while its module remains
fixed. Editing YAML does not update the accompanying app.app.json automatically.
Commitment packages use the public decision-lab-app/1 envelope and include their
shared template. Existing evidence and learning packages retain their original
package format. Decision Lab and the standalone RSS generator support both.

To reproduce the commitment marketplace releases from the development repository,
run npm run build:commitment:marketplace, then npm run build to refresh dist.
npm run check:commitment:marketplace verifies the exported bytes without repairs.
The collection labels are configured in examples/commitment-planning/marketplace.json.

Published releases are immutable. An existing app with the same ID and release
can be imported again only when its content matches. Different content under
that same identity is a collision, not an update. Preserve existing packages;
publish changed apps with a new integer release and directory, update the
module version when its authored meaning changes, and add the new release to
catalog.json before regenerating feed.xml.
