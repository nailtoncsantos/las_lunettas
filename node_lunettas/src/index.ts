import { server } from './app';
var os = require('os');
import colors from 'colors/safe';

const port = 8080;

var interfaces = os.networkInterfaces();
var addresses: string[] = [];
for (var k in interfaces) {
	for (var k2 in interfaces[k]) {
		var address = interfaces[k][k2];
		if (address.family === 'IPv4' && !address.internal) {
			addresses.push(address.address);
		}
	}
}
const [ip] = addresses;

server.listen(port, () => {
	console.log('Local:', colors.green(`http://localhost:${port.toString()}`));
	console.log('On Your Network:', colors.green(`http://${ip}:${port}`));
});
