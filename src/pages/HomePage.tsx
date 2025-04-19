import PromoGrid from "@/components/PromoGrid";
import BustedDeals from "@/components/BustedDeals.tsx";
import CategoriesGrid from "@/components/CategoriesGrid.tsx";

const HomePage = () => {
  return (
    <>
      <PromoGrid />
      <BustedDeals />
      <CategoriesGrid />
    </>
  );
};

export default HomePage;