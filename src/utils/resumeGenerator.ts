import jsPDF from 'jspdf';

export const generateResume = () => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Colors
  const primaryColor = [59, 130, 246]; // Blue
  const darkColor = [31, 41, 55]; // Dark gray
  const lightColor = [107, 114, 128]; // Light gray
  const accentColor = [45, 55, 72]; // Dark blue-gray
  
  // Header Section
  pdf.setFillColor(...primaryColor);
  pdf.rect(0, 0, pageWidth, 50, 'F');
  
  // Name
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(32);
  pdf.setFont('helvetica', 'bold');
  pdf.text('HEMA S', 20, 25);
  
  // Underline
  pdf.setLineWidth(2);
  pdf.setDrawColor(255, 255, 255);
  pdf.line(20, 30, 80, 30);
  
  // Contact Info Header
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('📧 hemasuthakar1226@gmail.com', 20, 40);
  pdf.text('📱 +919443206336', 120, 40);
  pdf.text('📍 Attur, Salem, Tamil Nadu', 20, 46);
  pdf.text('🔗 www.linkedin.com/in/hemafromit', 120, 46);
  
  let yPosition = 65;
  
  // Career Objective
  pdf.setTextColor(...darkColor);
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CAREER OBJECTIVE', 20, yPosition);
  
  // Underline for sections
  pdf.setLineWidth(1);
  pdf.setDrawColor(...accentColor);
  pdf.line(20, yPosition + 2, 90, yPosition + 2);
  
  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const objective = 'As a Fresher in the IT field, I am eager to improve myself with additional skills and develop my Leadership Skills by working with a Collaborative Team that supports my Professional Development and helps me to reach the Goal.';
  const objectiveLines = pdf.splitTextToSize(objective, pageWidth - 40);
  pdf.text(objectiveLines, 20, yPosition);
  yPosition += objectiveLines.length * 5 + 10;
  
  // Education
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EDUCATION', 20, yPosition);
  pdf.line(20, yPosition + 2, 70, yPosition + 2);
  yPosition += 10;
  
  // College Education
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('2023 - 2027', 20, yPosition);
  pdf.text('M KUMARASAMY COLLEGE OF ENGINEERING', 20, yPosition + 6);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Information Technology', 20, yPosition + 12);
  yPosition += 20;
  
  // School Education
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('2022 - 2023', 20, yPosition);
  pdf.text('SARASWATHI MATRIC HIGHER SECONDARY SCHOOL', 20, yPosition + 6);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('HSC - Score: 88.88%', 20, yPosition + 12);
  yPosition += 20;
  
  // Skills
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('SKILLS', 20, yPosition);
  pdf.line(20, yPosition + 2, 50, yPosition + 2);
  yPosition += 10;
  
  const skills = [
    'Project Management',
    'Public Relations', 
    'Teamwork Time Management',
    'Leadership Effective Communication',
    'Critical Thinking'
  ];
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  skills.forEach(skill => {
    pdf.text(`• ${skill}`, 25, yPosition);
    yPosition += 6;
  });
  yPosition += 5;
  
  // Languages
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('LANGUAGES', 20, yPosition);
  pdf.line(20, yPosition + 2, 70, yPosition + 2);
  yPosition += 10;
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('• English (Fluent)', 25, yPosition);
  pdf.text('• Tamil (Fluent)', 25, yPosition + 6);
  yPosition += 18;
  
  // Projects Done
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('PROJECT DONE', 20, yPosition);
  pdf.line(20, yPosition + 2, 80, yPosition + 2);
  yPosition += 10;
  
  // Project 1
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Title: Airline Reservation System', 20, yPosition);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Duration: 2 Months', 20, yPosition + 6);
  yPosition += 12;
  const project1Desc = 'Description: This System is an integrated Passenger Processing System, including seat allocation and cancellation of the Booked Ticket.';
  const project1Lines = pdf.splitTextToSize(project1Desc, pageWidth - 40);
  pdf.text(project1Lines, 20, yPosition);
  yPosition += project1Lines.length * 5 + 8;
  
  // Project 2
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Title: Music Player using C', 20, yPosition);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Duration: 3 Months', 20, yPosition + 6);
  yPosition += 12;
  const project2Desc = 'Description: This Project focus providing Platform for Music Lovers with the use of Data Structure that enables user to access the Songs unlimited.';
  const project2Lines = pdf.splitTextToSize(project2Desc, pageWidth - 40);
  pdf.text(project2Lines, 20, yPosition);
  yPosition += project2Lines.length * 5 + 10;
  
  // Check if we need a new page
  if (yPosition > pageHeight - 80) {
    pdf.addPage();
    yPosition = 20;
  }
  
  // Certifications
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CERTIFICATIONS', 20, yPosition);
  pdf.line(20, yPosition + 2, 90, yPosition + 2);
  yPosition += 10;
  
  const certifications = [
    'Fundamentals of Digital Marketing by United Latino Student Association.',
    'Certified Google Analyst for Beginners by Google Analytics Academy.',
    'Scored 71% in Introduction to Industry 4.0 and Industrial Internet of Things through NPTEL associated with IIT Kharagpur.'
  ];
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  certifications.forEach(cert => {
    const certLines = pdf.splitTextToSize(`• ${cert}`, pageWidth - 40);
    pdf.text(certLines, 25, yPosition);
    yPosition += certLines.length * 5 + 3;
  });
  yPosition += 5;
  
  // Co-Curricular Activities
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CO-CURRICULAR ACTIVITIES', 20, yPosition);
  pdf.line(20, yPosition + 2, 120, yPosition + 2);
  yPosition += 10;
  
  const activities = [
    'Participated in National Level Srinivasa Ramanujan Mathematical Competition.',
    'Practicing the Coding Concepts in Leetcode, Codetantra and HackerRank.'
  ];
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  activities.forEach(activity => {
    const activityLines = pdf.splitTextToSize(`• ${activity}`, pageWidth - 40);
    pdf.text(activityLines, 25, yPosition);
    yPosition += activityLines.length * 5 + 3;
  });
  
  // Footer
  pdf.setFillColor(...primaryColor);
  pdf.rect(0, pageHeight - 15, pageWidth, 15, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(8);
  pdf.text('GitHub: github.com/HemaSuthakar | Portfolio: Professional Full-Stack Developer', 20, pageHeight - 7);
  
  // Save the PDF
  pdf.save('Hema_S_Resume.pdf');
};