# ベースイメージ
FROM node:18

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係のコピー
COPY package.json package-lock.json ./
RUN npm install

# TypeScriptの設定とソースコードのコピー
COPY tsconfig.json ./
COPY . ./

# TypeScriptのコンパイル
RUN npm run build

# アプリケーションの起動
CMD ["node", "nodemon", "index.js"]
