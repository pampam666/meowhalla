import React from 'react';

function SimpleLinktree() {
  const links = [
    { id: 1, label: "Instagram", url: "https://www.instagram.com/pampam.______/" },
    { id: 2, label: "Twitter", url: "https://x.com/Pampam________" },
    { id: 3, label: "GitHub", url: "https://github.com/pampam666" },
    { id: 4, label: "Agency", url: "https://www.instagram.com/brixdigital.official/" },
    { id: 5, label: "Portofolio", url: "https://linktreepampam.my.canva.site/portofolio-pramono"}
  ];

  return (
    <div className="linktree-container">
      {/* Profile Section */}
      <div className="linktree-header">
        <img
          src="https://i.pinimg.com/280x280_RS/26/0d/3d/260d3d3d57eb36ea9bc3a129bd50122b.jpg"
          alt="Avatar"
          className="avatar"
        />
        <h1 className="linktree-title">Pramono Tirta Luhung</h1>
        <p className="linktree-subtitle">Mahasiswa biasa prodi Bisnis Digital</p>
      </div>

      {/* Links Section */}
      <div className="linktree-card">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-button"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SimpleLinktree;
