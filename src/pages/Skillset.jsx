import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Bộ kỹ năng chuyên nghiệp
        </h1>

        <Techstack />

        <h1 className="project-heading">
        Công cụ tôi sử dụng
        </h1>
        <Toolstack />

        <Leetcode />
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset