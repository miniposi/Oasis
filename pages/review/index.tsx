import { useSearchParams } from "next/navigation";
import styles from "./review.module.css";
import Header from "@/components/Header/Header";
import StarRating from "@/components/StarRating";
import useNavigation from "@/hooks/useNavigation";
import getReview from "@/api/getReview";
import getProduct from "@/api/getProduct";
import { useEffect, useState } from "react";
import ReviewContent from "@/components/Review/ReviewContent";
import { productState } from "@/hooks/getProduct";
import { useRecoilState } from "recoil";
import ReviewButton from "@/components/Button/ReviewButton";

function ProductReviewPage() {
  const [product, setProduct] = useRecoilState(productState);
  const [reviews, setReviews] = useState([]);
  const id = useSearchParams().get("id");
  const handleNavigation = useNavigation();

  async function handleProduct() {
    try {
      const response: any = await getProduct(id);
      setProduct(response.data.product);
    } catch (error) {
      alert("해당 제품의 정보를 가져올 수 없어요!");
      handleNavigation(`product?id=${id}`);
    }
  }

  async function handleReview() {
    try {
      const result: any = await getReview(id);
      setReviews(result.data);
    } catch (error) {
      alert("해당 제품의 리뷰를 가져올 수 없어요!");
      handleNavigation(`product?id=${id}`);
    }
  }

  useEffect(() => {
    handleProduct();
    handleReview();
  }, []);

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
          <p className={styles["name-text"]}>{product.name}</p>
          <div className={styles["rating-wrapper"]}>
            {product.avgScore}
            <StarRating rating={product.avgScore} />
          </div>
          <ReviewButton
            id={String(id)}
            content="후기 작성하기"
          />
        </div>
        <div className={styles["right-wrapper"]}>
          {reviews.map((item: any) => (
            <ReviewContent
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductReviewPage;
