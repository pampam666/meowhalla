import React from 'react';

function SimpleLinktree() {
  const links = [
    { id: 1, label: "Instagram", url: "https://www.instagram.com/pampam.______/" },
    { id: 2, label: "LinkedIn", url: "https://linkedin.com" },
    { id: 3, label: "Twitter", url: "https://twitter.com" },
    { id: 4, label: "GitHub", url: "https://github.com" },
    { id: 5, label: "Blog", url: "https://yourblog.com" },
  ];

  return (
    <div className="linktree-container">
      {/* Profile Section */}
      <div className="linktree-header">
        <img
          src="https://i.pinimg.com/736x/15/03/e5/1503e59e9a80f3b5b7595deaaba12d9d.jpg"
          alt="Avatar"
          className="avatar"
        />
        <h1 className="linktree-title">Pramono Tirta Luhung</h1>
        <p className="linktree-subtitle">Mahasiswa biasa</p>
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
