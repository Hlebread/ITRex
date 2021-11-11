import React from "react";

export default function Icon({ name, className, clickAction }) {
  const iconClass = className || "";
  const getIcon = () => {
    switch (name) {
      case "email":
        return (
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z"
              fill="white"
            />
          </svg>
        );

      case "password":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
              fill="white"
            />
          </svg>
        );
      case "password-check":
        return (
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M14.7099 1.2101C14.617 1.11638 14.5064 1.04198 14.3845 0.991213C14.2627 0.940445 14.132 0.914307 13.9999 0.914307C13.8679 0.914307 13.7372 0.940445 13.6154 0.991213C13.4935 1.04198 13.3829 1.11638 13.29 1.2101L5.83995 8.6701L2.70995 5.5301C2.61343 5.43687 2.49949 5.36355 2.37463 5.31435C2.24978 5.26514 2.11645 5.24101 1.98227 5.24334C1.84809 5.24566 1.71568 5.27438 1.5926 5.32788C1.46953 5.38137 1.35819 5.45858 1.26495 5.55511C1.17171 5.65163 1.0984 5.76557 1.04919 5.89042C0.999989 6.01528 0.975859 6.1486 0.97818 6.28278C0.980502 6.41696 1.00923 6.54937 1.06272 6.67245C1.11622 6.79553 1.19343 6.90687 1.28995 7.0001L5.12995 10.8401C5.22291 10.9338 5.33351 11.0082 5.45537 11.059C5.57723 11.1098 5.70794 11.1359 5.83995 11.1359C5.97196 11.1359 6.10267 11.1098 6.22453 11.059C6.34639 11.0082 6.45699 10.9338 6.54995 10.8401L14.7099 2.68011C14.8115 2.58646 14.8925 2.47281 14.9479 2.34631C15.0033 2.21981 15.0319 2.08321 15.0319 1.94511C15.0319 1.807 15.0033 1.6704 14.9479 1.5439C14.8925 1.4174 14.8115 1.30375 14.7099 1.2101Z"
              fill="#A1ABC9"
            />
          </svg>
        );

      // case "eye":
      //   return (
      //     <svg
      //       width="22"
      //       height="22"
      //       viewBox="0 0 22 22"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //       className={iconClass}
      //       onClick={clickAction}
      //     >
      //       <path
      //         d="M9.94 5.07994C10.2908 5.02617 10.6451 4.99943 11 4.99994C14.18 4.99994 17.17 7.28994 18.91 10.9999C18.6439 11.5645 18.3433 12.1122 18.01 12.6399C17.9042 12.8038 17.8486 12.9949 17.85 13.1899C17.8522 13.4082 17.9258 13.6197 18.0595 13.7922C18.1931 13.9647 18.3796 14.0888 18.5903 14.1455C18.8011 14.2021 19.0246 14.1883 19.2268 14.106C19.4289 14.0238 19.5986 13.8776 19.71 13.6899C20.1759 12.9579 20.5806 12.1886 20.92 11.3899C20.9737 11.2652 21.0013 11.1308 21.0013 10.9949C21.0013 10.8591 20.9737 10.7247 20.92 10.5999C18.9 5.90994 15.1 2.99994 11 2.99994C10.5307 2.99758 10.0621 3.03774 9.6 3.11994C9.46868 3.14227 9.34304 3.19024 9.23026 3.26112C9.11748 3.332 9.01976 3.4244 8.94269 3.53304C8.86561 3.64169 8.8107 3.76445 8.78107 3.89432C8.75144 4.02419 8.74768 4.15862 8.77 4.28994C8.79233 4.42126 8.8403 4.5469 8.91118 4.65968C8.98206 4.77247 9.07446 4.87018 9.1831 4.94726C9.29175 5.02433 9.41451 5.07925 9.54438 5.10888C9.67425 5.13851 9.80868 5.14227 9.94 5.11994V5.07994ZM2.71 1.28994C2.61676 1.1967 2.50607 1.12274 2.38425 1.07228C2.26243 1.02182 2.13186 0.99585 2 0.99585C1.86814 0.99585 1.73758 1.02182 1.61575 1.07228C1.49393 1.12274 1.38324 1.1967 1.29 1.28994C1.1017 1.47824 0.995911 1.73364 0.995911 1.99994C0.995911 2.26624 1.1017 2.52164 1.29 2.70994L4.39 5.79994C2.97558 7.16147 1.84986 8.79393 1.08 10.5999C1.02494 10.7261 0.996517 10.8623 0.996517 10.9999C0.996517 11.1376 1.02494 11.2738 1.08 11.3999C3.1 16.0899 6.9 18.9999 11 18.9999C12.7971 18.9875 14.5518 18.4524 16.05 17.4599L19.29 20.7099C19.383 20.8037 19.4936 20.8781 19.6154 20.9288C19.7373 20.9796 19.868 21.0057 20 21.0057C20.132 21.0057 20.2627 20.9796 20.3846 20.9288C20.5064 20.8781 20.617 20.8037 20.71 20.7099C20.8037 20.617 20.8781 20.5064 20.9289 20.3845C20.9797 20.2627 21.0058 20.132 21.0058 19.9999C21.0058 19.8679 20.9797 19.7372 20.9289 19.6154C20.8781 19.4935 20.8037 19.3829 20.71 19.2899L2.71 1.28994ZM9.07 10.4799L11.52 12.9299C11.351 12.9784 11.1758 13.002 11 12.9999C10.4696 12.9999 9.96086 12.7892 9.58579 12.4142C9.21072 12.0391 9 11.5304 9 10.9999C8.99795 10.8241 9.02154 10.649 9.07 10.4799ZM11 16.9999C7.82 16.9999 4.83 14.7099 3.1 10.9999C3.74609 9.57369 4.66307 8.28652 5.8 7.20994L7.57 8.99994C7.15425 9.75874 6.99574 10.6319 7.11826 11.4884C7.24078 12.3449 7.63772 13.1386 8.24953 13.7504C8.86134 14.3622 9.65503 14.7592 10.5115 14.8817C11.3681 15.0042 12.2412 14.8457 13 14.4299L14.59 15.9999C13.5011 16.6408 12.2634 16.9856 11 16.9999Z"
      //         fill="white"
      //       />
      //     </svg>
      //   );

      case "eye":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path d="M230.8877,162.8125a7.99959,7.99959,0,1,1-13.85547,8L198.6499,138.97412a123.56028,123.56028,0,0,1-35.28808,16.27832l5.813,32.96436a8.00173,8.00173,0,0,1-6.48925,9.26855,8.13106,8.13106,0,0,1-1.39942.12207,8.00278,8.00278,0,0,1-7.86914-6.61133l-5.71826-32.42724a136.26072,136.26072,0,0,1-39.4873-.01367l-5.71729,32.42724a8.00272,8.00272,0,0,1-7.86914,6.61231,8.12,8.12,0,0,1-1.39844-.12207,8.00124,8.00124,0,0,1-6.49023-9.26758l5.81445-32.978A123.57956,123.57956,0,0,1,57.3064,138.94531l-18.49,32.02539a7.99959,7.99959,0,1,1-13.85547-8l19.49731-33.77a147.761,147.761,0,0,1-18.68188-19.29834A7.99972,7.99972,0,1,1,38.22168,99.84766a128.70627,128.70627,0,0,0,21.24561,20.92285c.06274.04492.12011.09424.18115.14062A109.59068,109.59068,0,0,0,128,144a109.58952,109.58952,0,0,0,68.3374-23.07861c.05225-.03955.10156-.08155.15528-.11963a128.72532,128.72532,0,0,0,21.28466-20.9541,7.99973,7.99973,0,0,1,12.44532,10.05468,147.78919,147.78919,0,0,1-18.72144,19.333Z" />
          </svg>
        );

      case "eye_active":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path d="M0.106 11.553c-0.136 0.274-0.146 0.603 0 0.894 0 0 0.396 0.789 1.12 1.843 0.451 0.656 1.038 1.432 1.757 2.218 0.894 0.979 2.004 1.987 3.319 2.8 1.595 0.986 3.506 1.692 5.698 1.692s4.103-0.706 5.698-1.692c1.315-0.813 2.425-1.821 3.319-2.8 0.718-0.786 1.306-1.562 1.757-2.218 0.724-1.054 1.12-1.843 1.12-1.843 0.136-0.274 0.146-0.603 0-0.894 0 0-0.396-0.789-1.12-1.843-0.451-0.656-1.038-1.432-1.757-2.218-0.894-0.979-2.004-1.987-3.319-2.8-1.595-0.986-3.506-1.692-5.698-1.692s-4.103 0.706-5.698 1.692c-1.315 0.813-2.425 1.821-3.319 2.8-0.719 0.786-1.306 1.561-1.757 2.218-0.724 1.054-1.12 1.843-1.12 1.843zM2.14 12c0.163-0.281 0.407-0.681 0.734-1.158 0.41-0.596 0.94-1.296 1.585-2.001 0.805-0.881 1.775-1.756 2.894-2.448 1.35-0.834 2.901-1.393 4.647-1.393s3.297 0.559 4.646 1.393c1.119 0.692 2.089 1.567 2.894 2.448 0.644 0.705 1.175 1.405 1.585 2.001 0.328 0.477 0.572 0.876 0.734 1.158-0.163 0.281-0.407 0.681-0.734 1.158-0.41 0.596-0.94 1.296-1.585 2.001-0.805 0.881-1.775 1.756-2.894 2.448-1.349 0.834-2.9 1.393-4.646 1.393s-3.297-0.559-4.646-1.393c-1.119-0.692-2.089-1.567-2.894-2.448-0.644-0.705-1.175-1.405-1.585-2.001-0.328-0.477-0.572-0.877-0.735-1.158zM16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path>
          </svg>
        );

      case "firstName":
      case "lastName":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M10 0C8.06053 0.00368503 6.16393 0.571311 4.54128 1.63374C2.91862 2.69617 1.63994 4.20754 0.86099 5.98377C0.0820354 7.76 -0.163575 9.72442 0.154075 11.6378C0.471725 13.5511 1.33893 15.3308 2.65005 16.76C3.58647 17.775 4.72299 18.5851 5.98799 19.1392C7.25298 19.6933 8.61903 19.9793 10 19.9793C11.3811 19.9793 12.7471 19.6933 14.0121 19.1392C15.2771 18.5851 16.4136 17.775 17.35 16.76C18.6612 15.3308 19.5284 13.5511 19.846 11.6378C20.1637 9.72442 19.9181 7.76 19.1391 5.98377C18.3602 4.20754 17.0815 2.69617 15.4588 1.63374C13.8362 0.571311 11.9396 0.00368503 10 0ZM10 18C7.92851 17.9969 5.93896 17.1903 4.45005 15.75C4.90209 14.6495 5.67108 13.7083 6.6593 13.0459C7.64752 12.3835 8.81036 12.0298 10 12.0298C11.1897 12.0298 12.3526 12.3835 13.3408 13.0459C14.329 13.7083 15.098 14.6495 15.55 15.75C14.0611 17.1903 12.0716 17.9969 10 18ZM8.00005 8C8.00005 7.60444 8.11735 7.21776 8.33711 6.88886C8.55687 6.55996 8.86923 6.30362 9.23468 6.15224C9.60013 6.00087 10.0023 5.96126 10.3902 6.03843C10.7782 6.1156 11.1346 6.30608 11.4143 6.58579C11.694 6.86549 11.8844 7.22186 11.9616 7.60982C12.0388 7.99778 11.9992 8.39991 11.8478 8.76537C11.6964 9.13082 11.4401 9.44318 11.1112 9.66294C10.7823 9.8827 10.3956 10 10 10C9.46962 10 8.96091 9.78929 8.58584 9.41421C8.21076 9.03914 8.00005 8.53043 8.00005 8ZM16.91 14C16.0166 12.4718 14.6415 11.283 13 10.62C13.5092 10.0427 13.841 9.33066 13.9555 8.56944C14.0701 7.80822 13.9625 7.03011 13.6458 6.3285C13.3291 5.62688 12.8166 5.03156 12.17 4.61397C11.5233 4.19637 10.7698 3.97425 10 3.97425C9.23026 3.97425 8.47682 4.19637 7.83014 4.61397C7.18346 5.03156 6.67102 5.62688 6.3543 6.3285C6.03758 7.03011 5.93004 7.80822 6.04458 8.56944C6.15912 9.33066 6.49088 10.0427 7.00005 10.62C5.35865 11.283 3.98352 12.4718 3.09005 14C2.37799 12.7871 2.00177 11.4065 2.00005 10C2.00005 7.87827 2.8429 5.84344 4.34319 4.34315C5.84349 2.84285 7.87832 2 10 2C12.1218 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C17.9983 11.4065 17.6221 12.7871 16.91 14Z"
              fill="#A1ABC9"
            />
          </svg>
        );

      case "arrowLeft":
        return (
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M0.500012 7.79999L6.20001 13.4C6.60001 13.8 7.20001 13.8 7.60001 13.4C8.00001 13 8.00001 12.4 7.60001 12L2.70001 6.99999L7.60001 1.99999C8.00001 1.59999 8.00001 0.999987 7.60001 0.599988C7.40001 0.399988 7.20001 0.299988 6.90001 0.299988C6.60001 0.299988 6.40001 0.399988 6.20001 0.599988L0.500012 6.19999C0.100012 6.69999 0.100012 7.29999 0.500012 7.79999C0.500012 7.69999 0.500012 7.69999 0.500012 7.79999Z"
              fill="white"
            />
          </svg>
        );

      case "arrowRight":
        return (
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"
              fill="white"
            />
          </svg>
        );

      case "arrowUp":
        return (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M11 5.40994L6.71001 1.16994C6.61705 1.07622 6.50645 1.00182 6.38459 0.951053C6.26273 0.900284 6.13202 0.874146 6.00001 0.874146C5.868 0.874146 5.73729 0.900284 5.61543 0.951053C5.49357 1.00182 5.38297 1.07622 5.29001 1.16994L1.05001 5.40994C0.956281 5.50291 0.881887 5.61351 0.831118 5.73537C0.780349 5.85723 0.754211 5.98793 0.754211 6.11994C0.754211 6.25196 0.780349 6.38266 0.831118 6.50452C0.881887 6.62638 0.956281 6.73698 1.05001 6.82994C1.23737 7.01619 1.49082 7.12074 1.75501 7.12074C2.0192 7.12074 2.27265 7.01619 2.46001 6.82994L6.00001 3.28994L9.54001 6.82994C9.72627 7.01469 9.97767 7.11884 10.24 7.11994C10.3716 7.1207 10.5021 7.09548 10.6239 7.04572C10.7458 6.99595 10.8566 6.92263 10.95 6.82994C11.0471 6.74033 11.1254 6.63236 11.1805 6.51228C11.2357 6.39221 11.2664 6.2624 11.2711 6.13037C11.2757 5.99833 11.2542 5.86669 11.2076 5.74303C11.1611 5.61938 11.0905 5.50617 11 5.40994Z"
              fill="white"
            />
          </svg>
        );

      case "arrowDown":
        return (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M11 1.16994C10.8126 0.983692 10.5592 0.87915 10.295 0.87915C10.0308 0.87915 9.77737 0.983692 9.59001 1.16994L6.00001 4.70994L2.46001 1.16994C2.27265 0.983692 2.0192 0.87915 1.75501 0.87915C1.49082 0.87915 1.23737 0.983692 1.05001 1.16994C0.956281 1.26291 0.881887 1.37351 0.831118 1.49537C0.780349 1.61723 0.754211 1.74793 0.754211 1.87994C0.754211 2.01195 0.780349 2.14266 0.831118 2.26452C0.881887 2.38638 0.956281 2.49698 1.05001 2.58994L5.29001 6.82994C5.38297 6.92367 5.49357 6.99806 5.61543 7.04883C5.73729 7.0996 5.868 7.12574 6.00001 7.12574C6.13202 7.12574 6.26273 7.0996 6.38459 7.04883C6.50645 6.99806 6.61705 6.92367 6.71001 6.82994L11 2.58994C11.0937 2.49698 11.1681 2.38638 11.2189 2.26452C11.2697 2.14266 11.2958 2.01195 11.2958 1.87994C11.2958 1.74793 11.2697 1.61723 11.2189 1.49537C11.1681 1.37351 11.0937 1.26291 11 1.16994Z"
              fill="white"
            />
          </svg>
        );

      case "logo":
        return (
          <svg
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M21.6389 20.3435C20.0798 22.3721 17.4396 23.2754 14.9263 22.8483C12.1752 22.3813 9.91074 20.251 9.28809 17.549C9.84829 20.7099 11.5833 23.542 14.1449 25.4768C15.7695 26.6993 17.6608 27.5191 19.6636 27.8689C21.6665 28.2188 23.7237 28.0887 25.6665 27.4894C26.1936 27.3264 26.7098 27.1303 27.2121 26.9023C27.4309 26.8024 27.646 26.6957 27.8593 26.5842C28.0517 26.4819 28.39 26.3636 28.5334 26.1987L21.762 20.4453L21.6389 20.3435Z"
              fill="url(#paint0_linear_7:997)"
            />
            <path
              d="M10.569 4.48178C7.08372 4.36963 3.98332 5.5322 2.25753 7.82671C0.367638 10.9866 -0.368708 14.7039 0.17384 18.3457C0.871264 23.0505 3.63277 27.0886 7.51578 29.5259C5.21024 26.3495 5.17102 22.6577 5.39777 20.7339C6.07191 15.0062 9.7723 12.3103 10.4844 11.8629C11.0775 11.0715 11.8309 10.414 12.6953 9.93335C13.5597 9.45273 14.5158 9.15981 15.5011 9.0737C16.4864 8.98758 17.4788 9.11022 18.4135 9.4336C19.3481 9.75697 20.2041 10.2738 20.9255 10.9504L20.9482 10.9314C18.7352 7.36769 15.0949 4.62641 10.569 4.48178Z"
              fill="url(#paint1_linear_7:997)"
            />
            <path
              d="M16.1151 2.69227e-05C13.3257 -0.00473979 10.5827 0.713829 8.15389 2.08559C5.72508 3.45735 3.69346 5.43543 2.25732 7.82673C3.98311 5.53222 7.08352 4.36965 10.5688 4.4818C15.0947 4.62643 18.735 7.36771 20.9505 10.9314L27.8689 5.05359C26.3581 3.45398 24.536 2.18045 22.5146 1.31136C20.4932 0.442272 18.3154 -0.00399333 16.1151 2.69227e-05Z"
              fill="url(#paint2_linear_7:997)"
            />
            <path
              d="M27.9366 26.5408C25.1009 28.0686 21.6898 28.459 18.5747 27.631C15.7034 26.8629 13.1864 25.1247 11.4509 22.7117C9.25939 19.6475 8.05391 15.1209 10.4869 11.8643C9.77235 12.3116 6.07441 15.0076 5.40027 20.7353C5.17536 22.6449 5.21336 26.295 7.46558 29.4543C8.14707 30.0248 9.01976 30.3889 9.8275 30.7296C12.914 32.0302 16.3279 32.3415 19.5988 31.6207C22.8696 30.8999 25.8365 29.1825 28.0904 26.705C28.2383 26.5416 28.3826 26.3761 28.5231 26.2086C28.3307 26.3238 28.1352 26.4346 27.9366 26.5408Z"
              fill="url(#paint3_linear_7:997)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_7:997"
                x1="24.0222"
                y1="18.6417"
                x2="13.4775"
                y2="25.334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC6BA" />
                <stop offset="0.49" stopColor="#E781A6" />
                <stop offset="1" stopColor="#79578A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_7:997"
                x1="4.12305"
                y1="19.344"
                x2="16.6515"
                y2="7.32969"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC6BA" />
                <stop offset="0.5" stopColor="#E781A6" />
                <stop offset="1" stopColor="#79578A" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_7:997"
                x1="10.6454"
                y1="3.32229"
                x2="25.5236"
                y2="12.8736"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.01" stopColor="#FFC6BA" />
                <stop offset="0.5" stopColor="#E781A6" />
                <stop offset="1" stopColor="#A66894" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_7:997"
                x1="19.4615"
                y1="28.4786"
                x2="4.41114"
                y2="17.2604"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A66894" />
                <stop offset="0.5" stopColor="#E781A6" />
                <stop offset="0.99" stopColor="#FFC6BA" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "logo-title":
        return (
          <svg
            width="90"
            height="12"
            viewBox="0 0 90 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M7.415 3.67994C7.415 4.20994 7.29 4.70994 7.04 5.17994C6.79 5.64994 6.39 6.03494 5.84 6.33494C5.29 6.62494 4.585 6.76994 3.725 6.76994H1.835V10.9999H0.125V0.574941H3.725C4.525 0.574941 5.2 0.714941 5.75 0.994941C6.31 1.26494 6.725 1.63494 6.995 2.10494C7.275 2.57494 7.415 3.09994 7.415 3.67994ZM3.725 5.37494C4.375 5.37494 4.86 5.22994 5.18 4.93994C5.5 4.63994 5.66 4.21994 5.66 3.67994C5.66 2.53994 5.015 1.96994 3.725 1.96994H1.835V5.37494H3.725Z"
              fill="#202225"
            />
            <path
              d="M15.3309 8.86994H10.9659L10.2159 10.9999H8.4309L12.1659 0.559941H14.1459L17.8809 10.9999H16.0809L15.3309 8.86994ZM14.8509 7.47494L13.1559 2.62994L11.4459 7.47494H14.8509Z"
              fill="#202225"
            />
            <path
              d="M21.2149 9.61994H24.7399V10.9999H19.5049V0.574941H21.2149V9.61994Z"
              fill="#202225"
            />
            <path
              d="M37.1499 0.574941V10.9999H35.4399V3.85994L32.2599 10.9999H31.0749L27.8799 3.85994V10.9999H26.1699V0.574941H28.0149L31.6749 8.74994L35.3199 0.574941H37.1499Z"
              fill="#202225"
            />
            <path
              d="M42.7239 5.76494C42.7239 4.74494 42.9589 3.82994 43.4289 3.01994C43.9089 2.20994 44.5539 1.57994 45.3639 1.12994C46.1839 0.669941 47.0789 0.439941 48.0489 0.439941C49.1589 0.439941 50.1439 0.714941 51.0039 1.26494C51.8739 1.80494 52.5039 2.57494 52.8939 3.57494H50.8389C50.5689 3.02494 50.1939 2.61494 49.7139 2.34494C49.2339 2.07494 48.6789 1.93994 48.0489 1.93994C47.3589 1.93994 46.7439 2.09494 46.2039 2.40494C45.6639 2.71494 45.2389 3.15994 44.9289 3.73994C44.6289 4.31994 44.4789 4.99494 44.4789 5.76494C44.4789 6.53494 44.6289 7.20994 44.9289 7.78994C45.2389 8.36994 45.6639 8.81994 46.2039 9.13994C46.7439 9.44994 47.3589 9.60494 48.0489 9.60494C48.6789 9.60494 49.2339 9.46994 49.7139 9.19994C50.1939 8.92994 50.5689 8.51994 50.8389 7.96994H52.8939C52.5039 8.96994 51.8739 9.73994 51.0039 10.2799C50.1439 10.8199 49.1589 11.0899 48.0489 11.0899C47.0689 11.0899 46.1739 10.8649 45.3639 10.4149C44.5539 9.95494 43.9089 9.31994 43.4289 8.50994C42.9589 7.69994 42.7239 6.78494 42.7239 5.76494Z"
              fill="#202225"
            />
            <path
              d="M56.6055 9.61994H60.1305V10.9999H54.8955V0.574941H56.6055V9.61994Z"
              fill="#202225"
            />
            <path
              d="M63.2705 0.574941V10.9999H61.5605V0.574941H63.2705Z"
              fill="#202225"
            />
            <path
              d="M74.0806 10.9999H72.3706L67.2256 3.21494V10.9999H65.5156V0.559941H67.2256L72.3706 8.32994V0.559941H74.0806V10.9999Z"
              fill="#202225"
            />
            <path
              d="M78.0362 0.574941V10.9999H76.3262V0.574941H78.0362Z"
              fill="#202225"
            />
            <path
              d="M79.7113 5.76494C79.7113 4.74494 79.9463 3.82994 80.4163 3.01994C80.8963 2.20994 81.5413 1.57994 82.3512 1.12994C83.1712 0.669941 84.0662 0.439941 85.0362 0.439941C86.1462 0.439941 87.1312 0.714941 87.9912 1.26494C88.8613 1.80494 89.4912 2.57494 89.8812 3.57494H87.8262C87.5563 3.02494 87.1813 2.61494 86.7012 2.34494C86.2212 2.07494 85.6662 1.93994 85.0362 1.93994C84.3462 1.93994 83.7313 2.09494 83.1913 2.40494C82.6513 2.71494 82.2262 3.15994 81.9163 3.73994C81.6162 4.31994 81.4662 4.99494 81.4662 5.76494C81.4662 6.53494 81.6162 7.20994 81.9163 7.78994C82.2262 8.36994 82.6513 8.81994 83.1913 9.13994C83.7313 9.44994 84.3462 9.60494 85.0362 9.60494C85.6662 9.60494 86.2212 9.46994 86.7012 9.19994C87.1813 8.92994 87.5563 8.51994 87.8262 7.96994H89.8812C89.4912 8.96994 88.8613 9.73994 87.9912 10.2799C87.1312 10.8199 86.1462 11.0899 85.0362 11.0899C84.0562 11.0899 83.1612 10.8649 82.3512 10.4149C81.5413 9.95494 80.8963 9.31994 80.4163 8.50994C79.9463 7.69994 79.7113 6.78494 79.7113 5.76494Z"
              fill="#202225"
            />
          </svg>
        );

      case "search":
        return (
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z"
              fill="#A1ABC9"
            />
          </svg>
        );

      case "more":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
              stroke="#DCE0EC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#DCE0EC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
              stroke="#DCE0EC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case "clock":
        return (
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M11.358 9V9.5H11.858H13.8362C13.9641 9.5 14.088 9.55133 14.1801 9.6445C14.2725 9.73786 14.3253 9.86563 14.3253 10C14.3253 10.1344 14.2725 10.2621 14.1801 10.3555C14.088 10.4487 13.9641 10.5 13.8362 10.5H10.8689C10.741 10.5 10.6172 10.4487 10.525 10.3555C10.4327 10.2621 10.3799 10.1344 10.3799 10V5C10.3799 4.86563 10.4327 4.73786 10.525 4.6445L10.1695 4.29289L10.525 4.6445C10.6172 4.55133 10.741 4.5 10.8689 4.5C10.9969 4.5 11.1207 4.55133 11.2128 4.6445C11.3052 4.73786 11.358 4.86563 11.358 5V9ZM5.65374 2.09962C7.19793 1.05645 9.01282 0.5 10.8689 0.5C12.1014 0.5 13.3219 0.745423 14.4609 1.2224C15.5999 1.69937 16.6351 2.39864 17.5074 3.28054C18.3797 4.16245 19.0719 5.20973 19.5443 6.36272C20.0167 7.51572 20.2598 8.75168 20.2598 10C20.2598 11.8801 19.7084 13.7176 18.6758 15.28C17.6433 16.8424 16.1762 18.0592 14.4609 18.7776C12.7456 19.4959 10.8585 19.6838 9.0379 19.3177C7.2173 18.9515 5.5442 18.0476 4.2305 16.7195C2.91674 15.3912 2.02144 13.6982 1.65868 11.8544C1.29591 10.0105 1.48214 8.0993 2.19361 6.36272C2.90505 4.62619 4.10948 3.14284 5.65374 2.09962ZM6.19297 17.0661C7.57657 18.0008 9.20383 18.5 10.8689 18.5C13.1019 18.5 15.2423 17.6031 16.8196 16.0085C18.3966 14.414 19.2817 12.2526 19.2817 10C19.2817 8.32007 18.789 6.67743 17.8653 5.27976C16.9415 3.88203 15.628 2.79179 14.0901 2.14777C12.5522 1.50373 10.8597 1.33513 9.22667 1.66353C7.5937 1.99193 6.09449 2.80238 4.91831 3.99154C3.74219 5.18063 2.94185 6.69496 2.61766 8.34275C2.29347 9.99052 2.45981 11.6985 3.09586 13.251C3.73193 14.8036 4.80944 16.1314 6.19297 17.0661Z"
              fill="white"
              stroke="#DCE0EC"
            />
          </svg>
        );

      case "notepad":
        return (
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M12.3256 2V2.5H12.8256H13.8147C14.4673 2.5 15.0943 2.76204 15.5574 3.23029C16.0207 3.69872 16.282 4.3352 16.282 5V17C16.282 17.6648 16.0207 18.3013 15.5574 18.7697C15.0943 19.238 14.4673 19.5 13.8147 19.5H3.92382C3.27124 19.5 2.64426 19.238 2.18112 18.7697C1.7178 18.3013 1.45654 17.6648 1.45654 17V5C1.45654 4.3352 1.7178 3.69872 2.18112 3.23029C2.64426 2.76204 3.27124 2.5 3.92382 2.5H4.91291H5.41291V2C5.41291 1.60042 5.56996 1.21829 5.84779 0.937395C6.12544 0.656687 6.50083 0.5 6.89109 0.5H10.8475C11.2377 0.5 11.6131 0.656687 11.8908 0.937395C12.1686 1.21829 12.3256 1.60042 12.3256 2ZM6.89109 1.5H6.39109V2V4V4.5H6.89109H10.8475H11.3475V4V3V2V1.5H10.8475H6.89109ZM5.41291 4V3.5H4.91291H3.92382C3.5271 3.5 3.14776 3.65938 2.86894 3.94128C2.59029 4.223 2.43472 4.60393 2.43472 5V17C2.43472 17.3961 2.59029 17.777 2.86894 18.0587L3.22442 17.7071L2.86894 18.0587C3.14776 18.3406 3.5271 18.5 3.92382 18.5H13.8147C14.2114 18.5 14.5908 18.3406 14.8696 18.0587C15.1482 17.777 15.3038 17.3961 15.3038 17V5C15.3038 4.60394 15.1482 4.223 14.8696 3.94128C14.5908 3.65938 14.2114 3.5 13.8147 3.5H12.8256H12.3256V4C12.3256 4.39958 12.1686 4.78171 11.8908 5.0626C11.6131 5.34331 11.2377 5.5 10.8475 5.5H6.89109C6.50083 5.5 6.12544 5.34331 5.84779 5.0626C5.56996 4.78171 5.41291 4.39958 5.41291 4Z"
              fill="white"
              stroke="#DCE0EC"
            />
          </svg>
        );

      case "settings":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClass}
            onClick={clickAction}
          >
            <path
              d="M17.9999 6.18V1C17.9999 0.734784 17.8946 0.48043 17.707 0.292893C17.5195 0.105357 17.2651 0 16.9999 0C16.7347 0 16.4803 0.105357 16.2928 0.292893C16.1053 0.48043 15.9999 0.734784 15.9999 1V6.18C15.4208 6.3902 14.9204 6.77363 14.5668 7.27816C14.2131 7.7827 14.0234 8.38388 14.0234 9C14.0234 9.61612 14.2131 10.2173 14.5668 10.7218C14.9204 11.2264 15.4208 11.6098 15.9999 11.82V19C15.9999 19.2652 16.1053 19.5196 16.2928 19.7071C16.4803 19.8946 16.7347 20 16.9999 20C17.2651 20 17.5195 19.8946 17.707 19.7071C17.8946 19.5196 17.9999 19.2652 17.9999 19V11.82C18.5791 11.6098 19.0795 11.2264 19.4331 10.7218C19.7867 10.2173 19.9764 9.61612 19.9764 9C19.9764 8.38388 19.7867 7.7827 19.4331 7.27816C19.0795 6.77363 18.5791 6.3902 17.9999 6.18ZM16.9999 10C16.8021 10 16.6088 9.94135 16.4443 9.83147C16.2799 9.72159 16.1517 9.56541 16.076 9.38268C16.0003 9.19996 15.9805 8.99889 16.0191 8.80491C16.0577 8.61093 16.153 8.43275 16.2928 8.29289C16.4327 8.15304 16.6108 8.0578 16.8048 8.01921C16.9988 7.98063 17.1999 8.00043 17.3826 8.07612C17.5653 8.15181 17.7215 8.27998 17.8314 8.44443C17.9413 8.60888 17.9999 8.80222 17.9999 9C17.9999 9.26522 17.8946 9.51957 17.707 9.70711C17.5195 9.89464 17.2651 10 16.9999 10ZM10.9999 12.18V1C10.9999 0.734784 10.8946 0.48043 10.707 0.292893C10.5195 0.105357 10.2651 0 9.99991 0C9.7347 0 9.48034 0.105357 9.29281 0.292893C9.10527 0.48043 8.99991 0.734784 8.99991 1V12.18C8.42076 12.3902 7.92037 12.7736 7.56676 13.2782C7.21314 13.7827 7.02344 14.3839 7.02344 15C7.02344 15.6161 7.21314 16.2173 7.56676 16.7218C7.92037 17.2264 8.42076 17.6098 8.99991 17.82V19C8.99991 19.2652 9.10527 19.5196 9.29281 19.7071C9.48034 19.8946 9.7347 20 9.99991 20C10.2651 20 10.5195 19.8946 10.707 19.7071C10.8946 19.5196 10.9999 19.2652 10.9999 19V17.82C11.5791 17.6098 12.0795 17.2264 12.4331 16.7218C12.7867 16.2173 12.9764 15.6161 12.9764 15C12.9764 14.3839 12.7867 13.7827 12.4331 13.2782C12.0795 12.7736 11.5791 12.3902 10.9999 12.18ZM9.99991 16C9.80213 16 9.60879 15.9414 9.44434 15.8315C9.27989 15.7216 9.15172 15.5654 9.07603 15.3827C9.00035 15.2 8.98054 14.9989 9.01913 14.8049C9.05771 14.6109 9.15296 14.4327 9.29281 14.2929C9.43266 14.153 9.61084 14.0578 9.80482 14.0192C9.99881 13.9806 10.1999 14.0004 10.3826 14.0761C10.5653 14.1518 10.7215 14.28 10.8314 14.4444C10.9413 14.6089 10.9999 14.8022 10.9999 15C10.9999 15.2652 10.8946 15.5196 10.707 15.7071C10.5195 15.8946 10.2651 16 9.99991 16ZM3.99991 4.18V1C3.99991 0.734784 3.89456 0.48043 3.70702 0.292893C3.51948 0.105357 3.26513 0 2.99991 0C2.7347 0 2.48034 0.105357 2.29281 0.292893C2.10527 0.48043 1.99991 0.734784 1.99991 1V4.18C1.42076 4.3902 0.920374 4.77363 0.566756 5.27817C0.213137 5.7827 0.0234375 6.38388 0.0234375 7C0.0234375 7.61612 0.213137 8.2173 0.566756 8.72184C0.920374 9.22637 1.42076 9.6098 1.99991 9.82V19C1.99991 19.2652 2.10527 19.5196 2.29281 19.7071C2.48034 19.8946 2.7347 20 2.99991 20C3.26513 20 3.51948 19.8946 3.70702 19.7071C3.89456 19.5196 3.99991 19.2652 3.99991 19V9.82C4.57907 9.6098 5.07945 9.22637 5.43307 8.72184C5.78669 8.2173 5.97639 7.61612 5.97639 7C5.97639 6.38388 5.78669 5.7827 5.43307 5.27817C5.07945 4.77363 4.57907 4.3902 3.99991 4.18ZM2.99991 8C2.80213 8 2.60879 7.94135 2.44434 7.83147C2.27989 7.72159 2.15172 7.56541 2.07603 7.38268C2.00035 7.19996 1.98054 6.99889 2.01913 6.80491C2.05771 6.61093 2.15296 6.43275 2.29281 6.29289C2.43266 6.15304 2.61084 6.0578 2.80482 6.01921C2.9988 5.98063 3.19987 6.00043 3.3826 6.07612C3.56532 6.15181 3.7215 6.27998 3.83138 6.44443C3.94127 6.60888 3.99991 6.80222 3.99991 7C3.99991 7.26522 3.89456 7.51957 3.70702 7.70711C3.51948 7.89464 3.26513 8 2.99991 8Z"
              fill="#A1ABC9"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return getIcon();
}
