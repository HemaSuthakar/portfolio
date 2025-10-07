import jsPDF from 'jspdf';

export const generateResume = () => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Colors
  const primaryColor = [59, 130, 246]; // Blue
  const darkColor = [31, 41, 55]; // Dark gray
  const lightColor = [107, 114, 128]; // Light gray
  
  // Header Section
  pdf.setFillColor(...primaryColor);
  pdf.rect(0, 0, pageWidth, 60, 'F');
  
  // Name
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  pdf.setFont('helvetica', 'bold');
  pdf.text('HEMA SUTHAKAR', 20, 25);
  
  // Title
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Full-Stack Developer', 20, 35);
  
  // Contact Info
  pdf.setFontSize(10);
  pdf.text('📧 hemasuthakar1226@gmail.com', 20, 45);
  pdf.text('📱 +91 94432 06336', 20, 52);
  pdf.text('📍 Attur, Salem, Tamil Nadu', 120, 45);
  pdf.text('🔗 linkedin.com/in/hemafromit', 120, 52);
  
  let yPosition = 80;
  
  // Professional Summary
  pdf.setTextColor(...darkColor);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('PROFESSIONAL SUMMARY', 20, yPosition);
  
  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const summary = 'Results-driven full-stack developer with 2+ years of experience building scalable web applications. Combines technical excellence with strategic thinking to deliver solutions that drive measurable business results. Experienced in modern web technologies and passionate about solving real-world problems.';
  const summaryLines = pdf.splitTextToSize(summary, pageWidth - 40);
  pdf.text(summaryLines, 20, yPosition);
  yPosition += summaryLines.length * 5 + 10;
  
  // Education
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EDUCATION', 20, yPosition);
  yPosition += 10;
  
  pdf.setFontSize(12);
  pdf.text('Bachelor of Information Technology', 20, yPosition);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('M Kumarasamy College of Engineering | 2023 - 2027', 20, yPosition + 7);
  yPosition += 20;
  
  // Technical Skills
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('TECHNICAL SKILLS', 20, yPosition);
  yPosition += 10;
  
  const skills = [
    'Frontend: HTML, CSS, JavaScript, React, Tailwind CSS',
    'Backend: Node.js, Express, Python, Django',
    'Database: MongoDB, MySQL',
    'Tools: Git, GitHub, VS Code',
    'Programming: C, Python, JavaScript, TypeScript'
  ];
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  skills.forEach(skill => {
    pdf.text(`• ${skill}`, 25, yPosition);
    yPosition += 6;
  });
  yPosition += 5;
  
  // Projects
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('KEY PROJECTS', 20, yPosition);
  yPosition += 10;
  
  // Project 1
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Airline Reservation System', 20, yPosition);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  yPosition += 7;
  const project1Desc = 'Integrated passenger processing system with seat allocation and ticket cancellation features. Built using C programming with structured approach for efficient data management.';
  const project1Lines = pdf.splitTextToSize(project1Desc, pageWidth - 40);
  pdf.text(project1Lines, 20, yPosition);
  yPosition += project1Lines.length * 5 + 3;
  pdf.text('Technologies: C Programming, Data Structures, File Handling', 20, yPosition);
  yPosition += 10;
  
  // Project 2
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Music Player Application', 20, yPosition);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  yPosition += 7;
  const project2Desc = 'Command-line music player using advanced data structures for unlimited song access and comprehensive playlist management functionality.';
  const project2Lines = pdf.splitTextToSize(project2Desc, pageWidth - 40);
  pdf.text(project2Lines, 20, yPosition);
  yPosition += project2Lines.length * 5 + 3;
  pdf.text('Technologies: C Programming, Linked Lists, File I/O', 20, yPosition);
  yPosition += 10;
  
  // Experience
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EXPERIENCE', 20, yPosition);
  yPosition += 10;
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Academic Projects & Freelance Work', 20, yPosition);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('2023 - Present', 20, yPosition + 7);
  yPosition += 15;
  
  const achievements = [
    'Built and deployed web applications for local businesses',
    'Developed RESTful APIs and responsive frontends using React and Node.js',
    'Created database schemas and optimized queries for performance',
    'Collaborated with clients to gather requirements and deliver solutions'
  ];
  
  achievements.forEach(achievement => {
    pdf.text(`• ${achievement}`, 25, yPosition);
    yPosition += 6;
  });
  
  // Footer
  pdf.setFillColor(...primaryColor);
  pdf.rect(0, pageHeight - 20, pageWidth, 20, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(8);
  pdf.text('GitHub: github.com/HemaSuthakar | Portfolio: Professional Full-Stack Developer', 20, pageHeight - 10);
  
  // Save the PDF
  pdf.save('Hema_Suthakar_Resume.pdf');
};