import React from "react";

import { scheduleText } from "../constants";

const Schedule = () => {
    return (
    <section id="schedule">
        <div className="schedule__inner">
            <h2 className="schedule__title">Schedule <em>나의 일정</em></h2>
            <div className="schedule__desc">
                {scheduleText.map((schedule, index) => (
                    <div key={index}>
                        <span>{index + 1}.</span>
                        <h3>{schedule.title}</h3>
                        <p>{schedule.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Schedule;