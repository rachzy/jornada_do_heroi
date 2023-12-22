import SearchInput from "@/components/atoms/SearchInput";
import MetahumanList from "@/components/molecules/MetahumanList";
import { useMetahumansStore } from "@/lib/zustand/metahumans/store";
import { useEffect } from "react";
import Loader from "@/components/atoms/Loader";
import { useSearchStore } from "@/lib/zustand/search/store";

export default function Metahumans() {
  const metahumans = useMetahumansStore((state) => state.metahumans);
  const loading = useMetahumansStore((state) => state.loading);
  const filteredMetahumans = useSearchStore(
    (state) => state.filteredMetahumans
  );
  const searchValue = useSearchStore((state) => state.value);
  const setFilteredMetahumans = useSearchStore(
    (state) => state.setFilteredMetahumans
  );
  const setSearchValue = useSearchStore((state) => state.setValue);

  useEffect(() => {
    if (!searchValue) return setFilteredMetahumans(metahumans);

    const newFilteredMetahumans = metahumans.filter((metahuman) =>
      metahuman.name.toUpperCase().includes(searchValue.toUpperCase())
    );
    setFilteredMetahumans(newFilteredMetahumans);
  }, [metahumans, searchValue, setFilteredMetahumans]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchValue(value);
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <SearchInput
        placeholder="Search for a metahuman..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <MetahumanList metahumans={filteredMetahumans} />
    </>
  );
}


