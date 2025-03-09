import checkIcon from "./checkIcon.svg";
import deleteIcon from "./deleteIcon.svg";
import downArrow from "./downArrow.svg";
import nomalprofile from "./nomalprofile.svg";
import otherOption from "./otherOption.svg";
import plusEmoji20px from "./plusEmoji20px.svg";
import plusEmoji24px from "./plusEmoji24px.svg";
import plusIcon from "./plusIcon.svg";
import leftArrow from "./leftArrow.svg";
import rightArrow from "./rightArrow.svg";
import shareIcon20px from "./shareIcon20px.svg";
import shareIcon24px from "./shareIcon24px.svg";
import toastcloseIcon from "./toastcloseIcon.svg";
import toastcompleted from "./toastcompleted.svg";
import logoIcon from "./logoIcon.svg";
import styled from "styled-components";

// 아이콘 객체 (이미지 경로는 .src로 접근)
const icons = {
  checkIcon,
  deleteIcon,
  downArrow,
  leftArrow,
  nomalprofile,
  otherOption,
  plusEmoji20px,
  plusEmoji24px,
  plusIcon,
  rightArrow,
  shareIcon20px,
  shareIcon24px,
  toastcloseIcon,
  toastcompleted,
  logoIcon,
};

const StyledIcon = styled.img`
  width: ${(props) => props.size || "24px"};
  height: ${(props) => props.size || "24px"};
`;

const Icon = ({ name, alt = "", size = "24px" }) => {
  const iconSrc = icons[name];

  if (!iconSrc) {
    console.warn(`Icon "${name}" not found!`);
    return null; // 존재하지 않는 아이콘일 경우 렌더링하지 않음
  }

  return <StyledIcon src={iconSrc} alt={alt || name} size={size} />;
};

export default Icon;

//   사용법:
//   아이콘 이름만 전달하면 기본 크기 24px
//   <Icon name="checkIcon" alt="체크 아이콘" />

//   크기를 32px로 조정
//   <Icon name="deleteIcon" alt="삭제 아이콘" size="32px" />

//   크기를 48px로 조정
//   <Icon name="logoIcon" alt="로고 아이콘" size="48px" />
