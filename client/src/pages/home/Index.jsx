import React, { useState } from "react";
import Table from "@/components/table/table";
import { useScrapeListQuery } from "@/lib/slices/service";

const HomePage = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data, error, isLoading, status, refetch } = useScrapeListQuery(
    page,
    limit
  );

  return (
    <div className="mt-3 mb-3">
      <Table data={data} page={page} limit={limit} />
    </div>
  );
};

export default HomePage;
