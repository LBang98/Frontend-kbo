import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack({ onSelectCity }) {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Seoul')}>
                잠실야구장
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Seoul')}>
                고척스카이돔
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Suwon')}>
                수원KT위즈파크
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Incheon')}>
                인천SSG랜더스필드
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Changwon')}>
                창원NC파크
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Daejeon')}>
                한화생명이글스파크
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Daegu')}>
                대구삼성라이온즈파크
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Gwangju')}>
                광주기아챔피언스필드
            </Col>
            <Col xs={4} md={2} className="tech-icons" onClick={() => onSelectCity('Busan')}>
                부산사직야구장
            </Col>
        </Row>
    );
}

export default Techstack;
