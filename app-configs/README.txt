DECISION LAB MARKETPLACE CONFIGURATIONS

This folder contains the three bundled evidence-review apps as clean-install
release packages and their canonical YAML sources. It is not a snapshot of your
browser store and contains no saved cases, local edits or calculation history.

INCLUDED COLLECTIONS AND APPS

The entries below list collection / use case / pattern. The portable catalog
and module metadata retain the field name "domain" for a collection.

Canonical examples / Locate a heavy marble / Evidence review
  App: Review marble evidence
  Directory: apps/sample-evidence-marbles/1/
  Module version: 1.2.0

Food supply chains / Identify firms for a tracing inquiry / Evidence review
  App: Review food-traceability evidence
  Directory: apps/sample-evidence-food/1/
  Module version: 1.3.0

Network operations / Locate network faults / Evidence review
  App: Localize network faults
  Directory: apps/sample-evidence-network/1/
  Module version: 1.3.0

Each directory contains app.app.json and model.yaml. All three app packages use
integer publication release 1. Publication release numbers and the module's
semantic version are separate: the /1/ directory does not mean module 1.0.0.

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

Published releases are immutable. An existing app with the same ID and release
can be imported again only when its content matches. Different content under
that same identity is a collision, not an update. Preserve existing packages;
publish changed apps with a new integer release and directory, update the
module version when its authored meaning changes, and add the new release to
catalog.json before regenerating feed.xml.
