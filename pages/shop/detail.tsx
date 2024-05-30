import { useSearchParams } from "next/navigation";
import styles from "./detail.module.css";
import Header from "@/components/Header/Header";
import StarRating from "@/components/StarRating";
import useNavigation from "@/hooks/useNavigation";
import { useEffect, useState } from "react";
import getProductList from "@/api/getProductList";

function ShopDetailPage() {
  const params = useSearchParams();
  const [productList, setProductList] = useState([]);
  const handleNavigation = useNavigation();

  async function fetchProductList() {
    try {
      const pcg = params.get("pcg");
      const scg = params.get("scg");
      const dcg = params.get("dcg");
      const response: any = await getProductList(pcg, scg, dcg);
      setProductList(response.data.productList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <Header>{params.get("ko")}</Header>
      <div className={styles["wrapper"]}>
        {productList.map((item: any) => (
          <div
            className={styles["content-wrapper"]}
            key={item.id}
            onClick={() => handleNavigation(`product?id=${item.id}`)}
          >
            <img
              className={styles["detail-img"]}
              src={item.thumbnailUrl}
              alt="이미지 디테일"
            />
            <div className={styles["content"]}>
              <p className={styles["name-text"]}>{item.name}</p>
              <p>{item.price}원</p>
              <div className={styles["rating-wrapper"]}>
                <StarRating rating={item.avgScore} />
                <p>({item.reviewCount})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShopDetailPage;
