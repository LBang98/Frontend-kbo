import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Table, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {

    const [hitters, setHitters] = useState([]);
    const [pitchers, setPitchers] = useState([]);
    const [showHitters, setShowHitters] = useState(true);

    useEffect(() => {
        axios.get('/hitter')
            .then(response => {
                setHitters(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios.get('/pitcher')
            .then(response => {
                setPitchers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // 특정 타자 순위 정렬 함수
    const getSortedHitters = (key) => {
        return [...hitters].sort((a, b) => b[key] - a[key]).slice(0, 5);
    };

    // 특정 투수 순위 정렬 함수
    const getSortedPitchers = (key, ascending = false) => {
        return [...pitchers].sort((a, b) => {
            if (ascending) {
                return a[key] - b[key];
            } else {
                return b[key] - a[key];
            }
        }).slice(0, 5);
    };

    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    주요부문선두
                </h1>

                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="다승순위"
                            description={
                                getSortedPitchers('w').map((p, index) => (
                                    <span key={index}>
                                        {index + 1}위: {p.name} - {p.w}승<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="평균자책 순위"
                            description={
                                getSortedPitchers('era', true).map((p, index) => (
                                    <span key={index}>
                                        {index + 1}위: {p.name} - {p.era} 평균자책점<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="탈삼진 순위"
                            description={
                                getSortedPitchers('so').map((p, index) => (
                                    <span key={index}>
                                        {index + 1}위: {p.name} - {p.so} 탈삼진<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="세이브 순위"
                            description={
                                getSortedPitchers('sv').map((p, index) => (
                                    <span key={index}>
                                        {index + 1}위: {p.name} - {p.sv} 세이브<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="타율 순위"
                            description={
                                getSortedHitters('avg').map((h, index) => (
                                    <span key={index}>
                                        {index + 1}위: {h.name} - {h.avg} 타율<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="타점 순위"
                            description={
                                getSortedHitters('rbi').map((h, index) => (
                                    <span key={index}>
                                        {index + 1}위: {h.name} - {h.rbi} 타점<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="홈런 순위"
                            description={
                                getSortedHitters('hr').map((h, index) => (
                                    <span key={index}>
                                        {index + 1}위: {h.name} - {h.hr} 홈런<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="도루 순위"
                            description={
                                getSortedHitters('sb').map((h, index) => (
                                    <span key={index}>
                                        {index + 1}위: {h.name} - {h.sb} 도루<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="WHIP 순위"
                            description={
                                getSortedPitchers('whip').map((p, index) => (
                                    <span key={index}>
                                        {index + 1}위: {p.name} - {p.whip} WHIP<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="OPS 순위"
                            description={
                                getSortedHitters('ops').map((h, index) => (
                                    <span key={index}>
                                        {index + 1}위: {h.name} - {h.ops} OPS<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="투수 WAR 순위"
                            description={
                                getSortedPitchers('war').map((p, index) => (
                                    <span key={index}>
                                        {index + 1}위: {p.name} - {p.war} WAR<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>

                    <Col md={3} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            title="타자 WAR 순위"
                            description={
                                getSortedHitters('war').map((h, index) => (
                                    <span key={index}>
                                        {index + 1}위: {h.name} - {h.war} WAR<br/>
                                    </span>
                                ))
                            }
                        />
                    </Col>
                </Row>

                <Row>
                    <div className="stats-section">
                        <div className="toggle-button-container text-center my-4">
                            <ToggleButtonGroup type="radio" name="stats" defaultValue={1}>
                                <ToggleButton
                                    id="toggle-hitters"
                                    variant={showHitters ? "primary" : "outline-primary"}
                                    value={1}
                                    onClick={() => setShowHitters(true)}
                                >
                                    Hitter
                                </ToggleButton>
                                <ToggleButton
                                    id="toggle-pitchers"
                                    variant={!showHitters ? "primary" : "outline-primary"}
                                    value={2}
                                    onClick={() => setShowHitters(false)}
                                >
                                    Pitcher
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        {showHitters ? (
                            <div>
                                <h2 className="text-center mb-4">Hitter Statistics</h2>
                                <Table striped bordered hover responsive>
                                    <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Team</th>
                                        <th>WAR</th>
                                        <th>oWAR</th>
                                        <th>dWAR</th>
                                        <th>G</th>
                                        <th>PA</th>
                                        <th>ePA</th>
                                        <th>AB</th>
                                        <th>R</th>
                                        <th>H</th>
                                        <th>2B</th>
                                        <th>3B</th>
                                        <th>HR</th>
                                        <th>TB</th>
                                        <th>RBI</th>
                                        <th>SB</th>
                                        <th>CS</th>
                                        <th>BB</th>
                                        <th>HP</th>
                                        <th>IB</th>
                                        <th>SO</th>
                                        <th>GDP</th>
                                        <th>SH</th>
                                        <th>SF</th>
                                        <th>AVG</th>
                                        <th>OBP</th>
                                        <th>SLG</th>
                                        <th>OPS</th>
                                        <th>R/ePA</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {hitters.map((hitter, index) => (
                                        <tr key={index}>
                                            <td>{hitter.rank}</td>
                                            <td>{hitter.name}</td>
                                            <td>{hitter.team}</td>
                                            <td>{hitter.war}</td>
                                            <td>{hitter.owar}</td>
                                            <td>{hitter.dwar}</td>
                                            <td>{hitter.g}</td>
                                            <td>{hitter.pa}</td>
                                            <td>{hitter.epa}</td>
                                            <td>{hitter.ab}</td>
                                            <td>{hitter.r}</td>
                                            <td>{hitter.h}</td>
                                            <td>{hitter.b2}</td>
                                            <td>{hitter.b3}</td>
                                            <td>{hitter.hr}</td>
                                            <td>{hitter.tb}</td>
                                            <td>{hitter.rbi}</td>
                                            <td>{hitter.sb}</td>
                                            <td>{hitter.cs}</td>
                                            <td>{hitter.bb}</td>
                                            <td>{hitter.hp}</td>
                                            <td>{hitter.ib}</td>
                                            <td>{hitter.so}</td>
                                            <td>{hitter.gdp}</td>
                                            <td>{hitter.sh}</td>
                                            <td>{hitter.sf}</td>
                                            <td>{hitter.avg}</td>
                                            <td>{hitter.obp}</td>
                                            <td>{hitter.slg}</td>
                                            <td>{hitter.ops}</td>
                                            <td>{hitter.re_pa}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-center mb-4">Pitcher Statistics</h2>
                                <Table striped bordered hover responsive>
                                    <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Team</th>
                                        <th>WAR</th>
                                        <th>Game</th>
                                        <th>GS</th>
                                        <th>GR</th>
                                        <th>GF</th>
                                        <th>CG</th>
                                        <th>SHO</th>
                                        <th>W</th>
                                        <th>L</th>
                                        <th>SV</th>
                                        <th>HD</th>
                                        <th>IP</th>
                                        <th>ER</th>
                                        <th>R</th>
                                        <th>RRA</th>
                                        <th>TBF</th>
                                        <th>H</th>
                                        <th>2B</th>
                                        <th>3B</th>
                                        <th>HR</th>
                                        <th>BB</th>
                                        <th>HP</th>
                                        <th>IB</th>
                                        <th>SO</th>
                                        <th>ROE</th>
                                        <th>BK</th>
                                        <th>WP</th>
                                        <th>ERA</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {pitchers.map((pitcher, index) => (
                                        <tr key={index}>
                                            <td>{pitcher.rank}</td>
                                            <td>{pitcher.name}</td>
                                            <td>{pitcher.team}</td>
                                            <td>{pitcher.war}</td>
                                            <td>{pitcher.g}</td>
                                            <td>{pitcher.gs}</td>
                                            <td>{pitcher.gr}</td>
                                            <td>{pitcher.gf}</td>
                                            <td>{pitcher.cg}</td>
                                            <td>{pitcher.sho}</td>
                                            <td>{pitcher.w}</td>
                                            <td>{pitcher.l}</td>
                                            <td>{pitcher.sv}</td>
                                            <td>{pitcher.hd}</td>
                                            <td>{pitcher.ip}</td>
                                            <td>{pitcher.er}</td>
                                            <td>{pitcher.r}</td>
                                            <td>{pitcher.rra}</td>
                                            <td>{pitcher.tbf}</td>
                                            <td>{pitcher.h}</td>
                                            <td>{pitcher.b2}</td>
                                            <td>{pitcher.b3}</td>
                                            <td>{pitcher.hr}</td>
                                            <td>{pitcher.bb}</td>
                                            <td>{pitcher.hp}</td>
                                            <td>{pitcher.ib}</td>
                                            <td>{pitcher.so}</td>
                                            <td>{pitcher.roe}</td>
                                            <td>{pitcher.bk}</td>
                                            <td>{pitcher.wp}</td>
                                            <td>{pitcher.era}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </div>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
