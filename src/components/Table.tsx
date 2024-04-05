// import { Pagination } from "@ark-ui/react";
// import Select from "./Select";
import {
  Box,
  Flex,
  Heading,
  Card,
  Table,
  Text,
  TextField,
  Button,
  Tooltip,
  IconButton,
} from "@radix-ui/themes";
// import { Button } from "react-aria-components";
import FilterIcons from "../icons/FilterIcon";
import SearchIcon from "../icons/SearchIcon";
import RefreshIcon from "../icons/RefreshIco";
import QuestionIcon from "../icons/QuestionIcon";
import { Pagination } from "@ark-ui/react";

interface tableProps {
  title: string;
  filter: boolean;
  dataLength: number;
  pageSize: number;
  siblingCount: number;
}
const TableComponent: React.FC<tableProps> = ({ title }) => {
  // const paginationContext = useContext(PaginationContext);

  return (
    <Box width="80%" height="100vh" className="mx-auto">
      <Card className="absolute top-1/2 -translate-y-1/2" size="3">
        <Flex gap="3" align="center" justify="between" className="mb-4">
          <Flex align="center" gap="2">
            <Heading className="w-fit" color="gray">
              {title || "Examples"}
            </Heading>
            <Tooltip content="this is a information">
              <IconButton radius="full" color="gray">
                ?{/* <QuestionIcon className="h-4 w-4 text-gray-300" /> */}
              </IconButton>
            </Tooltip>
            {/* <Tooltip.Root closeDelay={0} openDelay={0}>
              <Tooltip.Trigger>
                <QuestionIcon className="h-4 w-4 text-gray-300" />
              </Tooltip.Trigger>
              <Tooltip.Positioner>
                <Tooltip.Content>This is Exanple</Tooltip.Content>
              </Tooltip.Positioner>
            </Tooltip.Root> */}
          </Flex>
          <Flex gap="3">
            <TextField.Root
              placeholder="Type to serach"
              radius="large"
              size="3"
            >
              <TextField.Slot>
                <SearchIcon className="w-5 h-5 text-gray-300" />
              </TextField.Slot>
              <TextField.Slot>
                <FilterIcons className="w-7 h-7 text-lime-700" />
              </TextField.Slot>
            </TextField.Root>
            <Button
              variant="outline"
              className="text-lime-700"
              size="3"
              radius="large"
              color="lime"
            >
              <RefreshIcon height="18" width="18" color="rgb(77 124 15)" />{" "}
              Refresh
            </Button>
            {/* <Button className="border border-lime-700 flex items-center gap-2 rounded-md py-2.5 px-2 text-lime-700 font-semibold text-sm">
              <RefreshIcon color="rgb(77 124 15)" height="18" width="18" />{" "}
              Refresh
            </Button> */}
          </Flex>
        </Flex>
        <Box mb="4">
          <Table.Root className="border-x border-gray-200">
            <Table.Header className="bg-[#DFE4CC] rounded-md">
              <Table.Row>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  NO
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  NAME
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  TYPE
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  CODE
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  COL
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  EQUIPMENT ID
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  CATEGORY
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  ASSET CAPEX NO
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  EQUIPMENT NAME/FIELD NAME
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  DESCRIPTION
                </Table.ColumnHeaderCell>
                {/* <Table.ColumnHeaderCell className="border-r text-gray-600 border-gray-100">
                  EX CALIBRATION DATE
                </Table.ColumnHeaderCell> */}
              </Table.Row>
            </Table.Header>

            <Table.Body className="bg-gray-100">
              <Table.Row>
                <Table.RowHeaderCell>1</Table.RowHeaderCell>
                <Table.Cell>qwerty</Table.Cell>
                <Table.Cell>zxc</Table.Cell>
                <Table.Cell>500</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                {/* <Table.Cell>POT</Table.Cell> */}
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>2</Table.RowHeaderCell>
                <Table.Cell>qwerty</Table.Cell>
                <Table.Cell>zxc</Table.Cell>
                <Table.Cell>500</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                <Table.Cell>POT</Table.Cell>
                {/* <Table.Cell>POT</Table.Cell> */}
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
        <Flex justify="between">
          <Text color="gray">Show 1-1 From 1 Data</Text>
          <Pagination.Root
            count={10}
            pageSize={1}
            siblingCount={1}
            className="flex gap-2"
          >
            {({ pages }) => (
              <>
                <Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
                {pages.map((page, index) =>
                  page.type === "page" ? (
                    <Pagination.Item
                      key={index}
                      {...page}
                      className={`border border-gray-200 w-[40px] h-[40px] rounded-md`}
                    >
                      {page.value}
                    </Pagination.Item>
                  ) : (
                    <Pagination.Ellipsis key={index} index={index}>
                      &#8230;
                    </Pagination.Ellipsis>
                  )
                )}
                <Pagination.NextTrigger>Next</Pagination.NextTrigger>
              </>
            )}
          </Pagination.Root>
        </Flex>
      </Card>
    </Box>
  );
};

export default TableComponent;
