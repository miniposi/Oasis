interface PetCategoryProps {
  name: string;
  imageUrl: string;
}

interface PetCategoriesProps {
  [category: string]: {
    food: {
      age: PetCategoryProps[];
      type: PetCategoryProps[];
    };
    snack: PetCategoryProps[];
    supplies: {
      accessories: PetCategoryProps[];
    };
  };
}

export const PetCategoryData: PetCategoriesProps = {
  dog: {
    food: {
      age: [
        { name: "전연령", imageUrl: "shop/all.png" },
        { name: "퍼피", imageUrl: "shop/puppy.png" },
        { name: "어덜트", imageUrl: "shop/adultdog.png" },
        { name: "시니어", imageUrl: "shop/seniordog.png" },
      ],
      type: [
        { name: "습식사료", imageUrl: "shop/waterdog.png" },
        { name: "소프트사료", imageUrl: "shop/softdog.png" },
        { name: "건식사료", imageUrl: "shop/blockdog.png" },
        { name: "동결사료", imageUrl: "shop/icedog.png" },
      ],
    },
    snack: [
      { name: "전체보기", imageUrl: "shop/all.png" },
      { name: "수제간식", imageUrl: "shop/handmade.png" },
      { name: "껌", imageUrl: "shop/gum.png" },
      { name: "뼈", imageUrl: "shop/bone.png" },
      { name: "동결건조", imageUrl: "shop/drysnack.png" },
      { name: "저키", imageUrl: "shop/jurky.png" },
      { name: "사사미•육포", imageUrl: "shop/sasami.png" },
      { name: "캔•파우치", imageUrl: "shop/dogcan.png" },
      { name: "통살•소세지", imageUrl: "shop/hotdog.png" },
      { name: "파우더•토핑", imageUrl: "shop/dogpowder.png" },
      { name: "우유•음료", imageUrl: "shop/milk.png" },
      { name: "영양•기능", imageUrl: "shop/nutritious.png" },
      { name: "처방식", imageUrl: "shop/ipi.png" },
    ],
    supplies: {
      accessories: [
        { name: "전체보기", imageUrl: "shop/all.png" },
        { name: "배변용품", imageUrl: "shop/pottysupplies.png" },
        { name: "위생용품", imageUrl: "shop/hygienceproducts.png" },
        { name: "칫솔•치약", imageUrl: "shop/toothbrush.png" },
        { name: "미용•관리", imageUrl: "shop/beauty.png" },
        { name: "장난감", imageUrl: "shop/toy.png" },
        { name: "노즈워크", imageUrl: "shop/nosework.png" },
        { name: "훈련용품", imageUrl: "shop/training.png" },
        { name: "하우스•방석", imageUrl: "shop/doghouse.png" },
        { name: "울타리", imageUrl: "shop/fence.png" },
        { name: "가방•이동장", imageUrl: "shop/bag.png" },
        { name: "의류•악세사리", imageUrl: "shop/dogclothes.png" },
        { name: "급식기•급수기", imageUrl: "shop/feeder.png" },
        { name: "정수•자동급식기", imageUrl: "shop/waterpurifier.png" },
        { name: "기저귀", imageUrl: "shop/diaper.png" },
        { name: "넥카라", imageUrl: "shop/collar.png" },
        { name: "스탭•매트", imageUrl: "shop/stair.png" },
      ],
    },
  },
  cat: {
    food: {
      age: [
        { name: "전연령", imageUrl: "shop/all.png" },
        { name: "키튼", imageUrl: "shop/kitten.png" },
        { name: "어덜트", imageUrl: "shop/adultcat.png" },
        { name: "시니어", imageUrl: "shop/seniorcat.png" },
      ],
      type: [
        { name: "주식캔", imageUrl: "shop/watercat.png" },
        { name: "파우치", imageUrl: "shop/softcat.png" },
        { name: "건식사료", imageUrl: "shop/blockcat.png" },
        { name: "동결사료", imageUrl: "shop/icecat.png" },
      ],
    },
    snack: [
      { name: "전체보기", imageUrl: "shop/all.png" },
      { name: "간식캔", imageUrl: "shop/catcan.png" },
      { name: "간식파우치", imageUrl: "shop/pouch.png" },
      { name: "동결건조", imageUrl: "shop/drysnack.png" },
      { name: "수제간식", imageUrl: "shop/handmade.png" },
      { name: "캣닢•캣그라스", imageUrl: "shop/catnip.png" },
      { name: "저키", imageUrl: "shop/jurky.png" },
      { name: "스낵", imageUrl: "shop/snack.png" },
      { name: "통살•소세지", imageUrl: "shop/hotdog.png" },
      { name: "덴탈간식", imageUrl: "shop/gum.png" },
      { name: "파우더•토핑", imageUrl: "shop/catpowder.png" },
      { name: "우유•음료", imageUrl: "shop/milk.png" },
      { name: "영양•기능", imageUrl: "shop/nutritious.png" },
      { name: "처방식", imageUrl: "shop/ipi.png" },
    ],
    supplies: {
      accessories: [
        { name: "전체보기", imageUrl: "shop/all.png" },
        { name: "모래", imageUrl: "shop/sand.png" },
        { name: "낚싯대", imageUrl: "shop/fisher.png" },
        { name: "공•인형", imageUrl: "shop/cattoy.png" },
        { name: "터널", imageUrl: "shop/tunnel.png" },
        { name: "스크래쳐•박스", imageUrl: "shop/scratcher.png" },
        { name: "칫솔•치약", imageUrl: "shop/toothbrush.png" },
        { name: "미용•관리", imageUrl: "shop/beauty.png" },
        { name: "위생용품", imageUrl: "shop/hygieneproducts.png" },
        {
          name: "의류•악세사리",
          imageUrl: "shop/catclothes.png",
        },
        { name: "이동장", imageUrl: "shop/bag.png" },
        { name: "급식기•급수기", imageUrl: "shop/feeder.png" },
        { name: "정수•자동급식기", imageUrl: "shop/waterpurifier.png" },
        { name: "화장실", imageUrl: "shop/toilet.png" },
        { name: "하우스•방석", imageUrl: "shop/cathouse.png" },
        { name: "캣타워•캣휠", imageUrl: "shop/cattower.png" },
        { name: "넥카라", imageUrl: "shop/collar.png" },
        { name: "울타리", imageUrl: "shop/fence.png" },
        { name: "먹이퍼즐", imageUrl: "shop/nosework.png" },
      ],
    },
  },
};
