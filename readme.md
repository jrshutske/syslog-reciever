# Syslog Receiver

A lightweight, TypeScript-based syslog message receiver that listens for incoming syslog messages over the network. Built with `syslog-client`, this tool is ideal for local development, testing, or lightweight log collection setups.

## Features

- Listens for incoming syslog messages (UDP/TCP)
- Logs messages to console for debugging or basic monitoring
- Built with TypeScript and easily customizable
- Can be compiled into a standalone Windows executable using `pkg`

---

## Getting Started

### 📦 Install Dependencies

Clone the repo and install required packages:

```bash
git clone https://github.com/jrshutske/syslog-reciever.git
cd syslog-receiver
npm install
```

### ▶️ Run the Syslog Server

```bash
npm start
```

### 🧪 Send a Test Syslog Message

```bash
npm test
```

### 🛠️ Build a Windows Executable

```bash
npm run buildexe
```

or

```bash
npx tsc
npx pkg . --targets node16-win-x64 --output syslog-server.exe
```
