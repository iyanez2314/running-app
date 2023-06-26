import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Run } from "../../components/AddRunModal";

const prisma = new PrismaClient();

interface Data {
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Allruns = [
    {
      date: "2021-01-01",
      time: "25",
      distance: "5.23",
      pace: "6.45",
    },
    {
      date: "2021-02-01",
      time: "25",
      distance: "5.34",
      pace: "6.45",
    },
  ];
  for (const run of Allruns) {
    await prisma.runs.create({
      data: {
        date: run.date,
        time: run.time,
        distance: run.distance,
        pace: run.pace,
      },
    });
  }
  res.status(200).json({ name: "Seeded" });
}
