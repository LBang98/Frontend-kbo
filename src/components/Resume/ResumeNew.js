import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Particle from "../Particle";
import ScheduleCard from "./ScheduleCard";

function ResumeNew() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/schedule")
        .then(response => {
          setSchedules(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("There was an error fetching the schedule data!", error);
          setLoading(false);
        });
  }, []);

  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          <Row className="resume justify-content-center">
            {loading ? (
                <Spinner animation="border" />
            ) : (
                schedules.map((schedule, index) => (
                    <Col md={6} key={index}>
                      <ScheduleCard schedule={schedule} />
                    </Col>
                ))
            )}
          </Row>
        </Container>
      </div>
  );
}

export default ResumeNew;
