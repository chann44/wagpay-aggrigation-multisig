import Background from "@/layouts/Background";
import Badge from "@/layouts/badge";
import CardLayout from "@/layouts/cardlayout";
import Link from "next/link";
const Safes = () => {
  return (
    <>
      <CardLayout>
        <Background>
          <Badge>
            <Link href="/coins" className="cursor-pointer">
              <p className=" xl:text-xl overflow-hidden cursor-pointer">
                0x02277522FF3ce3de14002FABcC37d27B589E6f51
              </p>
            </Link>
          </Badge>
        </Background>
      </CardLayout>
    </>
  );
};

export default Safes;
