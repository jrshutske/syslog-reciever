import * as net from "net";

export default function startTcpServer(port: number = 5514) {
  const server = net.createServer((socket) => {
    socket.on("data", (data) => {
      console.log(`TCP Message: ${data.toString()}`);
    });
  });

  server.listen(5514, "127.0.0.1", () => {
    console.log("Syslog TCP server listening on port 5514");
  });
}
