# Street-team deployment: article worked case

This directory accompanies the **Venue operations** marketplace collection and
**Review a street-team deployment** workflow **1.1.0**. Everything in the worked
case is fictional: the venue, people, records, permissions, financial inputs and
recorded reviews. It provides a reproducible article example, not evidence that a
promotion generated additional guests.

## Install the workflow, then import the case

1. In Decision Lab, open **Marketplace**, search for **street-team**, and open
   **Venue operations**.
2. Install the collection. **Start review** opens prefilled inputs awaiting
   review, without a calculated result, Sam's choice or authorization.
3. To reproduce the article, download [article.run.json](article.run.json) and use
   **Collections → Import app, workflow or case**. This imports the separate
   completed fictional review and its history.

Package installation and worked-case import are separate operations. Keep the
workflow installed before importing the case so its exact Excel interface is
available.

In marketplace details, **Copy install link for Review a street-team deployment**
produces the correct URL for your Decision Lab deployment. Its exact pinned query
is:

```text
?install=workflow&id=street-team-deployment&version=1.1.0&publisher=decision-lab&collection=venue-operations&release=966b0d13926da6ac0e600599d618b8f06c9b18524aa7db33456d076f570e8583
```

Append that query to your Decision Lab page URL, before any `#` fragment. The
marketplace feed's hosting URL may differ from the application URL. In a fresh
browser, the link installs the workflow and opens an unreviewed starter. Later
visits resume existing local work. The link does not import this article case or
overwrite a saved review.

## Expected result

After two callouts, five qualified staff remain available. Four must stay inside.
The one-person standard push meets that staffing condition; two-person pushes
do not. The retained fictional review records Sam's bounded one-person choice
and its separately sourced $200 authorization.

The **Expense recovery** view shows:

| Additional expense | Contribution per additional guest | Guests to cover expense | First count exceeding expense |
| ---: | ---: | ---: | ---: |
| $200 | $40 | 5 | 6 |

These thresholds assume the recorded contribution from genuinely additional
guests. They neither forecast customer response nor establish marketing
effectiveness. A completed decision brief records a reviewed decision basis;
it does not establish that the deployment occurred or succeeded.

**Download Excel** contains five supported worksheets. Access/delegation
registries and the proposal/authorization records remain in the normal forms;
the **What you can edit in Excel** disclosure explains the boundary. Applying
Excel changes preserves fields outside those worksheets.

Change unavailable staff from two to three, accept the answer and reassess.
Only **Make no further push** remains feasible. The earlier choice and
authorization remain in history but no longer support the current review.

The editable CLI source and step-by-step authoring commands are in
`sample_code/nightlife/street-team-deployment` in the developer checkout and its
corresponding developer-documentation example. No promotion-specific UI code is
required to display this case.
