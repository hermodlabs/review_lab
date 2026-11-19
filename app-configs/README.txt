DECISION LAB MARKETPLACE CONFIGURATIONS

Copy this entire directory to a repository or static host. Preserve the tree:

  catalog.json
  collection-definitions.json
  collections/PUBLISHER/COLLECTION/VERSION/collection.collection.json
  apps/APP/RELEASE/app.app.json
  apps/APP/RELEASE/model.yaml
  apps/APP/RELEASE/inputs.workbook.json
  workflows/WORKFLOW/VERSION/workflow.workflow.json
  workflows/WORKFLOW/VERSION/inputs.workbook.json
  examples/street-team-deployment/1.1.0/article.run.json
  examples/street-team-deployment/1.1.0/README.md
  workbook-definitions.json
  workbook-schemas/NAME.schema.json
  generate-feed.mjs

The production build copies these same bytes to dist/app-configs/. Development
serves this directory at /app-configs/. Local and RSS modes use the same relative
paths; only their base location changes. No private user cases or browser edits
are included. The explicitly fictional article case in examples/ is a separate
import; installing its collection does not open it or copy its recorded reviews.

CURRENT RELEASES

This distribution contains 11 current standalone app definitions, six guided
workflows and eight collection releases. Superseded evidence/learning releases,
the original gifting workflow and gifting collection 1.0.0 have been withdrawn.
Historical recovery fixtures are kept only in the development test tree.

When updating an existing hosting repository, replace the old distribution tree
or explicitly remove withdrawn paths; a file overlay can leave old downloads
behind. Regenerate feed.xml from the current catalog using the real public URL.
Previously installed exact releases and saved cases remain local to each user.

COLLECTIONS

catalog.json has explicit collection listings. Each points to an immutable SDK
collection package (decision-lab-collection/1), with its exact byte length and
SHA-256 checksum. A publisher ID scopes the collection ID; a title is display
text and does not establish publisher authenticity.

Each collection definition declares its own use cases and typed app/workflow
members. Each member pins an exact version and canonical SDK package hash, plus
the relative artifact path, exact file byte length and raw SHA-256 checksum.
Artifact paths are relative to this directory, not to the nested collection
file. The raw checksum and SDK package hash serve different purposes.

Membership is independent of the domain/use-case classification embedded in an
app or workflow. The current initial collections retain the familiar organization:
Canonical examples, Food supply chains, Gifting operations, Network operations,
Order fulfillment, Product launches, Venue operations, and Walmart Supplier
Operations. A collection may be empty,
and one unchanged package may belong to several collections. Workflow dependency
packages remain embedded and pinned; collection membership never replaces them.

Installing a collection adds its exact products and membership in one transaction.
Updating it preserves local additions, local use cases and hidden upstream
members. Incompatible changes report conflicts. Saved cases and guided reviews
retain their original definitions. Removing a collection does not rewrite saved
cases or products still owned by another collection.

Older catalogs without a collections field remain readable: their product domain
metadata supplies legacy groups. An explicit collections array is authoritative;
unlisted products do not silently create additional marketplace collections.

AUTHOR OR UPDATE COLLECTION METADATA

collection-definitions.json is the repository-owned authoring source. It stores
portable SDK definitions and a fixed createdAt date. It contains organizational
metadata and exact references; it defines no inference rules. Change this source
through the SDK/CLI collection APIs, deliberately select exact releases, and
increment the collection's stable major.minor.patch version when changing a
published definition. Newer app/workflow releases are not silently substituted.

From the Decision Lab development repository:

  npm run build:collections:marketplace
  npm run check:collections:marketplace

The builder validates every referenced product, writes missing immutable
collection packages and adds collection listings to catalog.json. It refuses to
replace different bytes or metadata under an existing scoped ID/version. Normal
builds run it after the workflow exporters and before copying the distribution.
A changed app/workflow must also have its own new version. Existing product and
collection releases remain immutable.

CREATE THE RSS FEED

After copying the complete directory, run Node.js 24 with the real public URL:

  node generate-feed.mjs --base-url https://OWNER.github.io/REPOSITORY/

The helper writes feed.xml with app, workflow and collection release entries.
It verifies catalog file checksums, collection envelopes and exact member pins,
workflow envelopes and embedded dependencies. It needs no Decision Lab source
or npm dependencies. This only creates local files; it does not publish them.
Commit the complete tree and generated feed.xml, then publish with GitHub Pages
or another static host. Regenerate the feed whenever published listings change.
Do not use placeholder URLs in the actual feed.

CONNECT DECISION LAB

marketplace-config.json beside the deployed index.html controls the source:

  {"enabled":true,"source":"local","localBaseUrl":"./app-configs/","remoteFeedUrl":""}

For remote mode set source to "rss" and remoteFeedUrl to the actual feed.xml
URL. The feed points to catalog.json, whose paths locate the same package tree.
A different origin must allow browser cross-origin requests. Already installed
collections, products and cases remain local and work offline. Remote files are
not part of the build precache. Reload after changing runtime configuration.
Setting enabled to false hides browsing without deleting installed collections.

APP AND WORKFLOW INPUTS

App packages carry fixed module rules and initial case inputs. Their model.yaml
files are canonical authoring sources; editing YAML does not update an existing
package. Cases can vary supported inputs without changing those rules.
Workflow packages include the full reviewed definition, exact supporting apps,
questions, mappings, forms and decision brief. Starting a workflow does not accept
seed answers, review findings or obtain operating permission on a user's behalf.
Collection metadata changes neither evaluation semantics nor human approvals.

EXCEL INPUTS

Every current product listing includes a workbook file descriptor. Installing a
collection validates and retains these files in the same transaction as its apps
and workflows. Workers can download prefilled Excel inputs immediately; no
mapping file, local configuration or YAML knowledge is needed to start.

inputs.workbook.json is a portable decision-lab-workbook-release/1 envelope:
the exact unchanged native package, its author-owned worksheet definitions,
starter inputs and whether those inputs are examples or operational defaults.
RSS product links download this complete envelope. Direct imports preserve it.
Native packages and collection pins remain unchanged.

Authors can supply an explicit schema or layout in workbook-definitions.json.
The shared SDK proposes a default layout from declared input types otherwise.
Some complex inputs can remain outside a generated workbook; the input interface
states its coverage. Publication proves an unchanged starter Excel round trip.
Unsupported or lossy layouts fail publication rather than asking workers to
configure mappings. Never replace unknown information with an empty table merely
to make a workbook exportable.

Downloads from an existing case use current inputs. Starting another case creates
a separate identity and preserves previous cases and reports. Example values do
not accept answers, establish facts or authorize work. Uploads are validated and
reviewed before application; changed workflow answers require ordinary review.
