import React from "react";
import { Card } from "react-bootstrap";

function ScheduleCard({ schedule }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>
                    {schedule.team1} vs {schedule.team2}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {schedule.day} at {schedule.time}
                </Card.Subtitle>
                <Card.Text>
                    Location: {schedule.location}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ScheduleCard;
