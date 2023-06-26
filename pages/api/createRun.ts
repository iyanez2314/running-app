import { PrismaClient } from "@prisma/client";
import { Run } from "../../components/AddRunModal";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const run = req.body;
    console.log(run);
    // const newRun = await prisma.run.create({
    //   data: run,
    // });
    res.json(run);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
