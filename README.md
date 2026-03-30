# live-stocks-app

A real-time stock ticker built while learning how to connect a React frontend to a WebSocket data feed.

Displays live stock prices that update in real time, with colour-coded indicators for price movement (up/down).

## What it does

- Connects to a WebSocket server for live stock data
- Displays a table of stock tickers with current price and last update time
- Colour-codes rows green/red based on price direction

## Tech

- React + Redux (WebSocket messages dispatched through Redux middleware)
- Moment.js for timestamps
- Vite (migrated from CRA)

## Running locally

Requires a WebSocket server that sends data in the format `[["SYMBOL", price], ...]`.

The app connects to `ws://stocks.mnet.website` by default — swap it in `src/index.jsx` if you want to point it at your own server.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```
