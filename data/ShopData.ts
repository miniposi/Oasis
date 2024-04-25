export interface PetCategoryProps {
  name: string;
  imageUrl: string;
  info: string;
}

export interface PetCategoriesProps {
  [category: string]: {
    food: PetCategoryProps[];
    snack: PetCategoryProps[];
    supplies: PetCategoryProps[];
  };
}

export const PetCategoryData: PetCategoriesProps = {
  dog: {
    food: [
      { name: "전연령", imageUrl: "shop/all.png", info: "all" },
      { name: "퍼피", imageUrl: "shop/puppy.png", info: "puppy" },
      { name: "어덜트", imageUrl: "shop/adultdog.png", info: "adultdog" },
      { name: "시니어", imageUrl: "shop/seniordog.png", info: "seniordog" },
      { name: "습식사료", imageUrl: "shop/waterdog.png", info: "waterdog" },
      { name: "소프트사료", imageUrl: "shop/softdog.png", info: "softdog" },
      { name: "건식사료", imageUrl: "shop/blockdog.png", info: "blockdog" },
      { name: "동결사료", imageUrl: "shop/icedog.png", info: "icedog" },
    ],
    snack: [
      { name: "전체보기", imageUrl: "shop/all.png", info: "all" },
      { name: "수제간식", imageUrl: "shop/handmade.png", info: "handmade" },
      { name: "껌", imageUrl: "shop/gum.png", info: "gum" },
      { name: "뼈", imageUrl: "shop/bone.png", info: "bone" },
      { name: "동결건조", imageUrl: "shop/drysnack.png", info: "drysnack" },
      { name: "저키", imageUrl: "shop/jerky.png", info: "jerky" },
      { name: "사사미•육포", imageUrl: "shop/sasami.png", info: "sasami" },
      { name: "캔•파우치", imageUrl: "shop/dogcan.png", info: "dogcan" },
      { name: "통살•소세지", imageUrl: "shop/hotdog.png", info: "hotdog" },
      {
        name: "파우더•토핑",
        imageUrl: "shop/dogpowder.png",
        info: "dogpowder",
      },
      { name: "우유•음료", imageUrl: "shop/milk.png", info: "milk" },
      {
        name: "영양•기능",
        imageUrl: "shop/nutritious.png",
        info: "nutritious",
      },
      { name: "처방식", imageUrl: "shop/ipi.png", info: "ipi" },
    ],
    supplies: [
      { name: "전체보기", imageUrl: "shop/all.png", info: "all" },
      {
        name: "배변용품",
        imageUrl: "shop/pottysupplies.png",
        info: "pottysupplies",
      },
      {
        name: "위생용품",
        imageUrl: "shop/hygieneproducts.png",
        info: "hygieneproducts",
      },
      {
        name: "칫솔•치약",
        imageUrl: "shop/toothbrush.png",
        info: "toothbrush",
      },
      { name: "미용•관리", imageUrl: "shop/beauty.png", info: "beauty" },
      { name: "장난감", imageUrl: "shop/toy.png", info: "toy" },
      { name: "노즈워크", imageUrl: "shop/nosework.png", info: "nosework" },
      { name: "훈련용품", imageUrl: "shop/training.png", info: "training" },
      { name: "하우스•방석", imageUrl: "shop/doghouse.png", info: "doghouse" },
      { name: "울타리", imageUrl: "shop/fence.png", info: "fence" },
      { name: "가방•이동장", imageUrl: "shop/bag.png", info: "bag" },
      {
        name: "의류•악세사리",
        imageUrl: "shop/dogclothes.png",
        info: "dogclothes",
      },
      { name: "급식기•급수기", imageUrl: "shop/feeder.png", info: "feeder" },
      {
        name: "정수•자동급식기",
        imageUrl: "shop/waterpurifier.png",
        info: "waterpurifier",
      },
      { name: "기저귀", imageUrl: "shop/diaper.png", info: "diaper" },
      { name: "넥카라", imageUrl: "shop/collar.png", info: "collar" },
      { name: "스탭•매트", imageUrl: "shop/stair.png", info: "stair" },
    ],
  },
  cat: {
    food: [
      { name: "전연령", imageUrl: "shop/all.png", info: "all" },
      { name: "키튼", imageUrl: "shop/kitten.png", info: "kitten" },
      { name: "어덜트", imageUrl: "shop/adultcat.png", info: "adultcat" },
      { name: "시니어", imageUrl: "shop/seniorcat.png", info: "seniorcat" },
      { name: "주식캔", imageUrl: "shop/watercat.png", info: "watercat" },
      { name: "파우치", imageUrl: "shop/softcat.png", info: "softcat" },
      { name: "건식사료", imageUrl: "shop/blockcat.png", info: "blockcat" },
      { name: "동결사료", imageUrl: "shop/icecat.png", info: "icecat" },
    ],
    snack: [
      { name: "전체보기", imageUrl: "shop/all.png", info: "all" },
      { name: "간식캔", imageUrl: "shop/catcan.png", info: "catcan" },
      { name: "간식파우치", imageUrl: "shop/pouch.png", info: "pouch" },
      { name: "동결건조", imageUrl: "shop/drysnack.png", info: "drysnack" },
      { name: "수제간식", imageUrl: "shop/handmade.png", info: "handmade" },
      { name: "캣닢•캣그라스", imageUrl: "shop/catnip.png", info: "catnip" },
      { name: "저키", imageUrl: "shop/jerky.png", info: "jerky" },
      { name: "스낵", imageUrl: "shop/snack.png", info: "snack" },
      { name: "통살•소세지", imageUrl: "shop/hotdog.png", info: "hotdog" },
      { name: "덴탈간식", imageUrl: "shop/gum.png", info: "gum" },
      {
        name: "파우더•토핑",
        imageUrl: "shop/catpowder.png",
        info: "catpowder",
      },
      { name: "우유•음료", imageUrl: "shop/milk.png", info: "milk" },
      {
        name: "영양•기능",
        imageUrl: "shop/nutritious.png",
        info: "nutritious",
      },
      { name: "처방식", imageUrl: "shop/ipi.png", info: "ipi" },
    ],
    supplies: [
      { name: "전체보기", imageUrl: "shop/all.png", info: "all" },
      { name: "모래", imageUrl: "shop/sand.png", info: "sand" },
      { name: "낚싯대", imageUrl: "shop/fisher.png", info: "fisher" },
      { name: "공•인형", imageUrl: "shop/cattoy.png", info: "cattoy" },
      { name: "터널", imageUrl: "shop/tunnel.png", info: "tunnel" },
      {
        name: "스크래쳐•박스",
        imageUrl: "shop/scratcher.png",
        info: "scratcher",
      },
      {
        name: "칫솔•치약",
        imageUrl: "shop/toothbrush.png",
        info: "toothbrush",
      },
      { name: "미용•관리", imageUrl: "shop/beauty.png", info: "beauty" },
      {
        name: "위생용품",
        imageUrl: "shop/hygieneproducts.png",
        info: "hygieneproducts",
      },
      {
        name: "의류•악세사리",
        imageUrl: "shop/catclothes.png",
        info: "catclothes",
      },
      { name: "이동장", imageUrl: "shop/bag.png", info: "bag" },
      { name: "급식기•급수기", imageUrl: "shop/feeder.png", info: "feeder" },
      {
        name: "정수•자동급식기",
        imageUrl: "shop/waterpurifier.png",
        info: "waterpurifier",
      },
      { name: "화장실", imageUrl: "shop/toilet.png", info: "toilet" },
      { name: "하우스•방석", imageUrl: "shop/cathouse.png", info: "cathouse" },
      { name: "캣타워•캣휠", imageUrl: "shop/cattower.png", info: "cattower" },
      { name: "넥카라", imageUrl: "shop/collar.png", info: "collar" },
      { name: "울타리", imageUrl: "shop/fence.png", info: "fence" },
      { name: "먹이퍼즐", imageUrl: "shop/nosework.png", info: "nosework" },
    ],
  },
};
