import express, { Request, Response } from "express";
import cors from "cors";
import quizData from "../data/data";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("https://b1bd-220-121-186-219.ngrok-free.app/");
});

app.get("/socrates", (req: Request, res: Response) => {
  const randomQuizData = getRandomQuizData(quizData, 10);
  return res.status(200).json(randomQuizData);
});

// 데이터 10개 랜덤함수
function getRandomQuizData(data: typeof quizData, count: number) {
  const shuffled = data.slice(); // 얉은 복사

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
