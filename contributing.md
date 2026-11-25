# Contributing

Thanks for wanting to add to this list!

## How the repo works

**Edit `data.json`, not the generated files.** These are built from `data.json`:

- `README.md`
- `free-llm-apis/references/*.md`
- the provider list in `free-llm-apis/SKILL.md`

After your PR merges, a bot regenerates and commits them. Don't commit regenerated output yourself; pull requests that only change generated files will be asked to move the change to `data.json`.

**Preview locally** (Node 20+, no dependencies). Don't commit the result:

```bash
npm run generate
```

**Adding a new provider?** Also add an entry to the `SETUP` map in `scripts/provider-setup.js`:

- Key: the provider's `name` from `data.json`, lowercased (e.g. `'groq'`).
- `env`: the API key env var name (e.g. `GROQ_API_KEY`).
- `openaiBaseUrl`: only if its OpenAI-compatible URL differs from `baseUrl`.

CI fails if a provider has no `SETUP` entry. To check before you push:

```bash
node scripts/check-setup.js
```

## Adding a provider

Open a pull request that adds an entry to `data.json`. Your entry should include:

- Provider name and a link to their API key or signup page (`name`, `url`).
- Country flag for where they're headquartered (`country`, `flag`).
- The base URL of the API (`baseUrl`).
- A short factual description stating the free tier and whether a credit card is required (`description`).
- A models array with model id, name, context, max output, modality, and rate limit for each notable model.
- A link in the PR description to the official docs that confirm the free tier and its limits.

## What counts

- Permanent free tiers only. No trial credits, no time-limited promotions, no "free for 90 days."
- No credit card required to sign up.
- The provider must offer a REST API for text/LLM inference (not just a playground or chat UI).

## What doesn't count

- "$X in free credits" that expire.
- Free tiers that require a credit card on file.
- Providers that only offer free access through a web UI, not an API.

## Format

Follow the structure of the existing entries in `data.json`: same fields, same notation for sizes (`128K`, `1M`, `~32K`) and rate limits (`30 RPM, 14,400 RPD`), conditions in a numbered footnote.
