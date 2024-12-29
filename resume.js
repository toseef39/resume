 document.getElementById('generate').addEventListener('click', () => {
  let  name = document.getElementById('name').value;
  let  email = document.getElementById('email').value;
  let  phone = document.getElementById('phone').value;
  let  address = document.getElementById('address').value;
  let  education = document.getElementById('education').value;
  let  experience = document.getElementById('experience').value;
  let  skills = document.getElementById('skills').value;
  let  languages = document.getElementById('languages').value;
  let  projects = document.getElementById('projects').value;

  let  preview = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <h4>Education</h4>
    <p>${education}</p>
    <h4>Experience</h4>
    <p>${experience}</p>
    <h4>Skills</h4>
    <p>${skills}</p>
    <h4>Languages</h4>
    <p>${languages}</p>
    <h4>Projects</h4>
    <p>${projects}</p>
  `;

  let  previewSection = document.getElementById('resume-preview');
  previewSection.innerHTML = preview;

  document.getElementById('download').style.display = 'inline-block';
});
