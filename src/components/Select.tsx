import { Portal, Select as ArkSelect } from "@ark-ui/react";
import { IoIosArrowDown } from "react-icons/io";

type Item = {
  label: string;
  value: string;
};

interface SelectProps {
  itemSelect: Item[];
}

const Select: React.FC<SelectProps> = ({ itemSelect }) => {
  const items = itemSelect || [
    { label: "React", value: "React" },
    { label: "Solid", value: "Solid" },
    { label: "Vue", value: "Vue" },
  ];

  return (
    <ArkSelect.Root items={items} className="flex items-center p-3 w-4">
      <ArkSelect.Control>
        <ArkSelect.Trigger className="flex items-center">
          <ArkSelect.ValueText placeholder="Select Filter" />
          <ArkSelect.Indicator>
            <IoIosArrowDown />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <Portal>
        <ArkSelect.Positioner>
          <ArkSelect.Content>
            <ArkSelect.ItemGroup id="flter">
              <ArkSelect.ItemGroupLabel htmlFor="filter">
                Filter
              </ArkSelect.ItemGroupLabel>
              {items.map((item, index) => (
                <ArkSelect.Item key={index} item={item}>
                  <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
                  <ArkSelect.ItemIndicator>✓</ArkSelect.ItemIndicator>
                </ArkSelect.Item>
              ))}
            </ArkSelect.ItemGroup>
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>
    </ArkSelect.Root>
  );
};

export default Select;
