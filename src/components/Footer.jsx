import React from 'react';


// codigo hecho con boostrap
const Footer = () => {
  return (
       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-auto">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="text-muted">© 2026 Company, Inc</span>
        </div>
      </footer>
   
  );
};

export default Footer;