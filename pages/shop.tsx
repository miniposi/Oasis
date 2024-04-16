import { useState } from 'react';
import styled from 'styled-components';

interface TypeProps {
	animal: 'dog' | 'cat';
	category: '사료' | '간식' | '용품';
}

interface ButtonProps {
  $isActive: boolean;
}

export default function ShopPage() {
	const [type, setType] = useState<TypeProps["animal"]>('dog');
	const [category, setCategory] = useState<TypeProps["category"]>('사료');

	const handleSelect = (type: TypeProps["animal"]) => {
		setType(type);
	}

	return (
		<StyledWrapper>
			<StyledHeader>오아시스 상점</StyledHeader>
			<StyledUnderWrapper>
				<StyledTypeButton $isActive={type === 'dog' ? true : false} onClick={() => handleSelect('dog')}>
					강아지
				</StyledTypeButton>
				<StyledTypeButton $isActive={type === 'cat' ? true : false} onClick={() => handleSelect('cat')}>
					고양이
				</StyledTypeButton>
			</StyledUnderWrapper>
			<StyledFilterWrapper>
				<StyledCtgButton >
					사료
				</StyledCtgButton>
				<StyledCtgButton>
					간식
				</StyledCtgButton>
				<StyledCtgButton>
					용품
				</StyledCtgButton>
			</StyledFilterWrapper>
			<StyledContentWrapper>
				<StyledContent>
					<StyledImg src='shop/all.png' alt='전체보기' />
					전체보기
				</StyledContent>
			</StyledContentWrapper>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`

`;

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 115px;
	text-align: center;
	font-size: 40px;
`;

const StyledUnderWrapper = styled.div`
	display: flex;
`;

const StyledTypeButton = styled.button<ButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 113px;
	font-size: 36px;
	background: #678FAE;
	border: 0;
`;

const StyledFilterWrapper = styled.div``;

const StyledCtgButton = styled.button``;

const StyledContentWrapper = styled.div``;

const StyledContent = styled.div``;

const StyledImg = styled.img``;