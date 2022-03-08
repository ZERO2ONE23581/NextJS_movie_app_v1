import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  console.log(router.query.id);
  return "detail";
}
