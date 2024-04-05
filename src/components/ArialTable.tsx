import {
  Button,
  Cell,
  Column,
  Input,
  OverlayArrow,
  Row,
  Table,
  TableBody,
  TableHeader,
  TextField,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import SearchIcon from "../icons/SearchIcon";
import FilterIcon from "../icons/FilterIcon";
import RefreshIcon from "../icons/RefreshIco";
import QuestionIcon from "../icons/QuestionIcon";
import { Pagination } from "@ark-ui/react";

interface ArialTableProps {
  title: string;
}

const ArialTable: React.FC<ArialTableProps> = ({ title }) => {
  return (
    <div className="w-[85%] rounded-lg mx-auto p-5 bg-white">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-1 items-center">
          <h1 className="font-semibold text-xl text-gray-600">{title}</h1>
          <TooltipTrigger delay={1} closeDelay={1}>
            <Button>
              <QuestionIcon className="w-4 h-4 text-gray-300" />
            </Button>
            <Tooltip
              className="bg-gray-900 text-white py-1 px-2 text-sm rounded-md"
              offset={10}
              placement="right"
            >
              This is a information
            </Tooltip>
          </TooltipTrigger>
        </div>
        <div className="flex gap-2">
          <TextField className="flex border border-gray-100 w-fit rounded-md py-2 px-3 items-center">
            <SearchIcon className="w-5 h-5" />
            <Input
              className="bg-transparent pl-3 focus:outline-none"
              placeholder="Type to serach"
            />
            <FilterIcon className="w-6 h-6 text-lime-700" />
          </TextField>
          <Button className="flex items-center gap-2 border border-lime-700 rounded-md py-2.5 px-2 text-lime-700 font-semibold text-sm">
            <RefreshIcon height="18" width="18" color="rgb(77 124 15)" />{" "}
            Refresh
          </Button>
        </div>
      </div>
      <div className="bg-slate-50 rounded-md mb-3 border">
        <Table className="p-2 w-full">
          <TableHeader className="bg-[#DFE4CC]">
            <Column
              className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100"
              isRowHeader
            >
              NO
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              NAME
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              TYPE
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              CODE
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              EQUIPMENT ID
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              CATEGORY
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              ASSET CAPEX NO
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              EQUIPMENT NAME/FIELD NAME
            </Column>
            <Column className="px-3 py-4 border-r text-gray-600 text-sm border-gray-100">
              DESCRIPTION
            </Column>
          </TableHeader>
          <TableBody>
            <Row className="text-center border-b">
              <Cell className="py-3">1</Cell>
              <Cell className="py-3">qwerty</Cell>
              <Cell className="py-3">zxc</Cell>
              <Cell className="py-3">500</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
            </Row>
            <Row className="text-center">
              <Cell className="py-3">2</Cell>
              <Cell className="py-3">qwerty</Cell>
              <Cell className="py-3">zxc</Cell>
              <Cell className="py-3">500</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
              <Cell className="py-3">POT</Cell>
            </Row>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400 ">Show 1-15 From 136 Data</p>
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
      </div>
    </div>
  );
};

export default ArialTable;
