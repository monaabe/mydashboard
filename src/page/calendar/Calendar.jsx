import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const daysOfWeek = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);

    const calendar = [];
    let week = new Array(firstDay).fill(null); // فراغات أول الأسبوع

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      calendar.push(week);
    }
    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const calendar = generateCalendar();

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", direction: "rtl",width:"100%" }}>
      <h3>
        {currentDate.toLocaleString("ar-EG", { month: "long", year: "numeric" })}
      </h3>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handlePrevMonth}>الشهر السابق</button>
        <button onClick={handleNextMonth} style={{ marginRight: "10px" }}>
          الشهر التالي
        </button>
      </div>
      <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} style={{ border: "1px solid #ccc", padding: "5px" }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    backgroundColor: day === today.getDate() &&
                      currentDate.getMonth() === today.getMonth() &&
                      currentDate.getFullYear() === today.getFullYear()
                      ? "#bde0fe"
                      : "white",
                  }}
                >
                  {day || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
