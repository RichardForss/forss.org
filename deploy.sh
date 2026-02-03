#!/bin/bash
npx wrangler pages deploy "$(dirname "$0")" --project-name=forss-org
