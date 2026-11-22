DECISION LAB CURRENT MARKETPLACE

Copy this entire directory to a repository or static host. Its relative paths
are identical for local development, the offline build and a remote RSS source.

CURRENT INVENTORY

  Order fulfillment: first-shipment workflow 1.9.0 and shipment planner app 5
  Gifting operations: cost-first and earliest-handoff workflows 2.8.0,
    with their four exact supporting evidence/planning apps
  Venue operations: street-team deployment workflow 1.13.0
  Restaurant operations: published roster repair workflow 1.6.0
  Software delivery: release recovery workflow 1.0.0 and release arrangements app 1
  Business growth: growth commitment workflow 1.0.0, growth arrangements app 1
    and payment-terms learning app 1

There are six collections, seven workflows and eight standalone apps. All fifteen
products include prefilled Excel inputs. Normal browsing offers current releases.
An explicit release-history catalog preserves exact preceding installation links
used by current articles and shared links. It is fetched only for a fully pinned
historical request; it does not add older cards to normal browsing. Older releases
retained by an installed case are not rewritten or deleted.

The roster workflow embeds feasibility-only, stability-first and cost-first
apps using the same operating requirements. The original public website's
retained SDK examples keep their own exact release pins.

The software release example compares four supplied complete arrangements. Its
CSV adapter and CLI walkthrough live in sample_code/software-delivery/release-recovery
in the development repository. Jira exports supply workload estimates and source
references; resource availability, qualifications and accepted revisions remain
explicit operational inputs. The native package never interprets arbitrary issue
graphs, converts story points to hours or predicts a delivery probability.

The growth example separates committed expense from dated cash receipts and
payments. It compares four authored arrangements using explicit customer,
collection and delivery-capacity assumptions. Its optional nonbinding preference
test uses supplied probabilities and source-linked operating assessments before
and after the test expense and delay; it accepts no deposits or customer orders.
Sources and the public CLI walkthrough live in
sample_code/business-growth/growth-commitment in the development repository.

FILES

  catalog.json
  release-history.catalog.json
  collections/PUBLISHER/COLLECTION/VERSION/collection.collection.json
  apps/APP/RELEASE/app.app.json
  apps/APP/RELEASE/model.yaml
  apps/APP/RELEASE/inputs.workbook.json
  workflows/WORKFLOW/VERSION/workflow.workflow.json
  workflows/WORKFLOW/VERSION/inputs.workbook.json
  collection-definitions.json
  workbook-definitions.json
  apps/APP/RELEASE/inputs.mapping.json
  workflows/WORKFLOW/VERSION/inputs.mapping.json
  generate-feed.mjs

The native package contains its fixed rules, input contract and initial example.
Workflow packages embed their exact app dependencies. Excel sidecars contain
the unchanged native target, authored layout and fictional starter inputs.
Collection member hashes and artifact checksums are exact release pins.

AUTHORING AND REBUILDING

The repository's product/current-product.json defines the supported inventory.
Complete authoring definitions live under product/use-cases and
product/collections. Building does not require any earlier package release.

  npm run build:marketplace
  npm run check:marketplace

These commands validate the native SDK packages, exact publication hashes,
workbook round trips and collection membership. A changed published definition
requires a deliberate new version. Generated files are not authoring sources.
The build replaces the entire output tree, so withdrawn downloads disappear.

RSS AND GITHUB PAGES

After copying the directory, run Node.js 24 with your actual public URL:

  node generate-feed.mjs --base-url https://OWNER.github.io/REPOSITORY/

The helper validates every package and checksum without npm dependencies, then
creates feed.xml. Commit the whole tree and generated feed to your hosting
repository. Replace the prior tree rather than overlaying files: old files left
on the server would remain downloadable. Do not use a placeholder public URL.

LOCAL OR REMOTE SOURCE

marketplace-config.json beside Decision Lab's index.html chooses the location:

  {"enabled":true,"source":"local","localBaseUrl":"./app-configs/","remoteFeedUrl":""}

For remote hosting, use source "rss" and the real feed.xml URL in remoteFeedUrl.
Cross-origin hosting must permit browser requests. Installing adds the exact
collection and its products locally; local additions remain possible. Saved
cases retain their own definitions. Neither installation nor a calculation
books work, issues permission, completes a task or proves a forecast.
