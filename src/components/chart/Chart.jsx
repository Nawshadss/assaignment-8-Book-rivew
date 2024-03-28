import { Chart as ChartJs } from "chart.js/auto";
import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import getLocalStorage from "../../util/getlocal";

export default function Chart() {
  const [bar, setbar] = useState([]);
  useEffect(() => {
    const readBooks = getLocalStorage("read");
    console.log(readBooks);
    setbar(readBooks);
  }, []);

  const bookName = [];
  const bookPages = [];
  for (let i = 0; i < bar.length; i++) {
    let name = bar[i].bookName;
    let page = bar[i].totalPages;
    bookName.push(name);
    bookPages.push(page);
  }

  console.log(bookName, bookPages);

  return (
    <div>
      <Bar
        data={{
          labels: [...bookName],
          datasets: [
            {
              label: "pages",
              data: [...bookPages],
              backgroundColor: ["#0085F6", "#00C29C", "#FBB929", "#FC8042"],
              borderRadius: 150,
            },
          ],
        }}
      />
    </div>
  );
}
