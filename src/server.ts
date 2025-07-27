import startUdpServer from "./udp-server";
import startTcpServer from "./tcp-server";
import askQuestion from "./askQuestion";

async function main() {
  const answer = await askQuestion(
    `Select transport method:\n` +
      `  (1) UDP\n` +
      `  (2) TCP\n` +
      `Default is UDP (1): `,
    ["1", "2"],
    "1"
  );

  if (answer === "1") startUdpServer();
  else startTcpServer();
}

main();
