const HamburgerIcon = ({ isClicked }) => {
  return (
    <>
      <span
        className={`line relative  ${
          isClicked ? "rotate-[315deg] top-[11px]" : "top-0"
        }`}
      ></span>
      <span className={`line ${isClicked ? "opacity-0" : ""}`}></span>
      <span
        className={`line relative  ${
          isClicked ? "rotate-[-315deg] top-[-11px]" : "bottom-0"
        }`}
      ></span>
    </>
  );
};

const SearchIcon = () => {
  return (
    <svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3002 25.7261C19.3891 25.7261 24.3251 20.6387 24.3251 14.363C24.3251 8.0874 19.3891 3 13.3002 3C7.21138 3 2.27539 8.0874 2.27539 14.363C2.27539 20.6387 7.21138 25.7261 13.3002 25.7261Z"
        stroke="white"
        strokeWidth="4.38241"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5688 22.8853L28 29.5137"
        stroke="white"
        strokeWidth="4.38241"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="-2"
        x2="35.6957"
        y2="-2"
        transform="matrix(0.711836 -0.702345 0.711837 0.702345 3.16699 28.4949)"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="-2"
        x2="35.6957"
        y2="-2"
        transform="matrix(0.711837 0.702345 -0.711836 0.702345 0.833496 2.01904)"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SpaceImage = () => {
  return (
    <svg
      width="175"
      height="130"
      viewBox="0 0 175 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_32_66)">
        <path
          d="M156.08 69.6184C155.318 78.4386 151.478 86.962 146.001 94.0112C145.772 94.306 145.54 94.5981 145.306 94.8875C144.778 95.5386 144.237 96.1774 143.682 96.8039C143.004 97.5757 142.305 98.3299 141.587 99.0662C141.002 99.6723 140.404 100.265 139.792 100.845C139.319 101.298 138.842 101.742 138.358 102.176C132.546 107.436 125.868 111.777 118.989 115.572C105.562 122.978 90.8454 128.588 75.538 129.405C60.2326 130.22 44.2545 125.83 33.03 115.376C17.9025 101.288 13.6805 77.7896 19.8223 58.0383C23.9073 44.8981 32.2449 33.0108 43.5921 25.2471C54.8412 17.5509 69.0323 14.0867 82.4629 16.3511C93.1844 9.82604 107.22 9.70116 118.876 14.531C125.096 17.1087 130.677 20.9414 135.574 25.5726C137.816 27.698 139.915 29.9709 141.855 32.3762C142.053 32.6198 142.249 32.8655 142.443 33.1132C143.257 34.1431 144.044 35.1941 144.805 36.2662C145.897 37.8038 146.933 39.3756 147.915 40.9814C148.184 41.4236 148.452 41.8679 148.714 42.3163C148.89 42.6173 149.068 42.9203 149.242 43.2254C149.245 43.2316 149.248 43.2386 149.25 43.2458C151.971 48.0388 154.195 53.1532 155.355 58.499C155.559 59.4449 155.731 60.3949 155.864 61.3531V61.3551C155.98 62.1679 156.068 62.9849 156.128 63.8059C156.267 65.7415 156.252 67.6853 156.08 69.6184Z"
          fill="#3F3D56"
        />
        <path
          opacity="0.3"
          d="M116.139 82.9525L85.7852 57.6306L115.273 83.9667C115.33 84.0631 115.409 84.1444 115.504 84.2039C115.599 84.2634 115.706 84.2995 115.818 84.3091C115.929 84.3187 116.042 84.3015 116.145 84.259C116.249 84.2166 116.34 84.15 116.413 84.0648C116.486 83.9797 116.537 83.8784 116.563 83.7694C116.589 83.6604 116.588 83.5468 116.561 83.438C116.534 83.3293 116.482 83.2285 116.409 83.1441C116.335 83.0596 116.243 82.9939 116.139 82.9525Z"
          fill="#F0F0F0"
        />
        <path
          d="M46.5299 70.0668C56.5795 70.0668 64.7263 61.9086 64.7263 51.8449C64.7263 41.7813 56.5795 33.623 46.5299 33.623C36.4803 33.623 28.3335 41.7813 28.3335 51.8449C28.3335 61.9086 36.4803 70.0668 46.5299 70.0668Z"
          fill="#F2F2F2"
        />
        <path
          d="M62.682 50.6165C62.6822 52.7943 62.254 54.9509 61.4218 56.9631C60.5896 58.9752 59.3697 60.8035 57.8319 62.3435C56.294 63.8835 54.4683 65.105 52.459 65.9384C50.4497 66.7718 48.2961 67.2006 46.1213 67.2004C44.1829 67.1993 42.2595 66.8598 40.4375 66.1972C37.5886 65.1579 35.0792 63.3559 33.1822 60.9873C31.2852 58.6187 30.0735 55.7744 29.679 52.764C29.2845 49.7535 29.7222 46.6924 30.9446 43.9139C32.167 41.1354 34.1272 38.7459 36.6117 37.0056C39.0962 35.2654 42.0099 34.2411 45.0355 34.0442C48.0611 33.8473 51.0827 34.4854 53.7712 35.8891C56.4597 37.2927 58.7122 39.4081 60.2834 42.0048C61.8546 44.6016 62.6842 47.5802 62.682 50.6165Z"
          fill="white"
        />
        <path
          d="M43.2588 50.207C46.0817 50.207 48.3701 47.9154 48.3701 45.0885C48.3701 42.2616 46.0817 39.97 43.2588 39.97C40.4359 39.97 38.1475 42.2616 38.1475 45.0885C38.1475 47.9154 40.4359 50.207 43.2588 50.207Z"
          fill="#E4E4E4"
        />
        <path
          d="M62.0357 46.016C60.9279 46.5497 59.6651 46.6657 58.4789 46.3428C57.2926 46.0199 56.2623 45.2797 55.5767 44.2579C54.8911 43.2361 54.5963 42.0011 54.7462 40.7792C54.896 39.5574 55.4806 38.4305 56.3927 37.6052C59.1033 39.7511 61.0763 42.6918 62.0357 46.016Z"
          fill="#F2F2F2"
        />
        <path
          d="M51.6414 57.9871C52.6576 57.9871 53.4814 57.1621 53.4814 56.1444C53.4814 55.1267 52.6576 54.3018 51.6414 54.3018C50.6251 54.3018 49.8013 55.1267 49.8013 56.1444C49.8013 57.1621 50.6251 57.9871 51.6414 57.9871Z"
          fill="#E4E4E4"
        />
        <path
          d="M44.0768 66.5863C44.0766 66.7481 44.0553 66.9092 44.0134 67.0654C42.7925 66.9125 41.5928 66.6212 40.4375 66.1973C40.5335 65.7527 40.7902 65.3594 41.1584 65.0929C41.5265 64.8265 41.98 64.7058 42.4317 64.7541C42.8834 64.8023 43.3013 65.0162 43.605 65.3544C43.9086 65.6927 44.0767 66.1315 44.0768 66.5863Z"
          fill="#F2F2F2"
        />
        <path
          d="M33.2407 49.7975C33.2406 50.7323 32.8858 51.6322 32.2481 52.3149C31.6103 52.9977 30.7374 53.4122 29.8059 53.4746C29.3843 51.0409 29.5072 48.5438 30.1657 46.1633C31.0248 46.3068 31.8053 46.7507 32.3683 47.4161C32.9313 48.0815 33.2405 48.9253 33.2407 49.7975Z"
          fill="#F2F2F2"
        />
        <path
          d="M123.992 43.943C124.41 43.943 124.749 43.6037 124.749 43.185C124.749 42.7664 124.41 42.427 123.992 42.427C123.574 42.427 123.235 42.7664 123.235 43.185C123.235 43.6037 123.574 43.943 123.992 43.943Z"
          fill="#6C63FF"
        />
        <path
          d="M117.009 25.5012C117.253 25.5012 117.451 25.3029 117.451 25.0583C117.451 24.8138 117.253 24.6155 117.009 24.6155C116.765 24.6155 116.567 24.8138 116.567 25.0583C116.567 25.3029 116.765 25.5012 117.009 25.5012Z"
          fill="#F0F0F0"
        />
        <path
          d="M46.0638 112.311C46.3081 112.311 46.5061 112.113 46.5061 111.868C46.5061 111.624 46.3081 111.425 46.0638 111.425C45.8196 111.425 45.6216 111.624 45.6216 111.868C45.6216 112.113 45.8196 112.311 46.0638 112.311Z"
          fill="#F0F0F0"
        />
        <path
          d="M119.52 68.8335C119.764 68.8335 119.962 68.6352 119.962 68.3906C119.962 68.146 119.764 67.9478 119.52 67.9478C119.276 67.9478 119.078 68.146 119.078 68.3906C119.078 68.6352 119.276 68.8335 119.52 68.8335Z"
          fill="#F0F0F0"
        />
        <path
          d="M62.4518 73.016C62.8698 73.016 63.2087 72.6767 63.2087 72.258C63.2087 71.8394 62.8698 71.5 62.4518 71.5C62.0337 71.5 61.6948 71.8394 61.6948 72.258C61.6948 72.6767 62.0337 73.016 62.4518 73.016Z"
          fill="#6C63FF"
        />
        <path
          d="M35.0549 89.3504C37.0291 89.3504 38.6294 87.7478 38.6294 85.7709C38.6294 83.794 37.0291 82.1914 35.0549 82.1914C33.0808 82.1914 31.4805 83.794 31.4805 85.7709C31.4805 87.7478 33.0808 89.3504 35.0549 89.3504Z"
          fill="#6C63FF"
        />
        <path
          d="M54.6507 90.1992C54.895 90.1992 55.093 90.0009 55.093 89.7563C55.093 89.5118 54.895 89.3135 54.6507 89.3135C54.4065 89.3135 54.2085 89.5118 54.2085 89.7563C54.2085 90.0009 54.4065 90.1992 54.6507 90.1992Z"
          fill="#F0F0F0"
        />
        <path
          d="M99.6307 20.9968C99.875 20.9968 100.073 20.7985 100.073 20.554C100.073 20.3094 99.875 20.1111 99.6307 20.1111C99.3865 20.1111 99.1885 20.3094 99.1885 20.554C99.1885 20.7985 99.3865 20.9968 99.6307 20.9968Z"
          fill="#F0F0F0"
        />
        <path
          d="M73.2562 115.382C73.5005 115.382 73.6985 115.184 73.6985 114.939C73.6985 114.695 73.5005 114.497 73.2562 114.497C73.012 114.497 72.814 114.695 72.814 114.939C72.814 115.184 73.012 115.382 73.2562 115.382Z"
          fill="#F0F0F0"
        />
        <path
          d="M66.7137 25.0918C66.958 25.0918 67.156 24.8935 67.156 24.6489C67.156 24.4043 66.958 24.2061 66.7137 24.2061C66.4695 24.2061 66.2715 24.4043 66.2715 24.6489C66.2715 24.8935 66.4695 25.0918 66.7137 25.0918Z"
          fill="#F0F0F0"
        />
        <path
          d="M78.1629 46.5893C78.4072 46.5893 78.6052 46.3911 78.6052 46.1465C78.6052 45.9019 78.4072 45.7036 78.1629 45.7036C77.9187 45.7036 77.7207 45.9019 77.7207 46.1465C77.7207 46.3911 77.9187 46.5893 78.1629 46.5893Z"
          fill="#F0F0F0"
        />
        <path
          d="M60.6371 99.3398C60.8813 99.3398 61.0793 99.1416 61.0793 98.897C61.0793 98.6524 60.8813 98.4541 60.6371 98.4541C60.3928 98.4541 60.1948 98.6524 60.1948 98.897C60.1948 99.1416 60.3928 99.3398 60.6371 99.3398Z"
          fill="#F0F0F0"
        />
        <path
          d="M112.364 102.206C112.608 102.206 112.806 102.008 112.806 101.763C112.806 101.519 112.608 101.321 112.364 101.321C112.12 101.321 111.922 101.519 111.922 101.763C111.922 102.008 112.12 102.206 112.364 102.206Z"
          fill="#F0F0F0"
        />
        <path
          d="M89.4652 76.4089C89.7094 76.4089 89.9074 76.2107 89.9074 75.9661C89.9074 75.7215 89.7094 75.5232 89.4652 75.5232C89.221 75.5232 89.0229 75.7215 89.0229 75.9661C89.0229 76.2107 89.221 76.4089 89.4652 76.4089Z"
          fill="#F0F0F0"
        />
        <path
          d="M101.119 46.5168C101.363 46.5168 101.561 46.3186 101.561 46.074C101.561 45.8294 101.363 45.6311 101.119 45.6311C100.875 45.6311 100.677 45.8294 100.677 46.074C100.677 46.3186 100.875 46.5168 101.119 46.5168Z"
          fill="#F0F0F0"
        />
        <path
          d="M122.307 61.2963C122.791 61.2963 123.183 60.9031 123.183 60.4181C123.183 59.9332 122.791 59.54 122.307 59.54C121.822 59.54 121.43 59.9332 121.43 60.4181C121.43 60.9031 121.822 61.2963 122.307 61.2963Z"
          fill="#FF6584"
        />
        <path
          d="M86.7319 32.2233C87.2161 32.2233 87.6087 31.8301 87.6087 31.3451C87.6087 30.8602 87.2161 30.467 86.7319 30.467C86.2476 30.467 85.855 30.8602 85.855 31.3451C85.855 31.8301 86.2476 32.2233 86.7319 32.2233Z"
          fill="#FF6584"
        />
        <path
          d="M86.7319 92.6217C87.2161 92.6217 87.6087 92.2286 87.6087 91.7436C87.6087 91.2586 87.2161 90.8655 86.7319 90.8655C86.2476 90.8655 85.855 91.2586 85.855 91.7436C85.855 92.2286 86.2476 92.6217 86.7319 92.6217Z"
          fill="#FF6584"
        />
        <path
          d="M141.364 96.804C141.022 96.8043 140.69 96.916 140.417 97.1221C140.145 97.3282 139.947 97.6175 139.853 97.9464C139.811 98.0873 139.791 98.2336 139.792 98.3805V100.846C140.403 100.266 141.001 99.6731 141.587 99.0663C142.304 98.3293 143.003 97.5751 143.682 96.804H141.364Z"
          fill="#6C63FF"
        />
        <path
          d="M146.931 109.613C144.291 109.613 141.397 109.513 138.25 109.313C121.973 108.278 100.889 104.679 78.882 99.1799C56.8751 93.6807 36.5744 86.9376 21.7197 80.1934C14.4836 76.908 8.92989 73.7981 5.21309 70.9499C1.27796 67.9347 -0.443328 65.3064 0.0968533 63.1385C1.14938 58.9149 10.469 57.9909 18.1019 57.9595L18.1045 58.5737C7.62251 58.6168 1.43869 60.2908 0.692055 63.2872C-0.259035 67.1036 7.49762 73.0617 21.973 79.634C36.795 86.3634 57.0584 93.0934 79.0306 98.584C101.003 104.074 122.048 107.667 138.289 108.7C154.151 109.709 163.794 108.098 164.745 104.282C165.534 101.113 160.329 96.4455 150.087 91.138L150.369 90.5926C157.811 94.4491 166.449 99.9802 165.34 104.431C164.799 106.599 162.047 108.109 157.159 108.919C154.372 109.381 150.949 109.613 146.931 109.613Z"
          fill="#6C63FF"
        />
        <path
          d="M146.099 63.8223C157.447 63.8223 166.646 54.6099 166.646 43.2458C166.646 31.8818 157.447 22.6694 146.099 22.6694C134.751 22.6694 125.551 31.8818 125.551 43.2458C125.551 54.6099 134.751 63.8223 146.099 63.8223Z"
          fill="white"
        />
        <path
          d="M146.099 22.3624C141.974 22.3624 137.942 23.5872 134.513 25.8819C131.083 28.1767 128.41 31.4382 126.832 35.2542C125.254 39.0702 124.841 43.2691 125.645 47.3201C126.45 51.3711 128.436 55.0922 131.353 58.0128C134.269 60.9335 137.985 62.9224 142.03 63.7282C146.076 64.534 150.269 64.1204 154.08 62.5398C157.89 60.9592 161.147 58.2825 163.439 54.8482C165.73 51.4139 166.953 47.3763 166.953 43.246C166.963 40.5007 166.43 37.7807 165.386 35.2425C164.341 32.7043 162.806 30.3982 160.867 28.4571C158.929 26.5159 156.626 24.978 154.091 23.932C151.557 22.886 148.84 22.3526 146.099 22.3624ZM146.099 63.5153C142.096 63.5153 138.182 62.3265 134.854 60.0993C131.525 57.8721 128.931 54.7064 127.399 51.0027C125.867 47.299 125.466 43.2235 126.247 39.2916C127.028 35.3598 128.956 31.7481 131.786 28.9134C134.617 26.0787 138.224 24.1482 142.15 23.3661C146.076 22.584 150.146 22.9854 153.845 24.5196C157.543 26.0537 160.705 28.6517 162.929 31.9849C165.153 35.3182 166.34 39.2371 166.34 43.246C166.35 45.9107 165.834 48.5511 164.82 51.0149C163.807 53.4788 162.316 55.7174 160.434 57.6016C158.553 59.4858 156.317 60.9785 153.857 61.9934C151.397 63.0084 148.76 63.5256 146.099 63.5153Z"
          fill="#2F2E41"
        />
        <path
          d="M128.067 48.174C127.973 48.1739 127.882 48.1413 127.809 48.0817C127.736 48.0221 127.686 47.9392 127.667 47.8469C127.079 44.8489 127.185 41.7558 127.977 38.8052C128.769 35.8546 130.225 33.125 132.235 30.8258C132.307 30.7451 132.408 30.6964 132.516 30.6903C132.624 30.6843 132.73 30.7214 132.811 30.7935C132.892 30.8656 132.941 30.9668 132.947 31.075C132.954 31.1832 132.917 31.2895 132.845 31.3706C130.92 33.5739 129.524 36.1898 128.765 39.0173C128.006 41.8449 127.905 44.8089 128.468 47.682C128.48 47.7415 128.479 47.803 128.464 47.8621C128.45 47.9211 128.423 47.9761 128.384 48.0232C128.346 48.0703 128.297 48.1083 128.243 48.1344C128.188 48.1605 128.128 48.174 128.067 48.174Z"
          fill="#2F2E41"
        />
        <path
          d="M146.086 62.3625C153.299 62.3625 159.146 56.5072 159.146 49.2843C159.146 42.0614 153.299 36.2061 146.086 36.2061C138.873 36.2061 133.026 42.0614 133.026 49.2843C133.026 56.5072 138.873 62.3625 146.086 62.3625Z"
          fill="#6C63FF"
        />
        <path
          d="M141.935 54.2217C141.089 54.1981 140.035 54.1687 139.224 53.5749C138.982 53.3909 138.783 53.1561 138.642 52.8871C138.5 52.6181 138.419 52.3214 138.404 52.0177C138.389 51.8018 138.425 51.5855 138.507 51.3856C138.59 51.1858 138.718 51.0077 138.881 50.8655C139.304 50.5067 139.924 50.4226 140.591 50.6189L139.899 45.5606L140.407 45.491L141.219 51.4377L140.796 51.243C140.304 51.0173 139.63 50.9025 139.211 51.2571C139.108 51.3498 139.028 51.4651 138.977 51.5938C138.926 51.7226 138.905 51.8615 138.916 51.9996C138.928 52.2257 138.989 52.4464 139.094 52.6467C139.2 52.8471 139.347 53.0224 139.526 53.1607C140.157 53.6228 140.997 53.6824 141.95 53.709L141.935 54.2217Z"
          fill="#2F2E41"
        />
        <path
          d="M137.39 45.9968H134.632V46.5097H137.39V45.9968Z"
          fill="#2F2E41"
        />
        <path
          d="M146.097 45.9968H143.338V46.5097H146.097V45.9968Z"
          fill="#2F2E41"
        />
        <path
          d="M146.634 65.5952H134.797C134.355 65.5956 133.932 65.7713 133.62 66.0838C133.308 66.3962 133.133 66.8199 133.132 67.2618V93.5361C133.134 95.3166 133.621 97.0629 134.542 98.5858C135.463 100.109 136.783 101.35 138.358 102.176C138.843 101.742 139.32 101.299 139.791 100.845C140.403 100.266 141.001 99.6729 141.586 99.0662C142.304 98.3291 143.003 97.575 143.682 96.8038C144.238 96.1773 144.779 95.5385 145.305 94.8874C145.541 94.5987 145.772 94.3066 146.001 94.0111C151.478 86.9619 155.318 78.4386 156.08 69.6184C154.857 68.3453 153.391 67.3327 151.767 66.6413C150.144 65.95 148.398 65.5942 146.634 65.5952Z"
          fill="#2F2E41"
        />
        <path
          d="M147.066 71.0782C146.784 70.802 146.451 70.5844 146.085 70.4379C145.719 70.2914 145.327 70.2188 144.933 70.2244C144.248 70.2296 143.586 70.4728 143.061 70.9124C142.976 70.9805 142.897 71.0536 142.821 71.1314L133.132 81.0818L126.105 88.2989C125.999 88.4067 125.91 88.5311 125.844 88.6674C125.738 88.8784 125.684 89.1113 125.686 89.3472C125.688 89.5411 125.729 89.7327 125.805 89.9109C125.882 90.0891 125.993 90.2503 126.132 90.3852L126.408 90.6555L128.411 92.6108L128.414 92.6087C128.683 92.8275 129.02 92.9455 129.366 92.9424C129.56 92.9403 129.751 92.8998 129.929 92.8232C130.107 92.7466 130.268 92.6354 130.403 92.4961L130.728 92.1644L133.055 89.7751L133.132 89.6953L147.119 75.3307C147.675 74.7596 147.982 73.9908 147.972 73.1934C147.962 72.396 147.636 71.6351 147.066 71.0782Z"
          fill="#6C63FF"
        />
        <path
          d="M146.968 43.1828C147.4 42.2683 146.957 41.2915 146.198 40.7073C145.242 39.9712 144.006 40.0929 142.919 40.4413C141.728 40.8228 140.565 41.5093 139.279 41.4698C138.82 41.4616 138.375 41.315 138.002 41.0491C137.628 40.7832 137.343 40.4105 137.184 39.9798C136.496 38.211 137.273 36.2341 138.472 34.8927C139.149 34.1245 139.986 33.514 140.923 33.1042C141.861 32.6944 142.877 32.4952 143.899 32.5205C145.067 32.5785 146.202 32.9249 147.203 33.5287C148.204 34.1325 149.041 34.975 149.638 35.9812C149.68 36.0499 149.748 36.0996 149.826 36.1201C149.904 36.1406 149.987 36.1303 150.058 36.0914C150.968 35.684 151.949 35.4613 152.946 35.4362C153.942 35.4111 154.934 35.5841 155.863 35.9451C157.257 36.5142 158.445 37.4945 159.27 38.7558C160.094 40.0172 160.516 41.4998 160.479 43.007C160.469 43.4024 161.083 43.4022 161.093 43.007C161.131 40.9 160.355 38.8597 158.926 37.3126C158.2 36.5412 157.328 35.9233 156.36 35.4954C155.392 35.0676 154.348 34.8384 153.29 34.8214C152.068 34.7954 150.857 35.0483 149.748 35.561L150.168 35.6712C149.615 34.7392 148.872 33.9344 147.988 33.309C147.104 32.6836 146.098 32.2518 145.036 32.0415C143.985 31.8451 142.903 31.8773 141.865 32.1362C140.827 32.3951 139.857 32.8744 139.02 33.5418C137.446 34.7758 136.252 36.6907 136.327 38.7444C136.359 39.6331 136.622 40.5453 137.239 41.2075C138.028 42.0558 139.206 42.2025 140.294 41.9851C141.741 41.6963 143.062 40.7435 144.57 40.7728C144.865 40.773 145.157 40.836 145.427 40.9576C145.696 41.0792 145.936 41.2567 146.132 41.4782C146.464 41.8536 146.665 42.3935 146.438 42.8728C146.27 43.2282 146.799 43.5403 146.968 43.1828Z"
          fill="#2F2E41"
        />
        <path
          d="M49.0818 117.07C41.8034 117.07 35.037 116.82 28.9794 116.316C21.0616 115.656 14.7874 114.595 10.3311 113.163C5.613 111.647 3.10994 109.751 2.89141 107.527C2.46554 103.195 10.9334 99.1892 18.112 96.5913L18.3205 97.1692C8.46238 100.737 3.1997 104.394 3.50178 107.467C3.88653 111.382 13.1913 114.384 29.0302 115.703C45.2486 117.055 66.5919 116.576 89.1288 114.354C111.666 112.133 132.693 108.436 148.337 103.944C163.615 99.5573 172.157 94.7963 171.772 90.8818C171.452 87.6318 164.984 84.9867 153.557 83.4336L153.639 82.825C161.942 83.9534 171.934 86.2568 172.382 90.8216C172.601 93.0454 170.515 95.3939 166.183 97.802C162.091 100.077 156.143 102.342 148.506 104.534C132.827 109.036 111.762 112.741 89.1889 114.966C75.0286 116.361 61.3331 117.07 49.0818 117.07Z"
          fill="#6C63FF"
        />
        <path
          d="M171.426 93.0357C173.4 93.0357 175 91.4331 175 89.4562C175 87.4793 173.4 85.8767 171.426 85.8767C169.451 85.8767 167.851 87.4793 167.851 89.4562C167.851 91.4331 169.451 93.0357 171.426 93.0357Z"
          fill="#6C63FF"
        />
        <path
          d="M67.7673 7.65897C69.7415 7.65897 71.3418 6.05638 71.3418 4.07949C71.3418 2.10259 69.7415 0.5 67.7673 0.5C65.7932 0.5 64.1929 2.10259 64.1929 4.07949C64.1929 6.05638 65.7932 7.65897 67.7673 7.65897Z"
          fill="#E6E6E6"
        />
        <path
          d="M3.97779 92.8311C5.95192 92.8311 7.55227 91.2285 7.55227 89.2516C7.55227 87.2747 5.95192 85.6721 3.97779 85.6721C2.00367 85.6721 0.40332 87.2747 0.40332 89.2516C0.40332 91.2285 2.00367 92.8311 3.97779 92.8311Z"
          fill="#E6E6E6"
        />
        <path
          d="M26.0587 24.9022C27.2672 24.9022 28.2469 23.9211 28.2469 22.711C28.2469 21.5008 27.2672 20.5198 26.0587 20.5198C24.8503 20.5198 23.8706 21.5008 23.8706 22.711C23.8706 23.9211 24.8503 24.9022 26.0587 24.9022Z"
          fill="#FF6584"
        />
        <path
          d="M15.8361 108.027C17.0446 108.027 18.0242 107.046 18.0242 105.835C18.0242 104.625 17.0446 103.644 15.8361 103.644C14.6276 103.644 13.6479 104.625 13.6479 105.835C13.6479 107.046 14.6276 108.027 15.8361 108.027Z"
          fill="#FF6584"
        />
        <path
          d="M165.088 72.1971C166.296 72.1971 167.276 71.2161 167.276 70.0059C167.276 68.7957 166.296 67.8147 165.088 67.8147C163.879 67.8147 162.899 68.7957 162.899 70.0059C162.899 71.2161 163.879 72.1971 165.088 72.1971Z"
          fill="#FF6584"
        />
        <path
          d="M131.966 126.613C133.94 126.613 135.541 125.01 135.541 123.034C135.541 121.057 133.94 119.454 131.966 119.454C129.992 119.454 128.392 121.057 128.392 123.034C128.392 125.01 129.992 126.613 131.966 126.613Z"
          fill="#E6E6E6"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_66">
          <rect
            width="175"
            height="129"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Google = () => {
  return (
    <svg
    className="max-w-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      ></path>
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      ></path>
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.991 21.991 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      ></path>
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      ></path>
      <path fill="none" d="M2 2h44v44H2z"></path>
    </svg>
  );
};

export { HamburgerIcon, SearchIcon, CloseIcon, SpaceImage, Google };
