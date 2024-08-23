import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import axios from "axios";

function Home() {
    const [teamRanking, setTeamRanking] = useState([]);

    useEffect(() => {
        axios.get('/teamranking')
            .then(response => {
                setTeamRanking(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the team rankings:", error);
            });
    }, []);

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <div style={{ textAlign: "left" }}> {/* 패딩을 줄여 전체 레이아웃 축소 */}
                                <Type />
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 15 }}> {/* 패딩을 줄여 전체 레이아웃 축소 */}
                            <h4 style={{ marginBottom: '15px' }}>KBO Team Rankings</h4> {/* 제목 크기와 여백 조정 */}
                            {teamRanking.map((team, index) => (
                                <Card key={index} style={{ marginBottom: '8px', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px', maxWidth: '100%'}}> {/* 카드 크기 조정 */}
                                    <Row className="align-items-center">
                                        <Col xs={2}>
                                            <Badge pill bg="primary" style={{ fontSize: '1em' }}> {/* 폰트 크기 조정 */}
                                                {team.rank}위
                                            </Badge>
                                        </Col>
                                        <Col xs={3}>
                                            {team.name}
                                        </Col>
                                        <Col xs={7}>
                                            <div style={{ fontSize: '0.8em', color: '#6c757d' }}> {/* 폰트 크기 줄임 */}
                                                경기: {team.games} | 승: {team.wins} | 패: {team.losses} | 무: {team.draws}
                                            </div>
                                            <div style={{ fontSize: '0.8em', color: '#6c757d' }}>
                                                승률: {team.winRate} | 연승/연패: {team.streak}
                                            </div>
                                            <div style={{ fontSize: '0.8em', color: '#6c757d' }}>
                                                최근 10경기: {team.recent}
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
