import syslog, { Transport } from "syslog-client";
import askQuestion from "./askQuestion";

async function main() {
  const answer = await askQuestion(
    `Select transport method:\n` +
      `  (1) UDP\n` +
      `  (2) TCP\n` +
      `Default is UDP (1): `,
    "1",
    ["1", "2"]
  );
  let transport = Transport.Udp;
  let port = 514;
  if (answer === "1") {
    transport = Transport.Udp;
    port = 514;
  } else {
    transport = Transport.Tcp;
    port = 5514;
  }

  var client = syslog.createClient("localhost", {
    transport,
    port,
  });

  client.log("example message");
}

main();
