import Input from '../../components/common/Input/Input';
import { theme, Font, Container, media } from '../../styles/theme';
import styled from 'styled-components';
import { FilledButton } from '../../components/common/Button/FilledButton';
import { useNavigate, useParams } from 'react-router-dom';
import Dropdown from '../../components/common/Dropdown/Dropdown';
import { useState } from 'react';
import Profile from '../../components/common/Profile/Profile';
import TextEditor from '../../components/common/TextEditor/TextEditor';
import recipientService from '../../api/services/recipients.services';

const S = {
  CreateMessageCard: styled.div`
    /* width: 100%; */
    ${theme.center}
    flex-direction: column;
    margin: 50px 0;
  `,

  MessageContainer: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 720px;
    gap: 50px;

    ${media.tablet`
            width: 100%;
            margin: 0 0 300px 0;
        `}
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,

  Label: styled.h1`
    ${Font.f24};
  `,

  CreateButton: styled(FilledButton)`
    margin-top: 48px;
    text-align: center;
  `,
};

export default function CreateMessageCard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [messageCardFormData, setMessageCardFormData] = useState({
        recipientId: id,
        sender: '',
        profileImageURL: '',
        relationship: '지인',
        content: '',
        font: 'Noto Sans',
    });

  const relations = [
    { value: '지인', label: '지인' },
    { value: '동료', label: '동료' },
    { value: '가족', label: '가족' },
    { value: '친구', label: '친구' },
  ];

  const Fonts = [
    { value: 'Noto Sans', label: 'Noto Sans' },
    { value: 'Pretendard', label: 'Pretendard' },
    { value: 'Nanum Myeongjo', label: '나눔 명조' },
    { value: 'Nanum Pen', label: '나눔 손글씨 손편지체' },
  ];

  const handleChangeFormData = (key, value) => {
    return setMessageCardFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleProfileChange = url => {
    setMessageCardFormData(prev => ({
      ...prev,
      profileImageURL: url,
    }));
  };

  const handleRelationshipChange = value => {
    handleChangeFormData('relationship', value);
  };

  const handleFontChange = value => {
    handleChangeFormData('font', value);
  };

  const handleEditorChange = content => {
    handleChangeFormData('content', content);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(messageCardFormData);
    // setErrors
    try {
        const { data } = await recipientService.createMessage(id,messageCardFormData);
        console.log(data);
    } catch (error) {
        console.log('error');
    } finally{
        navigate(`/post/${id}`);

    }
    // if (data) {
    // }
  };

  return (
    <Container>
      <S.CreateMessageCard>
        <S.MessageContainer>
          <S.ContentWrapper>
            <S.Label $bold>From.</S.Label>
            <Input
              placeholder="이름을 입력해 주세요."
              width={720}
              maxWidth={720}
              onChange={e => handleChangeFormData('sender', e.target.value)}
            />
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Label $bold>프로필 이미지</S.Label>
            <Profile
              value={messageCardFormData.profileImageURL}
              onChange={handleProfileChange}
            />
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Label $bold>상대와의 관계</S.Label>
            <div>
              <Dropdown
                options={relations}
                errorMessage="관계를 선택해주세요."
                value={messageCardFormData.relationship}
                onChange={handleRelationshipChange}
              />
            </div>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Label $bold>내용을 입력해주세요</S.Label>
            <TextEditor
              value={messageCardFormData.content}
              onChange={handleEditorChange}
            />
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Label $bold>폰트 선택</S.Label>
            <div>
              <Dropdown
                options={Fonts}
                errorMessage="폰트를 선택해 주세요."
                value={messageCardFormData.font}
                onChange={handleFontChange}
              />
            </div>
          </S.ContentWrapper>
        </S.MessageContainer>
        <S.CreateButton 
            type='submit'
            w="720" 
            onClick={handleSubmit} 
            disabled={!(messageCardFormData.sender.trim() && messageCardFormData.content.trim())}
        >
            생성하기
        </S.CreateButton>
      </S.CreateMessageCard>
    </Container>
  );
}
