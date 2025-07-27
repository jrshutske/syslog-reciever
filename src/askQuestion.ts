import readline from "readline";

export default function askQuestion(
  prompt: string,
  validChoices: string[],
  defaultValue?: string
): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    const ask = () => {
      rl.question(prompt, (input) => {
        const answer = input.trim() || defaultValue;
        if (answer && validChoices.includes(answer)) {
          rl.close();
          resolve(answer);
        } else {
          console.log(
            `Invalid input. Please enter one of: ${validChoices.join(", ")}`
          );
          ask(); // Re-prompt until valid
        }
      });
    };
    ask();
  });
}
