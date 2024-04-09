import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = ({ userName }) => {
  return (
    <div>
      <h2 class="text-uppercase text-center text-warning">About Page</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgV2Fxr5HSPUmC_rV1796eUSFZr6gftv8XJ2Yk9swl&s" className="d-block w-100 mx-auto" style={{ height: '300px' }} alt="Banner Image" />

      <div className="container mt-4">
        
        <p>GIET University, located in Gunupur, Odisha, India, stands as a beacon of education and innovation in the eastern part of the country. Formerly known as Gandhi Institute of Engineering and Technology (GIET), it evolved into a full-fledged university, offering a diverse range of programs across various disciplines. Founded in 1997, GIET University has since garnered a reputation for excellence in academics, research, and extracurricular activities.

         <br></br> One of the distinguishing features of GIET University is its commitment to providing quality education in engineering and technology. The university offers undergraduate, postgraduate, and doctoral programs in fields such as Mechanical Engineering, Civil Engineering, Electrical Engineering, Computer Science Engineering, Electronics and Communication Engineering, and more. These programs are designed to equip students with both theoretical knowledge and practical skills, ensuring they are well-prepared to meet the challenges of the industry.

          Apart from engineering, GIET University also offers programs in management, pharmacy, computer applications, and basic sciences. This multidisciplinary approach reflects the university's dedication to holistic education, catering to the diverse interests and career aspirations of its students. The faculty members at GIET University are not only highly qualified but also deeply committed to nurturing talent and fostering a culture of academic excellence.

          GIET University places a strong emphasis on research and innovation.<br></br> The university has state-of-the-art laboratories and research facilities, enabling students and faculty to engage in cutting-edge research across various domains. From renewable energy to artificial intelligence, from biotechnology to materials science, research at GIET University spans a wide spectrum of disciplines. The university also encourages collaboration with industries and research institutions, providing students with opportunities to work on real-world projects and gain practical experience.

          In addition to academics and research, GIET University places great importance on extracurricular activities and sports. The university campus boasts modern sports facilities, including grounds for cricket, football, basketball, volleyball, and indoor sports facilities. Students are actively encouraged to participate in sports and cultural events, fostering a spirit of camaraderie and healthy competition among them. Annual fests, technical symposiums, and cultural events further enrich the campus life, providing students with opportunities to showcase their talents and creativity.

          GIET University is not just an academic institution;<br></br> it is a vibrant community that nurtures talent, fosters innovation, and prepares students to become future leaders and global citizens. The university's alumni network, spread across the world, is a testament to its impact and legacy. Graduates of GIET University are making significant contributions to their respective fields, driving innovation, and bringing about positive change in society.

          As GIET University continues to grow and evolve, it remains committed to its core values of excellence, integrity, and social responsibility. Through its rigorous academic programs, cutting-edge research, and vibrant campus life, the university continues to inspire and empower the next generation of leaders and innovators. In a rapidly changing world, GIET University stands as a beacon of hope, guiding students towards a brighter future filled with endless possibilities.
        </p>
        
      </div>
    </div>
  );
}

export default About;
