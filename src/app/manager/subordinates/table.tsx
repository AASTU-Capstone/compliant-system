"use client";
import DataTable from "@/shared/table";
import { Box, Flex, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconCheck, IconTrash } from "@tabler/icons-react";
import { useMemo } from "react";
import { Column } from "react-table";
import { Data } from "./page";

const ManagersList = ({ data }: { data: Data[] }) => {
  const columns: Array<Column<Data>> = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value }) => (
          <div className="text-sm font-medium text-gray-900">{value}</div>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
      },

      {
        Header: "Mitigated Count",
        accessor: "mitigatedCount",
        Cell: ({ value }) => <div className="pl-12">{value}</div>,
      },
    ],
    []
  );

  return (
    <Box className="w-full mt-7">
      <Box>
        <Text className="text-xl px-5 py-4 bg-primary-body">
          Subordinates List
        </Text>
      </Box>

      <DataTable columns={columns} data={data} pageSize={5} />
    </Box>
  );
};

export default ManagersList;
