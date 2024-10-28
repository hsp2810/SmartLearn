import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CourseLearnings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What you will learn</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2 lg:space-y-0 lg:grid grid-cols-2 gap-3'>
        <p>
          → You will master the Python programming language by building 100
          unique projects over 100 days.
        </p>
        <p>
          → You will learn automation, game, app and web development, data
          science and machine learning all using Python.
        </p>

        <p>
          → You will learn Selenium, Beautiful Soup, Request, Flask, Pandas,
          NumPy, Scikit Learn, Plotly, and Matplotlib.
        </p>
        <p>
          → Create a portfolio of 100 Python projects to apply for developer
          jobs.
        </p>
        <p>
          → Be able to build fully fledged websites and web apps with Python
        </p>
        <p>→ Python for data science and machine learning</p>
        <p>→ Build games like Blackjack, Pong and Snake using Python </p>
        <p>→ Be able to use Build GUIs and Desktop applications with Python</p>
        <p>→ You will be able to program in Python professionally </p>
      </CardContent>
    </Card>
  );
}
