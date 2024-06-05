import { useSearchParams } from "next/navigation";
import styles from "./creation.module.css";
import Header from "@/components/Header/Header";
import RecordStarRating from "@/components/RecordStarRating";
import useNavigation from "@/hooks/useNavigation";
import { useRef, useState } from "react";
import sendReview from "@/api/sendReview";
import ReviewButton from "@/components/Button/ReviewButton";
import { useRecoilState } from "recoil";
import { productState } from "@/hooks/getProduct";

function ReviewPage() {
  const id = useSearchParams().get("id");
  const [detailReview, setDetailReview] = useState("");
  const [imgFile, setImgFile] = useState<File>();
  const [imgPath, setImgPath] = useState("/icon/uploadicon.png");
  const imgRef = useRef<HTMLInputElement>(null);
  const [starRate, setStarRate] = useState(0);
  const [product, setProduct] = useRecoilState(productState);
  const handleNavigation = useNavigation();

  const Props = {
    productId: id,
    content: detailReview,
    score: starRate,
    photos: imgFile,
  };

  async function handleSubmit() {
    const response = await sendReview(Props);
    if (response === "OK") {
      handleNavigation(`review?id=${id}`);
    } else {
      alert("다시 시도해주세요!");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDetailReview(event.target.value);
  }

  function handleUpload() {
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
  }

  function triggerFileInput() {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }

  return (
    <>
      <Header>후기</Header>
      <div className={styles["wrapper"]}>
        <div className={styles["left-wrapper"]}>
          <img
            className={styles["product-img"]}
            src={product.thumbnailUrl}
            alt="제품 사진"
          />
          <div className={styles["rating-wrapper"]}>
            평점
            <RecordStarRating
              starRate={starRate}
              setStarRate={setStarRate}
            />
          </div>
          <ReviewButton
            content="후기 작성 완료"
            onClick={handleSubmit}
          />
        </div>
        <div className={styles["right-wrapper"]}>
          상세 리뷰
          <textarea
            className={styles["review-textarea"]}
            value={detailReview}
            onChange={handleChange}
            placeholder="솔직한 평가를 남겨주세요!"
          />
          사진 첨부
          <div className={styles["photo-wrapper"]}>
            <img
              src={imgPath}
              alt="이미지 업로드 아이콘"
              onClick={triggerFileInput}
            />
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              ref={imgRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewPage;
