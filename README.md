# Reproduction for nft

```bash
git clone https://github.com/styfle/prisma-vercel-next
cd prisma-vercel-next
yarn install
yarn build

# finds correct assets
nft print pages/api/hello.js | grep 'prisma/generated'

# does NOT find assets
nft print .next/server/pages/api/hello.js | grep 'prisma/generated'
```
