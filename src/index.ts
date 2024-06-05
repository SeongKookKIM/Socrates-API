import express, { Request, Response } from "express";
import cors from "cors";
import quizData from "../data/data";
import { error } from "console";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("https://b1bd-220-121-186-219.ngrok-free.app/");
});

app.get("/welcome", (req: Request, res: Response) => {
  console.log(quizData);

  return res.status(200).json(quizData);
});
