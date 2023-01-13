# Example: End to End testing dapps with Playwright, Rainbowkit 🌈, wagmi, ethers 🫡 and Foundry `anvil`

We implemented:

- Rainbowkit 🌈 starter
- A mock wallet using wagmi and ethers 🫡
- End-to-End testing with Playwright onto an `anvil` testnet

## Getting Started

Requirements: recent-ish [`node`](https://nodejs.org/), `anvil` from [Foundry](https://github.com/foundry-rs/foundry#installation).

- Run `npm install`
- Run `npm run e2e test` or see it live (it's _fast_)
  `npm run e2e test -- --headed`

Note: you might need to install the Playwright browsers with
`npx playwright install`

## GitHub Workflow

An example GitHub workflow has been implemented in [`.github/workflows/ci.yaml`](https://github.com/re-nft/dapp-e2e-example/blob/main/.github/workflows/ci.yaml)
