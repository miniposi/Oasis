import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Header from "@/components/Header";
import RecordStarRating from "@/components/RecordStarRating";
import useNavigation from "@/hooks/useNavigation";
import { useCallback, useEffect, useRef, useState } from "react";
import sendReview from "./api/sendReview";
import getProduct from "./api/getProduct";

function ReviewPage() {
  const params = useSearchParams();
  const [detailReview, setDetailReview] = useState("");
  const [imgFile, setImgFile] = useState<File>();
  const [imgPath, setImgPath] = useState("icon/uploadicon.png");
  const imgRef = useRef<HTMLInputElement>(null);
  const [starRate, setStarRate] = useState(0);
  const [productInfo, setProductInfo] = useState<any>({});
  const handleNavigation = useNavigation();

  const Props = {
    productId: params.get("id"),
    content: detailReview,
    score: starRate,
    photos: imgFile,
  };

  const handleSubmit = async () => {
    const response = await sendReview(Props);
    if (response === "OK") {
      handleNavigation(`/productReview?id=${params.get("id")}`);
    } else {
      alert("다시 시도해주세요!");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailReview(event.target.value);
  };

  const handleUpload = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];
      const extension = img.name.split(".").pop()?.toLowerCase();
      const newFileName = `uploaded_file.${extension}`;

      const lowerCaseFile = new File([img], newFileName, { type: img.type });
      setImgFile(lowerCaseFile);

      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setImgPath(reader.result as string);
      };
    }
  };

  const fetch = async () => {
    const response: any = await getProduct(params.get("id"));
    setProductInfo(response.data.product);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header>후기</Header>
      <StyledWrapper>
        <StyledLeftWrapper>
          <StyledImg src={productInfo.thumbnailUrl} alt="제품 사진" />
          <StyledRatingWrapper>
            평점
            <RecordStarRating starRate={starRate} setStarRate={setStarRate} />
          </StyledRatingWrapper>
          <StyledButton onClick={handleSubmit}>후기 작성 완료</StyledButton>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          상세 리뷰
          <StyledTextarea
            value={detailReview}
            onChange={handleChange}
            placeholder="솔직한 평가를 남겨주세요!"
          />
          사진 첨부
          <StyledPhotoUpload>
            <img src={imgPath} alt="이미지 업로드 아이콘" />
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              ref={imgRef}
            />
          </StyledPhotoUpload>
        </StyledRightWrapper>
      </StyledWrapper>
    </>
  );
}

export default ReviewPage;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1500px;
  height: 900px;
`;

const StyledLeftWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledRightWrapper = styled.div`
  width: 950px;
  height: 850px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  padding: 0 10px;
  gap: 10px;
`;

const StyledImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50px;
  border: 3px solid #fff;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 28px;
`;

const StyledButton = styled.button`
  width: 520px;
  height: 133px;
  color: #678fae;
  background: #abdee6;
  border: 0;
  border-radius: 30px;
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 950px;
  height: 400px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  color: #678fae;
  white-space: pre-wrap;
  margin-bottom: 30px;

  &:focus {
    outline: 3px solid #abdee6;
  }
`;

const StyledPhotoUpload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  cursor: pointer;
  border: 3px solid #fff;
  border-radius: 5px;
  font-size: 24px;

  img {
    width: 150px;
    height: 150px;
  }

  input[type="file"] {
    display: none;
  }
`;
