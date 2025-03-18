import { useState, useRef } from 'react';
import Input from '../../components/common/Input/Input';
import { Container, theme } from '../../styles/theme';
import { ToggleButton } from '../../components/common/Button/ToggleButton';
import Icon from '../../assets/Icons/Icons';
import useBackgroundImages from '../../components/common/hooks/images/useBackgroundImages';
import {
  Wrapper,
  IconWrapper,
  ToInputContainer,
  Toh1,
  CustomP,
  OptionsContainer,
  ColorOption,
  ImageOption,
  SelectContainer,
  CreateButton,
} from './components/CreateRollingPageStyleComponents';
import recipientService from '../../api/services/recipients.services';
import { useNavigate } from 'react-router-dom';

const ColorOptions = {
  beige: 'beige',
  purple: 'purple',
  blue: 'blue',
  green: 'green',
};

const colorOptions = {
  [ColorOptions.beige]: theme.colors.beige[200],
  [ColorOptions.purple]: theme.colors.purple[200],
  [ColorOptions.blue]: theme.colors.blue[200],
  [ColorOptions.green]: theme.colors.green[200],
};

const CreateRollingPaper = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [rollingPaperFormData, setRollingPaperFormData] = useState({
    name: '',
    backgroundColor: 'beige',
    backgroundImageURL: null,
  });
  const [nameInputError, setNameInputError] = useState(false); // 오류 상태 추가
  const nameInputRef = useRef(null); // useRef 추가

  console.log('rollingPaperFormData: ', rollingPaperFormData);

  const { imgUrls: imageUrls, loading, error } = useBackgroundImages();

  const handleChangeFormData = (key, value) => {
    if (key === 'backgroundColor') {
      return setRollingPaperFormData(prev => ({
        ...prev,
        backgroundImageURL: null,
        [key]: value,
      }));
    }

    if (key === 'backgroundImageURL') {
      return setRollingPaperFormData(prev => ({
        ...prev,
        [key]: value,
      }));
    }

    setRollingPaperFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClickTabBtn = index => {
    setActiveTab(index);

    if (index === 0) {
      setRollingPaperFormData(prev => ({
        ...prev,
        backgroundImageURL: null,
        backgroundColor: 'beige',
      }));
    } else if (index === 1 && imageUrls.length > 0) {
      setRollingPaperFormData(prev => ({
        ...prev,
        backgroundImageURL: imageUrls[0],
      }));
    }
  };

  const handleCreate = async () => {
    if (!rollingPaperFormData.name.trim()) {
      setNameInputError(true); // 제출 시에도 오류 검사
      nameInputRef.current.focus(); // 포커스 이동
      return;
    }

    const { data } = await recipientService.createRecipient(
      rollingPaperFormData
    );
    console.log('data: ', data);

    if (data) {
      navigate(`/post/${data.id}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ToInputContainer>
          <Toh1>To.</Toh1>
          <Input
            ref={nameInputRef} // ref 연결
            width="720px"
            maxWidth="1000px"
            placeholder="받는 사람 이름을 입력해 주세요"
            isError={nameInputError} // 오류 상태 사용
            value={rollingPaperFormData.name}
            onChange={e => handleChangeFormData('name', e.target.value)}
            onBlur={() => setNameInputError(!rollingPaperFormData.name.trim())} // focusout 시 오류 검사
          />
        </ToInputContainer>

        <SelectContainer>
          <h2>배경화면을 선택해 주세요.</h2>
          <CustomP>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</CustomP>
        </SelectContainer>

        <ToggleButton
          tabs={['컬러', '이미지']}
          activeTab={activeTab}
          onChange={handleClickTabBtn}
        />

        {activeTab === 0 ? (
          <OptionsContainer>
            {Object.entries(colorOptions).map(([key, color]) => (
              <ColorOption
                key={color}
                color={color}
                className={
                  rollingPaperFormData.backgroundColor === key ? 'selected' : ''
                }
                onClick={() => handleChangeFormData('backgroundColor', key)}
              >
                {rollingPaperFormData.backgroundColor === key && (
                  <IconWrapper>
                    <Icon name="checkIcon" size="44px" />
                  </IconWrapper>
                )}
              </ColorOption>
            ))}
          </OptionsContainer>
        ) : (
          <OptionsContainer>
            {loading ? (
              <p>이미지를 불러오는 중...</p>
            ) : error ? (
              <p>이미지를 불러오는 데 실패했습니다.</p>
            ) : (
              imageUrls.map(url => (
                <ImageOption
                  key={url}
                  src={url}
                  className={
                    rollingPaperFormData.backgroundImageURL === url
                      ? 'selected'
                      : ''
                  }
                  onClick={() =>
                    handleChangeFormData('backgroundImageURL', url)
                  }
                />
              ))
            )}
          </OptionsContainer>
        )}

        <CreateButton
          type="submit"
          w="720"
          onClick={handleCreate}
          disabled={!rollingPaperFormData.name.trim()}
        >
          생성하기
        </CreateButton>
      </Wrapper>
    </Container>
  );
};

export default CreateRollingPaper;
