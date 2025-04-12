import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-neutral text-neutral-content px-10 py-6 w-full">
      <aside className="flex flex-col items-center md:items-start">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current mb-2"
        >
          <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 22.153c-5.606 0-10.153-4.547-10.153-10.153S6.394 1.847 12 1.847 22.153 6.394 22.153 12 17.606 22.153 12 22.153z" />
        </svg>
        <p className="text-center md:text-left">
          <span className="font-bold text-lg">Dev Tinder</span><br />
          Connecting devs with passion since 1992
        </p>
      </aside>

      <nav className="flex flex-col items-center md:items-end mt-4 md:mt-0">
        <h6 className="text-lg font-semibold mb-2">Social</h6>
        <div className="flex gap-2">
          <button className="btn btn-square btn-ghost" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.918 4.918 0 00-8.384 4.482A13.978 13.978 0 011.671 3.15a4.918 4.918 0 001.523 6.574 4.9 4.9 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.03 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </button>

          <button className="btn btn-square btn-ghost" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
            </svg>
          </button>

          <button className="btn btn-square btn-ghost" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.406 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
