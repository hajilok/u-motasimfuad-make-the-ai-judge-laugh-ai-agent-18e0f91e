[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?ref=41fw6r6c)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/hajilok/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/leaderboard?ref=41fw6r6c)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/hajilok/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?ref=41fw6r6c)

# Make the AI Judge Laugh: AI Agent Confessions

Entry for the [make.fun](https://make.fun/r/41fw6r6c) bounty **Make the AI Judge Laugh: AI Agent Confessions** (`u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e`).

## Overview

`main.ts` runs on Node 22 (`program/v1`) and deterministically writes a single-line UTF-8 AI agent confession (under 200 characters) to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when tested locally).

## Local Verification

```bash
mkdir -p /tmp/out1 /tmp/out2
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
diff -u /tmp/out1/entry.txt /tmp/out2/entry.txt
```

Built for [make.fun](https://make.fun/r/41fw6r6c).
