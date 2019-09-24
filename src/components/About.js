import React from 'react';
import { Button } from 'antd';

const About = () => (
  <section className="about">
    <h1>Haruki Marakami</h1>
    <p>
      Haruki Murakami, born January 12, 1949; is a Japanese writer. His books and stories have been bestsellers in Japan
      as well as internationally, with his work being translated into 50 languages[1] and selling millions of copies
      outside his native country.[2][3] His work has received numerous awards, including the World Fantasy Award, the
      Frank O'Connor International Short Story Award, the Franz Kafka Prize, and the Jerusalem Prize.
    </p>
    <div>
      <Button type="primary">Read a random shortstories</Button>
      <Button>View books</Button>
    </div>
  </section>
);

export default About;
