const { spawn } = require('child_process');
const os = require('os');

function getLocalIPv4() {
  const ifaces = os.networkInterfaces();
  for (const name of Object.keys(ifaces)) {
    for (const iface of ifaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        // ignore link-local addresses
        if (!iface.address.startsWith('169.254')) return iface.address;
      }
    }
  }
  return null;
}

const ip = getLocalIPv4() || '0.0.0.0';
console.log(`Starting Next dev bound to ${ip}`);

const args = ['next', 'dev', '-H', ip];
const child = spawn('npx', args, { stdio: 'inherit', shell: true });

child.on('close', (code) => process.exit(code));
child.on('error', (err) => { console.error(err); process.exit(1); });
