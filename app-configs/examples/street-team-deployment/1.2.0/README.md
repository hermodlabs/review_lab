# Street-team deployment 1.2.0

**Venue operations** collection **1.1.0** contains **Review a street-team
deployment** workflow **1.2.0**, with operating app release **2**. Its questions
describe the manager's choice, recorded approval and break-even guest counts.
The responsible person's name is case data, not part of the app's instructions.

This versioned directory also supplies a separate fictional article case.
It does not update the preserved 1.1.0 workflow or its historical worked case.

## Install and start a review

1. In Decision Lab, open **Marketplace**, search for **street-team**, and open
   **Venue operations**.
2. Select **Install collection**, then **Start review**. A new review contains
   prefilled fictional inputs awaiting review, without a calculated assessment,
   chosen deployment or recorded deployment authorization.
3. Replace the responsible manager and other inputs with the values for the
   night being considered. Existing access, spending and approval records keep
   their original scope; changing a name does not confer another person's
   permission or rewrite their records.

The available plans are **Do not send a promotion team**, **One-person
promotion**, **Two-person promotion**, and **Two-person discounted promotion**.
The app checks the complete operating requirements and leaves the choice to
the manager. It does not declare the cheapest plan most profitable.

Use **Copy install link for Review a street-team deployment** in marketplace
details to obtain the URL for your Decision Lab deployment. Its exact query is:

```text
?install=workflow&id=street-team-deployment&version=1.2.0&publisher=decision-lab&collection=venue-operations&release=3cf39529ebddaf0491ca4a8a90287caa0009126b9bfed243b8bec3e76ee984f2
```

Append the query to your Decision Lab page URL, before any `#` fragment. The
marketplace feed's host may differ from the application host. In a fresh browser
the link installs the workflow and opens an unreviewed starter. Later visits
resume existing local work; they do not overwrite a review or import this
article's completed case.

## Reproduce the fictional article

Download [article.run.json](article.run.json), then use **Collections → Import
app, workflow or case**. Install the exact workflow first so its Excel interface
is available. Case import and workflow installation are separate operations.

In this worked case, Sam has two callouts, leaving five qualified staff. Four
must remain inside. The **One-person promotion** leaves four inside; the
two-person alternatives fail that staffing condition. The retained review
records Sam's fictional one-person choice and separate $200 approval on the
accepted assessment. The names, records, permissions, inputs and reviews are all
teaching examples.

The **Expense recovery** view shows **Break-even guests**:

| Additional expense | Venue contribution per additional guest | Additional guests to break even | Additional guests to exceed break-even |
| ---: | ---: | ---: | ---: |
| $200 | $40 | 5 | 6 |

The contribution must come from genuinely additional guests after the offer and
variable costs. These numbers explain expense recovery under the recorded
assumptions. They neither predict customer response nor establish marketing
effectiveness or actual profitability.

Open **Compare break-even guests** for the compact comparison. Supporting
assumptions and the calculation are separate disclosures. Inspecting a plan
changes its displayed information, not the recorded choice or authorization.

**Download Excel** supplies five supported worksheets. Access/delegation
registries and proposal/authorization records remain in their normal controls;
**What you can edit in Excel** discloses that boundary. Applying Excel changes
preserves fields outside those worksheets.

Change unavailable staff from two to three, accept the answer and reassess.
Only **Do not send a promotion team** remains feasible. Earlier choices and
authorization stay in history but no longer support the current review. The
software does not authenticate reviewers, dispatch staff or revoke permission
outside the tool.

The editable CLI source and authoring commands are in
`sample_code/nightlife/street-team-deployment` in the developer checkout and its
corresponding developer-documentation example. The workflow and its presentation
remain configuration driven; no promotion-specific UI component is required.
