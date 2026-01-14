fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const barsEl = document.getElementById("bars");
    const maxAmount = Math.max(...data.map((d) => d.amount));
    const maxHeight = 150;

    data.forEach((item) => {
      const height = (item.amount / maxAmount) * maxHeight;
      const isMax = item.amount === maxAmount;

      const col = document.createElement("div");
      col.className = "bar-col";

      const bar = document.createElement("div");
      bar.className = "bar" + (isMax ? " active" : "");
      bar.style.height = `${height}px`;
      bar.title = `$${item.amount}`;

      const day = document.createElement("div");
      day.className = "day";
      day.textContent = item.day;

      const hover = document.createElement("div");
      day.className = "hover";
      day.textContent = item.amount;

      col.append(bar, day);
      barsEl.appendChild(col);
    });
  });
