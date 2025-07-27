import * as dgram from "dgram";

export default function startUdpServer() {
  const server = dgram.createSocket("udp4");

  server.on("error", (err) => {
    console.error(`Server error: ${err.stack}`);
    server.close();
  });

  server.on("message", (msg, rinfo) => {
    const logMessage = msg.toString().trim();
    console.log(`[${rinfo.address}:${rinfo.port}]`);
    console.log(logMessage);
  });

  server.on("listening", () => {
    const address = server.address();
    console.log(
      `Syslog UDP server listening on ${address.address}:${address.port}`
    );
  });

  server.bind(514, "127.0.0.1");
}
