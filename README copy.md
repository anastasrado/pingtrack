# PingTrack - Website Monitoring CLI

PingTrack is a CLI tool that allows users to monitor website uptime and capture screenshots. It supports both **cloud-based execution (AWS Lambda)** and **fully local execution**.

## 🚀 Features

- ✅ Schedule website uptime checks (Cloud/Local)
- ✅ Take screenshots at intervals
- ✅ Compare website changes visually
- ✅ Receive alerts for downtime or significant changes
- ✅ Manage everything via CLI (no manual AWS access required)

## 📦 Installation

```sh
npm install -g pingtrack
```

## 🔧 Usage

```sh
pingtrack setup   # Configure PingTrack
pingtrack start https://example.com --interval 5m --mode cloud   # Start monitoring a site
pingtrack status https://example.com   # Check the latest results
pingtrack stop https://example.com   # Stop monitoring a site
```

## 🌎 Modes

- **Cloud Mode** → Uses AWS Lambda to run monitoring without keeping your machine online.
- **Local Mode** → Runs everything on your own system.

## 🛠️ Development

```sh
git clone https://github.com/yourusername/pingtrack.git
cd pingtrack
npm install
npm run build
npm link
pingtrack --help
```

---

**Stay tuned for updates!** 🚀
