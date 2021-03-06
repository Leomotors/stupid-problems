import statements from "./statements";
import web from "./web";
import gen from "./gen";
import cross from "./cross";

const buildTargets = {
  statements,
  web,
  gen,
  cross,
};

async function main() {
  const target = process.argv[2];
  process.exit(
    target in buildTargets
      ? await buildTargets[target as keyof typeof buildTargets]()
      : 1
  );
}

main();
